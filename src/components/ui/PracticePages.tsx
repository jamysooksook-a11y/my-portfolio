import { Link } from "react-router-dom"

const pages = [
  { to: "/notice", label: "공지사항 목록", desc: "map + 조건부 렌더링 + 동적 라우팅" },
  { to: "/faq", label: "FAQ 아코디언", desc: "useState 열기/닫기" },
  { to: "/tab", label: "탭 메뉴", desc: "useState + filter" },
  { to: "/members", label: "멤버 카드", desc: "props + map" },
  { to: "/contact", label: "폼 입력 UI", desc: "useState + 유효성 검사" },
]

export default function PracticePages() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {pages.map((page) => (
        <Link
          key={page.to}
          to={page.to}
          className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 hover:shadow-md hover:-translate-y-0.5 transition"
        >
          <p className="font-medium text-slate-900 dark:text-slate-100">{page.label}</p>
          <p className="mt-1 text-xs text-slate-400">{page.desc}</p>
        </Link>
      ))}
    </div>
  )
}
