import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Educandário Vila Raposa | Berçário e Educação Infantil em Guarulhos",
  description:
    "Berçário e Educação Infantil (4 meses a 5 anos) no Jardim São Francisco, Guarulhos. Turmas reduzidas, atendimento das 6h às 19h, Judô, Inglês, Ballet, Robótica e Educação Financeira. Nota 4,7 no Google.",
  openGraph: {
    title: "Educandário Vila Raposa",
    description: "O lugar onde a infância é vivida com amor, cuidado e respeito.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${fredoka.variable} ${nunito.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
