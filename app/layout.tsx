import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PromptGuard – Detect and Prevent Sensitive Data in AI Prompts",
  description: "Scan AI prompts for API keys, passwords, PII, and confidential data before sending to LLMs. Custom rules, real-time blocking, and a monitoring dashboard."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3644e77f-0bf4-4b3f-b67b-673baf207761"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
