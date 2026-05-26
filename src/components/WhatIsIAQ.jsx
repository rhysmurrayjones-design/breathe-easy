import { useScrollReveal, useScrollRevealChildren } from '../hooks/useScrollReveal'
import { useCounter } from '../hooks/useCounter'

function StatCard({ value, suffix, label, description, citation, delay }) {
  const { count, ref } = useCounter(value, 2200)

  return (
    <div
      ref={ref}
      className={`reveal ${delay} bg-sand rounded-xl p-6 sm:p-8 shadow-card`}
    >
      <div
        className="font-display font-bold text-terracotta mb-1"
        style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', lineHeight: 1 }}
        aria-live="polite"
      >
        {count}{suffix}
      </div>
      <div className="font-ui font-semibold text-brown mb-2 text-base sm:text-lg">{label}</div>
      <p className="font-body text-brown/70 text-sm sm:text-base leading-relaxed">
        {description}
        {citation && (
          <a href={`#source-${citation}`} className="cite" aria-label={`Source ${citation}`}>
            [{citation}]
          </a>
        )}
      </p>
    </div>
  )
}

export default function WhatIsIAQ() {
  const headerRef = useScrollReveal()
  const cardsRef = useScrollRevealChildren()

  return (
    <section id="what-is-iaq" className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref={headerRef} className="reveal mb-16 max-w-3xl">
        <p className="section-label mb-3">The Basics</p>
        <h2 className="section-heading mb-6">What Is Indoor Air Quality and Why Is It Not Regulated?</h2>
        <div className="font-body text-brown/80 text-lg leading-relaxed space-y-4">
          <p>
            Indoor air quality (IAQ) refers to the air quality inside buildings and structures — the air we breathe at home, at school, and at work. While most people worry about smog and outdoor pollution, the EPA estimates indoor air can be <strong className="text-brown">2 to 5 times more polluted</strong> than the air outside.
            <a href="#source-3" className="cite" aria-label="Source 3">[3]</a>
          </p>
          <p>
            Indoor air picks up pollutants from building materials, cleaning products, combustion appliances, mold, and even the ground beneath our feet. Because modern buildings are built to be energy-efficient (airtight), these pollutants get trapped inside with us.
          </p>
          <p>
            The good news: once you know what's in your air and where it comes from, there's a lot you can do. This toolkit will walk you through the problems, the health impacts, and the solutions — starting with what matters most.
          </p>
          <p>
            Unlike outdoor air pollution, indoor air quality in private homes and most buildings is not regulated by the federal government. The Clean Air Act, enforced by the EPA, only covers outdoor air. The EPA has no legal authority to set or enforce indoor air quality standards in homes, schools, or offices. While the EPA provides guidelines and recommendations, building owners and landlords are not legally required to follow them. Some states have limited regulations for schools and workplaces, but there is no national standard. Experts argue this gap exists because regulating indoor spaces raises complex legal questions about privacy and property rights, and because the problem was not well understood until recent decades.
            <a href="#source-1" className="cite" aria-label="Source 1">[1]</a>
            <a href="#source-2" className="cite" aria-label="Source 2">[2]</a>
            <a href="#source-7" className="cite" aria-label="Source 7">[7]</a>
          </p>
        </div>
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard
          value={5}
          suffix="×"
          label="More polluted than outside"
          description="The EPA estimates indoor air can be 2–5× more polluted than outdoor air in the same city."
          citation={3}
          delay="reveal-delay-1"
        />
        <StatCard
          value={90}
          suffix="%"
          label="of our time spent indoors"
          description="Americans spend about 90% of their lives inside — making indoor air quality a daily health issue."
          citation={16}
          delay="reveal-delay-2"
        />
        <StatCard
          value={4}
          suffix="M"
          label="premature deaths globally per year"
          description="The WHO links poor indoor air quality to roughly 4 million premature deaths each year worldwide."
          citation={8}
          delay="reveal-delay-3"
        />
      </div>
    </section>
  )
}
