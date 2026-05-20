import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function ProblemCard({ problem }) {
  const [expanded, setExpanded] = useState(false)
  const contentId = `problem-${problem.id}-content`

  return (
    <article className="bg-sand rounded-xl shadow-card overflow-hidden transition-shadow hover:shadow-card-hover">
      <div className="p-6">
        {/* Header */}
        <div className="mb-3">
          <h3 className="font-display font-bold text-brown text-xl leading-tight">
            {problem.name}
          </h3>
        </div>

        <p className="font-body text-brown/75 text-base leading-relaxed mb-4">
          {problem.shortDef}
        </p>

        <button
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          aria-controls={contentId}
          className="flex items-center gap-1.5 font-ui font-semibold text-sm text-terracotta hover:text-brown transition-colors"
          style={{ minHeight: '44px' }}
        >
          {expanded ? (
            <>
              <ChevronUp size={16} aria-hidden="true" /> Show less
            </>
          ) : (
            <>
              <ChevronDown size={16} aria-hidden="true" /> Learn more
            </>
          )}
        </button>
      </div>

      {/* Expandable detail */}
      <div
        id={contentId}
        className={`overflow-hidden transition-all duration-400 ${
          expanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ transitionTimingFunction: 'ease' }}
      >
        <div className="px-6 pb-6 border-t border-brown/10 pt-4 space-y-4">
          <div>
            <h4 className="font-ui font-semibold text-xs uppercase tracking-wider text-terracotta mb-1.5">
              Where it comes from
            </h4>
            <ul className="font-body text-brown/75 text-sm space-y-1 pl-4 list-disc">
              {problem.sources.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-ui font-semibold text-xs uppercase tracking-wider text-terracotta mb-1.5">
              Health effects
            </h4>
            <p className="font-body text-brown/75 text-sm leading-relaxed">
              {problem.healthEffects}
            </p>
          </div>

          <div>
            <h4 className="font-ui font-semibold text-xs uppercase tracking-wider text-terracotta mb-1.5">
              Who is most at risk
            </h4>
            <p className="font-body text-brown/75 text-sm leading-relaxed">
              {problem.atRisk}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {problem.citations.map((c) => (
              <a
                key={c}
                href={`#source-${c}`}
                className="font-ui text-xs font-medium px-2.5 py-1 rounded-full text-terracotta border border-terracotta/30 bg-terracotta/5 hover:bg-terracotta/10 transition-colors no-underline"
              >
                Source [{c}]
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
