export default function TermsPage() {
  return (
    <main className="policy-page">
      <article>
        <p className="eyebrow">TERMS OF SERVICE</p>
        <h1>이용약관</h1>
        <p className="policy-meta">시행일: 2026년 10월 13일</p>

        <section className="policy-section">
          <h2>제1조 목적</h2>
          <p>이 약관은 포믹(formiq, 이하 “회사”)이 제공하는 소프트웨어, 웹사이트 및 관련 구독 서비스의 이용 조건과 회사와 이용자의 권리·의무를 정합니다.</p>
        </section>

        <section className="policy-section">
          <h2>제2조 서비스와 계약</h2>
          <ol>
            <li>회사는 업무 자동화 프로그램, Windows 유틸리티 및 관련 업데이트·고객지원을 제공합니다.</li>
            <li>이용계약은 이용자가 상품 정보와 약관을 확인하고 결제를 완료한 뒤 회사가 이용 권한을 제공하면 성립합니다.</li>
            <li>개별 상품 화면의 기능, 지원 운영체제, 이용기간 및 가격은 해당 상품의 계약 내용에 포함됩니다.</li>
          </ol>
        </section>

        <section className="policy-section">
          <h2>제3조 구독과 결제</h2>
          <ol>
            <li>각 프로그램의 월 구독료는 별도 표시가 없는 한 월 35,000원(부가세 포함)입니다.</li>
            <li>월 구독은 최초 결제일을 기준으로 매월 자동 갱신되며, 이용자가 다음 결제일 전에 해지하면 이후 결제되지 않습니다.</li>
            <li>결제수단의 유효기간 만료나 승인 거절 등으로 결제가 완료되지 않으면 서비스 이용이 제한될 수 있습니다.</li>
            <li>가격이나 주요 조건이 변경되는 경우 적용 전에 웹사이트 또는 등록된 연락처로 안내합니다.</li>
          </ol>
        </section>

        <section className="policy-section">
          <h2>제4조 이용자의 의무</h2>
          <p>이용자는 서비스를 관련 법령과 정상적인 용도로 이용해야 하며, 계정 공유·불법 복제·역설계·서비스 방해·타인의 권리 침해 행위를 해서는 안 됩니다.</p>
        </section>

        <section className="policy-section">
          <h2>제5조 서비스 변경과 중단</h2>
          <p>회사는 보안, 안정성, 기능 개선을 위해 서비스를 업데이트할 수 있습니다. 점검이나 불가피한 장애로 서비스가 일시 중단될 수 있으며, 장기간 이용이 어려운 경우 환불·구독해지 정책에 따라 처리합니다.</p>
        </section>

        <section className="policy-section">
          <h2>제6조 지식재산권</h2>
          <p>서비스와 회사가 제작한 프로그램·디자인·문서의 권리는 회사 또는 정당한 권리자에게 있습니다. 이용자는 구독기간 동안 허용된 범위에서만 사용할 수 있습니다. 제3자 서비스의 명칭과 권리는 각 권리자에게 있습니다.</p>
        </section>

        <section className="policy-section">
          <h2>제7조 해지와 환불</h2>
          <p>이용자는 언제든 구독을 해지할 수 있습니다. 해지 시점과 환불 방법은 <a href="/refund">환불·구독해지 정책</a>을 따르며, 관계 법령이 별도로 정한 권리는 제한되지 않습니다.</p>
        </section>

        <section className="policy-section">
          <h2>제8조 책임과 분쟁</h2>
          <p>회사는 고의 또는 과실로 이용자에게 발생한 손해에 대해 관계 법령에 따라 책임을 집니다. 이용자와 회사는 분쟁 발생 시 원만한 해결을 위해 협의하며, 해결되지 않는 경우 대한민국 법령과 민사소송법상 관할법원에 따릅니다.</p>
        </section>

        <section className="policy-section policy-contact">
          <h2>사업자 및 고객지원</h2>
          <p>포믹(formiq) · 대표 진승민 · 사업자등록번호 464-12-03368</p>
          <p>경기도 남양주시 송산로339번길 13, 201호(별내동)</p>
          <p>이메일 <a href="mailto:ogalo1004@gmail.com">ogalo1004@gmail.com</a> · 전화 <a href="tel:+821080097218">010-8009-7218</a></p>
        </section>

        <a className="policy-home" href="/">← 홈으로</a>
      </article>
    </main>
  );
}

