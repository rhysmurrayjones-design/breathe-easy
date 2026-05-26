import { useScrollReveal } from '../hooks/useScrollReveal'
import { Download, ImagePlus } from 'lucide-react'

const downloads = [
  {
    id: 'quickref',
    icon: '📋',
    title: 'IAQ Quick Reference Guide',
    description: '1-page summary of the most important IAQ facts, problems, and solutions. Print and post it.',
    format: 'PDF (1 page)',
    href: '#',
  },
  {
    id: 'classroom',
    icon: '📚',
    title: 'Classroom Discussion Guide',
    description: 'Discussion questions and hands-on activities for middle and high school classrooms.',
    format: 'PDF (4 pages)',
    href: '#',
  },
  {
    id: 'checklist',
    icon: '✅',
    title: 'Home IAQ Checklist',
    description: 'A printable room-by-room checklist to assess and improve your home\'s air quality.',
    format: 'PDF (2 pages)',
    href: '#',
  },
  {
    id: 'poster',
    icon: '🎨',
    title: 'DIY Awareness Poster Template',
    description: 'Editable poster template to create IAQ awareness materials for your school or community center.',
    format: 'PDF (11×17")',
    href: '#',
  },
]


export default function Toolkit() {
  const headerRef = useScrollReveal()

  return (
    <section
      id="toolkit"
      className="py-20 sm:py-28"
      style={{ backgroundColor: '#EBF0E8' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal mb-14 max-w-2xl">
          <p className="section-label mb-3" style={{ color: '#6B8E5E' }}>The Toolkit</p>
          <h2 className="section-heading mb-4">Take This With You — The Replicable Toolkit</h2>
          <p className="font-body text-brown/70 text-lg leading-relaxed">
            This entire project — site, data, and documents — is designed to be freely adapted by other FPS teams, schools, and community organizations.
          </p>
        </div>

        {/* ADD TOOLKIT PHOTO HERE: replace src with your image file path
            e.g. src="/assets/images/toolkit-cover.jpg"
            Suggested: a student or teacher using printed materials, a classroom setting, or project documentation. */}
        <div className="reveal rounded-2xl overflow-hidden shadow-card mb-12" style={{ height: 260 }}>
          <img
            src=""
            alt="Students or educators using the IAQ toolkit materials in a classroom or community setting"
            className="w-full h-full"
            style={{ objectFit: 'cover', backgroundColor: '#E8DDD0', display: 'block' }}
          />
          {/* Remove the div below once you add a real photo */}
          <div
            className="w-full h-full -mt-[260px] flex flex-col items-center justify-center gap-2 pointer-events-none"
            style={{ backgroundColor: '#E8DDD0' }}
            aria-hidden="true"
          >
            <ImagePlus size={32} style={{ color: '#B8A898' }} />
            <span className="font-ui text-sm" style={{ color: '#B8A898' }}>Toolkit photo — classroom or community setting</span>
          </div>
        </div>

        {/* Overview card */}
        <div
          className="reveal rounded-2xl p-8 mb-12 shadow-card"
          style={{ backgroundColor: '#FAF4EC' }}
        >
          <h3 className="font-display font-bold text-2xl text-brown mb-3">
            What's Included
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-body text-brown/70 text-base">
            <div>
              <div className="font-ui font-bold text-sage text-xs uppercase tracking-wider mb-1.5">For Students</div>
              <ul className="space-y-1 list-disc pl-4 text-sm">
                <li>Plain-language explainers on 8 pollutants</li>
                <li>Real-world health impact scenarios</li>
                <li>Tiered solutions from free to professional</li>
              </ul>
            </div>
            <div>
              <div className="font-ui font-bold text-sage text-xs uppercase tracking-wider mb-1.5">For Educators</div>
              <ul className="space-y-1 list-disc pl-4 text-sm">
                <li>Classroom discussion guide with activities</li>
                <li>Cited, reliable sources throughout</li>
                <li>Grade 6–8 reading level body text</li>
              </ul>
            </div>
            <div>
              <div className="font-ui font-bold text-sage text-xs uppercase tracking-wider mb-1.5">For Other FPS Teams</div>
              <ul className="space-y-1 list-disc pl-4 text-sm">
                <li>Open-source codebase (MIT license)</li>
                <li>Swap-out data files for your topic</li>
                <li>Step-by-step adaptation guide below</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Downloads */}
        <h3 className="font-display font-bold text-2xl text-brown mb-6">
          Downloadable Resources
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {downloads.map((dl) => (
            <a
              key={dl.id}
              href={dl.href}
              className="flex items-start gap-4 p-5 rounded-xl shadow-card no-underline group transition-all hover:shadow-card-hover"
              style={{ backgroundColor: '#FAF4EC' }}
              aria-label={`Download: ${dl.title} (${dl.format})`}
            >
              <div className="flex-1 min-w-0">
                <div className="font-display font-bold text-brown text-base group-hover:text-terracotta transition-colors">
                  {dl.title}
                </div>
                <div className="font-body text-brown/60 text-sm leading-relaxed mt-1 mb-2">
                  {dl.description}
                </div>
                <div className="flex items-center gap-1.5 font-ui text-xs font-semibold text-terracotta">
                  <Download size={13} aria-hidden="true" />
                  {dl.format}
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
