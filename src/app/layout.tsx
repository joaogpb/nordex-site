import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nordex | Soluções em Informática",
  description:
    "Manutenção de computadores, suporte técnico e locação de notebooks.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
