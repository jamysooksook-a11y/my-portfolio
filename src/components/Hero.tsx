import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="relative min-h-[560px] flex items-center overflow-hidden">

      {/* 배경 이미지 */}
      <img
        src="/images/back.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* 어두운 오버레이 - 텍스트 가독성 확보 */}
      <div className="absolute inset-0 bg-slate-900/70" />

      {/* 콘텐츠 */}
      <div className="relative mx-auto max-w-6xl px-6 py-28">

        <p className="text-sm font-medium text-orange-300">
          Publisher & Frontend
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight text-white">
          사용성과 구조를 함께 생각하는
          <br />
          퍼블리셔 포트폴리오
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          HTML, SCSS, Vue 프로젝트 경험을 바탕으로 React와 TypeScript까지 확장하며
          UI를 컴포넌트 단위로 구현하고 있습니다.
        </p>

        {/* CTA 버튼 */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-2xl bg-[#A85E2E] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:brightness-95"
          >
            최근 프로젝트 보기
          </a>
          <a
            href="#career"
            className="rounded-2xl bg-white/10 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/30 transition hover:bg-white/20"
          >
            수행 프로젝트 보기
          </a>
          <Link
            to="/components"
            className="rounded-2xl bg-white/10 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/30 transition hover:bg-white/20"
          >
            컴포넌트 보기
          </Link>
        </div>

      </div>
    </section>
  )
}