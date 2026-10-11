import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Áurea | Operação imobiliária inteligente",
  description: "Dashboard operacional para captação, locação e gestão imobiliária.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
