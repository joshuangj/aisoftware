import { SubscribeButton } from "@/components/SubscribeButton";

const contactEmail = "ogalo1004@gmail.com";
const contactPhone = "010-8009-7218";
const openChatUrl = process.env.NEXT_PUBLIC_KAKAO_OPEN_CHAT_URL;

const programs = [
  {
    id: "formiq",
    name: "FormIQ",
    label: "업무 자동화",
    description: "반복되는 업무를 줄이고 중요한 일에 집중할 수 있도록 돕는 실용적인 도구입니다.",
    features: ["항상 최신 버전 제공", "이메일·전화 사용 문의", "언제든 구독 해지 가능"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav wrap">
        <a className="brand" href="#top" aria-label="FormIQ 홈">Form<span>IQ</span></a>
        <nav aria-label="주요 메뉴">
          <a href="#programs">프로그램</a>
          <a href="#contact">문의</a>
        </nav>
      </header>

      <section className="hero wrap" id="top">
        <p className="eyebrow">WORK SMARTER, EVERY DAY</p>
        <h1>일은 더 가볍게,<br /><em>가능성은 더 크게.</em></h1>
        <p className="hero-copy">복잡한 업무를 단순하게 만드는 프로그램.<br />필요한 도구만 골라 월 구독으로 시작하세요.</p>
        <a className="primary-link" href="#programs">프로그램 둘러보기 <span>↓</span></a>
      </section>

      <section className="program-section" id="programs">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">PROGRAMS</p>
              <h2>업무에 바로 쓰는 도구</h2>
            </div>
            <p>모든 프로그램은 각각 월 35,000원입니다.<br />필요한 프로그램만 개별 구독할 수 있습니다.</p>
          </div>

          <div className="program-grid">
            {programs.map((program) => (
              <article className="program-card" key={program.id}>
                <div>
                  <span className="pill">{program.label}</span>
                  <h3>{program.name}</h3>
                  <p>{program.description}</p>
                  <ul>
                    {program.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                </div>
                <div className="price-block">
                  <div><strong>35,000원</strong><span>/ 월</span></div>
                  <SubscribeButton programId={program.id} programName={program.name} />
                </div>
              </article>
            ))}

            <article className="program-card coming-soon">
              <span className="plus">+</span>
              <h3>새로운 프로그램</h3>
              <p>더 편리한 업무를 위한 다음 도구를 준비하고 있습니다.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="wrap contact-layout">
          <div>
            <p className="eyebrow">CONTACT</p>
            <h2>궁금한 점이<br />있으신가요?</h2>
          </div>
          <div className="contact-panel">
            <a href={`mailto:${contactEmail}`}><span>이메일</span><strong>{contactEmail}</strong></a>
            <a href="tel:+821080097218"><span>전화</span><strong>{contactPhone}</strong></a>
            {openChatUrl ? (
              <a href={openChatUrl} target="_blank" rel="noreferrer"><span>빠른 문의</span><strong>카카오 1:1 오픈채팅 →</strong></a>
            ) : (
              <div className="chat-pending"><span>빠른 문의</span><strong>카카오 1:1 오픈채팅 준비 중</strong></div>
            )}
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-layout">
          <div><a className="brand footer-brand" href="#top">Form<span>IQ</span></a><p>업무의 가능성을 넓히는 소프트웨어</p></div>
          <div className="business-info">
            <p>사업자등록번호 464-12-03368</p>
            <p>{process.env.NEXT_PUBLIC_BUSINESS_NAME || "상호 입력 필요"} · 대표 {process.env.NEXT_PUBLIC_REPRESENTATIVE || "대표자명 입력 필요"}</p>
            <p>{process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || "사업장 주소 입력 필요"}</p>
            <p>통신판매업 신고번호 {process.env.NEXT_PUBLIC_ECOMMERCE_REGISTRATION || "입력 필요"}</p>
          </div>
          <div className="footer-links">
            <a href="/terms">이용약관</a>
            <a href="/privacy">개인정보처리방침</a>
            <a href="/refund">환불·구독해지 정책</a>
          </div>
        </div>
        <div className="wrap copyright">© {new Date().getFullYear()} FormIQ. All rights reserved.</div>
      </footer>
    </main>
  );
}

