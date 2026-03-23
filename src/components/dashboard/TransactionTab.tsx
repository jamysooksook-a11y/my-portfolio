import { transactions } from "../../data/dashboardData"

const fmt = (n: number) => n.toLocaleString("ko-KR")

const categoryColors: Record<string, string> = {
  카페: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
  쇼핑: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
  편의점: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400",
  문화: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400",
  교통: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-400",
  마트: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
  구독: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-400",
  뷰티: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-400",
  음식: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400",
  도서: "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300",
}

export default function TransactionTab() {
  const total = transactions.reduce((s, t) => s + t.amount, 0)

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
        <div className="flex items-center justify-between border-b border-slate-100 px-8 py-5 dark:border-slate-700">
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
            이용 내역
          </h2>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            총 {fmt(total)}원
          </span>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100 dark:border-slate-700">
              <th className="px-8 py-3 text-left text-xs font-medium text-slate-400">날짜</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-400">가맹점</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-400">카테고리</th>
              <th className="px-8 py-3 text-right text-xs font-medium text-slate-400">금액</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
            {transactions.map((tx) => (
              <tr key={tx.id} className="transition hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="px-8 py-4 text-sm text-slate-500 dark:text-slate-400">{tx.date}</td>
                <td className="px-4 py-4 text-sm font-medium text-slate-900 dark:text-slate-100">
                  {tx.description}
                </td>
                <td className="px-4 py-4">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${categoryColors[tx.category] ?? ""}`}>
                    {tx.category}
                  </span>
                </td>
                <td className="px-8 py-4 text-right text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {fmt(tx.amount)}원
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
