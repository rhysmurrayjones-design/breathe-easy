import { ChevronDown, Leaf } from 'lucide-react'

export default function Hero() {
  const scrollDown = () => {
    document.getElementById('what-is-iaq')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* ADD HERO BACKGROUND PHOTO HERE: replace src with your image file path
          e.g. src="/assets/images/hero-background.jpg"
          Recommended: a wide, naturally lit interior — living room, kitchen, or outdoor greenery.
          The dark overlay below will sit on top, so the photo shows through dramatically. */}
      <img
        src=""
        alt="Hero background — a naturally lit indoor living space"
        className="absolute inset-0 w-full h-full -z-20"
        style={{ objectFit: 'cover', backgroundColor: '#E8DDD0' }}
        aria-hidden="true"
      />

      {/* Dark overlay — keeps text readable over any background photo */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(135deg, rgba(196,98,45,0.92) 0%, rgba(139,69,32,0.88) 30%, rgba(91,48,32,0.90) 60%, rgba(44,31,20,0.95) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Texture overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 50%, #E8A87C 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, #6B8E5E 0%, transparent 40%),
            radial-gradient(ellipse at 60% 80%, #FAF4EC 0%, transparent 35%)`,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* FPS badge */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span
            className="font-ui text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border"
            style={{ color: '#E8A87C', borderColor: 'rgba(232,168,124,0.4)', backgroundColor: 'rgba(232,168,124,0.1)' }}
          >
            <Leaf size={12} className="inline mr-1.5" aria-hidden="true" />
            FPS Community Project
          </span>
        </div>

        <h1
          className="font-display font-bold leading-tight mb-6"
          style={{
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            color: '#FAF4EC',
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
          }}
        >
          The Air Inside Your Home Might Be the Most Polluted Air You Breathe
        </h1>

        <p
          className="font-body text-lg sm:text-xl mb-10 mx-auto max-w-2xl"
          style={{ color: 'rgba(250,244,236,0.85)', lineHeight: '1.7' }}
        >
          Learn what's in your indoor air, why it matters, and what you can do about it.
        </p>

        <button
          onClick={scrollDown}
          className="btn-primary text-base"
          style={{
            backgroundColor: '#FAF4EC',
            color: '#2C1F14',
            fontSize: '1.0625rem',
          }}
        >
          Start Exploring
          <ChevronDown size={18} aria-hidden="true" />
        </button>
      </div>

    </section>
  )
}
