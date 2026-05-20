import { Wind, ExternalLink } from 'lucide-react'

const navLinks = [
  { href: '#what-is-iaq', label: 'What is IAQ?' },
  { href: '#problems', label: 'Problems' },
  { href: '#why-it-matters', label: 'Health Impacts' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#toolkit', label: 'Toolkit' },
  { href: '#sources', label: 'Sources' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: '#2C1F14' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {/* Left: logo + tagline */}
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 no-underline mb-3"
              aria-label="Breathe Better, Live Better — go to top"
            >
              <Wind size={20} className="text-peach" aria-hidden="true" />
              <span className="font-display font-bold text-cream leading-none" style={{ fontSize: '1.05rem' }}>
                Breathe Better, Live Better
              </span>
            </a>
            <p className="font-body text-cream/60 text-sm leading-relaxed">
              An educational indoor air quality toolkit — built to inform, empower, and replicate.
            </p>
          </div>

          {/* Center: nav links */}
          <nav aria-label="Footer navigation">
            <div className="font-ui font-semibold text-xs uppercase tracking-wider text-cream/40 mb-3">
              Explore
            </div>
            <ul className="list-none m-0 p-0 grid grid-cols-2 gap-y-2 gap-x-4">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-ui text-sm text-cream/70 hover:text-peach transition-colors no-underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: credits */}
          <div>
            <div className="font-ui font-semibold text-xs uppercase tracking-wider text-cream/40 mb-3">
              About This Project
            </div>
            <p className="font-body text-cream/70 text-sm leading-relaxed mb-3">
              Created for the{' '}
              <a
                href="https://www.odysseyofthemind.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-peach no-underline hover:underline inline-flex items-center gap-0.5"
              >
                Future Problem Solvers
                <ExternalLink size={11} aria-hidden="true" />
              </a>{' '}
              Community Project.
            </p>
            <p className="font-ui text-cream/50 text-xs">
              Last updated: {year}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderColor: 'rgba(250,244,236,0.1)' }}
        >
          <p className="font-ui text-xs text-cream/40 leading-relaxed max-w-md">
            This site is intended for educational purposes only. Always consult a qualified professional for health concerns related to indoor air quality.
          </p>
          <p className="font-ui text-xs text-cream/30 flex-shrink-0">
            © {year} Breathe Better, Live Better · MIT License
          </p>
        </div>
      </div>
    </footer>
  )
}
