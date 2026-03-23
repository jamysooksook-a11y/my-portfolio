import { paymentSummary, paymentDetails } from "../../data/dashboardData"

const fmt = (n: number) => n.toLocaleString("ko-KR")

export default function PaymentInfoTab() {
  return (
    <div className="space-y-8">
      {/* 메인 금액 */}
      <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-900">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {paymentSummary.dueDate} 결제 예정
        </p>
        <p className="mt-2 text-5xl font-bold text-slate-900 dark:text-slate-100">
          {fmt(paymentSummary.amount)}
          <span className="ml-1 text-2xl font-semibold">원</span>
        </p>

        <div className="mt-6 flex gap-3">
          <button className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-orange-600">
            즉시결제
          </button>
          <button className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700">
            분할납부
          </button>
          <button className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700">
            일부결제
          </button>
        </div>
      </div>

      {/* 결제 정보 */}
      <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
        <div className="border-b border-slate-100 px-8 py-5 dark:border-slate-700">
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">결제 정보</h2>
        </div>
        <dl className="divide-y divide-slate-100 dark:divide-slate-700">
          {[
            { label: "결제 카드", value: paymentSummary.card },
            { label: "이용 기간", value: paymentSummary.usagePeriod },
            { label: "카드대출 기간", value: paymentSummary.loanPeriod },
            { label: "결제 계좌", value: paymentSummary.account },
            { label: "명세서 발송일", value: `매월 ${paymentSummary.statementDate}` },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center justify-between px-8 py-4">
              <dt className="text-sm text-slate-500 dark:text-slate-400">{label}</dt>
              <dd className="text-sm font-medium text-slate-900 dark:text-slate-100">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* 항목별 청구 금액 */}
      <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
        <div className="border-b border-slate-100 px-8 py-5 dark:border-slate-700">
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">항목별 청구 금액</h2>
        </div>
        <ul className="divide-y divide-slate-100 dark:divide-slate-700">
          {paymentDetails.map((item) => (
            <li key={item.label} className="flex items-center justify-between px-8 py-4">
              <span className="text-sm text-slate-600 dark:text-slate-400">{item.label}</span>
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {fmt(item.amount)}원
              </span>
            </li>
          ))}
          <li className="flex items-center justify-between px-8 py-4">
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">합계</span>
            <span className="text-sm font-bold text-orange-500">
              {fmt(paymentDetails.reduce((s, i) => s + i.amount, 0))}원
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
