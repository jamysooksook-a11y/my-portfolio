import { useState } from "react"
import { Link } from "react-router-dom"

export default function ContactForm() {
  // 각 입력값을 useState로 기억
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  // 이메일 형식 체크 함수
  function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  }

  // 제출 가능 여부
  const canSubmit =
    name.length >= 2 &&
    isValidEmail(email) &&
    message.length >= 10

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  // 제출 완료 화면
  if (submitted) {
    return (
      <div className="min-h-[calc(100vh-64px)] bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-5xl">✅</div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">제출이 완료됐어요!</h2>
          <p className="text-sm text-slate-500">빠른 시일 내에 답변 드리겠습니다.</p>
          <button
            type="button"
            onClick={() => {
              setName("")
              setEmail("")
              setMessage("")
              setSubmitted(false)
            }}
            className="mt-2 text-sm text-blue-500 hover:underline"
          >
            다시 작성하기
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-lg px-10 py-8 space-y-6">

        {/* 브레드크럼 */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Link to="/" className="hover:text-blue-500 transition">포트폴리오</Link>
          <span>/</span>
          <span>문의하기</span>
        </div>

        {/* 헤더 */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">문의하기</h1>
          <p className="mt-1 text-sm text-slate-400">입력하는 즉시 유효성 검사가 진행됩니다.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* 이름 */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              이름 <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="홍길동"
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 transition"
            />
            {/* 조건부 렌더링 - 에러 */}
            {name.length > 0 && name.length < 2 && (
              <p className="text-xs text-red-400">이름을 2자 이상 입력해주세요.</p>
            )}
            {/* 조건부 렌더링 - 성공 */}
            {name.length >= 2 && (
              <p className="text-xs text-green-500">✓ 좋아요!</p>
            )}
          </div>

          {/* 이메일 */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              이메일 <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 transition"
            />
            {email.length > 0 && !isValidEmail(email) && (
              <p className="text-xs text-red-400">올바른 이메일 형식을 입력해주세요.</p>
            )}
            {isValidEmail(email) && (
              <p className="text-xs text-green-500">✓ 올바른 이메일 형식이에요.</p>
            )}
          </div>

          {/* 문의 내용 */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              문의 내용 <span className="text-red-400">*</span>
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="문의 내용을 입력해주세요. (최소 10자)"
              rows={5}
              maxLength={200}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 transition resize-none"
            />
            <div className="flex justify-between">
              {message.length > 0 && message.length < 10 && (
                <p className="text-xs text-red-400">10자 이상 입력해주세요.</p>
              )}
              {message.length >= 10 && (
                <p className="text-xs text-green-500">✓ 좋아요!</p>
              )}
              {message.length === 0 && <span />}
              {/* 글자수 카운터 */}
              <p className="text-xs text-slate-400 ml-auto">{message.length} / 200</p>
            </div>
          </div>

          {/* 제출 버튼 - canSubmit이 false면 비활성화 */}
          <button
            type="submit"
            disabled={!canSubmit}
            className={[
              "w-full rounded-xl py-3 text-sm font-medium transition",
              canSubmit
                ? "bg-slate-900 text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                : "bg-slate-100 text-slate-400 cursor-not-allowed dark:bg-slate-800 dark:text-slate-600",
            ].join(" ")}
          >
            제출하기
          </button>

        </form>
      </div>
    </div>
  )
}
