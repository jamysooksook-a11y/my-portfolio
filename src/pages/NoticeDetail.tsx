import { useParams, Link } from "react-router-dom"
import { notices } from "./NoticeList"

export default function NoticeDetail() {
  // URL에서 id 꺼내기 (/notice/1 → id = "1")
  const { id } = useParams()

  // 숫자로 변환해서 데이터 찾기
  const notice = notices.find((n) => n.id === Number(id))

  // 없는 id로 접근했을 때
  if (!notice) {
    return (
      <div className="mx-auto max-w-2xl px-10 py-16 text-center">
        <p className="text-slate-400">존재하지 않는 공지사항입니다.</p>
        <Link to="/notice" className="mt-4 inline-block text-sm text-blue-500 hover:underline">
          목록으로 돌아가기
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-2xl px-10 py-8 space-y-6">

        {/* 브레드크럼 */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Link to="/" className="hover:text-blue-500 transition">포트폴리오</Link>
          <span>/</span>
          <Link to="/notice" className="hover:text-blue-500 transition">공지사항</Link>
          <span>/</span>
          <span>{notice.title}</span>
        </div>

        {/* 제목 영역 */}
        <div className="border-b border-slate-100 dark:border-slate-700 pb-6">
          <div className="flex items-center gap-2 mb-3">
            {notice.isNew && (
              <span className="rounded-full bg-blue-500 px-2 py-0.5 text-[10px] font-bold text-white">
                NEW
              </span>
            )}
            {notice.isImportant && (
              <span className="rounded-full bg-red-100 dark:bg-red-900/30 px-2 py-0.5 text-[10px] font-bold text-red-500">
                중요
              </span>
            )}
          </div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            {notice.title}
          </h1>
          <p className="mt-2 text-sm text-slate-400">{notice.date}</p>
        </div>

        {/* 본문 */}
        <div className="text-sm leading-7 text-slate-700 dark:text-slate-300 whitespace-pre-line">
          {notice.content}
        </div>

        {/* 목록으로 */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-700">
          <Link
            to="/notice"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition"
          >
            ← 목록으로
          </Link>
        </div>

      </div>
    </div>
  )
}
