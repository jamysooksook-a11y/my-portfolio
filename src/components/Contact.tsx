export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-3xl font-bold text-slate-900">Contact</h2>

      <p className="mt-4 max-w-2xl leading-7 text-slate-600">
        작업 제안이나 협업, 포트폴리오에 대한 문의가 있으시면 아래 채널로 연락해 주세요.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <a
          href="mailto:tocovet@naver.com"
          className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md"
        >
          <p className="text-sm font-medium text-orange-600">Email</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">
            tocovet@naver.com
          </p>
        </a>

        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md"
        >
          <p className="text-sm font-medium text-orange-600">GitHub</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">
            github.com/your-github
          </p>
        </a>
      </div>
    </section>
  )
}