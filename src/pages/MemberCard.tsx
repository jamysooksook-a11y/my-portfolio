import { Link } from "react-router-dom"

// 타입 정의 - 이 컴포넌트가 받을 props 목록
type MemberProps = {
  name: string
  role: string
  team: string
  rating: number   // 1~5
  image: string
}

// ① 카드 컴포넌트 - props를 받아서 화면을 그려요
function MemberCard({ name, role, team, rating, image }: MemberProps) {
  return (
    <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col items-center gap-3 shadow-sm">

      {/* 프로필 이미지 */}
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full object-cover bg-slate-100"
      />

      {/* 이름 + 역할 */}
      <div className="text-center">
        <p className="font-bold text-slate-900 dark:text-slate-100">{name}</p>
        <p className="text-sm text-slate-500 mt-0.5">{role}</p>
      </div>

      {/* 팀 뱃지 */}
      <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs text-slate-600 dark:text-slate-400">
        {team}
      </span>

      {/* ② 조건부 렌더링 - rating 숫자만큼 별 채우기 */}
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? "text-yellow-400" : "text-slate-200 dark:text-slate-700"}
          >
            ★
          </span>
        ))}
      </div>

    </div>
  )
}

// 데이터 배열
const members = [
  {
    id: 1,
    name: "김민준",
    role: "UI Designer",
    team: "디자인팀",
    rating: 4,
    image: "https://api.dicebear.com/7.x/thumbs/svg?seed=minjun",
  },
  {
    id: 2,
    name: "이서연",
    role: "Frontend Dev",
    team: "개발팀",
    rating: 5,
    image: "https://api.dicebear.com/7.x/thumbs/svg?seed=seoyeon",
  },
  {
    id: 3,
    name: "박지호",
    role: "Product Manager",
    team: "기획팀",
    rating: 3,
    image: "https://api.dicebear.com/7.x/thumbs/svg?seed=jiho",
  },
  {
    id: 4,
    name: "최유진",
    role: "Backend Dev",
    team: "개발팀",
    rating: 5,
    image: "https://api.dicebear.com/7.x/thumbs/svg?seed=yujin",
  },
  {
    id: 5,
    name: "정다은",
    role: "UX Researcher",
    team: "디자인팀",
    rating: 4,
    image: "https://api.dicebear.com/7.x/thumbs/svg?seed=daeun",
  },
  {
    id: 6,
    name: "한승우",
    role: "DevOps",
    team: "인프라팀",
    rating: 4,
    image: "https://api.dicebear.com/7.x/thumbs/svg?seed=seungwoo",
  },
]

export default function MemberCardPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-4xl px-10 py-8 space-y-6">

        {/* 브레드크럼 */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Link to="/" className="hover:text-blue-500 transition">포트폴리오</Link>
          <span>/</span>
          <Link to="/components" className="hover:text-blue-500 transition">Components</Link>
          <span>/</span>
          <span>멤버 카드</span>
        </div>

        {/* 헤더 */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">팀 멤버</h1>
          <p className="mt-1 text-sm text-slate-400">총 {members.length}명</p>
        </div>

        {/* ③ map으로 MemberCard 컴포넌트 반복 출력 */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {members.map((member) => (
            <MemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              team={member.team}
              rating={member.rating}
              image={member.image}
            />
          ))}
        </div>

      </div>
    </div>
  )
}
