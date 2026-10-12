import { SubscribeButton } from "@/components/SubscribeButton";

const contactEmail = "ogalo1004@gmail.com";
const contactPhone = "010-8009-7218";
const openChatUrl = process.env.NEXT_PUBLIC_KAKAO_OPEN_CHAT_URL;

const programs = [
  {
    id: "formiq-workflow",
    index: "01",
    name: "FormIQ Workflow",
    label: "업무 자동화",
    status: "공개 준비 중",
    description: "반복되는 업무 흐름을 한곳에서 정리하고, 더 중요한 판단에 집중하도록 돕는 워크스페이스.",
    accent: "violet",
    visual: ["TASK FLOW", "SMART ROUTING", "LIVE STATUS"],
  },
  {
    id: "kakao-dark",
    index: "02",
    name: "Kakao Dark Safe",
    label: "Windows 유틸리티",
    status: "실험판",
    description: "카카오톡 업데이트 후에도 일반 모드로 안전하게 돌아갈 수 있도록 설계한 다크 호환 도구.",
    accent: "cyan",
    visual: ["SAFE MODE", "VERSION CHECK", "AUTO RECOVERY"],
  },
  {
    id: "formiq-docs",
    index: "03",
    name: "FormIQ Docs",
    label: "문서 생산성",
    status: "개발 중",
    description: "흩어진 자료를 빠르게 정리하고 반복 문서를 더 간단하게 만드는 차세대 문서 도구.",
    accent: "lime",
    visual: ["QUICK CAPTURE", "AUTO FORMAT", "EXPORT"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav-shell">
        <div className="nav wrap">
          <a className="brand" href="#top" aria-label="FormIQ 홈">FORM<span>IQ</span><i /></a>
          <nav aria-label="주요 메뉴">
            <a href="#programs">프로그램</a>
            <a href="#story">스토리</a>
            <a href="#contact">문의</a>
          </nav>
          <a className="nav-cta" href="#programs">Explore <span>↗</span></a>
        </div>
      </header>

      <section className="hero" id="top">
        <video className="hero-video" autoPlay muted loop playsInline aria-hidden="true">
          <source src="/media/formiq-motion.mp4" type="video/mp4" />
        </video>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orb orb-one" aria-hidden="true" />
        <div className="hero-orb orb-two" aria-hidden="true" />
        <div className="wrap hero-content">
          <div className="hero-topline">
            <span><b /> INDEPENDENT SOFTWARE STUDIO</span>
            <span>SEOUL · 2026</span>
          </div>
          <h1>MAKE WORK<br /><em>FEEL LIGHT.</em></h1>
          <div className="hero-bottom">
            <p>복잡한 일은 줄이고,<br />당신의 가능성은 더 크게.</p>
            <a className="round-link" href="#programs" aria-label="프로그램 보기"><span>↓</span></a>
          </div>
        </div>
        <div className="ticker" aria-hidden="true">
          <div>DESIGNED FOR REAL WORK&nbsp; ✦ &nbsp;SIMPLE TOOLS, BOLD IDEAS&nbsp; ✦ &nbsp;35,000 KRW / MONTH&nbsp; ✦ &nbsp;DESIGNED FOR REAL WORK&nbsp; ✦ &nbsp;SIMPLE TOOLS, BOLD IDEAS&nbsp; ✦ &nbsp;</div>
        </div>
      </section>

      <section className="intro" id="story">
        <div className="wrap intro-layout">
          <p className="section-code">/ 00 — OUR POINT OF VIEW</p>
          <div>
            <h2>좋은 소프트웨어는<br />설명보다 먼저 <em>느껴집니다.</em></h2>
            <p className="intro-copy">FormIQ는 거대한 기능 목록보다 매일 반복되는 불편 하나를 제대로 해결하는 도구를 만듭니다. 빠르고, 선명하고, 오래 쓸 수 있게.</p>
          </div>
        </div>
        <div className="metric-row wrap">
          <div><strong>03</strong><span>Products in motion</span></div>
          <div><strong>24/7</strong><span>Always evolving</span></div>
          <div><strong>₩35K</strong><span>Per program / month</span></div>
        </div>
      </section>

      <section className="program-section" id="programs">
        <div className="wrap section-heading">
          <p className="section-code">/ 01 — PROGRAMS</p>
          <h2>ONE TOOL.<br />ONE CLEAR JOB.</h2>
          <p>각 프로그램은 독립적으로 구독합니다.<br />현재 공개 준비 중인 제품은 결제가 활성화되지 않습니다.</p>
        </div>

        <div className="program-track">
          {programs.map((program) => (
            <article className={`product product-${program.accent}`} key={program.id}>
              <div className="product-head">
                <span>{program.index}</span>
                <span className="status"><i /> {program.status}</span>
              </div>
              <div className="product-visual" aria-hidden="true">
                <div className="visual-window">
                  <div className="window-top"><i /><i /><i /></div>
                  {program.visual.map((item, index) => (
                    <div className="visual-row" key={item}><b>{String(index + 1).padStart(2, "0")}</b><span>{item}</span><i /></div>
                  ))}
                </div>
              </div>
              <div className="product-body">
                <span className="product-label">{program.label}</span>
                <h3>{program.name}</h3>
                <p>{program.description}</p>
              </div>
              <div className="product-price">
                <div><strong>35,000</strong><span>원 / 월</span></div>
                <SubscribeButton programId={program.id} programName={program.name} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="motion-section">
        <div className="motion-copy">
          <p className="section-code">/ 02 — BUILT TO MOVE</p>
          <h2>멈춰 있는 도구가 아니라<br /><em>함께 진화하는 도구.</em></h2>
        </div>
        <div className="demo-stack" aria-hidden="true">
          <div className="demo-card demo-a"><span>01 / CAPTURE</span><strong>아이디어를 놓치지 않게</strong><i /></div>
          <div className="demo-card demo-b"><span>02 / ORGANIZE</span><strong>흐름은 더 단순하게</strong><i /></div>
          <div className="demo-card demo-c"><span>03 / MOVE</span><strong>결과까지 더 빠르게</strong><i /></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="wrap">
          <p className="section-code">/ 03 — CONTACT</p>
          <h2>LET&apos;S MAKE<br /><em>SOMETHING USEFUL.</em></h2>
          <div className="contact-grid">
            <a href={`mailto:${contactEmail}`}><span>EMAIL</span><strong>{contactEmail}</strong><i>↗</i></a>
            <a href="tel:+821080097218"><span>PHONE</span><strong>{contactPhone}</strong><i>↗</i></a>
            {openChatUrl ? (
              <a href={openChatUrl} target="_blank" rel="noreferrer"><span>KAKAO</span><strong>1:1 오픈채팅</strong><i>↗</i></a>
            ) : (
              <div className="chat-pending"><span>KAKAO</span><strong>오픈채팅 준비 중</strong><i>—</i></div>
            )}
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-layout">
          <div><a className="brand footer-brand" href="#top">FORM<span>IQ</span><i /></a><p>Useful software for better work.</p></div>
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
        <div className="wrap copyright"><span>© {new Date().getFullYear()} FORMIQ</span><span>FORMIQ.CO.KR</span></div>
      </footer>
    </main>
  );
}

