import { MainLayout } from "../components/layout";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beta Students",
  description: "The #1 education scheduling app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <main>
          <MainLayout>{children}</MainLayout>
        </main>
      </body>
    </html>
  );
}
