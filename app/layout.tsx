import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FLASHVENDA IA",
  description: "Ecossistema completo para criação e venda de produtos digitais",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
