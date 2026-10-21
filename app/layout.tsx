import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import "./globals.css";

// next/font downloads these at build time and serves them from our own site,
// so there is no request to Google at runtime and no layout shift while fonts load.
// Each font is exposed as a CSS variable that globals.css uses.
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});
const body = Lora({
  subsets: ["latin"],
  variable: "--font-body",
});

// Becomes the <title> and <meta> tags — what Google and link previews (LinkedIn, WhatsApp) show.
export const metadata: Metadata = {
  title: "Rohit Pradeep Sudarsanan — Portfolio",
  description:
    "Full Stack & Flutter Developer from Kerala, India. Angular, .NET, Flutter, Go and applied AI.",
};

/**
 * Runs before the page paints. If the visitor previously picked a theme with the toggle,
 * stamp it on <html> right away so the page never flashes the wrong colours.
 * With no saved choice we stamp nothing and CSS follows the OS setting (prefers-color-scheme).
 */
const themeScript = `
try {
  var t = localStorage.getItem("theme");
  if (t === "light" || t === "dark") document.documentElement.dataset.theme = t;
} catch (e) {}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the script above may change data-theme before React loads,
    // which is expected, so we tell React not to complain about that mismatch.
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
