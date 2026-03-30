import { useState } from "react"
import { careers } from "../data/careers"

const INITIAL_COUNT = 10

export default function Career() {
  const [showAll, setShowAll] = useState(false)

  const displayed = showAll ? careers : careers.slice(0, INITIAL_COUNT)

  return (
    <section id="career" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
        Career
      </h2>
      <p className="mt-2 text-sm text-slate-400">총 {careers.length}건의 프로젝트 경력</p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
        {/* 테이블 헤더 */}
        <div className="grid grid-cols-[1fr_180px_180px_90px_110px] gap-4 bg-slate-50 dark:bg-slate-800/60 px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span>사업명</span>
          <span>참여기간</span>
          <span>담당업무</span>
          <span>직위</span>
          <span>발주처</span>
        </div>

        {/* 목록 */}
        <ul className="divide-y divide-slate-100 dark:divide-slate-800">
          {displayed.map((career, index) => (
            <li
              key={index}
              className="grid grid-cols-[1fr_180px_180px_90px_110px] gap-4 px-6 py-4 text-sm hover:bg-slate-50 dark:hover:bg-slate-800/40 transition"
            >
              <span className="font-medium text-slate-800 dark:text-slate-200 leading-snug">
                {career.title}
              </span>
              <span className="text-slate-500 dark:text-slate-400 text-xs leading-snug pt-0.5">
                {career.period}
              </span>
              <span className="text-slate-500 dark:text-slate-400 text-xs leading-snug pt-0.5">
                {career.role}
              </span>
              <span className="text-slate-500 dark:text-slate-400 text-xs leading-snug pt-0.5">
                {career.position}
              </span>
              <span className="text-slate-500 dark:text-slate-400 text-xs leading-snug pt-0.5">
                {career.client}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* 더보기 / 접기 버튼 */}
      <div className="mt-4 text-center">
        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className="rounded-full border border-slate-200 dark:border-slate-700 px-6 py-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          {showAll ? "접기 ▲" : `전체보기 (${careers.length}건) ▼`}
        </button>
      </div>
    </section>
  )
}
