import { monthlyBalances } from "../../data/dashboardData"

const fmt = (n: number) => (n / 10000).toFixed(0) + "만"

const BAR_MAX_HEIGHT = 160
const BAR_WIDTH = 48

export default function BalanceChartTab() {
  const maxAmount = Math.max(...monthlyBalances.map((m) => m.amount))

  return (
    <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
      <div className="border-b border-slate-100 px-8 py-5 dark:border-slate-700">
        <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">월별 잔액 현황</h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">최근 6개월 결제 금액 추이</p>
      </div>

      <div className="px-8 py-8">
        <div className="flex items-end justify-around gap-4">
          {monthlyBalances.map((item, i) => {
            const barHeight = Math.max((item.amount / maxAmount) * BAR_MAX_HEIGHT, 8)
            const isLast = i === monthlyBalances.length - 1

            return (
              <div key={item.month} className="flex flex-col items-center gap-2">
                {/* 금액 레이블 */}
                <span
                  className={`text-xs font-semibold ${
                    isLast ? "text-orange-500" : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {fmt(item.amount)}
                </span>

                {/* 막대 */}
                <div
                  className={`w-12 rounded-t-lg transition-all ${
                    isLast ? "bg-orange-500" : "bg-slate-200 dark:bg-slate-700"
                  }`}
                  style={{ height: barHeight, width: BAR_WIDTH }}
                />

                {/* 월 레이블 */}
                <span
                  className={`text-xs font-medium ${
                    isLast ? "text-orange-500" : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {item.month}
                </span>
              </div>
            )
          })}
        </div>

        {/* 구분선 */}
        <div className="mt-2 border-t border-slate-100 dark:border-slate-700" />

        {/* 범례 */}
        <div className="mt-6 flex gap-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm bg-orange-500" />
            <span className="text-xs text-slate-500 dark:text-slate-400">이번 달</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm bg-slate-200 dark:bg-slate-700" />
            <span className="text-xs text-slate-500 dark:text-slate-400">이전 달</span>
          </div>
        </div>
      </div>
    </div>
  )
}
