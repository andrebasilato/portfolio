import type { ProjectId } from "@/lib/i18n";

/**
 * Abstract, decorative background art — one theme per project id.
 * Stroke-only geometry over the card gradient (always dark), using
 * currentColor (set to white by the parent) plus the accent CSS var,
 * so it reads in both dark and light themes. No text, no heavy filters.
 */

const ACCENT = "var(--color-accent)";

/** Pointy-top hexagon points string. */
function hex(cx: number, cy: number, r: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");
}

/** 01 — Payments gateway: transaction flows converging into a PIX-like node. */
function PaymentsArt(): React.JSX.Element {
  return (
    <>
      <path d="M-8 36 C 110 36, 170 126, 268 128" />
      <path d="M-8 96 C 90 96, 150 124, 268 128" />
      <path d="M-8 164 C 90 164, 150 134, 268 130" />
      <path d="M-8 224 C 110 224, 170 132, 268 130" />
      <circle cx="62" cy="36" r="4" />
      <circle cx="52" cy="96" r="4" />
      <circle cx="52" cy="164" r="4" />
      <circle cx="62" cy="224" r="4" />
      <circle cx="160" cy="66" r="3" opacity="0.5" />
      <circle cx="150" cy="192" r="3" opacity="0.5" />
      <rect
        x="268"
        y="109"
        width="40"
        height="40"
        rx="9"
        transform="rotate(45 288 129)"
        stroke={ACCENT}
      />
      <path d="M310 129 H 370" stroke={ACCENT} />
      <circle cx="378" cy="129" r="5" stroke={ACCENT} />
    </>
  );
}

/** 02 — CNAB debit: rhythmic vertical bars, positional-file records. */
function CnabArt(): React.JSX.Element {
  const xs = [
    28, 40, 48, 66, 80, 88, 104, 122, 130, 148, 162, 170, 188, 206, 214, 232,
    246, 254, 272, 290, 298, 316, 330, 338, 356, 374,
  ];
  return (
    <>
      <line x1="-8" y1="40" x2="408" y2="40" opacity="0.4" />
      <line x1="-8" y1="220" x2="408" y2="220" opacity="0.4" />
      {xs.map((x, i) => (
        <line
          key={x}
          x1={x}
          y1={i % 4 === 2 ? 78 : 52}
          x2={x}
          y2={i % 5 === 3 ? 182 : 208}
          strokeWidth={i % 3 === 0 ? 3 : 1.5}
          stroke={i === 9 || i === 17 ? ACCENT : undefined}
          opacity={i % 3 === 0 ? 0.9 : 0.65}
        />
      ))}
    </>
  );
}

/** 03 — DETRAN integrations: road lanes with dashes and geometric signage. */
function DetranArt(): React.JSX.Element {
  return (
    <>
      <path d="M-8 244 L 408 104" />
      <path d="M-8 192 L 408 86" />
      <path d="M-8 140 L 408 68" />
      <path d="M-8 218 L 408 95" strokeDasharray="20 16" opacity="0.7" />
      <path d="M-8 166 L 408 77" strokeDasharray="20 16" opacity="0.7" />
      <polygon points="76,34 98,72 54,72" />
      <circle cx="140" cy="52" r="16" />
      <path d="M322 30 l 18 13 l -18 13" stroke={ACCENT} />
      <path d="M346 30 l 18 13 l -18 13" stroke={ACCENT} />
    </>
  );
}

/** 04 — Multi-tenant SaaS: isolated isometric layers, stacked and separated. */
function SaasArt(): React.JSX.Element {
  const layer = (cy: number): string =>
    `M200 ${cy - 52} L 330 ${cy} L 200 ${cy + 52} L 70 ${cy} Z`;
  return (
    <>
      <path d={layer(64)} />
      <path d="M135 38 L 265 90 M265 38 L 135 90" opacity="0.5" />
      <path d={layer(130)} stroke={ACCENT} />
      <circle cx="200" cy="78" r="3" stroke={ACCENT} />
      <circle cx="330" cy="130" r="3" stroke={ACCENT} />
      <circle cx="70" cy="130" r="3" stroke={ACCENT} />
      <circle cx="200" cy="182" r="3" stroke={ACCENT} />
      <path d={layer(196)} />
      <path
        d="M70 64 V 196 M330 64 V 196"
        strokeDasharray="3 7"
        opacity="0.5"
      />
    </>
  );
}

/** 05 — White-label mobile: overlapping device outlines + OTA waves. */
function MobileArt(): React.JSX.Element {
  return (
    <>
      <rect x="112" y="62" width="104" height="190" rx="20" opacity="0.55" />
      <rect x="196" y="88" width="104" height="190" rx="20" opacity="0.55" />
      <rect x="154" y="34" width="104" height="190" rx="20" stroke={ACCENT} />
      <path d="M190 52 H 222" stroke={ACCENT} />
      <circle cx="352" cy="38" r="18" opacity="0.9" />
      <circle cx="352" cy="38" r="36" opacity="0.6" />
      <circle cx="352" cy="38" r="54" opacity="0.35" />
      <circle cx="352" cy="38" r="4" stroke={ACCENT} />
    </>
  );
}

/** 06 — AI orchestration: central hub delegating to specialist nodes. */
function AiArt(): React.JSX.Element {
  return (
    <>
      <path d="M186 122 C 140 104, 104 70, 74 52" />
      <path d="M184 132 C 140 138, 100 146, 66 150" />
      <path d="M190 142 C 158 172, 132 200, 112 224" />
      <path d="M214 122 C 254 100, 286 76, 312 60" />
      <path d="M216 132 C 260 138, 300 144, 336 148" />
      <path d="M212 142 C 244 170, 272 198, 296 220" />
      <path d="M320 56 C 342 46, 358 38, 374 32" opacity="0.6" />
      <path d="M320 66 C 344 74, 362 80, 380 86" opacity="0.6" />
      <circle cx="200" cy="132" r="16" stroke={ACCENT} />
      <circle cx="200" cy="132" r="5" stroke={ACCENT} />
      <circle cx="74" cy="52" r="7" />
      <circle cx="66" cy="150" r="7" />
      <circle cx="112" cy="224" r="7" />
      <circle cx="312" cy="60" r="7" />
      <circle cx="336" cy="148" r="7" />
      <circle cx="296" cy="220" r="7" />
      <circle cx="380" cy="30" r="4" opacity="0.6" />
      <circle cx="386" cy="88" r="4" opacity="0.6" />
    </>
  );
}

/** 07 — Performance: latency bars falling, flame-chart hint, waveform trace. */
function PerfArt(): React.JSX.Element {
  const heights = [120, 132, 104, 96, 78, 84, 62, 54, 44, 46, 34, 28, 22, 18];
  const tops = heights
    .map((h, i) => `${34 + i * 25},${216 - h}`)
    .join(" ");
  return (
    <>
      <rect x="28" y="30" width="120" height="12" rx="3" opacity="0.6" />
      <rect x="28" y="48" width="84" height="12" rx="3" opacity="0.45" />
      <rect x="28" y="66" width="52" height="12" rx="3" opacity="0.3" />
      {heights.map((h, i) => (
        <rect
          key={i}
          x={28 + i * 25}
          y={224 - h}
          width="12"
          height={h}
          rx="2"
          opacity="0.7"
        />
      ))}
      <line x1="-8" y1="224" x2="408" y2="224" opacity="0.5" />
      <polyline points={tops} stroke={ACCENT} />
    </>
  );
}

/** 08 — Security: hexagonal lattice with a geometric keyhole core. */
function SecurityArt(): React.JSX.Element {
  return (
    <>
      <polygon points={hex(200, 38, 44)} opacity="0.5" />
      <polygon points={hex(200, 222, 44)} opacity="0.5" />
      <polygon points={hex(120, 84, 44)} opacity="0.7" />
      <polygon points={hex(280, 84, 44)} opacity="0.7" />
      <polygon points={hex(120, 176, 44)} opacity="0.7" />
      <polygon points={hex(280, 176, 44)} opacity="0.7" />
      <polygon points={hex(40, 130, 44)} opacity="0.35" />
      <polygon points={hex(360, 130, 44)} opacity="0.35" />
      <polygon points={hex(200, 130, 44)} stroke={ACCENT} />
      <circle cx="200" cy="122" r="10" stroke={ACCENT} />
      <path d="M200 132 V 152" stroke={ACCENT} />
    </>
  );
}

const ART: Record<ProjectId, () => React.JSX.Element> = {
  "01": PaymentsArt,
  "02": CnabArt,
  "03": DetranArt,
  "04": SaasArt,
  "05": MobileArt,
  "06": AiArt,
  "07": PerfArt,
  "08": SecurityArt,
};

interface ProjectArtProps {
  id: ProjectId;
  className?: string;
}

export default function ProjectArt({
  id,
  className,
}: ProjectArtProps): React.JSX.Element | null {
  const Art = ART[id];
  if (!Art) return null;
  return (
    <svg
      viewBox="0 0 400 260"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <Art />
    </svg>
  );
}
