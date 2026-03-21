type ShowcaseCardProps = {
  badge: string
  title: string
  description: string
}

export default function ShowcaseCard({
  badge,
  title,
  description,
}: ShowcaseCardProps) {
  return (
    <article className="rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md dark:bg-slate-900 dark:ring-slate-800">
      <p className="text-sm font-medium text-[#A85E2E] dark:text-[#FFB380]">
        {badge}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </article>
  )
}