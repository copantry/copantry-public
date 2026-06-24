import "./i18n";
import { useState, Suspense } from "react";
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Seo from "./seo/Seo";
import LocaleSync from "./i18n/LocaleSync";
import { useLang } from "./i18n/useLang";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import ContactModal from "./components/ContactModal";

import HomePage from "./pages/HomePage";
import HowItWorksPage from "./pages/HowItWorksPage";
import WhyCopantryPage from "./pages/WhyCopantryPage";
import ContentPage from "./pages/ContentPage";
import McpPage from "./pages/McpPage";
import BlogIndexPage from "./pages/BlogIndexPage";
import LearnIndexPage from "./pages/LearnIndexPage";
import LearnShelfLifePage from "./pages/LearnShelfLifePage";
import AboutPage from "./pages/AboutPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import ForBusinessPage from "./pages/ForBusinessPage";
import AdvertisingPolicyPage from "./pages/AdvertisingPolicyPage";
import AdvertiserTermsPage from "./pages/AdvertiserTermsPage";
import { FEATURES, USE_CASES } from "./content/pages";
import { LOCALES, REDUCE_WASTE, UI, pick } from "./content/localized";

// Blog post bodies live as components; mapped to slugs here (blog.js stays JSX-free
// so the Node prerender can import its metadata).
import CookWithWhatYouHave from "./pages/blog/CookWithWhatYouHave";
import FoodWasteStatistics from "./pages/blog/FoodWasteStatistics";
import UseItUpMethod from "./pages/blog/UseItUpMethod";

const BLOG_COMPONENTS = {
  "what-can-i-cook-with-what-i-have": CookWithWhatYouHave,
  "food-waste-statistics-uk": FoodWasteStatistics,
  "use-it-up-method": UseItUpMethod,
};

function BlogPost() {
  const { slug } = useParams();
  const Component = BLOG_COMPONENTS[slug];
  return Component ? <Component /> : <Navigate to="/blog" replace />;
}

// Localized food-waste pillar: feed ContentPage the localized content object.
function LocalizedReduceWaste() {
  const lng = useLang();
  return (
    <ContentPage
      page={pick(REDUCE_WASTE, lng)}
      sectionLabel={(UI[lng] || UI.en).breadcrumbFeatures}
    />
  );
}

export default function App() {
  const [modal, setModal] = useState(null); // null | 'contact' | 'investors'

  return (
    <Suspense fallback={null}>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <LocaleSync />
        <Seo />
        <NavBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/why-copantry" element={<WhyCopantryPage />} />

            {/* MCP / AI assistant — explicit routes before the :slug catch-all */}
            <Route path="/features/ai-assistant-mcp" element={<McpPage />} />
            <Route path="/mcp" element={<McpPage />} />
            <Route
              path="/features/:slug"
              element={
                <ContentPage
                  registry={FEATURES}
                  basePath="/features"
                  sectionLabel="Features"
                />
              }
            />
            <Route
              path="/use-cases/:slug"
              element={
                <ContentPage
                  registry={USE_CASES}
                  basePath="/use-cases"
                  sectionLabel="Use cases"
                />
              }
            />

            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/learn" element={<LearnIndexPage />} />
            <Route path="/learn/:slug" element={<LearnShelfLifePage />} />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/business" element={<ForBusinessPage />} />
            <Route path="/advertise" element={<ForBusinessPage />} />
            <Route
              path="/advertising-policy"
              element={<AdvertisingPolicyPage />}
            />
            <Route path="/advertiser-terms" element={<AdvertiserTermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />

            {/* Localized routes (fr/it/es/pt) for the core pages. Components read
                their language from the URL prefix via useLang(). */}
            {LOCALES.flatMap((lng) => [
              <Route key={lng} path={`/${lng}`} element={<HomePage />} />,
              <Route
                key={`${lng}-how`}
                path={`/${lng}/how-it-works`}
                element={<HowItWorksPage />}
              />,
              <Route
                key={`${lng}-rfw`}
                path={`/${lng}/features/reduce-food-waste`}
                element={<LocalizedReduceWaste />}
              />,
            ])}

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer onContact={setModal} />
        <CookieBanner />
        {modal && <ContactModal type={modal} onClose={() => setModal(null)} />}
      </div>
    </Suspense>
  );
}
