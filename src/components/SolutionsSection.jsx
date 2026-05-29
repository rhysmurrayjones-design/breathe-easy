import { useScrollReveal, useScrollRevealChildren } from '../hooks/useScrollReveal'
import { tiers } from '../data/solutions'
import { Star, Printer } from 'lucide-react'

const impactColor = {
  'Critical': '#C4622D',
  'Very High': '#8B4520',
  'High': '#6B8E5E',
  'Medium': '#E8A87C',
  'Low–Medium': '#E8A87C',
}

function SolutionCard({ solution }) {
  return (
    <article className="bg-cream rounded-xl p-5 shadow-card hover:shadow-card-hover transition-shadow flex flex-col gap-3">
      <h4 className="font-display font-bold text-brown text-lg leading-tight">
        {solution.name}
      </h4>
      <p className="font-body text-brown/70 text-sm leading-relaxed flex-1">
        {solution.description}
        {solution.citation && (
          <a href={`#source-${solution.citation}`} className="cite" aria-label={`Source ${solution.citation}`}>
            [{solution.citation}]
          </a>
        )}
      </p>
      <div className="flex items-center justify-between pt-1 border-t border-brown/10">
        <div className="flex flex-col">
          <span className="font-ui text-xs text-brown/50 uppercase tracking-wide">Est. Cost</span>
          <span className="font-ui font-semibold text-brown text-sm">{solution.cost}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Star size={12} className="text-terracotta" aria-hidden="true" />
          <span
            className="font-ui font-semibold text-xs"
            style={{ color: impactColor[solution.impact] || '#C4622D' }}
          >
            {solution.impact} Impact
          </span>
        </div>
      </div>
    </article>
  )
}

const tierBg = {
  sage: '#EBF0E8',
  peach: '#FDF6EE',
  terracotta: '#FAF0EB',
}

const tierAccent = {
  sage: '#6B8E5E',
  peach: '#C4622D',
  terracotta: '#C4622D',
}

export default function SolutionsSection() {
  const headerRef = useScrollReveal()

  const printChecklist = () => {
    document.body.classList.add('printing')
    const cleanup = () => {
      document.body.classList.remove('printing')
      window.removeEventListener('afterprint', cleanup)
    }
    window.addEventListener('afterprint', cleanup)
    window.print()
  }

  return (
    <section
      id="solutions"
      className="py-20 sm:py-28"
      style={{ backgroundColor: '#F0E6D3' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="solutions-header" ref={headerRef} className="reveal mb-4 max-w-2xl">
          <p className="section-label mb-3">Take Action</p>
          <h2 className="section-heading mb-4">What Can You Do? (A Lot, Actually.)</h2>
          <p className="font-body text-brown/70 text-lg leading-relaxed mb-6">
            Improving your indoor air quality doesn't have to be expensive or complicated. Start with the free steps, then layer in more as you can.
          </p>
          <button
            onClick={printChecklist}
            className="btn-secondary text-sm"
            aria-label="Print or save this checklist"
          >
            <Printer size={16} aria-hidden="true" />
            Save This Checklist
          </button>
        </div>

        <div className="mt-12 space-y-14">
          {tiers.map((tier) => (
            <div key={tier.id}>
              <div className="flex items-center gap-3 mb-6">
                <div>
                  <h3
                    className="font-display font-bold text-2xl"
                    style={{ color: tierAccent[tier.color] }}
                  >
                    {tier.label}
                  </h3>
                  <p className="font-ui text-brown/60 text-sm">{tier.description}</p>
                </div>
              </div>
              <div
                className="rounded-2xl p-6 sm:p-8"
                style={{ backgroundColor: tierBg[tier.color] }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tier.solutions.map((sol) => (
                    <SolutionCard key={sol.id} solution={sol} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
