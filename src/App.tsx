import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Components from "./pages/Components"
import AiEducation from "./pages/AiEducation"
import FinanceDashboard from "./pages/FinanceDashboard"

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
          <Route path="/finance-dashboard" element={<FinanceDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App