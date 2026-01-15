import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";


export const metadata = {
  title: "Next Items App",
  description: "Next.js Royel-Mart Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Toaster position="top-right" />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
