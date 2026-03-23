import { useState } from "react"
import { Link } from "react-router-dom"
import {
  paymentSummary,
  paymentDetails,
  monthlyBalances,
  transactions,
  cardOptions,
} from "../data/dashboardData"

const fmt = (n: number) => n.toLocaleString("ko-KR")
const BAR_MAX_HEIGHT = 80

export default function FinanceDashboard() {
  const [cardType, setCardType] = useState<"선불" | "체크">("선불")
  const [selectedCard, setSelectedCard] = useState("KOPO 카드 [0001]")
  const maxAmount = Math.max(...monthlyBalances.map((m) => m.amount))

  return (
    <div className="min-h-[calc(100vh-64px)] overflow-y-auto bg-white dark:bg-slate-900">


        <div className="mx-auto max-w-2xl px-10 py-8 space-y-6">

          {/* 브레드크럼 */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Link to="/" className="hover:text-orange-500 transition">포트폴리오</Link>
            <span>/</span>
            <span>단기카드대출 상세내역</span>
          </div>

          {/* ① 금액 */}
          <div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-400">2025년 10월 (예정)</p>
              <div className="relative flex rounded-full bg-slate-100 p-1 dark:bg-slate-800">
                {(["선불", "체크"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setCardType(type)}
                    className={`relative z-10 rounded-full px-4 py-1 text-xs font-medium transition-colors duration-200 ${
                      cardType === type
                        ? "bg-white text-slate-800 shadow-sm dark:bg-slate-600 dark:text-slate-100"
                        : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-1 text-4xl font-bold text-slate-900 dark:text-slate-100">
              {fmt(paymentSummary.amount)}원
            </p>
            <p className="mt-2 text-xs text-slate-400">
              * 일부결제금액이월약정리볼빙이 적용된 이번 달 최소 결제금액은 500,000원
            </p>
            <div className="mt-4 flex gap-2">
              {["분할납부", "즉시결제", "일부결제금액이월약정(리볼빙)"].map((label) => (
                <button
                  key={label}
                  className="w-1/3 rounded-xl bg-slate-100 px-3 py-3 text-xs font-medium text-slate-700 text-center leading-snug transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* ② 결제정보 */}
          <div className="rounded-xl">
            <div className="flex items-center justify-between px-5 py-3">
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">결제정보</span>
              <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800">
                결제정보 변경
              </button>
            </div>
            <dl>
              {/* 결제카드 — 셀렉트 */}
              <div className="px-5 py-3">
                <select
                  value={selectedCard}
                  onChange={(e) => setSelectedCard(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-800 transition focus:outline-none focus:ring-2 focus:ring-orange-400 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
                >
                  {cardOptions.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              {/* 결제일 + 하위 항목 */}
              <div>
                <div className="flex justify-between px-5 py-3">
                  <dt className="text-xs text-slate-400">결제일</dt>
                  <dd className="text-sm font-bold text-slate-800 dark:text-slate-200">9일(출금예정일 9일)</dd>
                </div>
                <div className="flex justify-between py-2 pl-3 pr-5 border-l-2 border-slate-200 ml-5 dark:border-slate-600">
                  <dt className="text-xs text-slate-400">일시불/할부</dt>
                  <dd className="text-xs text-slate-500 dark:text-slate-400">{paymentSummary.usagePeriod}</dd>
                </div>
                <div className="flex justify-between py-2 pl-3 pr-5 border-l-2 border-slate-200 ml-5 dark:border-slate-600">
                  <dt className="text-xs text-slate-400">카드대출</dt>
                  <dd className="text-xs text-slate-500 dark:text-slate-400">{paymentSummary.loanPeriod}</dd>
                </div>
              </div>
              <div className="flex justify-between px-5 py-3">
                <dt className="text-xs text-slate-400">결제계좌</dt>
                <dd className="text-sm font-bold text-slate-800 dark:text-slate-200">{paymentSummary.account}</dd>
              </div>
              <div className="flex justify-between px-5 py-3">
                <dt className="text-xs text-slate-400">명세서발송일</dt>
                <dd className="text-xs font-medium text-slate-800 dark:text-slate-200">매월 {paymentSummary.statementDate}</dd>
              </div>
            </dl>
          </div>

          {/* ③ 잔액 현황 */}
          <div className="rounded-xl">
            <div className="flex items-center justify-between px-5 py-3">
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">잔액 현황</span>
              <span className="text-xs text-slate-400">최근 6개월</span>
            </div>
            <div className="flex items-end justify-center gap-5 px-5 py-5">
              {monthlyBalances.map((item, i) => {
                const barH = Math.max((item.amount / maxAmount) * BAR_MAX_HEIGHT, 6)
                const isLast = i === monthlyBalances.length - 1
                return (
                  <div key={item.month} className="flex flex-col items-center gap-1.5">
                    <span className="text-xs font-medium text-blue-500" style={{ visibility: isLast ? "visible" : "hidden" }}>
                      {(item.amount / 10000).toFixed(0)}만
                    </span>
                    <div
                      className={`w-9 rounded-t-md ${isLast ? "bg-blue-500" : "bg-blue-200 dark:bg-blue-900"}`}
                      style={{ height: barH }}
                    />
                    <span className={`text-xs ${isLast ? "text-blue-500 font-medium" : "text-slate-400"}`}>
                      {item.month}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ④ 항목별 청구금액 */}
          <div className="rounded-xl">
            <div className="px-5 py-3">
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">항목별 청구금액</span>
            </div>
            <ul>
              {paymentDetails.map((item) => (
                <li key={item.label} className="flex justify-between px-5 py-3">
                  <span className="text-xs text-slate-500 dark:text-slate-400">{item.label}</span>
                  <span className="text-xs font-medium text-slate-800 dark:text-slate-200">{fmt(item.amount)}원</span>
                </li>
              ))}
              <li className="flex justify-between px-5 py-3 bg-slate-50 dark:bg-slate-800 rounded-b-xl">
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-100">합계</span>
                <span className="text-xs font-bold text-orange-500">
                  {fmt(paymentDetails.reduce((s, i) => s + i.amount, 0))}원
                </span>
              </li>
            </ul>
          </div>

          {/* ⑤ 이용내역 */}
          <div className="rounded-xl">
            <div className="flex items-center justify-between px-5 py-3">
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">이용내역</span>
              <span className="text-xs text-slate-400">총 {fmt(transactions.reduce((s, t) => s + t.amount, 0))}원</span>
            </div>
            <ul className="divide-y divide-slate-100 dark:divide-slate-700">
              {transactions.map((tx) => (
                <li key={tx.id} className="flex items-center justify-between px-5 py-3 transition hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <div>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{tx.description}</p>
                    <p className="mt-0.5 text-xs text-slate-400">{tx.date} · {tx.card} · {tx.category}</p>
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{fmt(tx.amount)}원</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ⑥ 납부하기 */}
          <div className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4 dark:border-slate-700 dark:bg-slate-800 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">납부하기</p>
              <p className="mt-0.5 text-xs text-slate-400">출금계좌: {paymentSummary.account}</p>
            </div>
            <button className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600">
              {fmt(paymentSummary.amount)}원 납부
            </button>
          </div>

        </div>
    </div>
  )
}
