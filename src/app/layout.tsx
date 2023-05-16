import { Public_Sans, Quicksand, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { AppProvider } from "@/hooks/use-app";

const fontBody = Quicksand({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-body",
  display: "swap",
});

const fontSub = Public_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-sub",
  display: "swap",
});

const fontMoney = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-money",
  display: "swap",
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontBody.variable} ${fontSub.variable} ${fontMoney.variable}`}
    >
      <AppProvider>
        <body>
          {/* @ts-expect-error Async Server Component */}
          <Header></Header>
          <main>{children}</main>
        </body>
      </AppProvider>
    </html>
  );
}
