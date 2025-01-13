import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "@/styles/global.scss";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Kanban Board",
  description: "A simple kanban board"
};

type DefaultHtmlAttributes = {
  lang: string;
  "data-current-theme-color": "dark" | "light";
};

const defaultHtmlAttributes: DefaultHtmlAttributes = {
  lang: "en",
  "data-current-theme-color": "dark"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html {...defaultHtmlAttributes}>
      <body className={`${plusJakartaSans.variable}`}>{children}</body>
    </html>
  );
}
