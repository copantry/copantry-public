import './i18n'
import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import HomePage from './pages/HomePage'
import McpPage from './pages/McpPage'
import PricingPage from './pages/PricingPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

export default function App() {
  return (
    <Suspense fallback={null}>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mcp" element={<McpPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Suspense>
  )
}
