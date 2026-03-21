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

export default function SegmentedControl({
  options,
  value,
  onChange,
  disabled = false,
}: SegmentedControlProps) {
  return (
    <div
      className={[
        "inline-flex rounded-2xl bg-[#E7E1DA] p-1 dark:bg-slate-800",
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
                ? "bg-white text-slate-900 shadow-sm dark:bg-slate-100 dark:text-slate-900"
                : "text-slate-500 dark:text-slate-300",
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