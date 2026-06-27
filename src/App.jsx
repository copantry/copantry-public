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
import {
  LOCALES,
  REDUCE_WASTE,
  UI,
  pick,
  localizePath,
} from "./content/localized";
import { localizedPage } from "./content/pagesLocalized";
import {
  localizedPostMeta,
  localizedPostBlocks,
} from "./content/blogLocalized";
import BlogPostLayout from "./pages/blog/BlogPostLayout";
import BlogBody from "./pages/blog/BlogBody";

// Blog bodies are a JSX-free block model (content/blogLocalized.js) rendered by
// BlogBody; one generic component serves every post in every locale.
function BlogPost() {
  const { slug } = useParams();
  const lng = useLang();
  const post = localizedPostMeta(slug, lng);
  if (!post) return <Navigate to={localizePath("/blog", lng)} replace />;
  return (
    <BlogPostLayout post={post}>
      <BlogBody blocks={localizedPostBlocks(slug, lng)} />
    </BlogPostLayout>
  );
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

// Localized /features/:slug and /use-cases/:slug — resolve the translated page
// object by slug + URL locale (falls back to the localized home if unknown).
function LocalizedFeature() {
  const { slug } = useParams();
  const lng = useLang();
  const page = localizedPage(slug, lng);
  if (!page) return <Navigate to={`/${lng}`} replace />;
  return (
    <ContentPage
      page={page}
      sectionLabel={(UI[lng] || UI.en).breadcrumbFeatures}
    />
  );
}

function LocalizedUseCase() {
  const { slug } = useParams();
  const lng = useLang();
  const page = localizedPage(slug, lng);
  if (!page) return <Navigate to={`/${lng}`} replace />;
  return (
    <ContentPage
      page={page}
      sectionLabel={(UI[lng] || UI.en).breadcrumbUseCases}
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
                key={`${lng}-why`}
                path={`/${lng}/why-copantry`}
                element={<WhyCopantryPage />}
              />,
              <Route
                key={`${lng}-rfw`}
                path={`/${lng}/features/reduce-food-waste`}
                element={<LocalizedReduceWaste />}
              />,
              <Route
                key={`${lng}-feat`}
                path={`/${lng}/features/:slug`}
                element={<LocalizedFeature />}
              />,
              <Route
                key={`${lng}-uc`}
                path={`/${lng}/use-cases/:slug`}
                element={<LocalizedUseCase />}
              />,
              <Route
                key={`${lng}-learn`}
                path={`/${lng}/learn`}
                element={<LearnIndexPage />}
              />,
              <Route
                key={`${lng}-learn-slug`}
                path={`/${lng}/learn/:slug`}
                element={<LearnShelfLifePage />}
              />,
              <Route
                key={`${lng}-blog`}
                path={`/${lng}/blog`}
                element={<BlogIndexPage />}
              />,
              <Route
                key={`${lng}-blog-slug`}
                path={`/${lng}/blog/:slug`}
                element={<BlogPost />}
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
