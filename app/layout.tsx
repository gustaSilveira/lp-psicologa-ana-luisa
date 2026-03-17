import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dra. Ana Luisa | Psicologia Clínica e Neuropsicologia",
  description: "Um espaço de acolhimento para o seu desenvolvimento. Atendimento especializado em psicoterapia e avaliação neuropsicológica.",
  openGraph: {
    title: "Dra. Ana Luisa | Psicologia Clínica",
    description: "Compreendendo o funcionamento da sua mente para promover bem-estar. Agende sua consulta.",
    url: "https://www.sitedaanaluisa.com.br", 
    siteName: "Dra. Ana Luisa Psicologia",
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