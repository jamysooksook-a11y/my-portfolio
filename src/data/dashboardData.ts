export type Transaction = {
  id: number
  date: string
  description: string
  category: string
  card: string
  amount: number
}

export type MonthlyBalance = {
  month: string
  amount: number
}

export type PaymentDetail = {
  label: string
  amount: number
}

export const cardOptions = [
  "KOPO 카드 [0001]",
  "KOPO 카드 [0002]",
  "KOPO 골드 카드 [0003]",
]

export const paymentSummary = {
  amount: 3150121,
  dueDate: "2025년 9월 9일 (월)",
  card: "KOPO 카드 [0001]",
  usagePeriod: "2025.09.01 ~ 09.30",
  loanPeriod: "2025.09.01 ~ 09.30",
  account: "하나은행 123456****12",
  statementDate: "12일",
}

export const paymentDetails: PaymentDetail[] = [
  { label: "일시불", amount: 890000 },
  { label: "할부", amount: 1240000 },
  { label: "카드대출", amount: 680000 },
  { label: "해외이용", amount: 340121 },
]

export const monthlyBalances: MonthlyBalance[] = [
  { month: "4월", amount: 4200000 },
  { month: "5월", amount: 3800000 },
  { month: "6월", amount: 5100000 },
  { month: "7월", amount: 2900000 },
  { month: "8월", amount: 4600000 },
  { month: "9월", amount: 3150121 },
]

export const transactions: Transaction[] = [
  { id: 1, date: "09.30", description: "스타벅스 강남점", category: "카페", card: "KOPO 카드 [0001]", amount: 6500 },
  { id: 2, date: "09.28", description: "쿠팡", category: "쇼핑", card: "KOPO 카드 [0002]", amount: 45900 },
  { id: 3, date: "09.25", description: "GS25 역삼점", category: "편의점", card: "KOPO 카드 [0001]", amount: 3200 },
  { id: 4, date: "09.22", description: "CGV 강남", category: "문화", card: "KOPO 골드 카드 [0003]", amount: 15000 },
  { id: 5, date: "09.20", description: "카카오T 택시", category: "교통", card: "KOPO 카드 [0001]", amount: 8700 },
  { id: 6, date: "09.18", description: "이마트 역삼점", category: "마트", card: "KOPO 카드 [0002]", amount: 67300 },
  { id: 7, date: "09.15", description: "Netflix", category: "구독", card: "KOPO 골드 카드 [0003]", amount: 17000 },
  { id: 8, date: "09.12", description: "올리브영 강남점", category: "뷰티", card: "KOPO 카드 [0001]", amount: 23400 },
  { id: 9, date: "09.10", description: "배달의민족", category: "음식", card: "KOPO 카드 [0002]", amount: 31200 },
  { id: 10, date: "09.07", description: "교보문고", category: "도서", card: "KOPO 카드 [0001]", amount: 18900 },
]
