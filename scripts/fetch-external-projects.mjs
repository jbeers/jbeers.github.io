import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { mkdtemp, readFile, readdir, rm, cp, mkdir } from "node:fs/promises";
import path from "node:path";
import os from "node:os";

const execFileAsync = promisify(execFile);
const projectRoot = process.cwd();
const siteDirectory = path.resolve(projectRoot, "_site");
const manifestPath = path.resolve(projectRoot, "external-projects.json");

function outputPathFor(projectPath) {
  if (typeof projectPath !== "string" || !projectPath.startsWith("/")) {
    throw new Error(`External project paths must start with /: ${projectPath}`);
  }

  const relativePath = projectPath.replace(/^\/+/, "");
  const outputPath = path.resolve(siteDirectory, relativePath);
  const sitePrefix = `${siteDirectory}${path.sep}`;

  if (!outputPath.startsWith(sitePrefix)) {
    throw new Error(`External project path escapes _site: ${projectPath}`);
  }

  return outputPath;
}

async function downloadLatestRelease(repo, directory) {
  await execFileAsync("gh", [
    "release",
    "download",
    "--repo",
    repo,
    "--archive=zip",
    "--dir",
    directory,
    "--clobber"
  ], { stdio: "inherit" });

  const downloadedFiles = await readdir(directory);
  const archives = downloadedFiles.filter(file => file.endsWith(".zip"));

  if (archives.length !== 1) {
    throw new Error(`Expected one release archive for ${repo}, found ${archives.length}`);
  }

  return path.join(directory, archives[0]);
}

async function extractProject(archivePath, outputPath, directory) {
  const extractionPath = path.join(directory, "extracted");
  await mkdir(extractionPath);
  await execFileAsync("unzip", ["-q", archivePath, "-d", extractionPath], { stdio: "inherit" });

  const entries = await readdir(extractionPath, { withFileTypes: true });
  if (entries.length !== 1 || !entries[0].isDirectory()) {
    throw new Error(`Expected the release archive ${archivePath} to contain one top-level directory`);
  }

  await rm(outputPath, { recursive: true, force: true });
  await mkdir(path.dirname(outputPath), { recursive: true });
  await cp(path.join(extractionPath, entries[0].name), outputPath, { recursive: true });
}

const projects = JSON.parse(await readFile(manifestPath, "utf8"));
if (!Array.isArray(projects)) {
  throw new Error(`${manifestPath} must contain an array of projects`);
}

for (const project of projects) {
  if (!project || typeof project.repo !== "string" || !project.repo.trim()) {
    throw new Error("Every external project needs a repo slug");
  }

  const outputPath = outputPathFor(project.path);
  const tempDirectory = await mkdtemp(path.join(os.tmpdir(), "external-project-"));

  try {
    console.log(`Fetching latest release of ${project.repo} into ${project.path}`);
    const archivePath = await downloadLatestRelease(project.repo, tempDirectory);
    await extractProject(archivePath, outputPath, tempDirectory);
  } finally {
    await rm(tempDirectory, { recursive: true, force: true });
  }
}
