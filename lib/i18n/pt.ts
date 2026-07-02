export const pt = {
  meta: {
    title: "Andre Basilato | Engenheiro Full-Stack & Tech Lead",
    description:
      "Engenheiro full-stack e tech lead especializado em pagamentos brasileiros (PIX, boleto, CNAB), integrações governamentais e SaaS multi-tenant — de ponta a ponta, da arquitetura à produção.",
  },
  nav: {
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    experience: "Experiência",
    contact: "Contato",
  },
  header: {
    toggleTheme: "Alternar tema",
    toggleMenu: "Alternar menu",
    switchLanguage: "Mudar idioma para inglês",
    lightMode: "Modo Claro",
    darkMode: "Modo Escuro",
    languageName: "English",
  },
  hero: {
    overline: "Engenheiro Full-Stack & Tech Lead",
    subtitle:
      "Pagamentos brasileiros, integrações governamentais e SaaS multi-tenant — construídos de ponta a ponta, da arquitetura à produção.",
    ctaProjects: "Ver Projetos",
    ctaContact: "Fale Comigo",
  },
  about: {
    label: "Sobre",
    headingLine1: "Construído de ponta a ponta,",
    headingLine2: "rodando em produção",
    paragraph1:
      "Sou engenheiro full-stack e tech lead atuando em fintech brasileira, integrações governamentais e SaaS. Construo os sistemas por trás de pagamentos — PIX, boleto, débito em conta via CNAB — integrações com órgãos públicos e plataformas multi-tenant, do primeiro desenho de arquitetura ao release em produção.",
    paragraph2:
      "Trabalho de ponta a ponta com segurança e LGPD como premissa de design: autorização por recurso contra IDOR, Row Level Security no Postgres e idempotência que sobrevive a retry. Em performance, a regra é medir antes de adivinhar — profiling de queries, N+1 e locks antes de qualquer refactor.",
    paragraph3:
      "Trato IA como time, não como autocomplete: um orquestrador de agentes especializados participa do meu fluxo de desenvolvimento, com memória entre sessões e conhecimento versionado. A decisão final — e a responsabilidade — continua sendo humana.",
    stats: [
      { value: "3", label: "Produtos em Produção" },
      { value: "4", label: "Bancos Integrados (CNAB)" },
      { value: "600+", label: "Testes Automatizados" },
      { value: "5+", label: "Estados (DETRAN)" },
    ],
  },
  projects: {
    label: "Trabalhos Selecionados",
    heading: "Projetos",
    items: {
      "01": {
        title: "Gateway de Pagamentos BR — Asaas",
        description:
          "PIX dinâmico, boleto e cartão sobre a API do Asaas: tratamento de webhooks, idempotência que sobrevive a retry — incluindo a correção de um retry de lote que duplicava cobranças — e roteamento automático de meio de pagamento por cliente, com degradação segura para boleto.",
      },
      "02": {
        title: "Débito em Conta — CNAB FEBRABAN 150",
        description:
          "Débito em conta implementado para 4 bancos — Sicredi, Banco do Brasil, Banrisul e Caixa — cada um com seu manual de homologação e gate de go-live. Fluxo do Sicredi orquestrado com RabbitMQ.",
      },
      "03": {
        title: "Integrações DETRAN Multi-Estado",
        description:
          "Integrações SOAP e REST com DETRANs estaduais — cada UF com certificados, encoding e contratos próprios: distinção entre erro de negócio e falha de rede, suporte a CNPJ alfanumérico (dígito verificador módulo 11) em produção e validação de documentos brasileiros.",
      },
      "04": {
        title: "Plataforma SaaS Multi-Tenant",
        description:
          "Portal admin, app do cliente, POS em terminais Android e múltiplas APIs sobre a mesma base: Row Level Security no Postgres, isolamento por tenant e planos Starter/Pro/Scale com grandfathering.",
      },
      "05": {
        title: "Mobile White-Label (iOS/Android)",
        description:
          "Apps React Native + Expo publicados via EAS, TestFlight e builds .aab: feature flags por cliente que ativam recursos sem nova submissão nas lojas, OTA updates e login com Google nativo.",
      },
      "06": {
        title: "Orquestração de Agentes de IA",
        description:
          "Tech lead virtual que classifica a tarefa, seleciona especialistas e delega: memória persistente entre sessões, knowledge base versionada (Obsidian PARA + git) e pipeline de economia de tokens com redução de 60–90%.",
      },
      "07": {
        title: "Performance & Debugging de Produção",
        description:
          "Aba financeira travando por HTTP síncrono no render (timeout de 60s) migrada para chamadas assíncronas, com índices e batch eliminando N+1; lock de sessão PHP serializando AJAX paralelo resolvido com session_write_close(); auditoria da cadeia de autenticação (~240–450ms por rota) e tuning de MariaDB.",
      },
      "08": {
        title: "Hardening de Segurança & Compliance",
        description:
          "IDOR em write paths eliminado com autorização por recurso; baseline de Row Level Security append-only no Postgres; LGPD como premissa de design — privacidade, retenção e purge de dados; e disciplina de ambientes sandbox vs. produção para nunca movimentar dinheiro real em teste.",
      },
    },
  },
  experience: {
    label: "Carreira",
    heading: "Experiência",
    items: [
      {
        id: "01",
        company: "Fintech de Fidelidade & Pagamentos",
        role: "Engenheiro Principal",
        period: "Atual",
        description:
          "Dono de ponta a ponta de um produto B2B2C: gateway de pagamentos (PIX, boleto e cartão via Asaas), débito em conta CNAB FEBRABAN 150 homologado banco a banco em 4 bancos, portal admin, POS em terminais Android e múltiplas APIs — da arquitetura ao go-live.",
      },
      {
        id: "02",
        company: "Sistemas de Trânsito & Integrações Governamentais",
        role: "Engenheiro de Software",
        period: "Atual",
        description:
          "Evolução de sistemas legados PHP 7.4 e Laravel de alto volume integrados a DETRANs estaduais e SENATRAN via SOAP e REST: quirks por UF, provisionamento de RENACH, crons de processamento críticos, validação de documentos brasileiros e debugging de root cause em produção.",
      },
      {
        id: "03",
        company: "SaaS Esportivo Multi-Tenant",
        role: "Engenheiro Full-Stack",
        period: "Atual",
        description:
          "Desenvolvimento full-stack de plataforma multi-tenant: portal web, APIs, app mobile em Expo com pipeline EAS e OTA updates, Row Level Security no Supabase e entrega automatizada de conteúdo e notificações.",
      },
    ],
  },
  skills: {
    label: "Especialidades",
    heading: "Stack Técnica",
  },
  contact: {
    label: "Contato",
    headingLine1: "Vamos trabalhar",
    headingLine2: "juntos",
    copy: "Tem um produto para construir ou um sistema para destravar? Me chame no WhatsApp ou LinkedIn — estou sempre aberto a conversar sobre novos projetos.",
    cta: "Vamos Conversar",
  },
};
