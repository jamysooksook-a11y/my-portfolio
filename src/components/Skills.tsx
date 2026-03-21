export default function Skills() {
  const skills = [
    "HTML",
    "SCSS",
    "JavaScript",
    "Vue",
    "React",
    "TypeScript",
    "Git",
    "Responsive Web",
    "Accessibility",
  ]

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">

      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
        Skills
      </h2>

      <p className="mt-4 text-slate-600 dark:text-slate-300">
        퍼블리싱 경험을 기반으로 React와 TypeScript를 활용한
        컴포넌트 기반 UI 개발을 확장하고 있습니다.
      </p>

      <ul className="mt-8 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="
              rounded-full 
              bg-gray-100 text-slate-700
              px-4 py-2 text-sm font-medium transition

              hover:bg-orange-100

              dark:bg-slate-800 
              dark:text-slate-200 
              dark:hover:bg-slate-700
            "
          >
            {skill}
          </li>
        ))}
      </ul>

    </section>
  )
}