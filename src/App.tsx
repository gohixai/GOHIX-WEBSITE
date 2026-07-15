import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoadingSkeleton from "./components/LoadingSkeleton";

// Lazy loaded sections for performance
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const VisionMission = lazy(() => import("./components/VisionMission"));
const CoreValues = lazy(() => import("./components/CoreValues"));
const OurStory = lazy(() => import("./components/OurStory"));
const Roadmap = lazy(() => import("./components/Roadmap"));
const Projects = lazy(() => import("./components/Projects"));
const Community = lazy(() => import("./components/Community"));
const Events = lazy(() => import("./components/Events"));
const Blog = lazy(() => import("./components/Blog"));
const LearningHub = lazy(() => import("./components/LearningHub"));
const Gallery = lazy(() => import("./components/Gallery"));
const Contact = lazy(() => import("./components/Contact"));
const NotFound = lazy(() => import("./components/NotFound"));

function HomePage() {
  return (
    <>
      <Suspense fallback={<LoadingSkeleton />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div className="py-24" />}>
        <About />
      </Suspense>
      <Suspense fallback={<div className="py-24" />}>
        <VisionMission />
      </Suspense>
      <Suspense fallback={<div className="py-24" />}>
        <CoreValues />
      </Suspense>
      <Suspense fallback={<div className="py-24" />}>
        <OurStory />
      </Suspense>
      <Suspense fallback={<div className="py-24" />}>
        <Roadmap />
      </Suspense>
      <Suspense fallback={<div className="py-24" />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div className="py-24" />}>
        <Community />
      </Suspense>
      <Suspense fallback={<div className="py-24" />}>
        <Events />
      </Suspense>
      <Suspense fallback={<div className="py-24" />}>
        <Blog />
      </Suspense>
      <Suspense fallback={<div className="py-24" />}>
        <LearningHub />
      </Suspense>
      <Suspense fallback={<div className="py-24" />}>
        <Gallery />
      </Suspense>
      <Suspense fallback={<div className="py-24" />}>
        <Contact />
      </Suspense>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-300">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="*"
                element={
                  <Suspense fallback={<LoadingSkeleton />}>
                    <NotFound />
                  </Suspense>
                }
              />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
