import { Link } from "react-router-dom"

// 데이터 배열 - content 추가
export const notices = [
  {
    id: 1,
    title: "서비스 점검 안내",
    date: "2026.03.25",
    isNew: true,
    isImportant: false,
    content: `안녕하세요.\n\n서비스 안정화를 위한 정기 점검을 아래와 같이 진행합니다.\n\n■ 점검 일시: 2026년 3월 28일(토) 02:00 ~ 06:00\n■ 점검 내용: 서버 인프라 업그레이드 및 보안 패치\n\n점검 시간 동안 서비스 이용이 불가합니다.\n이용에 불편을 드려 죄송합니다.`,
  },
  {
    id: 2,
    title: "개인정보처리방침 개정",
    date: "2026.03.20",
    isNew: false,
    isImportant: true,
    content: `개인정보처리방침이 아래와 같이 개정됩니다.\n\n■ 시행일: 2026년 4월 1일\n■ 주요 변경 사항\n  - 개인정보 보유 기간 명확화\n  - 제3자 제공 항목 업데이트\n  - 마케팅 수신 동의 항목 추가\n\n자세한 내용은 개인정보처리방침 전문을 확인해 주세요.`,
  },
  {
    id: 3,
    title: "이용약관 변경 안내",
    date: "2026.03.15",
    isNew: false,
    isImportant: false,
    content: `이용약관 일부 조항이 변경됩니다.\n\n■ 시행일: 2026년 3월 30일\n■ 변경 조항: 제5조(서비스 이용), 제12조(금지행위)\n\n변경된 약관에 동의하지 않을 경우 서비스 탈퇴가 가능합니다.\n시행일 이후 서비스를 계속 이용하시면 변경 약관에 동의한 것으로 간주합니다.`,
  },
  {
    id: 4,
    title: "1분기 업데이트 노트",
    date: "2026.03.10",
    isNew: false,
    isImportant: false,
    content: `2026년 1분기 주요 업데이트 내용을 안내드립니다.\n\n■ 신규 기능\n  - 다크모드 지원\n  - 알림 설정 세분화\n  - 검색 필터 개선\n\n■ 개선 사항\n  - 로딩 속도 30% 향상\n  - 모바일 UI 최적화\n\n■ 버그 수정\n  - 특정 환경에서 로그인 오류 수정\n  - 이미지 업로드 실패 문제 해결`,
  },
  {
    id: 5,
    title: "회원 혜택 개편 안내",
    date: "2026.03.05",
    isNew: false,
    isImportant: true,
    content: `회원 등급 및 혜택 제도가 새롭게 개편됩니다.\n\n■ 시행일: 2026년 4월 1일\n■ 변경 내용\n  - 기존 3단계 → 5단계 등급제 전환\n  - 포인트 적립률 최대 2배 상향\n  - 월간 무료 이용권 추가 지급\n\n기존 회원은 자동으로 새로운 등급으로 전환됩니다.\n전환 기준은 최근 6개월 이용 내역을 기준으로 합니다.`,
  },
]

export default function NoticeList() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-2xl px-10 py-8 space-y-6">

        {/* 브레드크럼 */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Link to="/" className="hover:text-blue-500 transition">포트폴리오</Link>
          <span>/</span>
          <span>공지사항</span>
        </div>

        {/* 헤더 */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">공지사항</h1>
          <p className="mt-1 text-sm text-slate-400">총 {notices.length}건</p>
        </div>

        {/* map으로 목록 출력 */}
        <ul className="divide-y divide-slate-100 dark:divide-slate-700">
          {notices.map((notice) => (
            // Link로 감싸서 클릭 시 상세 페이지로 이동
            <li key={notice.id}>
              <Link
                to={`/notice/${notice.id}`}
                className="flex items-center justify-between py-4 hover:bg-slate-50 dark:hover:bg-slate-800/40 px-2 rounded-lg transition"
              >
                {/* 왼쪽: 뱃지 + 제목 */}
                <div className="flex items-center gap-2">
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
                  <span className="text-sm text-slate-800 dark:text-slate-200">
                    {notice.title}
                  </span>
                </div>

                {/* 오른쪽: 날짜 */}
                <span className="shrink-0 text-xs text-slate-400 ml-4">
                  {notice.date}
                </span>
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}
