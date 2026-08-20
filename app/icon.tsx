import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#070b0e",
          border: "1px solid #68d6cd",
          color: "#edf4f3",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "-0.04em",
        }}
      >
        AÖ
      </div>
    ),
    size,
  );
}
