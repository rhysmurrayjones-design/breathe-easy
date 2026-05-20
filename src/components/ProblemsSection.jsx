import { useScrollReveal, useScrollRevealChildren } from '../hooks/useScrollReveal'
import ProblemCard from './ProblemCard'
import { problems } from '../data/problems'

export default function ProblemsSection() {
  const headerRef = useScrollReveal()
  const gridRef = useScrollRevealChildren()

  return (
    <section
      id="problems"
      className="py-20 sm:py-28"
      style={{ backgroundColor: '#F0E6D3' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal mb-14 max-w-2xl">
          <p className="section-label mb-3">The Pollutants</p>
          <h2 className="section-heading mb-4">What's Polluting Your Air?</h2>
          <p className="font-body text-brown/70 text-lg leading-relaxed">
            Most indoor air problems come from a handful of well-studied sources. Tap any card to learn where it comes from, what it does to your body, and who's most at risk.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {problems.map((problem, i) => (
            <div
              key={problem.id}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}
            >
              <ProblemCard problem={problem} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
