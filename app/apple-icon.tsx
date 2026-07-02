import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 0,
          fontSize: 84,
          fontWeight: 800,
          color: "#b4ff39",
          letterSpacing: -4,
        }}
      >
        AB
      </div>
    ),
    { ...size }
  );
}
