import ProjectCard from "../components/ProjectCard"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-orange-600">Projects</p>
        <h2 className="mt-3 text-4xl font-bold text-slate-900">
          작업한 UI와 재구현 프로젝트
        </h2>
        <p className="mt-4 leading-7 text-slate-600">
          실무 퍼블리싱 경험과 개인 학습 프로젝트를 바탕으로, 구조와 재사용성을
          고려해 화면을 구현한 작업들입니다.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}