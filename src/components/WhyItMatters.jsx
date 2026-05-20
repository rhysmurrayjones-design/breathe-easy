import { useScrollReveal } from '../hooks/useScrollReveal'
import { Baby, User, Heart } from 'lucide-react'


const effects = [
  {
    period: 'Hours',
    type: 'Short-term',
    color: '#E8A87C',
    items: ['Headaches and dizziness', 'Eye, nose, and throat irritation', 'Fatigue and difficulty concentrating', 'Nausea', 'Worsening of existing allergies'],
  },
  {
    period: 'Years',
    type: 'Long-term',
    color: '#C4622D',
    items: ['Respiratory diseases (asthma, COPD)', 'Heart disease', 'Lung cancer (radon, PM2.5)', 'Neurological effects', 'Premature death'],
  },
]

const groups = [
  { icon: Baby, label: 'Infants & Children', reason: 'Breathe faster; developing lungs and brains are more vulnerable to toxins.' },
  { icon: User, label: 'Elderly Adults', reason: 'More likely to have pre-existing heart and lung conditions that worsen with exposure.' },
  { icon: Heart, label: 'People with Asthma', reason: 'IAQ pollutants are among the most common triggers for asthma attacks.' },
]

export default function WhyItMatters() {
  const headerRef = useScrollReveal()

  return (
    <section id="why-it-matters" className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref={headerRef} className="reveal mb-10 max-w-2xl">
        <p className="section-label mb-3">Health Impacts</p>
        <h2 className="section-heading mb-4">Your Health Is Breathing This In</h2>
        <p className="font-body text-brown/70 text-lg leading-relaxed">
          The health effects of poor indoor air quality range from minor annoyances to life-threatening conditions — and they often go unrecognized because symptoms look like other common problems.
        </p>
      </div>

      {/* Effects timeline */}
      <div className="mb-20">
        <h3 className="font-display font-bold text-2xl text-brown mb-8 text-center">
          Short-Term vs. Long-Term Effects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {effects.map((group) => (
            <div
              key={group.type}
              className="rounded-xl overflow-hidden shadow-card"
            >
              <div
                className="px-6 py-4"
                style={{ backgroundColor: group.color }}
              >
                <div className="font-ui font-bold text-cream text-xs uppercase tracking-widest mb-0.5">
                  {group.type}
                </div>
                <div className="font-display font-bold text-cream text-2xl">
                  Within {group.period}
                </div>
              </div>
              <div className="bg-sand px-6 py-5">
                <ul className="space-y-2 list-none m-0 p-0">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 font-body text-brown/80 text-sm">
                      <span className="text-terracotta mt-0.5 flex-shrink-0" aria-hidden="true">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center font-ui text-xs text-brown/50 mt-4">
          Sources: EPA<a href="#source-3" className="cite">[3]</a>, CDC<a href="#source-7" className="cite">[7]</a>, WHO<a href="#source-8" className="cite">[8]</a>
        </p>
      </div>

      {/* At-risk groups */}
      <div>
        <h3 className="font-display font-bold text-2xl text-brown mb-8 text-center">
          Who Is Most at Risk?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {groups.map((group) => {
            const Icon = group.icon
            return (
              <div
                key={group.label}
                className="flex flex-col items-center text-center p-6 bg-sand rounded-xl shadow-card"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(196,98,45,0.1)' }}
                  aria-hidden="true"
                >
                  <Icon size={26} className="text-terracotta" />
                </div>
                <h4 className="font-ui font-bold text-brown mb-2 text-base">{group.label}</h4>
                <p className="font-body text-brown/65 text-sm leading-relaxed">{group.reason}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
