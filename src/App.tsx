import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Components from "./pages/Components"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App