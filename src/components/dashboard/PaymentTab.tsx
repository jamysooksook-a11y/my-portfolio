import { useState } from "react"
import { paymentSummary } from "../../data/dashboardData"

const fmt = (n: number) => n.toLocaleString("ko-KR")

const options = [
  { id: "full", label: "즉시결제", desc: "전체 금액을 한 번에 납부합니다.", amount: paymentSummary.amount },
  { id: "partial", label: "일부결제", desc: "납부할 금액을 직접 입력합니다.", amount: null },
  { id: "installment", label: "분할납부", desc: "남은 금액을 할부로 나눠 납부합니다.", amount: null },
]

export default function PaymentTab() {
  const [selected, setSelected] = useState("full")
  const [done, setDone] = useState(false)

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white py-24 dark:border-slate-700 dark:bg-slate-900">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
          <svg className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="mt-4 text-xl font-bold text-slate-900 dark:text-slate-100">납부 완료</p>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          {fmt(paymentSummary.amount)}원이 정상 처리되었습니다.
        </p>
        <button
          onClick={() => setDone(false)}
          className="mt-8 rounded-xl border border-slate-200 px-6 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          돌아가기
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* 납부 방법 선택 */}
      <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
        <div className="border-b border-slate-100 px-8 py-5 dark:border-slate-700">
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">납부 방법 선택</h2>
        </div>
        <div className="space-y-3 p-6">
          {options.map((opt) => (
            <label
              key={opt.id}
              className={`flex cursor-pointer items-start gap-4 rounded-xl border p-5 transition ${
                selected === opt.id
                  ? "border-orange-400 bg-orange-50 dark:bg-orange-900/10"
                  : "border-slate-200 dark:border-slate-700"
              }`}
            >
              <input
                type="radio"
                name="payment"
                value={opt.id}
                checked={selected === opt.id}
                onChange={() => setSelected(opt.id)}
                className="mt-0.5 accent-orange-500"
              />
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{opt.label}</p>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{opt.desc}</p>
              </div>
              {opt.amount && (
                <span className="ml-auto text-sm font-bold text-orange-500">
                  {fmt(opt.amount)}원
                </span>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* 결제 계좌 */}
      <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
        <div className="flex items-center justify-between px-8 py-5">
          <div>
            <p className="text-xs text-slate-400">출금 계좌</p>
            <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">
              {paymentSummary.account}
            </p>
          </div>
          <button className="text-xs text-orange-500 hover:underline">변경</button>
        </div>
      </div>

      {/* 납부 버튼 */}
      <button
        onClick={() => setDone(true)}
        className="w-full rounded-xl bg-orange-500 py-4 text-sm font-semibold text-white transition hover:bg-orange-600"
      >
        {fmt(paymentSummary.amount)}원 납부하기
      </button>
    </div>
  )
}
