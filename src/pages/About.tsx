export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-bold text-slate-900">
        About Me
      </h1>

      <p className="mt-6 leading-7 text-slate-600">
        사용자 경험을 고려한 UI 구현을 중요하게 생각하는 퍼블리셔입니다.
        구조적인 마크업과 재사용 가능한 컴포넌트를 기반으로
        유지보수에 강한 화면을 만드는 것을 목표로 합니다.
      </p>

      {/* 핵심 키워드 */}
      <div className="mt-10 flex flex-wrap gap-3">
        {["HTML", "SCSS", "JavaScript", "React", "Accessibility"].map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-orange-100 px-4 py-2 text-sm text-orange-700"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* 강점 */}
      <div className="mt-16 space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            구조 중심 퍼블리싱
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            BEM 네이밍과 컴포넌트 단위 구조를 기반으로
            확장성과 유지보수를 고려한 UI를 구현합니다.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            반응형 & 접근성
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            다양한 디바이스 환경과 접근성을 고려하여
            사용자 중심의 인터페이스를 만듭니다.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            협업 경험
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Git 기반 협업과 디자인 시스템을 활용하여
            일관된 UI 품질을 유지합니다.
          </p>
        </div>
      </div>
    </section>
  )
}