import type { MetaFunction } from "@vercel/remix";

export const config = { runtime: "edge" };

export const meta: MetaFunction = () => [{ title: "Fachridan Tio Mu'afa - Personal Website" }];

export default function Edge() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Fachridan Tio Mu'afa</h1>
    </div>
  );
}