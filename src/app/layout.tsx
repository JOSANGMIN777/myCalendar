import type { Metadata } from "next";
import "./globals.css";
import Container from "@/components/container";
export const metadata: Metadata = {
  title: "Calendar",
  description: "Far From Genius",
  icons: {
		icon: "/favicon.PNG",
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Container>
      {children}
      </Container>
      </body>
    </html>
  );
}


