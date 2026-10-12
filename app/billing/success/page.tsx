export default function BillingSuccessPage() {
  return (
    <main className="status-page">
      <section className="status-card">
        <p className="eyebrow">PAYMENT AUTHORIZED</p>
        <h1>카드 인증이 완료되었습니다</h1>
        <p>현재는 결제 연동 준비 단계입니다. 실제 서비스에서는 서버가 승인 정보를 안전하게 교환하고 첫 결제를 완료한 뒤 구독을 활성화합니다.</p>
        <a className="primary-link" href="/">홈으로 돌아가기</a>
      </section>
    </main>
  );
}

