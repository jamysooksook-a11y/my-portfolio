import type { Project } from "../data/projects"

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="aspect-[16/10] overflow-hidden bg-gray-200">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
      </div>

      <div className="p-6">

        <p className="text-sm font-medium text-orange-600">
          {project.subtitle}
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          {project.title}
        </h3>

        <p className="mt-3 text-sm text-slate-600">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </article>
  )
}