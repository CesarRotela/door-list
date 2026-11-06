import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Door List",
  description: "Página del evento y registro de asistencia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
