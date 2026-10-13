export default function RefundPage() {
  return (
    <main className="policy-page">
      <article>
        <p className="eyebrow">REFUND & CANCELLATION</p>
        <h1>환불·구독해지 정책</h1>
        <p className="policy-meta">시행일: 2026년 10월 13일</p>

        <section className="policy-section">
          <h2>1. 구독 갱신과 해지</h2>
          <ol>
            <li>월 구독은 최초 결제일을 기준으로 매월 자동 갱신됩니다.</li>
            <li>이용자는 다음 결제일 전까지 언제든 구독을 해지할 수 있으며, 해지 이후에는 추가 결제가 발생하지 않습니다.</li>
            <li>해지 후에도 이미 결제한 이용기간의 마지막 날까지 서비스를 사용할 수 있습니다.</li>
          </ol>
        </section>

        <section className="policy-section">
          <h2>2. 청약철회와 환불</h2>
          <ol>
            <li>결제일부터 7일 이내이고 프로그램 다운로드, 라이선스 활성화 또는 핵심 기능 사용이 시작되지 않은 경우 전액 환불을 요청할 수 있습니다.</li>
            <li>서비스 이용이 시작된 뒤 해지하는 경우에는 원칙적으로 남은 기간에 대한 환불 없이 결제기간 종료일까지 이용할 수 있습니다. 다만 관계 법령 또는 아래 예외 사유에 해당하면 별도로 처리합니다.</li>
            <li>중복 결제, 잘못된 금액 결제 또는 회사 책임으로 서비스를 정상 이용하지 못한 경우 확인 후 전액 또는 이용하지 못한 기간에 해당하는 금액을 환불합니다.</li>
            <li>표시·광고 내용과 다르거나 계약 내용대로 제공되지 않은 경우 관계 법령에서 정한 기간 내 청약철회 또는 환불을 요청할 수 있습니다.</li>
          </ol>
        </section>

        <section className="policy-section">
          <h2>3. 환불 신청과 처리</h2>
          <p>주문에 사용한 이메일, 상품명, 결제일과 환불 사유를 적어 <a href="mailto:ogalo1004@gmail.com">ogalo1004@gmail.com</a>으로 신청해 주세요. 접수 내용을 확인한 뒤 결과를 안내하며, 승인된 환불은 원 결제수단을 통해 처리합니다. 카드사와 결제업체 사정에 따라 실제 반영까지 추가 시간이 걸릴 수 있습니다.</p>
        </section>

        <section className="policy-section">
          <h2>4. 법정 권리</h2>
          <p>이 정책은 전자상거래 등에서의 소비자보호에 관한 법률 등 관계 법령이 보장하는 이용자의 권리를 제한하지 않습니다. 정책과 관계 법령이 충돌하는 경우 관계 법령을 우선 적용합니다.</p>
        </section>

        <section className="policy-section policy-contact">
          <h2>고객지원</h2>
          <p>포믹(formiq) · 대표 진승민</p>
          <p>이메일 <a href="mailto:ogalo1004@gmail.com">ogalo1004@gmail.com</a> · 전화 <a href="tel:+821080097218">010-8009-7218</a></p>
        </section>

        <a className="policy-home" href="/">← 홈으로</a>
      </article>
    </main>
  );
}
