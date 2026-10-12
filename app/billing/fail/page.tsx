export default function BillingFailPage() {
  return (
    <main className="status-page">
      <section className="status-card">
        <p className="eyebrow">PAYMENT NOT COMPLETED</p>
        <h1>결제가 완료되지 않았습니다</h1>
        <p>카드 정보를 확인한 뒤 다시 시도하거나 문의 채널로 연락해 주세요. 승인되지 않은 금액은 청구되지 않습니다.</p>
        <a className="primary-link" href="/#programs">다시 시도하기</a>
      </section>
    </main>
  );
}

