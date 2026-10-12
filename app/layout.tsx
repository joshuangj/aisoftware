import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormIQ | 반복 업무를 더 간단하게",
  description: "업무에 바로 쓰는 실용적인 프로그램을 월 구독으로 만나보세요.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

