import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIsIAQ from './components/WhatIsIAQ'
import ProblemsSection from './components/ProblemsSection'
import WhyItMatters from './components/WhyItMatters'
import SolutionsSection from './components/SolutionsSection'
import PhotoGallery from './components/PhotoGallery'
import Sources from './components/Sources'
import MeetTheTeam from './components/MeetTheTeam'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] btn-primary"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <WhatIsIAQ />
        <ProblemsSection />
        <WhyItMatters />
        <SolutionsSection />
        <PhotoGallery />
        <MeetTheTeam />
        <Sources />
      </main>

      <Footer />
    </>
  )
}
