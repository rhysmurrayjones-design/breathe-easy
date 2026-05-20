import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ExternalLink } from 'lucide-react'
import { sources, topics } from '../data/sources'

export default function Sources() {
  const [activeTopic, setActiveTopic] = useState('All')
  const headerRef = useScrollReveal()

  const filtered = activeTopic === 'All'
    ? sources
    : sources.filter((s) => s.topic === activeTopic)

  return (
    <section id="sources" className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref={headerRef} className="reveal mb-10 max-w-2xl">
        <p className="section-label mb-3">Bibliography</p>
        <h2 className="section-heading mb-4">Our Sources</h2>
        <p className="font-body text-brown/70 text-lg leading-relaxed">
          Every factual claim in this toolkit is backed by peer-reviewed research or publications from government health agencies. All citations link to the original source.
        </p>
      </div>

      {/* Topic filter */}
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter sources by topic">
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => setActiveTopic(topic)}
            aria-pressed={activeTopic === topic}
            className="font-ui font-medium text-sm px-4 py-2 rounded-full transition-all"
            style={{
              minHeight: '44px',
              backgroundColor: activeTopic === topic ? '#C4622D' : '#F0E6D3',
              color: activeTopic === topic ? '#FAF4EC' : '#2C1F14',
            }}
          >
            {topic}
          </button>
        ))}
      </div>

      <div
        className="rounded-2xl overflow-hidden shadow-card"
        style={{ backgroundColor: '#F0E6D3' }}
      >
        <ol className="list-none m-0 p-0 divide-y" style={{ borderColor: '#E8D8C0' }}>
          {filtered.map((source) => (
            <li
              key={source.id}
              id={`source-${source.id}`}
              className="flex items-start gap-4 px-6 py-5 hover:bg-sand/40 transition-colors"
            >
              <span
                className="flex-shrink-0 font-ui font-bold text-sm text-terracotta w-6 pt-0.5 text-right"
                aria-hidden="true"
              >
                {source.id}.
              </span>
              <div className="min-w-0">
                <p className="font-body text-brown text-base leading-relaxed m-0">
                  {source.author} ({source.date}).{' '}
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-terracotta no-underline hover:underline inline-flex items-center gap-1"
                  >
                    {source.title}
                    <ExternalLink size={13} className="flex-shrink-0" aria-hidden="true" />
                  </a>
                  . <em>{source.publication}</em>.
                </p>
                <span
                  className="inline-block mt-1.5 font-ui text-xs font-semibold px-2 py-0.5 rounded"
                  style={{ backgroundColor: 'rgba(196,98,45,0.1)', color: '#C4622D' }}
                >
                  {source.topic}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
