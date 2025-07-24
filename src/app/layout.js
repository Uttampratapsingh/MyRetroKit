// app/layout.js or app/layout.tsx

import "./globals.css";
import Footer from "./components/Footer";
import { Fredoka } from "next/font/google"; 

// ✅ configure Fredoka font
const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

export const metadata = {
  title: "MyRetroKit",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fredoka.variable}>
      <body className="flex flex-col min-h-screen antialiased overflow-hidden">
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
