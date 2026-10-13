import Image from "next/image";

export const metadata = {
  title: "모델 쓸 돈 없어서 AI 캐릭 만듦 ㅋㅋ | FormIQ",
  description: "광고비 대신 상상력을 쓴 FormIQ의 AI 캐릭터, 포미를 소개합니다.",
};

export default function CharacterPage() {
  return (
    <main className="character-page">
      <header className="character-nav">
        <a className="brand" href="/">FORM<span>IQ</span><i /></a>
        <a href="/">홈으로 ↗</a>
      </header>

      <section className="character-hero">
        <div className="character-noise" aria-hidden="true" />
        <div className="character-copy">
          <p className="character-kicker"><i /> ZERO MODEL BUDGET CAMPAIGN</p>
          <h1>모델 쓸 돈 없어서<br /><em>AI 캐릭 만듦 ㅋㅋ</em></h1>
          <p className="character-lead">돈은 아꼈는데 캐릭터는 꽤 잘 나왔습니다.<br />FormIQ의 첫 번째 AI 크루, <strong>포미</strong>를 소개합니다.</p>
          <a className="character-cta" href="#meet">누구세요? <span>↓</span></a>
        </div>

        <div className="character-art">
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <Image
            src="/images/formiq-ai-character.png"
            alt="검은 후드와 노트북을 든 FormIQ AI 캐릭터 포미"
            width={1024}
            height={1536}
            priority
          />
          <div className="character-tag tag-one">100% AI CHARACTER</div>
          <div className="character-tag tag-two">0% HUMAN MODEL</div>
        </div>
      </section>

      <div className="character-marquee" aria-hidden="true">
        <div>광고비 대신 상상력 씀 ✦ 모델비 0원 ✦ 아이디어는 무제한 ✦ 광고비 대신 상상력 씀 ✦ 모델비 0원 ✦ 아이디어는 무제한 ✦ </div>
      </div>

      <section className="meet-character" id="meet">
        <div className="meet-title">
          <p>/ CHARACTER 001</p>
          <h2>안녕,<br />나는 <em>포미.</em></h2>
        </div>
        <div className="character-profile">
          <div><span>직업</span><strong>FormIQ의 AI 마케터</strong></div>
          <div><span>특기</span><strong>어려운 기술을 쉽게 말하기</strong></div>
          <div><span>좋아하는 것</span><strong>반복 업무 없애기</strong></div>
          <div><span>싫어하는 것</span><strong>모르는 척 아는 척하기</strong></div>
        </div>
      </section>

      <section className="character-manifesto">
        <p className="manifesto-small">WHY AN AI CHARACTER?</p>
        <h2>유명한 사람보다<br />우리다운 얼굴이<br /><em>필요했습니다.</em></h2>
        <div className="manifesto-grid">
          <p>포미는 실제 사람이 아닙니다. AI로 만든 FormIQ의 오리지널 캐릭터이며, 그 사실을 숨기지 않습니다.</p>
          <p>제품 설명, 짧은 영상, SNS에서 어렵고 딱딱한 기술 이야기를 조금 더 쉽고 재미있게 전합니다.</p>
          <p>사람의 상담이 필요한 순간에는 진짜 담당자에게 연결합니다. 캐릭터는 사람을 대신하는 척하지 않습니다.</p>
        </div>
      </section>

      <section className="character-outro">
        <p>SOFTWARE CAN HAVE A PERSONALITY.</p>
        <h2>일은 똑똑하게.<br />마케팅은 <em>재밌게.</em></h2>
        <div>
          <a href="/#programs">프로그램 보기 ↗</a>
          <a href="mailto:ogalo1004@gmail.com">같이 이야기하기 ↗</a>
        </div>
      </section>

      <footer className="character-footer">
        <span>© 2026 FORMIQ</span>
        <span>AI-GENERATED ORIGINAL CHARACTER</span>
      </footer>
    </main>
  );
}
