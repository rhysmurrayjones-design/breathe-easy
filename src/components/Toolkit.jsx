import { useScrollReveal } from '../hooks/useScrollReveal'
import { Download } from 'lucide-react'

export default function Toolkit() {
  const headerRef = useScrollReveal()

  return (
    <section
      id="toolkit"
      className="py-20 sm:py-28"
      style={{ backgroundColor: '#EBF0E8' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal mb-8 max-w-2xl">
          <p className="section-label mb-3" style={{ color: '#6B8E5E' }}>The Toolkit</p>
          <h2 className="section-heading mb-4">Take This With You — The Replicable Toolkit</h2>
          <p className="font-body text-brown/70 text-lg leading-relaxed">
            This entire project — site, data, and documents — is designed to be freely adapted by other FPS teams, schools, and community organizations.
          </p>
        </div>
        <h3 className="font-display font-bold text-2xl text-brown mb-6">
          Downloadable Resources
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="#"
            className="flex items-start gap-4 p-5 rounded-xl shadow-card no-underline group transition-all hover:shadow-card-hover"
            style={{ backgroundColor: '#FAF4EC' }}
            aria-label="Download: IAQ Quick Reference Guide (PDF (1 page))"
          >
            <div className="flex-1 min-w-0">
              <div className="font-display font-bold text-brown text-base group-hover:text-terracotta transition-colors">
                IAQ Quick Reference Guide
              </div>
              <div className="font-body text-brown/60 text-sm leading-relaxed mt-1 mb-2">
                1-page summary of the most important IAQ facts, problems, and solutions. Print and post it.
              </div>
              <div className="flex items-center gap-1.5 font-ui text-xs font-semibold text-terracotta">
                <Download size={13} aria-hidden="true" />
                PDF (1 page)
              </div>
            </div>
          </a>
          <a
            href="#"
            className="flex items-start gap-4 p-5 rounded-xl shadow-card no-underline group transition-all hover:shadow-card-hover"
            style={{ backgroundColor: '#FAF4EC' }}
            aria-label="Download: Classroom Discussion Guide (PDF (4 pages))"
          >
            <div className="flex-1 min-w-0">
              <div className="font-display font-bold text-brown text-base group-hover:text-terracotta transition-colors">
                Classroom Discussion Guide
              </div>
              <div className="font-body text-brown/60 text-sm leading-relaxed mt-1 mb-2">
                Discussion questions and hands-on activities for middle and high school classrooms.
              </div>
              <div className="flex items-center gap-1.5 font-ui text-xs font-semibold text-terracotta">
                <Download size={13} aria-hidden="true" />
                PDF (4 pages)
              </div>
            </div>
          </a>
          <a
            href="#"
            className="flex items-start gap-4 p-5 rounded-xl shadow-card no-underline group transition-all hover:shadow-card-hover"
            style={{ backgroundColor: '#FAF4EC' }}
            aria-label="Download: Home IAQ Checklist (PDF (2 pages))"
          >
            <div className="flex-1 min-w-0">
              <div className="font-display font-bold text-brown text-base group-hover:text-terracotta transition-colors">
                Home IAQ Checklist
              </div>
              <div className="font-body text-brown/60 text-sm leading-relaxed mt-1 mb-2">
                A printable room-by-room checklist to assess and improve your home's air quality.
              </div>
              <div className="flex items-center gap-1.5 font-ui text-xs font-semibold text-terracotta">
                <Download size={13} aria-hidden="true" />
                PDF (2 pages)
              </div>
            </div>
          </a>
          <a
            href="#"
            className="flex items-start gap-4 p-5 rounded-xl shadow-card no-underline group transition-all hover:shadow-card-hover"
            style={{ backgroundColor: '#FAF4EC' }}
            aria-label="Download: DIY Awareness Poster Template (PDF (11×17&quot;))"
          >
            <div className="flex-1 min-w-0">
              <div className="font-display font-bold text-brown text-base group-hover:text-terracotta transition-colors">
                DIY Awareness Poster Template
              </div>
              <div className="font-body text-brown/60 text-sm leading-relaxed mt-1 mb-2">
                Editable poster template to create IAQ awareness materials for your school or community center.
              </div>
              <div className="flex items-center gap-1.5 font-ui text-xs font-semibold text-terracotta">
                <Download size={13} aria-hidden="true" />
                PDF (11×17")
              </div>
            </div>
          </a>
          <a
            href="#"
            className="flex items-start gap-4 p-5 rounded-xl shadow-card no-underline group transition-all hover:shadow-card-hover"
            style={{ backgroundColor: '#FAF4EC' }}
            aria-label="Download: IAQ Presentation Slides (PDF (12 slides))"
          >
            <div className="flex-1 min-w-0">
              <div className="font-display font-bold text-brown text-base group-hover:text-terracotta transition-colors">
                IAQ Presentation Slides
              </div>
              <div className="font-body text-brown/60 text-sm leading-relaxed mt-1 mb-2">
                A ready-to-use slide deck you can present to your class, school board, or community group about indoor air quality.
              </div>
              <div className="flex items-center gap-1.5 font-ui text-xs font-semibold text-terracotta">
                <Download size={13} aria-hidden="true" />
                PDF (12 slides)
              </div>
            </div>
          </a>
          <a
            href="#"
            className="flex items-start gap-4 p-5 rounded-xl shadow-card no-underline group transition-all hover:shadow-card-hover"
            style={{ backgroundColor: '#FAF4EC' }}
            aria-label="Download: Take Action Checklist (PDF (1 page))"
          >
            <div className="flex-1 min-w-0">
              <div className="font-display font-bold text-brown text-base group-hover:text-terracotta transition-colors">
                Take Action Checklist
              </div>
              <div className="font-body text-brown/60 text-sm leading-relaxed mt-1 mb-2">
                A step-by-step checklist for students and families to assess and improve air quality in their own home or school.
              </div>
              <div className="flex items-center gap-1.5 font-ui text-xs font-semibold text-terracotta">
                <Download size={13} aria-hidden="true" />
                PDF (1 page)
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
