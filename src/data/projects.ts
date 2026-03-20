export type Project = {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  period: string 
   summary: string[]
  skills: string[]
  previewType?: "image" | "components"

}
export const projects: Project[] = [
  {
    id: 1,     
    title: "금융 대시보드 UI",
    subtitle: "Responsive Web",
    description: "카드형 UI와 자산 정보를 보여주는 금융 서비스 화면 퍼블리싱",
    image: "/images/finance-dashboard-main.png",
    skills: ["HTML", "SCSS", "JavaScript"],
    period: "2025",
    summary: [
      "대시보드형 금융 UI를 퍼블리싱했습니다.",
      "카드형 정보 구조와 리스트 UI를 정리했습니다.",
      "반응형 레이아웃과 재사용 가능한 스타일 구조를 고려했습니다.",
    ],
     previewType: "image",
  },
 {
    id: 2,
    title: "AI 교육 서비스",
    subtitle: "React UI Rebuild",
    description: "교육 서비스 메인 화면을 React 컴포넌트 구조로 재구현",
    image: "/images/ai-education-main.png",
    skills: ["React", "TypeScript", "Tailwind"],
    period: "2026",
    summary: [
      "기존 UI 구조를 React 컴포넌트 기준으로 재정리했습니다.",
      "섹션 단위로 Hero, Projects, Skills 형태를 분리했습니다.",
      "포트폴리오용 재구현 프로젝트로 확장했습니다.",
    ],
     previewType: "image",
  },
 {
    id: 3,
    title: "UI 컴포넌트 아카이브",
    subtitle: "Design System",
    description: "카드, 탭, 리스트 등 재사용 가능한 UI 컴포넌트 제작",
    image: "/images/ui-archive-main.png",
    skills: ["UI", "Component", "Accessibility"],
    period: "2025-2026",
    summary: [
      "기존 UI 구조를 React 컴포넌트 기준으로 재정리했습니다.",
      "섹션 단위로 Hero, Projects, Skills 형태를 분리했습니다.",
      "포트폴리오용 재구현 프로젝트로 확장했습니다.",
    ],
        previewType: "components",
  },
]