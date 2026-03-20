import { Link } from "react-router-dom"
import type { Project } from "../data/projects"

type Props = {
  project: Project
}

function ComponentPreview() {
  return (
    <div className="flex h-full flex-col justify-center gap-4 bg-slate-50 p-5">
      <div className="rounded-2xl bg-slate-200 p-1">
        <div className="grid grid-cols-2 gap-1">
          <div className="rounded-xl bg-white py-2 text-center text-sm font-medium text-slate-900 shadow-sm">
            Off
          </div>
          <div className="py-2 text-center text-sm text-slate-500">
            On
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white"
        >
          Primary
        </button>
        <button
          type="button"
          className="rounded-xl bg-white px-4 py-2 text-sm text-slate-700 shadow-sm"
        >
          Secondary
        </button>
      </div>

      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <p className="text-sm font-semibold text-slate-900">Card UI</p>
        <p className="mt-1 text-xs text-slate-500">
          Reusable component preview
        </p>
      </div>
    </div>
  )
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      to={project.link || "#"}
      className="block rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-400"
    >
      <article className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="aspect-[16/10] overflow-hidden bg-gray-200">
          {project.previewType === "components" ? (
            <ComponentPreview />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition group-hover:scale-105"
            />
          )}
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
    </Link>
  )
}