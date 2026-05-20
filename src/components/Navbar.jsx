import { useState, useEffect, useRef } from 'react'
import { Menu, X, Wind } from 'lucide-react'

const links = [
  { href: '#what-is-iaq', label: 'What is IAQ?' },
  { href: '#problems', label: 'Problems' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#toolkit', label: 'Toolkit' },
  { href: '#sources', label: 'Sources' },
]

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [atTop, setAtTop] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setAtTop(y < 10)
      setVisible(y < lastY.current || y < 80)
      lastY.current = y
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        } ${atTop ? '' : 'shadow-card'}`}
        style={{ backgroundColor: '#FAF4EC', borderBottom: atTop ? 'none' : '1px solid #F0E6D3' }}
      >
        <nav
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
          aria-label="Main navigation"
        >
          <a
            href="#"
            className="flex items-center gap-2 text-brown no-underline group"
            aria-label="Breathe Better, Live Better — go to top"
          >
            <Wind
              size={22}
              className="text-terracotta transition-transform group-hover:rotate-12"
              aria-hidden="true"
            />
            <span
              className="font-display font-bold text-brown leading-none"
              style={{ letterSpacing: '-0.01em', fontSize: '1rem' }}
            >
              Breathe Better, Live Better
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="font-ui text-sm font-medium text-brown/80 hover:text-terracotta px-3 py-2 rounded-md transition-colors no-underline"
                  style={{ minHeight: '44px', display: 'flex', alignItems: 'center' }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-brown hover:text-terracotta transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            style={{ minHeight: '44px', minWidth: '44px' }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-brown/40 transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
          aria-hidden="true"
        />
        <nav
          className={`absolute top-0 right-0 bottom-0 w-72 flex flex-col pt-20 px-6 transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ backgroundColor: '#FAF4EC' }}
          aria-label="Mobile navigation"
        >
          <ul className="list-none m-0 p-0 flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className="block font-ui font-medium text-brown hover:text-terracotta py-3 px-4 rounded-md transition-colors no-underline text-lg"
                  style={{ minHeight: '44px' }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
