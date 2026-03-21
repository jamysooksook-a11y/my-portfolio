import type { ReactNode } from "react"

type ComponentBlockProps = {
  title: string
  description: string
  children: ReactNode
}

export default function ComponentBlock({
  title,
  description,
  children,
}: ComponentBlockProps) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </h2>
        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>

      <div className="mt-8 rounded-[24px] bg-slate-50 p-6 dark:bg-slate-800">
        {children}
      </div>
    </section>
  )
}