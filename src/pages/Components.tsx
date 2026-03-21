import { useState } from "react"

type Option = {
  label: string
  value: string
}

type SegmentedControlProps = {
  options: Option[]
  value: string
  onChange: (value: string) => void
  disabled?: boolean
}

function SegmentedControl({
  options,
  value,
  onChange,
  disabled = false,
}: SegmentedControlProps) {
  return (
    <div
      className={[
        "inline-flex rounded-2xl bg-slate-200 p-1",
        disabled ? "opacity-50" : "",
      ].join(" ")}
    >
      {options.map((option) => {
        const isActive = value === option.value

        return (
          <button
            key={option.value}
            type="button"
            disabled={disabled}
            onClick={() => onChange(option.value)}
            className={[
              "min-w-[88px] rounded-xl px-4 py-2 text-sm font-medium transition",
              isActive
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500",
              disabled ? "cursor-not-allowed" : "",
            ].join(" ")}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium text-orange-600">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold text-slate-900">{title}</h2>
      <p className="mt-4 leading-7 text-slate-600">{description}</p>
    </div>
  )
}

function ComponentBlock({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="max-w-2xl">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-3 leading-7 text-slate-600">{description}</p>
      </div>

      <div className="mt-8 rounded-2xl bg-slate-50 p-6">{children}</div>
    </section>
  )
}

export default function Components() {
  const [segment2, setSegment2] = useState("off")
  const [segment3, setSegment3] = useState("mid")

  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle
        eyebrow="Design System"
        title="UI Component Archive"
        description="재사용 가능한 UI 컴포넌트를 구조화하고, 상태 변화와 확장성을 고려해 정리한 아카이브입니다."
      />

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#segmented"
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
        >
          Segmented
        </a>
        <a
          href="#buttons"
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
        >
          Buttons
        </a>
        <a
          href="#cards"
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
        >
          Cards
        </a>
      </div>

      <div className="mt-16 space-y-10">
        <div id="segmented">
          <ComponentBlock
            title="Segmented Control"
            description="다중 옵션 중 하나를 선택하는 컴포넌트로, active / inactive / disabled 상태를 고려해 설계했습니다."
          >
            <div className="space-y-8">
              <div>
                <p className="text-sm font-medium text-slate-500">2 Options</p>
                <div className="mt-4">
                  <SegmentedControl
                    options={[
                      { label: "Off", value: "off" },
                      { label: "On", value: "on" },
                    ]}
                    value={segment2}
                    onChange={setSegment2}
                  />
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500">3 Options</p>
                <div className="mt-4">
                  <SegmentedControl
                    options={[
                      { label: "Off", value: "off" },
                      { label: "Mid", value: "mid" },
                      { label: "On", value: "on" },
                    ]}
                    value={segment3}
                    onChange={setSegment3}
                  />
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500">Disabled</p>
                <div className="mt-4">
                  <SegmentedControl
                    options={[
                      { label: "Off", value: "off" },
                      { label: "On", value: "on" },
                    ]}
                    value="off"
                    onChange={() => {}}
                    disabled
                  />
                </div>
              </div>
            </div>
          </ComponentBlock>
        </div>

        <div id="buttons">
          <ComponentBlock
            title="Buttons"
            description="우선순위에 따라 primary / secondary 버튼을 구분하고, 기본적인 액션 영역을 정리했습니다."
          >
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white"
              >
                Primary Button
              </button>

              <button
                type="button"
                className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
              >
                Secondary Button
              </button>

              <button
                type="button"
                disabled
                className="cursor-not-allowed rounded-xl bg-slate-200 px-5 py-3 text-sm font-medium text-slate-400"
              >
                Disabled Button
              </button>
            </div>
          </ComponentBlock>
        </div>

        <div id="cards">
          <ComponentBlock
            title="Card"
            description="정보를 그룹화해서 전달하는 카드 컴포넌트입니다. 제목, 설명, 상태값 조합을 기준으로 반복 사용을 고려했습니다."
          >
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-sm font-medium text-orange-600">Featured</p>
                <h4 className="mt-2 text-lg font-semibold text-slate-900">
                  Finance Dashboard
                </h4>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  자산 정보와 카드 UI를 중심으로 구성한 대시보드형 카드 예시입니다.
                </p>
              </article>

              <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-sm font-medium text-orange-600">Component</p>
                <h4 className="mt-2 text-lg font-semibold text-slate-900">
                  Recommendation Card
                </h4>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  추천 리스트와 카드 반복 구조에 적합한 정보형 컴포넌트입니다.
                </p>
              </article>

              <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-sm font-medium text-orange-600">Preview</p>
                <h4 className="mt-2 text-lg font-semibold text-slate-900">
                  Summary Card
                </h4>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  요약 정보와 상태 텍스트를 함께 보여주는 카드 레이아웃입니다.
                </p>
              </article>
            </div>
          </ComponentBlock>
        </div>
      </div>
    </main>
  )
}