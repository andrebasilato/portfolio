"use client";

interface MarqueeTextProps {
  items: string[];
  separator?: string;
  className?: string;
}

export default function MarqueeText({
  items,
  separator = " / ",
  className = "",
}: MarqueeTextProps): React.JSX.Element {
  const text = items.join(separator) + separator;

  return (
    <div
      className={`overflow-hidden whitespace-nowrap ${className}`}
      aria-label={items.join(", ")}
    >
      <div className="animate-marquee inline-flex">
        <span className="inline-block pr-4">{text}</span>
        <span className="inline-block pr-4">{text}</span>
      </div>
    </div>
  );
}
