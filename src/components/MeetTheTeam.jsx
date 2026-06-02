import { Camera } from 'lucide-react'
import hansPhoto from '../assets/Images/Hans.jpg'
import hugoPhoto from '../assets/Images/Hugo.jpg'
import coopPhoto from '../assets/Images/Coop.jpg'
import { useScrollReveal, useScrollRevealChildren } from '../hooks/useScrollReveal'

const teamMembers = [
  { id: 1, name: 'Hans Hilton', photo: hansPhoto, bio: 'I am currently in 8th grade, and am an avid cross-country skier, mathlete, and enjoy being outside with friends and family.' },
  { id: 2, name: 'Hugo Hilton', photo: hugoPhoto },
  { id: 3, name: 'Coop Jones', photo: coopPhoto },
  { id: 4 },
]

export default function MeetTheTeam() {
  const headerRef = useScrollReveal()
  const gridRef = useScrollRevealChildren()

  return (
    <section id="team" className="py-20 sm:py-28" style={{ backgroundColor: '#FAF4EC' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal mb-14 max-w-2xl">
          <p className="section-label mb-3">Our Team</p>
          <h2 className="section-heading mb-4">Meet the Team</h2>
          <p className="font-body text-brown/70 text-lg leading-relaxed">
            The Middle School Future Problem Solvers behind this project
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {teamMembers.map((member, i) => (
            <div
              key={member.id}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}
            >
              <article className="bg-sand rounded-xl shadow-card overflow-hidden transition-shadow hover:shadow-card-hover">
                <div
                  className="w-full aspect-square flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: '#E8DDD0' }}
                >
                  {member.photo
                    ? <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                    : <Camera size={40} className="text-brown/30" aria-hidden="true" />}
                </div>
                <div className="p-6 pb-7">
                  <h3 className="font-display font-bold text-brown text-lg leading-tight mb-3">
                    {member.name ?? 'Team Member Name'}
                  </h3>
                  <p className="font-body text-brown/70 text-sm leading-relaxed" style={{ minHeight: '6.5rem' }}>
                    {member.bio ?? 'Add a short bio or fun fact about yourself here.'}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
