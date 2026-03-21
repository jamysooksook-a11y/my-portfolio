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
        "inline-flex rounded-2xl bg-[#E7E1DA] p-1",
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
      <p className="text-sm font-medium text-[#A85E2E]">{eyebrow}</p>
      <h1 className="mt-2 text-4xl font-bold text-slate-900">{title}</h1>
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
    <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
        <p className="mt-3 leading-7 text-slate-600">{description}</p>
      </div>

      <div className="mt-8 rounded-[24px] bg-slate-50 p-6">{children}</div>
    </section>
  )
}

function PreviewLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium text-slate-500">{children}</p>
  )
}

function ShowcaseCard({
  badge,
  title,
  description,
}: {
  badge: string
  title: string
  description: string
}) {
  return (
    <article className="rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md">
      <p className="text-sm font-medium text-[#A85E2E]">{badge}</p>
      <h3 className="mt-2 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </article>
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
                <PreviewLabel>2 Options</PreviewLabel>
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
                <PreviewLabel>3 Options</PreviewLabel>
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
                <PreviewLabel>Disabled</PreviewLabel>
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
            description="버튼 우선순위와 상태에 따라 primary / secondary / subtle 스타일을 정리했습니다."
          >
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <PreviewLabel>Variants</PreviewLabel>

                <div className="mt-4 flex flex-wrap gap-4">
                  <button
                    type="button"
                    className="rounded-2xl bg-[#A85E2E] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:brightness-95"
                  >
                    Primary Button
                  </button>

                  <button
                    type="button"
                    className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50"
                  >
                    Secondary Button
                  </button>

                  <button
                    type="button"
                    className="rounded-2xl bg-[#F3ECE5] px-5 py-3 text-sm font-medium text-[#8C5730] transition hover:bg-[#EADFD4]"
                  >
                    Subtle Button
                  </button>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <button
                    type="button"
                    disabled
                    className="cursor-not-allowed rounded-2xl bg-slate-200 px-5 py-3 text-sm font-medium text-slate-400"
                  >
                    Disabled Button
                  </button>
                </div>
              </div>

              <div>
                <PreviewLabel>Usage Note</PreviewLabel>

                <div className="mt-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                  <ul className="space-y-3 text-sm leading-6 text-slate-600">
                    <li>• Primary 버튼은 핵심 CTA에 사용합니다.</li>
                    <li>• Secondary 버튼은 보조 액션에 사용합니다.</li>
                    <li>• Subtle 버튼은 카드 내부 액션에 적합합니다.</li>
                    <li>• Disabled 상태도 함께 설계해 일관성을 유지합니다.</li>
                  </ul>
                </div>
              </div>
            </div>
          </ComponentBlock>
        </div>

        <div id="cards">
          <ComponentBlock
            title="Cards"
            description="정보를 묶어 전달하는 카드 컴포넌트입니다. 제목, 설명, 강조 라벨을 기준으로 반복 사용을 고려해 구성했습니다."
          >
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <ShowcaseCard
                badge="Featured"
                title="Finance Dashboard"
                description="자산 요약과 카드형 UI를 중심으로 구성한 대시보드형 카드 예시입니다."
              />

              <ShowcaseCard
                badge="Component"
                title="Recommendation Card"
                description="리스트 반복 구조에서 사용하기 좋은 추천형 카드 컴포넌트입니다."
              />

              <ShowcaseCard
                badge="Summary"
                title="Status Card"
                description="상태 텍스트와 핵심 정보를 조합해 요약 전달에 적합한 카드입니다."
              />
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <p className="text-sm font-medium text-[#A85E2E]">Preview Layout</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  Component Showcase Card
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
                  카드 내부에 텍스트 계층과 상태 라벨을 정리하여, 정보 우선순위가
                  자연스럽게 드러나도록 설계했습니다.
                </p>

                <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Category</p>
                      <p className="mt-1 text-lg font-semibold text-slate-900">
                        UI Archive
                      </p>
                    </div>

                    <span className="rounded-full bg-[#F3ECE5] px-3 py-1 text-xs font-medium text-[#8C5730]">
                      Active
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    재사용 가능한 UI 요소를 정리해 컴포넌트 아카이브 페이지에서
                    반복 활용할 수 있는 카드 예시입니다.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Card", "Tag", "Status"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white px-3 py-1 text-xs text-slate-600 ring-1 ring-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-[24px] bg-[#F6F1EB] p-6">
                <p className="text-sm font-medium text-[#A85E2E]">Design Point</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                  <li>• 둥근 radius로 부드러운 카드 인상</li>
                  <li>• badge / title / description 계층화</li>
                  <li>• 태그와 상태값 조합으로 확장성 확보</li>
                </ul>
              </div>
            </div>
          </ComponentBlock>
        </div>
      </div>
    </main>
  )
}