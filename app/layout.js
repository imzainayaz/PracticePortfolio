import Header from "@/app/_components/Header";
import "@/_styles/globals.css";

export const metadata = {
  title: `Zain Ayaz`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-us">
      <body className="scroll-auto antialiased flex flex-col bg-primary-950 text-primary-100 min-h-screen relative">
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
