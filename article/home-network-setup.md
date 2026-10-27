---
layout: article
title: "Home Network Setup"
date: 2026-10-26
description: "How my home lab connects my laptop, NAS, mini-PC, and phone into a remotely accessible development environment."
tags: article
---

When I leave my desk, my development environment doesn't have to stay behind. I can open my phone, test an app running at home, and ask my coding agent to make a change—all using the same terminal tools I use on my laptop, without a remote desktop.

I want to take some time to go over the incredibly awesome home lab/network setup that I have going. Many of the technologies I'm using are used by others; there isn't anything secret going on. I do think that I have a pretty unique setup in the sense that I have brought all of these together in a very functional way.

I'll start just by covering some of my goals, then list out all the technologies I'm using, and finally go into a more serious description of how it works.

I've been working on this piecemeal over the past few months. I started when I got my first [NAS][nas] and wanted to make it easy to connect to that. I did the basics: setting up [SSH][ssh], some backups, [Docker][docker] on the NAS with a few services, etc. Normal home lab things.

More recently, I decided to get a mini-PC and at the same time ordered a [Pixel 11 Fold][pixel]. That is where things really started to take off.

I now have a really incredible system that allows me to access everything remotely from my phone or work comfortably from my laptop. Basically, every device has access to all the files that I need it to, and the applications I work on are dynamically managed so they can be accessed without me having to remember tons of ports and such. It is basically an enterprise-level private cloud. With the rise of agentic AI, this is that much easier to set up and that much more useful.

# Apps, Hardware, and Infrastructure

* Hardware
	* [NAS][nas]
	* [Laptop][laptop]
	* [Pixel 11 Pro Fold][pixel]
	* [GTKTec M7 Ultra][lab1]
* Software
	* [Podman][podman] ([Docker][docker])
	* [SSH][ssh] (machine access)
	* [Homepage][homepage] (dynamic service registration)
	* [Herdr][herdr] (agent-focused [terminal multiplexer][multiplexer])
	* [Termux][termux] (phone terminal)
	* [VS Code][vscode] ([IDE][ide])
	* [Kopia][kopia] (backups)
	* [Git][git] (software version control)
	* [Gitea][gitea] (local Git hosting)
	* [Traefik][traefik] (service proxy)
	* [WireGuard][wireguard]/[Tailscale][tailscale] ([VPN][vpn])
	* [btop][btop] ([TUI][tui]-based performance monitor)
	* [k9s][k9s] (TUI-based [Kubernetes][kubernetes] client)
	* [lazydocker][lazydocker] (TUI-based Docker client)
	* [lazygit][lazygit] (TUI-based Git client)
	* [nano][nano]/[helix][helix] (local file editing)
	* [Pi][pi] (coding agent)
	* [Codex][codex] (coding agent/image generation)
	* [AdGuard][adguard] ([DNS][dns])
	* [Home Assistant][home-assistant] (home automation)
	* [Obsidian][obsidian] (local Notion alternative)
	* [Ghostty][ghostty] (terminal emulator)

# How It All Works

Prepare yourself! It's time to step through my lengthy explanation of everything I've put together for my setup. As I was writing this I began to realize that I really have put in quite a bit of work to make this function the way I like. As daunting as it my seem I still highly recommend anyone who is interested in giving this a shot. Well worth it.

Anyway, here is a brief diagram just to outline the flow.

<figure class="article-figure">
  <img src="/images/home-network-setup.svg" width="800" height="840" style="width: 100%; height: auto;" alt="Phone access over WireGuard: Termux connects through SSH to the laptop running Herdr, then to lab1. The browser finds links on the NAS's Homepage dashboard and reaches lab1 applications through Traefik. AdGuard resolves local hostnames.">
  <figcaption>A simplified view of the terminal and browser workflows. Homepage lists services; Traefik routes application traffic. <a href="/images/home-network-setup.svg">Open full-size diagram</a>.</figcaption>
</figure>

Now that I'm writing it out, I can see that it is actually pretty complex. Before I break things down service by service, I'm going to just share a description of how I actually use it and try to highlight the services so you can see how they contribute to the overall vision.

Let's say that I start off sitting at my laptop. I might start my day by opening up [Obsidian][obsidian] and writing out my thoughts. I have a service on my laptop that automatically commits my Obsidian vault in [Git][git] and pushes it to [Gitea][gitea], my self-hosted Git server, every 15 minutes.

Once I have my thoughts in order, I open up [Ghostty][ghostty], my terminal emulator, and immediately run [Herdr][herdr], my agent-first multiplexer. This allows me to multitask very efficiently within my terminal. I can split panes, run multiple agents, and get notifications when an agent finishes its work.

At this point, I will usually want to connect to [lab1][lab1], my GTKTec M7 Ultra mini-PC. Lab1 has its [DNS][dns] configured in [AdGuard][adguard] as `lab1.home.arpa` so I can access it easily. I already have [SSH][ssh] set up between my laptop and lab1, so I'm able to add it to my Herdr session via `herdr machine add lab1`. When I run that command, lab1 is immediately available within Herdr itself.

Now that I have access to lab1 over the network, I can open up a session in a project folder and use [Podman][podman] to bring up the [Docker Compose][compose] stack. Podman is just an alternative container runtime. [Docker][docker] works just as well but has a slightly different feature set. They do have a mostly compatible [CLI][cli], though.

I have set up my `compose.yml` files to have [Traefik][traefik] configuration so that whenever a properly configured Compose stack comes up on lab1, it automatically gets discovered by [Homepage][homepage], a dashboard that creates easy-to-access links. I have Traefik configured so that Docker stacks automatically generate hostnames based on the project and service names. So a project named `my-app` with a `web` service would end up with a URL in Homepage like `web.my-app.lab1.home.arpa`.

Traefik works as a [proxy][proxy] so all of my applications can share ports 80/443/whatever. I can still access them directly if I need to hit something specific, though; something like `lab1.home.arpa:5243` works just fine. The Homepage server runs on my [NAS][nas], which serves as a neutral hub for services across my network.

I can also use [VS Code][vscode] to edit these remote projects or manage things easily. It has built-in remote editing features that are built on [SSH][ssh], so it is no problem for me to open up a folder on lab1 and manage it from my laptop.

While I do have VS Code installed and use it regularly, I try to keep as much of my work in the terminal as possible. I'll explain why later.

Practically speaking, the way I accomplish this is through a series of tools that replace what I would usually use VS Code or [GUI][gui] applications for: [lazydocker][lazydocker] for managing containers, [lazygit][lazygit] for managing Git, [nano][nano]/[helix][helix] for text editing, [k9s][k9s] for managing [Kubernetes][kubernetes], and [btop][btop] for managing my system resources. Most of my actual coding work is done through my coding agent, [Pi][pi].

Now for the fun part. Suppose something comes up and I need to leave my desk. Maybe I have to take my kids somewhere, maybe I want to go work at a coffee shop, or maybe I just want to go for a walk. My [Pixel 11 Pro Fold][pixel] is set up to integrate with all of these same services. It works so well that it is hard to overstate how much I like working with it.

Anytime, any place, I can open up my Fold and instantly interact with my stack. I've set up my phone so that it uses [WireGuard][wireguard] as a VPN to my home network. This makes my laptop, lab1, and NAS available via their hostnames registered in AdGuard.

My phone has [Termux][termux] installed, which is a terminal emulator for Android. Using Termux, I can SSH into my laptop using `ssh laptop` and, once there, immediately run `herdr`. Herdr works exactly the same on my phone as it does on the laptop. With the extra screen space my phone affords me, I can easily navigate all my apps and projects.

Remember when I pointed out trying to move all of my development tools onto the terminal? This is why. Some people claim that [TUI][tui] applications are just glorified GUIs for nerds that want to feel superior. One very real advantage of these TUI applications, though, is that since they are rendered through the terminal, I can get the full experience of working with my regular app interface on my phone. [Lazygit][lazygit], [lazydocker][lazydocker], [k9s][k9s], [btop][btop], [nano][nano]/[helix][helix], etc., all look the same on my phone as they do on my laptop.

My development environment is completely accessible from my phone! The best part? No remote desktop lag!

Since my phone is on the [VPN][vpn], it is able to access Homepage on the NAS as well as all of the services it exposes. This means that all of my Compose stacks running on my home network are fully available on my phone with the click of a button. This makes it insanely easy to open up a project on my phone, test a feature, open [Termux][termux] > [Herdr][herdr] > [Pi][pi], and delegate some new work for my agent to do.

On top of this, I've configured [Kopia][kopia] to do backups for both my laptop and lab1 machines. This makes it incredibly easy to keep things safe and in sync and gives me a lot of peace of mind. Since I have the backup policy configured the way I like, I can also easily run the backup, format the drive, and start fresh if something ever goes very wrong.

# Conclusion

Well, if you made it this far, I hope you feel like it was worth it! I set all this up over the course of several weeks piece by piece. I learned a lot along the way and have used this every day since putting it together. Even if you don't have a folding phone I still think you could get a lot of use out of something like this. The biggest problem would just be rendering TUI apps that are very information dense. Other than that, everything should work just the same.

Give it a shot! Happy hacking.

# Glossary

## Hardware

- <span id="glossary-nas"></span>**NAS (Network-Attached Storage):** A storage device available over the network. In my setup, it also hosts services like Homepage and acts as a central hub.
- <span id="glossary-laptop"></span>**Laptop:** My main local workstation and the machine I SSH into from my phone to access Herdr and my development tools.
- <span id="glossary-pixel"></span>**Pixel 11 Pro Fold:** The foldable Android phone described in this setup. Its larger screen gives me room to use terminal applications and access my home services remotely.
- <span id="glossary-lab1"></span>**GTKTec M7 Ultra (lab1):** The mini-PC I use as a development host for remote projects, containers, and services. `lab1` is my name for this machine.

## Software

- <span id="glossary-adguard"></span>**AdGuard Home:** A self-hosted DNS server with filtering capabilities. It resolves local names like `lab1.home.arpa` in my network.
- <span id="glossary-btop"></span>**btop:** A terminal-based system monitor that displays CPU, memory, disk, network, and process activity.
- <span id="glossary-codex"></span>**Codex:** OpenAI's coding agent, which helps with software development tasks. Image generation is also part of my agent workflow, depending on the tools available.
- <span id="glossary-docker"></span>**Docker:** A platform for building and running containers, which package applications with the dependencies they need.
- <span id="glossary-compose"></span>**Docker Compose:** A tool for defining and running a group of containers using a YAML file, such as `compose.yml`. I refer to these groups as Compose stacks.
- <span id="glossary-ghostty"></span>**Ghostty:** A terminal emulator: the application window where I interact with my shell and terminal tools on my laptop.
- <span id="glossary-git"></span>**Git:** A version control system that tracks changes to files. I use it for source code and for recording changes to my Obsidian notes.
- <span id="glossary-gitea"></span>**Gitea:** A self-hosted Git hosting service with repositories, a web interface, and collaboration features. It receives the Git updates from my Obsidian vault.
- <span id="glossary-helix"></span>**Helix:** A terminal-based text editor with modal editing, meaning different modes handle tasks like entering text and navigating files.
- <span id="glossary-herdr"></span>**Herdr:** An agent-focused terminal multiplexer that organizes work into sessions and panes, supports remote machines, and provides agent notifications.
- <span id="glossary-home-assistant"></span>**Home Assistant:** A home automation platform for connecting and controlling smart devices and creating automations.
- <span id="glossary-homepage"></span>**Homepage:** A self-hosted dashboard that brings links and information about services into one place. My setup uses it to make running applications easy to find.
- <span id="glossary-k9s"></span>**k9s:** A terminal interface for viewing and managing Kubernetes clusters and their workloads.
- <span id="glossary-kopia"></span>**Kopia:** A backup tool that creates encrypted, deduplicated snapshots of files, allowing earlier versions to be restored. Backups protect data; they are not the same as live file synchronization.
- <span id="glossary-kubernetes"></span>**Kubernetes (k8s):** A system for deploying and managing containerized applications. `k8s` is an abbreviation for Kubernetes; `k9s` is a separate tool for interacting with it.
- <span id="glossary-lazydocker"></span>**lazydocker:** A terminal interface for inspecting and managing Docker containers, images, logs, and related resources.
- <span id="glossary-lazygit"></span>**lazygit:** A terminal interface for Git operations such as reviewing changes, staging files, committing, and managing branches.
- <span id="glossary-nano"></span>**nano:** A straightforward terminal-based text editor, useful for quick file and configuration changes.
- <span id="glossary-obsidian"></span>**Obsidian:** A note-taking application that stores notes as local Markdown files. A collection of notes is called a vault.
- <span id="glossary-pi"></span>**Pi:** The coding agent I use for most of my development work. It runs in the terminal and can work with project files and development tools.
- <span id="glossary-podman"></span>**Podman:** A container engine that can run containers without a central daemon and supports running them without root privileges. Its command-line interface is largely compatible with Docker's.
- <span id="glossary-ssh"></span>**SSH (Secure Shell):** A protocol for securely accessing another machine's command line over a network. It also supports capabilities like tunneling and file transfers.
- <span id="glossary-tailscale"></span>**Tailscale:** A VPN service built on WireGuard that helps connect devices into a private network without manually configuring every peer connection.
- <span id="glossary-termux"></span>**Termux:** An Android terminal emulator and Linux environment that provides tools such as SSH, letting me connect to my laptop from my phone.
- <span id="glossary-traefik"></span>**Traefik:** A reverse proxy that routes incoming requests to the appropriate application. It can discover services through supported providers and configuration.
- <span id="glossary-vscode"></span>**VS Code (Visual Studio Code):** A code editor with extensions for development tasks, including editing projects on remote machines over SSH.
- <span id="glossary-wireguard"></span>**WireGuard:** A VPN protocol and software that creates encrypted connections between devices. I use it to reach my home network from my phone.

## Networking and Terminal Terms

- <span id="glossary-cli"></span>**CLI (Command-Line Interface):** A way to interact with software by typing commands into a terminal.
- <span id="glossary-dns"></span>**DNS (Domain Name System):** The system that translates names such as `lab1.home.arpa` into IP addresses that devices use to connect.
- <span id="glossary-gui"></span>**GUI (Graphical User Interface):** An interface built around graphical elements such as windows, icons, and buttons.
- <span id="glossary-home-arpa"></span>**home.arpa:** A domain reserved for naming devices and services on home networks. Names under it are resolved locally rather than serving as public internet addresses.
- <span id="glossary-ide"></span>**IDE (Integrated Development Environment):** Software that brings together development tools such as editing, debugging, and project navigation.
- <span id="glossary-proxy"></span>**Reverse proxy:** A server that receives requests and forwards them to other services. This lets multiple web applications share an entry point while using different hostnames.
- <span id="glossary-multiplexer"></span>**Terminal multiplexer:** A tool that manages multiple terminal sessions or panes within one terminal interface.
- <span id="glossary-tui"></span>**TUI (Text User Interface):** An interactive interface drawn with text in a terminal. Tools like lazygit and btop can therefore be used over SSH without a graphical remote desktop.
- <span id="glossary-vpn"></span>**VPN (Virtual Private Network):** An encrypted network connection that allows devices to communicate privately across another network, such as the internet.

[nas]: #glossary-nas "Network-attached storage: a shared storage device that can also host services."
[laptop]: #glossary-laptop "My main workstation and SSH entry point for accessing Herdr from my phone."
[pixel]: #glossary-pixel "The foldable Android phone I use to access my development environment remotely."
[lab1]: #glossary-lab1 "My GTKTec M7 Ultra mini-PC, used to host remote projects and containers."
[adguard]: #glossary-adguard "AdGuard Home: a self-hosted DNS server with filtering and local hostname resolution."
[btop]: #glossary-btop "A terminal-based monitor for CPU, memory, disks, networking, and processes."
[codex]: #glossary-codex "OpenAI's coding agent for software development tasks."
[docker]: #glossary-docker "A platform for building and running applications in containers."
[compose]: #glossary-compose "Docker Compose: a tool for defining and running groups of containers using YAML."
[ghostty]: #glossary-ghostty "A terminal emulator for interacting with a shell and terminal tools."
[git]: #glossary-git "A version control system for tracking changes to code and other files."
[gitea]: #glossary-gitea "A self-hosted Git hosting service with repositories and collaboration tools."
[helix]: #glossary-helix "A modal text editor that runs in the terminal."
[herdr]: #glossary-herdr "An agent-focused terminal multiplexer with panes, remote machines, and notifications."
[home-assistant]: #glossary-home-assistant "A platform for connecting smart devices and automating a home."
[homepage]: #glossary-homepage "A self-hosted dashboard with links and information about running services."
[k9s]: #glossary-k9s "A terminal interface for viewing and managing Kubernetes clusters."
[kopia]: #glossary-kopia "A backup tool that creates encrypted, deduplicated file snapshots."
[kubernetes]: #glossary-kubernetes "A system for deploying and managing containerized applications, also called k8s."
[lazydocker]: #glossary-lazydocker "A terminal interface for managing Docker containers, images, and logs."
[lazygit]: #glossary-lazygit "A terminal interface for reviewing changes, committing, and managing Git branches."
[nano]: #glossary-nano "A straightforward terminal-based text editor for quick file changes."
[obsidian]: #glossary-obsidian "A note-taking application that stores notes as local Markdown files in a vault."
[pi]: #glossary-pi "The terminal-based coding agent I use to work on projects."
[podman]: #glossary-podman "A container engine with a largely Docker-compatible CLI and support for rootless containers."
[ssh]: #glossary-ssh "Secure Shell: encrypted remote command-line access to another machine."
[tailscale]: #glossary-tailscale "A VPN service built on WireGuard that simplifies private connections between devices."
[termux]: #glossary-termux "An Android terminal emulator and Linux environment with tools such as SSH."
[traefik]: #glossary-traefik "A reverse proxy that discovers services and routes requests to applications."
[vscode]: #glossary-vscode "Visual Studio Code: a code editor with support for remote development over SSH."
[wireguard]: #glossary-wireguard "A VPN protocol and software for encrypted connections between devices."
[cli]: #glossary-cli "Command-line interface: interacting with software by typing commands."
[dns]: #glossary-dns "Domain Name System: translates hostnames into IP addresses."
[gui]: #glossary-gui "Graphical user interface: windows, icons, buttons, and other graphical controls."
[home-arpa]: #glossary-home-arpa "A domain reserved for naming devices and services on home networks."
[ide]: #glossary-ide "Integrated development environment: editing, debugging, and project tools in one application."
[proxy]: #glossary-proxy "A reverse proxy forwards incoming requests to the appropriate service."
[multiplexer]: #glossary-multiplexer "A tool for managing multiple terminal sessions or panes in one interface."
[tui]: #glossary-tui "Text user interface: an interactive interface drawn with text in a terminal."
[vpn]: #glossary-vpn "Virtual private network: an encrypted connection for private communication across networks."
