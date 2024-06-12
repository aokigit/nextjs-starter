import "@/styles/styles.css";

import type { ReactNode } from "react";
import { fontMono, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utilities";

type RootLayoutProps = {
  readonly children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("flex min-h-dvh flex-col overflow-y-scroll font-sans antialiased", `${fontMono.variable} ${fontSans.variable}`)}>{children}</body>
    </html>
  );
}
