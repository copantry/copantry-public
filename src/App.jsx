import './i18n'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import ContactModal from './components/ContactModal'
import HomePage from './pages/HomePage'
import McpPage from './pages/McpPage'
import PricingPage from './pages/PricingPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

export default function App() {
  const [modal, setModal] = useState(null) // null | 'contact' | 'investors'

  return (
    <Suspense fallback={null}>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onContact={setModal} />} />
            <Route path="/mcp" element={<McpPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer onContact={setModal} />
        <CookieBanner />
        {modal && <ContactModal type={modal} onClose={() => setModal(null)} />}
      </div>
    </Suspense>
  )
}
