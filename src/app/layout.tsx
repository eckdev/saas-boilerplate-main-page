/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import "./globals.css";
import { sfPro, inter } from "./fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Saas Boilerplate",
  description:
    "SaasBoilerplate offers an innovative SaaS platform harnessing cutting-edge technology to streamline operations, saving hundreds of work hours. Our solution is designed to optimize efficiency and drive productivity, empowering businesses to achieve more in less time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/favicon.ico"
          type="image/x-icon"
        ></link>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1338120620743783"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          sfPro.variable,
          inter.variable
        )}
      >
        {children}
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="eckdev"
          data-description="Support me on Buy me a coffee!"
          data-message=""
          data-color="#5F7FFF"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
      </body>
    </html>
  );
}
