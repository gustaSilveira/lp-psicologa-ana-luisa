import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PSI ANA LUISA",
  description: "Psicologia Clínica & Neuropsicologia. Um espaço de acolhimento para o seu desenvolvimento.",
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧠</text></svg>',
  },
  openGraph: {
    title: "PSI ANA LUISA | Psicologia Clínica",
    description: "Compreendendo o funcionamento da sua mente para promover bem-estar. Agende sua consulta.",
    url: "https://www.sitedaanaluisa.com.br",
    siteName: "PSI ANA LUISA",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="pt-BR" className="scroll-smooth">
        <body className="antialiased">{children}</body>
      </html>
    );
  }