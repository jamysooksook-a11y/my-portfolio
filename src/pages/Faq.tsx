import { useState } from "react"
import { Link } from "react-router-dom"

const faqs = [
  {
    id: 1,
    question: "회원가입은 어떻게 하나요?",
    answer: "이메일 주소를 입력하고 인증 메일을 확인하면 가입이 완료됩니다. 소셜 로그인(구글, 카카오)으로도 간편하게 가입하실 수 있어요.",
  },
  {
    id: 2,
    question: "비밀번호를 잊었어요.",
    answer: "로그인 화면의 '비밀번호 찾기'를 클릭하고 가입 시 사용한 이메일을 입력하면 재설정 링크가 발송됩니다.",
  },
  {
    id: 3,
    question: "유료 플랜은 어떻게 되나요?",
    answer: "Basic(무료), Pro(월 9,900원), Team(월 29,900원) 세 가지 플랜이 있습니다. Pro 이상부터 무제한 이용 및 우선 고객지원이 제공됩니다.",
  },
  {
    id: 4,
    question: "결제 수단은 무엇을 지원하나요?",
    answer: "신용카드, 체크카드, 카카오페이, 네이버페이를 지원합니다. 법인 고객의 경우 세금계산서 발행도 가능합니다.",
  },
  {
    id: 5,
    question: "탈퇴하면 데이터는 어떻게 되나요?",
    answer: "탈퇴 후 30일간 데이터가 보관되며, 이후 완전히 삭제됩니다. 30일 이내 재가입 시 기존 데이터를 복구할 수 있습니다.",
  },
]

export default function Faq() {
  // 현재 열린 항목의 id를 기억 (null = 아무것도 안 열림)
  const [openId, setOpenId] = useState<number | null>(null)

  function handleClick(id: number) {
    // 이미 열린 항목 클릭 시 닫기, 아니면 열기
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-2xl px-10 py-8 space-y-6">

        {/* 브레드크럼 */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Link to="/" className="hover:text-blue-500 transition">포트폴리오</Link>
          <span>/</span>
          <Link to="/components" className="hover:text-blue-500 transition">Components</Link>
          <span>/</span>
          <span>FAQ</span>
        </div>

        {/* 헤더 */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">자주 묻는 질문</h1>
          <p className="mt-1 text-sm text-slate-400">궁금한 점을 클릭하면 답변을 확인할 수 있어요.</p>
        </div>

        {/* FAQ 목록 */}
        <ul className="divide-y divide-slate-100 dark:divide-slate-700">
          {faqs.map((faq) => (
            <li key={faq.id}>
              {/* 질문 버튼 */}
              <button
                type="button"
                onClick={() => handleClick(faq.id)}
                className="flex w-full items-center justify-between py-5 text-left transition hover:text-blue-500"
              >
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  Q. {faq.question}
                </span>

                {/* 조건부 렌더링 - 열림/닫힘 아이콘 */}
                <span className="ml-4 shrink-0 text-slate-400 text-lg">
                  {openId === faq.id ? "▲" : "▼"}
                </span>
              </button>

              {/* 답변 - openId가 일치할 때만 표시 */}
              {openId === faq.id && (
                <div className="pb-5 text-sm leading-7 text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/40 rounded-xl px-4 py-3">
                  {faq.answer}
                </div>
              )}
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}
