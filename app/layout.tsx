import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ana Luisa Moraes | Psicóloga",

  description:
    "Psicologia Clínica & Neuropsicologia. Um espaço de acolhimento para o seu desenvolvimento.",

  icons: {
    icon: "/logo.svg",
  },

  openGraph: {
    title: "Ana Luisa Moraes | Psicóloga",

    description:
      "Compreendendo o funcionamento da sua mente para promover bem-estar. Agende sua consulta.",

    url: "https://www.sitedaanaluisa.com.br",

    siteName: "Ana Luisa Moraes",

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}