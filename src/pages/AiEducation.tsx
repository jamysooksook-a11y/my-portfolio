import { useState } from "react"
import { Link } from "react-router-dom"

const subjects = [
  {
    id: 1,
    subject: "영어",
    teacher: "윤정미",
    bg: "bg-pink-400",
    icon: "💃",
    level: "초급",
  },
  {
    id: 2,
    subject: "영어",
    teacher: "야뱅인",
    bg: "bg-green-500",
    icon: "🗽",
    level: "중급",
  },
  {
    id: 3,
    subject: "수학",
    teacher: "이지훈",
    bg: "bg-teal-400",
    icon: "🐱",
    level: "초급",
  },
  {
    id: 4,
    subject: "정보",
    teacher: "박로봇",
    bg: "bg-yellow-400",
    icon: "🤖",
    level: "입문",
  },
  {
    id: 5,
    subject: "과학",
    teacher: "김우주",
    bg: "bg-blue-500",
    icon: "🔭",
    level: "중급",
  },
  {
    id: 6,
    subject: "국어",
    teacher: "최예린",
    bg: "bg-orange-400",
    icon: "📚",
    level: "초급",
  },
]

const VISIBLE = 4

export default function AiEducation() {
  const [index, setIndex] = useState(0)

  const maxIndex = subjects.length - VISIBLE
  const canPrev = index > 0
  const canNext = index < maxIndex

  const prev = () => setIndex((i) => Math.max(i - 1, 0))
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex))

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-2xl px-10 py-8 space-y-8">

        {/* 브레드크럼 */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Link to="/" className="hover:text-blue-500 transition">포트폴리오</Link>
          <span>/</span>
          <span>AI 교육 서비스</span>
        </div>

        {/* 헤더 */}
        <div>
          <p className="text-xs text-slate-400 mb-1">Vue.js UI Project</p>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">AI 교육 서비스</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Vue3와 TypeScript 기반으로 구현한 AI 맞춤형 교육 서비스 UI입니다.
            학습자 수준에 맞는 과목 카드와 슬라이드 구성을 중심으로 개발했습니다.
          </p>
          <div className="mt-3 flex gap-2 flex-wrap">
            {["Vue3", "TypeScript", "Tailwind"].map((s) => (
              <span key={s} className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* 메인 이미지 */}
        <div className="rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img
            src="/images/ai-education-main.png"
            alt="AI 교육 서비스 메인"
            className="w-full object-cover"
          />
        </div>

        {/* 과목 카드 슬라이드 */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
              추천 과목
            </span>
            <div className="flex gap-2">
              <button
                onClick={prev}
                disabled={!canPrev}
                className="w-7 h-7 rounded-full border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 disabled:opacity-30 transition"
              >
                ‹
              </button>
              <button
                onClick={next}
                disabled={!canNext}
                className="w-7 h-7 rounded-full border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 disabled:opacity-30 transition"
              >
                ›
              </button>
            </div>
          </div>

          {/* 카드 트랙 */}
          <div className="overflow-hidden">
            <div
              className="flex gap-3 transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(calc(-${index} * (25% + 3px)))` }}
            >
              {subjects.map((item) => (
                <div
                  key={item.id}
                  className={`${item.bg} shrink-0 w-[calc(25%-9px)] rounded-2xl p-4 flex flex-col justify-between aspect-[3/4] cursor-pointer hover:scale-[1.03] transition-transform`}
                >
                  <div>
                    <p className="text-[10px] text-white/70 font-medium">
                      AI 맞춤 교육
                    </p>
                    <p className="mt-1 text-sm font-bold text-white leading-tight">
                      {item.subject}
                      <br />
                      <span className="font-normal text-xs text-white/80">({item.teacher})</span>
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-3xl">{item.icon}</span>
                    <span className="text-[10px] text-white/70 bg-white/20 rounded-full px-2 py-0.5">
                      {item.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* dot indicator */}
          <div className="flex justify-center gap-1.5 mt-3">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition ${
                  i === index ? "bg-slate-700 dark:bg-slate-200" : "bg-slate-200 dark:bg-slate-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* 구현 포인트 */}
        <div className="rounded-xl border border-slate-100 dark:border-slate-700 divide-y divide-slate-100 dark:divide-slate-700">
          <div className="px-5 py-3">
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">구현 포인트</span>
          </div>
          {[
            { label: "카드 슬라이드", desc: "translateX + 인덱스 상태로 슬라이드 구현" },
            { label: "반응형 레이아웃", desc: "모바일~데스크탑 대응 그리드 구조" },
            { label: "컴포넌트 분리", desc: "SubjectCard, SliderControl 등 재사용 단위로 분리" },
            { label: "TypeScript 타입 정의", desc: "Subject, Teacher 인터페이스 명시적 정의" },
          ].map((item) => (
            <div key={item.label} className="flex justify-between items-start px-5 py-3">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{item.label}</span>
              <span className="text-xs text-slate-400 text-right max-w-[55%]">{item.desc}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
