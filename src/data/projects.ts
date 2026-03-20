export type Project = {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  skills: string[]
}
export const projects: Project[] = [
  {
    id: 1,
    title: "금융 대시보드 UI",
    subtitle: "Responsive Web",
    description: "카드형 UI와 자산 정보를 보여주는 금융 서비스 화면 퍼블리싱",
    image: "/images/project1.png",
    skills: ["HTML", "SCSS", "JavaScript"],
  },
  {
    id: 2,
    title: "AI 교육 서비스",
    subtitle: "React UI Rebuild",
    description: "교육 서비스 메인 화면을 React 컴포넌트 구조로 재구현",
    image: "/images/project2.png",
    skills: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: 3,
    title: "UI 컴포넌트 아카이브",
    subtitle: "Design System",
    description: "카드, 탭, 리스트 등 재사용 가능한 UI 컴포넌트 제작",
    image: "/images/project3.png",
    skills: ["UI", "Component", "Accessibility"],
  },
]