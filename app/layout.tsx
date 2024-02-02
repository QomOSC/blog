import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/app/components/Header";
import "./globals.css";

const vazir = localFont({
  src: [
    {
      path: "../public/static/fonts/Vazirmatn/Vazirmatn-FD-Thin.woff2",
      weight: "100",
    },
    {
      path: "../public/static/fonts/Vazirmatn/Vazirmatn-FD-ExtraLight.woff2",
      weight: "200",
    },
    {
      path: "../public/static/fonts/Vazirmatn/Vazirmatn-FD-Light.woff2",
      weight: "300",
    },
    {
      path: "../public/static/fonts/Vazirmatn/Vazirmatn-FD-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/static/fonts/Vazirmatn/Vazirmatn-FD-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/static/fonts/Vazirmatn/Vazirmatn-FD-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../public/static/fonts/Vazirmatn/Vazirmatn-FD-Bold.woff2",
      weight: "700",
    },
    {
      path: "../public/static/fonts/Vazirmatn/Vazirmatn-FD-ExtraBold.woff2",
      weight: "800",
    },
    {
      path: "../public/static/fonts/Vazirmatn/Vazirmatn-FD-Black.woff2",
      weight: "900",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qomosc.github.io/blog"),
  title: {
    default: "جامعه متن باز قم",
    template: "%s | جامعه متن باز قم",
  },
  description: "",
  openGraph: {
    title: "جامعه متن باز قم",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="IR-fa" dir="rtl">
      <body className={vazir.className}>
        <Header className="w-[768px] mx-auto mt-14" />

        <main className="w-[768px] mx-auto">{children}</main>
      </body>
    </html>
  );
}
