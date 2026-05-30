import { useState } from 'react'
import { X, ZoomIn, ImagePlus } from 'lucide-react'
import iaqTalkPhoto from '../assets/Images/IAQTalk.png'
import placedMonitorsPhoto from '../assets/Images/PlacedMonitorsinClassrooms.png'
import analyzingDataPhoto from '../assets/Images/AnalyzingData.png'

const photos = [
  {
    id: 1,
    src: iaqTalkPhoto,
    alt: 'Attending an IAQ Talk',
    label: 'Attending an IAQ Talk',
    caption: 'Attending an IAQ Talk',
    credit: 'Credit: [Add photographer / source]',
    description: '',
  },
  {
    id: 2,
    // ADD YOUR TEAM PHOTO HERE: drag your photo into src/assets/images/ and replace src="" with src="/assets/images/your-filename.jpg"
    src: '',
    alt: 'Team members taking air quality readings with a monitor',
    label: 'Taking Air Quality Readings',
    caption: 'Taking Air Quality Readings',
    credit: 'Credit: [Add photographer / source]',
  },
  {
    id: 3,
    src: placedMonitorsPhoto,
    alt: 'Placing monitors in classrooms',
    label: 'Placing Monitors in Classrooms',
    caption: 'Placing Monitors in Classrooms',
    credit: 'Credit: [Add photographer / source]',
    description: '',
  },
  {
    id: 4,
    src: analyzingDataPhoto,
    alt: 'Analyzing the data',
    label: 'Analyzing the Data',
    caption: 'Analyzing the Data',
    credit: 'Credit: [Add photographer / source]',
    description: '',
  },
  {
    id: 5,
    // ADD YOUR TEAM PHOTO HERE: drag your photo into src/assets/images/ and replace src="" with src="/assets/images/your-filename.jpg"
    src: '',
    alt: 'Team building an IAQ awareness poster for the school',
    label: 'Building Our Awareness Poster',
    caption: 'Building Our Awareness Poster',
    credit: 'Credit: [Add photographer / source]',
  },
  {
    id: 6,
    // ADD YOUR TEAM PHOTO HERE: drag your photo into src/assets/images/ and replace src="" with src="/assets/images/your-filename.jpg"
    src: '',
    alt: 'Presenting our IAQ findings to the community',
    label: 'Community Presentation',
    caption: 'Community Presentation',
    credit: 'Credit: [Add photographer / source]',
  },
  {
    id: 7,
    // ADD YOUR TEAM PHOTO HERE: drag your photo into src/assets/images/ and replace src="" with src="/assets/images/your-filename.jpg"
    src: '',
    alt: 'Our FPS team collaborating on the IAQ project',
    label: 'Our Team at Work',
    caption: 'Our Team at Work',
    credit: 'Credit: [Add photographer / source]',
  },
  {
    id: 8,
    // ADD YOUR TEAM PHOTO HERE: drag your photo into src/assets/images/ and replace src="" with src="/assets/images/your-filename.jpg"
    src: '',
    alt: 'Sharing our IAQ results and recommendations with the school',
    label: 'Sharing Results with the School',
    caption: 'Sharing Results with the School',
    credit: 'Credit: [Add photographer / source]',
  },
]

const PLACEHOLDER_BG = '#E8DDD0'
const PHOTO_HEIGHT = 220

function PhotoSlot({ photo, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative group w-full cursor-pointer focus:outline-none"
      style={{ height: PHOTO_HEIGHT, display: 'block' }}
      aria-label={`View photo: ${photo.label}`}
    >
      {photo.src ? (
        <img
          src={photo.src}
          alt={photo.alt}
          className="w-full h-full"
          style={{ objectFit: 'cover', display: 'block' }}
          loading="lazy"
        />
      ) : (
        <div
          className="w-full h-full flex flex-col items-center justify-center gap-2"
          style={{ backgroundColor: PLACEHOLDER_BG }}
          aria-hidden="true"
        >
          <ImagePlus size={28} style={{ color: '#B8A898' }} />
          <span className="font-ui text-xs text-center px-4 leading-snug" style={{ color: '#B8A898' }}>
            {photo.label}
          </span>
        </div>
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
        <ZoomIn
          size={26}
          className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        />
      </div>
    </button>
  )
}

export default function PhotoGallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="gallery" className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="section-label mb-3">The Process</p>
        <h2 className="section-heading">Our Project in Action</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <article
            key={photo.id}
            className="bg-sand rounded-xl shadow-card overflow-hidden transition-shadow hover:shadow-card-hover"
          >
            <PhotoSlot photo={photo} onClick={() => setSelected(photo)} />
            <div className="p-5 pb-6">
              <h3 className="font-display font-bold text-brown text-base leading-tight mb-2">
                {photo.label}
              </h3>
              <p className="font-body text-brown/70 text-sm leading-relaxed" style={{ minHeight: '6.5rem' }}>
                {photo.description ?? 'Describe this step of your process here.'}
              </p>
            </div>
          </article>
        ))}
      </div>

      <p className="font-ui text-xs mt-5 text-center" style={{ color: '#B8A898' }}>
        Add your team's photos by placing image files in <code>src/assets/images/</code> and updating the <code>src</code> in <code>src/components/PhotoGallery.jsx</code>
      </p>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(44,31,20,0.85)' }}
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Photo: ${selected.label}`}
        >
          <div
            className="relative max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: '#FAF4EC' }}
          >
            {selected.src ? (
              <img
                src={selected.src}
                alt={selected.alt}
                className="w-full"
                style={{ height: 280, objectFit: 'cover', display: 'block' }}
              />
            ) : (
              <div
                className="w-full flex flex-col items-center justify-center gap-3"
                style={{ height: 280, backgroundColor: PLACEHOLDER_BG }}
              >
                <ImagePlus size={36} style={{ color: '#B8A898' }} aria-hidden="true" />
                <span className="font-ui text-sm" style={{ color: '#B8A898' }}>{selected.label}</span>
              </div>
            )}
            <div className="p-5">
              <p className="font-body text-brown/80 text-base leading-relaxed mb-1">
                {selected.caption}
              </p>
              <p className="font-ui text-xs" style={{ color: '#B8A898' }}>
                {selected.credit}
              </p>
            </div>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 p-2 rounded-full"
              style={{ backgroundColor: 'rgba(44,31,20,0.55)' }}
              aria-label="Close lightbox"
            >
              <X size={18} className="text-cream" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
