import type { Metadata } from "next";
import "../styles/global.css";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import LiveVisualEditing from "../../sanity/components/LiveVisualEditing";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {draftMode().isEnabled && <LiveVisualEditing />}
      </body>
    </html>
  );
}
