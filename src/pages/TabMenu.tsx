import { useState } from "react"
import { Link } from "react-router-dom"

const tabs = ["전체", "공지", "이벤트", "업데이트"]

const posts = [
  { id: 1, tab: "공지", title: "서비스 점검 안내", date: "2026.03.25" },
  { id: 2, tab: "이벤트", title: "봄맞이 할인 이벤트", date: "2026.03.22" },
  { id: 3, tab: "업데이트", title: "1분기 업데이트 노트", date: "2026.03.20" },
  { id: 4, tab: "공지", title: "개인정보처리방침 개정", date: "2026.03.18" },
  { id: 5, tab: "이벤트", title: "친구 초대 이벤트 종료 안내", date: "2026.03.15" },
  { id: 6, tab: "업데이트", title: "다크모드 기능 추가", date: "2026.03.10" },
  { id: 7, tab: "공지", title: "이용약관 변경 안내", date: "2026.03.05" },
]

export default function TabMenu() {
  // 현재 선택된 탭 기억
  const [activeTab, setActiveTab] = useState("전체")

  // activeTab에 맞게 posts 필터링
  const filtered = activeTab === "전체"
    ? posts
    : posts.filter((post) => post.tab === activeTab)

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-2xl px-10 py-8 space-y-6">

        {/* 브레드크럼 */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Link to="/" className="hover:text-blue-500 transition">포트폴리오</Link>
          <span>/</span>
          <span>탭 메뉴</span>
        </div>

        {/* 헤더 */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">소식</h1>
          <p className="mt-1 text-sm text-slate-400">탭을 선택해 원하는 항목을 확인하세요.</p>
        </div>

        {/* 탭 버튼 */}
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={[
                "rounded-full px-4 py-2 text-sm font-medium transition",
                activeTab === tab
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700",
              ].join(" ")}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 목록 - 필터링된 posts를 map으로 출력 */}
        <ul className="divide-y divide-slate-100 dark:divide-slate-700">
          {filtered.map((post) => (
            <li
              key={post.id}
              className="flex items-center justify-between py-4 px-2"
            >
              <div className="flex items-center gap-3">
                {/* 탭 뱃지 - 전체 탭일 때만 표시 */}
                {activeTab === "전체" && (
                  <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[10px] text-slate-500">
                    {post.tab}
                  </span>
                )}
                <span className="text-sm text-slate-800 dark:text-slate-200">
                  {post.title}
                </span>
              </div>
              <span className="shrink-0 text-xs text-slate-400 ml-4">
                {post.date}
              </span>
            </li>
          ))}
        </ul>

        {/* 결과 없을 때 */}
        {filtered.length === 0 && (
          <p className="py-10 text-center text-sm text-slate-400">
            등록된 게시물이 없습니다.
          </p>
        )}

      </div>
    </div>
  )
}
