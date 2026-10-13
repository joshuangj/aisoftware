export default function PrivacyPage() {
  return (
    <main className="policy-page">
      <article>
        <p className="eyebrow">PRIVACY POLICY</p>
        <h1>개인정보처리방침</h1>
        <p className="policy-meta">시행일: 2026년 10월 13일</p>
        <p>포믹(formiq, 이하 “회사”)은 개인정보 보호법 등 관련 법령을 준수하며, 다음과 같이 개인정보를 처리합니다.</p>

        <section className="policy-section">
          <h2>1. 수집 항목과 이용 목적</h2>
          <ul>
            <li><strong>문의:</strong> 이름 또는 닉네임, 이메일 주소, 전화번호, 문의 내용 — 문의 확인과 답변</li>
            <li><strong>구독·결제:</strong> 이름, 이메일 주소, 결제 승인정보, 주문번호, 상품 및 결제 내역 — 결제 처리, 이용권 제공, 환불 및 고객지원</li>
            <li><strong>서비스 이용:</strong> 접속기록, IP 주소, 브라우저·기기 정보, 오류기록 — 보안, 장애 대응 및 서비스 개선</li>
          </ul>
          <p>회사는 카드번호 전체와 카드 비밀번호를 직접 저장하지 않으며, 결제정보는 전자결제업체를 통해 처리합니다.</p>
        </section>

        <section className="policy-section">
          <h2>2. 보유 및 이용기간</h2>
          <p>개인정보는 이용 목적이 달성되면 지체 없이 파기합니다. 다만 관계 법령에 따라 다음 기록을 일정 기간 보관합니다.</p>
          <ul>
            <li>계약 또는 청약철회 기록: 5년</li>
            <li>대금결제 및 재화·서비스 공급 기록: 5년</li>
            <li>소비자 불만 또는 분쟁처리 기록: 3년</li>
            <li>표시·광고 기록: 6개월</li>
            <li>서비스 접속기록: 3개월</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. 처리위탁과 국외 처리</h2>
          <p>회사는 원활한 서비스 제공을 위해 필요한 범위에서 다음 업체를 이용할 수 있습니다.</p>
          <ul>
            <li><strong>Vercel Inc.</strong> — 웹사이트 호스팅과 전송, 접속기록 처리</li>
            <li><strong>전자결제업체(PG)</strong> — 결제 승인, 정기결제, 취소 및 환불 처리</li>
          </ul>
          <p>국외 사업자의 인프라를 이용하는 경우 서비스 제공 과정에서 접속정보가 국외 서버에서 처리될 수 있습니다. 결제업체가 확정되면 업체명과 처리 내용을 이 방침에 반영합니다.</p>
        </section>

        <section className="policy-section">
          <h2>4. 제3자 제공</h2>
          <p>회사는 이용자의 개인정보를 동의 없이 외부에 판매하거나 제공하지 않습니다. 다만 법령에 근거한 요청이 있거나, 이용자가 사전에 동의한 경우에는 예외로 합니다.</p>
        </section>

        <section className="policy-section">
          <h2>5. 이용자의 권리</h2>
          <p>이용자는 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지 및 동의 철회를 요청할 수 있습니다. 아래 개인정보 보호책임자에게 연락하면 본인 확인 후 지체 없이 처리합니다.</p>
        </section>

        <section className="policy-section">
          <h2>6. 파기와 안전조치</h2>
          <p>전자파일은 복구하기 어려운 방법으로 삭제하고, 종이 문서는 분쇄 또는 소각합니다. 회사는 접근권한 관리, 전송구간 암호화, 보안 업데이트 및 접속기록 점검 등 필요한 보호조치를 시행합니다.</p>
        </section>

        <section className="policy-section policy-contact">
          <h2>7. 개인정보 보호책임자</h2>
          <p>성명: 진승민</p>
          <p>이메일: <a href="mailto:ogalo1004@gmail.com">ogalo1004@gmail.com</a></p>
          <p>전화: <a href="tel:+821080097218">010-8009-7218</a></p>
        </section>

        <a className="policy-home" href="/">← 홈으로</a>
      </article>
    </main>
  );
}

