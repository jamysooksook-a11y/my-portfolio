import { useState } from "react"
import ComponentBlock from "../components/ui/ComponentBlock"
import SegmentedControl from "../components/ui/SegmentedControl"
import ShowcaseCard from "../components/ui/ShowcaseCard"

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
      <p className="text-sm font-medium text-[#A85E2E] dark:text-[#FFB380]">
        {eyebrow}
      </p>
      <h1 className="mt-2 text-4xl font-bold text-slate-900 dark:text-slate-100">
        {title}
      </h1>
      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </div>
  )
}

function PreviewLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
      {children}
    </p>
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
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-800"
        >
          Segmented
        </a>
        <a
          href="#buttons"
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-800"
        >
          Buttons
        </a>
        <a
          href="#cards"
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-800"
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
                    className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-800"
                  >
                    Secondary Button
                  </button>

                  <button
                    type="button"
                    className="rounded-2xl bg-[#F3ECE5] px-5 py-3 text-sm font-medium text-[#8C5730] transition hover:bg-[#EADFD4] dark:bg-slate-800 dark:text-[#FFB380]"
                  >
                    Subtle Button
                  </button>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <button
                    type="button"
                    disabled
                    className="cursor-not-allowed rounded-2xl bg-slate-200 px-5 py-3 text-sm font-medium text-slate-400 dark:bg-slate-800 dark:text-slate-500"
                  >
                    Disabled Button
                  </button>
                </div>
              </div>

              <div>
                <PreviewLabel>Usage Note</PreviewLabel>

                <div className="mt-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700">
                  <ul className="space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
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
          </ComponentBlock>
        </div>
      </div>
    </main>
  )
}