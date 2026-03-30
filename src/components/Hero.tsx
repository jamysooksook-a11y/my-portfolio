export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">

      <p className="text-sm font-medium text-[#A85E2E] dark:text-[#FFB380]">
        Publisher & Frontend
      </p>

      <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight 
      text-slate-900 dark:text-slate-100">
        사용성과 구조를 함께 생각하는
        <br />
        퍼블리셔 포트폴리오
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 
      text-slate-600 dark:text-slate-300">
        HTML, SCSS, Vue 프로젝트 경험을 바탕으로 React와 TypeScript까지 확장하며
        UI를 컴포넌트 단위로 구현하고 있습니다.
      </p>

      {/* CTA 버튼 */}
      <div className="mt-10 flex gap-4">
        <a
          href="#projects"
          className="rounded-2xl bg-[#A85E2E] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:brightness-95"
        >
          최근 프로젝트 보기
        </a>
        <a
          href="#career"
          className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50
          dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-800"
        >
          수행 프로젝트 보기
        </a>
        <a
          href="/components"
          className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50
          dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-800"
        >
          컴포넌트 보기
        </a>
      
      </div>

    </section>
  )
}