"use client";

import Script from "next/script";
import { useState } from "react";

declare global {
  interface Window {
    TossPayments?: (clientKey: string) => {
      payment: (options: { customerKey: string }) => {
        requestBillingAuth: (options: {
          method: "CARD";
          successUrl: string;
          failUrl: string;
          customerEmail?: string;
          customerName?: string;
        }) => Promise<void>;
      };
    };
  }
}

type Props = { programId: string; programName: string };

export function SubscribeButton({ programId, programName }: Props) {
  const [message, setMessage] = useState("");
  const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY;
  const enabled = process.env.NEXT_PUBLIC_PAYMENT_ENABLED === "true";

  async function subscribe() {
    if (!enabled || !clientKey) {
      setMessage("현재 결제 계약을 준비하고 있습니다. 문의 채널로 연락해 주세요.");
      return;
    }

    if (!window.TossPayments) {
      setMessage("결제 모듈을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.");
      return;
    }

    try {
      const storageKey = "formiq-customer-key";
      const customerKey = localStorage.getItem(storageKey) || crypto.randomUUID();
      localStorage.setItem(storageKey, customerKey);
      sessionStorage.setItem("formiq-program", JSON.stringify({ programId, programName }));

      const payment = window.TossPayments(clientKey).payment({ customerKey });
      await payment.requestBillingAuth({
        method: "CARD",
        successUrl: `${window.location.origin}/billing/success?program=${encodeURIComponent(programId)}`,
        failUrl: `${window.location.origin}/billing/fail`,
      });
    } catch {
      setMessage("결제창을 열지 못했습니다. 잠시 후 다시 시도해 주세요.");
    }
  }

  return (
    <>
      <Script src="https://js.tosspayments.com/v2/standard" strategy="afterInteractive" />
      <button className="subscribe-button" type="button" onClick={subscribe}>월 구독 시작하기</button>
      {message && <p className="button-message" role="status">{message}</p>}
    </>
  );
}

