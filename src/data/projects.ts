export type Project = {
  id: number
  title: string
  subtitle: string
  description: string
  image?: string
  skills: string[]
  previewType?: "image" | "components"
  link?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "금융 대시보드 UI",
    subtitle: "Responsive Web",
    description: "카드형 UI와 자산 정보를 보여주는 금융 서비스 화면 퍼블리싱",
    image: "/images/finance-dashboard-main.png",
    skills: ["HTML", "SCSS", "JavaScript"],
    previewType: "image",
    link: "/finance-dashboard",
  },
  {
    id: 2,
    title: "AI 교육 서비스",
    subtitle: "Vue.js UI Project",
    description:
      "Vue3와 TypeScript 기반으로 수행한 교육 서비스 프로젝트입니다. 카드형 UI와 메인 화면 구조를 중심으로 구현했습니다.",
    image: "/images/ai-education-main.png",
    skills: ["Vue3", "TypeScript", "Tailwind"],
    previewType: "image",
    link: "/ai-education",
  },
  {
    id: 3,
    title: "UI 컴포넌트 아카이브",
    subtitle: "Design System",
    description: "재사용 가능한 UI 컴포넌트를 설계하고 구현한 프로젝트",
    skills: ["UI", "Component", "Accessibility"],
    previewType: "components",
    link: "/components",
  },
]