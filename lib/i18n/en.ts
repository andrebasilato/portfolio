import type { Dictionary } from "./index";

export const en: Dictionary = {
  meta: {
    title: "Andre Basilato | Full-Stack Engineer & Tech Lead",
    description:
      "Full-stack engineer and tech lead specializing in Brazilian payments (PIX, boleto, CNAB), government integrations, and multi-tenant SaaS — owned end to end, from architecture to production.",
  },
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
  },
  header: {
    toggleTheme: "Toggle theme",
    toggleMenu: "Toggle menu",
    switchLanguage: "Switch language to Portuguese",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    languageName: "Português",
  },
  hero: {
    overline: "Full-Stack Engineer & Tech Lead",
    subtitle:
      "Brazilian payments, government integrations, and multi-tenant SaaS — built end to end, from architecture to production.",
    ctaProjects: "View Projects",
    ctaContact: "Get in Touch",
  },
  about: {
    label: "About",
    headingLine1: "Built end to end,",
    headingLine2: "run in production",
    paragraph1:
      "I am a full-stack engineer and tech lead working across Brazilian fintech, government integrations, and SaaS. I build the systems behind payments — PIX, boleto, bank debit via CNAB — public-sector integrations, and multi-tenant platforms, from the first architecture decision to the production release.",
    paragraph2:
      "I work end to end with security and LGPD compliance as a design premise: per-resource authorization against IDOR, Row Level Security in Postgres, and idempotency that survives retries. On performance, the rule is measure before guessing — profiling queries, N+1s, and locks before any refactor.",
    paragraph3:
      "I treat AI as a team, not as autocomplete: an orchestrator of specialized agents takes part in my development workflow, with memory across sessions and versioned knowledge. The final decision — and the accountability — stays human.",
    stats: [
      { value: "3", label: "Products in Production" },
      { value: "4", label: "Banks Integrated (CNAB)" },
      { value: "600+", label: "Automated Tests" },
      { value: "5+", label: "States (DETRAN)" },
    ],
  },
  projects: {
    label: "Selected Work",
    heading: "Projects",
    items: {
      "01": {
        title: "Brazilian Payment Gateway — Asaas",
        description:
          "Dynamic PIX, boleto, and card on top of the Asaas API: webhook handling, retry-safe idempotency — including a fix for a batch retry that duplicated charges — and automatic per-client payment-method routing with safe degradation to boleto.",
      },
      "02": {
        title: "Bank Debit — CNAB FEBRABAN 150",
        description:
          "Direct bank debit implemented for 4 banks — Sicredi, Banco do Brasil, Banrisul, and Caixa — each with its own certification manual and go-live gate. The Sicredi flow is orchestrated with RabbitMQ.",
      },
      "03": {
        title: "Multi-State DETRAN Integrations",
        description:
          "SOAP and REST integrations with state-level DETRANs — each state with its own certificates, encoding, and contracts: business errors distinguished from network failures, alphanumeric CNPJ support (modulo-11 check digit) in production, and Brazilian document validation.",
      },
      "04": {
        title: "Multi-Tenant SaaS Platform",
        description:
          "Admin portal, client app, POS on Android terminals, and multiple APIs on the same foundation: Row Level Security in Postgres, per-tenant isolation, and Starter/Pro/Scale plans with grandfathering.",
      },
      "05": {
        title: "White-Label Mobile (iOS/Android)",
        description:
          "React Native + Expo apps shipped through EAS, TestFlight, and .aab builds: per-client feature flags that enable features without a new store submission, OTA updates, and native Google sign-in.",
      },
      "06": {
        title: "AI Agent Orchestration",
        description:
          "A virtual tech lead that classifies the task, selects specialists, and delegates: persistent memory across sessions, a versioned knowledge base (Obsidian PARA + git), and a token-saving pipeline with 60–90% reduction.",
      },
      "07": {
        title: "Performance & Production Debugging",
        description:
          "A finance tab freezing on synchronous HTTP calls in the render path (60s timeout) migrated to async calls, with indexes and batching eliminating N+1s; a PHP session lock serializing parallel AJAX fixed with session_write_close(); an authentication-chain audit (~240–450ms per route), and MariaDB tuning.",
      },
      "08": {
        title: "Security & Compliance Hardening",
        description:
          "IDOR in write paths eliminated with per-resource authorization; an append-only Row Level Security baseline in Postgres; LGPD as a design premise — privacy, retention, and data purge; and sandbox vs. production discipline so tests never move real money.",
      },
    },
  },
  experience: {
    label: "Career",
    heading: "Experience",
    items: [
      {
        id: "01",
        company: "Loyalty & Payments Fintech",
        role: "Principal Engineer",
        period: "Present",
        description:
          "End-to-end owner of a B2B2C product: a payment gateway (PIX, boleto, and card via Asaas), CNAB FEBRABAN 150 bank debit certified bank by bank across 4 banks, an admin portal, POS on Android terminals, and multiple APIs — from architecture to go-live.",
      },
      {
        id: "02",
        company: "Traffic Systems & Government Integrations",
        role: "Software Engineer",
        period: "Present",
        description:
          "Evolving high-volume legacy PHP 7.4 and Laravel systems integrated with state DETRANs and SENATRAN over SOAP and REST: per-state quirks, RENACH provisioning, mission-critical processing crons, Brazilian document validation, and root-cause debugging in production.",
      },
      {
        id: "03",
        company: "Multi-Tenant Sports SaaS",
        role: "Full-Stack Engineer",
        period: "Present",
        description:
          "Full-stack development of a multi-tenant platform: web portal, APIs, an Expo mobile app with an EAS pipeline and OTA updates, Row Level Security on Supabase, and automated content and notification delivery.",
      },
    ],
  },
  skills: {
    label: "Expertise",
    heading: "Tech Stack",
  },
  contact: {
    label: "Get in Touch",
    headingLine1: "Let's work",
    headingLine2: "together",
    copy: "Have a product to build or a system to untangle? Reach out on WhatsApp or LinkedIn — I am always open to discussing new work.",
    cta: "Say Hello",
  },
};
