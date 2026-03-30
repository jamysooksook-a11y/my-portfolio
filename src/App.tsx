import { BrowserRouter, Routes, Route } from "react-router-dom" // 라우팅 도구
import { useEffect, useState } from "react"
import Header from "./components/Header"  // 만든 컴포넌트들
import Home from "./pages/Home"
import About from "./pages/About"
import Components from "./pages/Components"
import AiEducation from "./pages/AiEducation"
import NoticeList from "./pages/NoticeList"
import NoticeDetail from "./pages/NoticeDetail"
import Faq from "./pages/Faq"
import TabMenu from "./pages/TabMenu"
import MemberCard from "./pages/MemberCard"
import ContactForm from "./pages/ContactForm"
import FinanceDashboard from "./pages/FinanceDashboard"
import AboutPractice from "./pages/AboutPractice"
// 다크모드 켜짐/꺼짐 기억
function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  )

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/components" element={<Components />} />
          <Route path="/ai-education" element={<AiEducation />} />
          <Route path="/notice" element={<NoticeList />} />
          <Route path="/notice/:id" element={<NoticeDetail />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/tab" element={<TabMenu />} />
          <Route path="/members" element={<MemberCard />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/finance-dashboard" element={<FinanceDashboard />} />
          <Route path="/about-practice" element={<AboutPractice />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App