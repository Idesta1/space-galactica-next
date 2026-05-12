import type { Metadata } from "next";
import "./globals.css";
import AppLayoutShell from "./components/Layout";
import { WishlistProvider } from "./contexts/WishlistContext";

export const metadata: Metadata = {
  title: "Space Galactica",
  description: "Explore destinations, crew, and space collaborations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <WishlistProvider>
          <AppLayoutShell>{children}</AppLayoutShell>
        </WishlistProvider>
      </body>
    </html>
  );
}
