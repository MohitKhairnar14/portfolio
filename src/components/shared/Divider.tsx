import React from 'react';
import type { Theme } from "../../types";

interface DividerProps {
  theme: Theme;
}

export default function Divider({ theme: t }: DividerProps) {
  return (
    <div style={{
      height: 1,
      background: `linear-gradient(90deg, transparent, ${t.accent}18, transparent)`,
      margin: "0 6%",
    }} />
  );
}
