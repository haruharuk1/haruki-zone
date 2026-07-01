import { assetUrl } from "@/components/dashboard/asset-url"

export const projects = [
  {
    title: "Fastfetch config",
    desc: "Custom Fastfetch configuration for Windows and Linux featuring Houshou Marine ANSI artwork.",
    image: assetUrl("terminal-vscode.png"),
    tags: ["ANSI_ART", "TUI", "OSS"],
    status: "OSS",
  },
  {
    title: "Under Construction",
    desc: "testing.",
    image: assetUrl("underconstruction.gif"),
    tags: ["Some", "-", "Thing"],
    status: "WIP",
  },/*
  {
    title: "title",
    desc: "desc.",
    image: assetUrl("image.png"),
    tags: ["tags", "tags", "tags"],
    status: "WIP",
  },
  {
    title: "Vault Collection",
    desc: "Mobile-first app to track, tag and organize a personal collection.",
    image: assetUrl("proj-mobile.png"),
    tags: ["Next.js", "Postgres", "PWA"],
    status: "LIVE",
  },*/
] as const

export const skills = ["JavaScript", "C#", "Git", "Linux", "Docker", "MySQL", "VS Code", "Python", "HTML", "CSS"]
