import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ateliê das Velas",
  description: "Área de membros para receitas de velas comestíveis.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
