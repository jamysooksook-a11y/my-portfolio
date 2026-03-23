type Props = {
  activeItem: string
  onSelect: (id: string) => void
}

const navGroups = [
  {
    label: "카드",
    items: [
      { id: "card-payment", label: "결제 예정", amount: "3,150,121원" },
      { id: "card-usage", label: "이용 내역", amount: "10건" },
    ],
  },
  {
    label: "대출",
    items: [
      { id: "short-loan", label: "단기카드대출", amount: "3,150,121원" },
      { id: "long-loan", label: "장기카드대출", amount: "0원" },
    ],
  },
  {
    label: "설정",
    items: [
      { id: "account", label: "계좌 관리", amount: null },
      { id: "notification", label: "알림 설정", amount: null },
    ],
  },
]

export default function DashboardSidebar({ activeItem, onSelect }: Props) {
  return (
    <aside className="flex w-60 shrink-0 flex-col bg-slate-900 dark:bg-slate-950">
      <div className="px-6 py-6 border-b border-slate-800">
        <span className="text-lg font-bold text-white tracking-tight">
          KOPO <span className="text-orange-400">Finance</span>
        </span>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {navGroups.map((group) => (
          <div key={group.label} className="mb-5">
            <p className="mb-1 px-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              {group.label}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onSelect(item.id)}
                    className={`w-full rounded-xl px-3 py-2.5 text-left transition ${
                      activeItem === item.id
                        ? "bg-orange-500 text-white"
                        : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
                    }`}
                  >
                    <span className="block text-sm font-medium">{item.label}</span>
                    {item.amount && (
                      <span className={`block text-xs mt-0.5 ${activeItem === item.id ? "text-orange-100" : "text-slate-500"}`}>
                        {item.amount}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
