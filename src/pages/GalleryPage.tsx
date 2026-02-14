import { useEffect } from 'react'
import { FaCameraRetro, FaImages, FaExpand } from 'react-icons/fa'
import caro2 from '../assets/caro2.png'
import caro3 from '../assets/caro3.jpg'
import caro4 from '../assets/caro4.jpg'
import caro5 from '../assets/caro5.jpg'
import caro6 from '../assets/caro6.jpg'
import hero from '../assets/hero.jpg'
import vel from '../assets/vel.jpg'
import pic12 from '../assets/pic12.jpg'
function GalleryPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement
          const up = section.querySelectorAll('.gallery-up')
          const zoom = section.querySelectorAll('.gallery-zoom')
          const stagger = section.querySelectorAll('.gallery-stagger')

          if (entry.isIntersecting) {
            up.forEach((el) => el.classList.add('gallery-up-active'))
            zoom.forEach((el) => el.classList.add('gallery-zoom-active'))
            stagger.forEach((el) => el.classList.add('gallery-stagger-active'))
          } else {
            up.forEach((el) => el.classList.remove('gallery-up-active'))
            zoom.forEach((el) => el.classList.remove('gallery-zoom-active'))
            stagger.forEach((el) => el.classList.remove('gallery-stagger-active'))
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    )

    document.querySelectorAll('.gallery-observe').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const photos = [
    { src: hero, title: 'Sacred Gatherings', span: 'md:col-span-2 md:row-span-2' },
    { src: caro2, title: 'Festival Moments', span: '' },
    { src: caro3, title: 'Community Prayers', span: '' },

    { src: vel, title: 'Temple Landscape', span: 'md:row-span-2' },
    { src: caro4, title: 'Cultural Rituals', span: '' },
    { src: pic12, title: 'Evening Aarti', span: '' },
    { src: caro5, title: 'Volunteer Service', span: 'md:col-span-2' },
    { src: caro6, title: 'Meditation Circle', span: '' }
    
  ]

  return (
    <div className="pt-20 bg-[#F7F8F4]">
      <section className="gallery-observe relative overflow-hidden bg-[#102A2A] py-24 text-white">
        <div className="absolute left-[-120px] top-0 h-96 w-96 rounded-full bg-[#D4AF37]/25 blur-3xl"></div>
        <div className="absolute right-[-110px] bottom-[-80px] h-80 w-80 rounded-full bg-[#8B1538]/40 blur-3xl"></div>
        <div className="gallery-up relative mx-auto max-w-5xl px-6 text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#D4AF37]">Visual Archive</p>
          <h1 className="mb-7 text-6xl font-serif font-light md:text-8xl">Gallery</h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-[#D6E3DF]">
            A living archive of prayer, celebration, service, and shared spiritual experiences at VelMont.
          </p>
        </div>
      </section>

      <section className="gallery-observe bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="gallery-up mb-14 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="mb-4 text-5xl font-serif font-light text-[#8B1538]">Moments We Preserve</h2>
              <div className="h-px w-24 bg-[#D4AF37]"></div>
            </div>
            <div className="flex gap-3 text-sm uppercase tracking-[0.2em] text-[#8B1538]">
              <span className="rounded-full border border-[#8B1538]/30 px-4 py-2">Festivals</span>
              <span className="rounded-full border border-[#8B1538]/30 px-4 py-2">Rituals</span>
              <span className="rounded-full border border-[#8B1538]/30 px-4 py-2">Seva</span>
            </div>
          </div>

          <div className="grid auto-rows-[220px] gap-5 md:grid-cols-3">
            {photos.map((photo, i) => (
              <article
                key={i}
                className={`gallery-stagger group relative overflow-hidden rounded-3xl ${photo.span}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent opacity-90"></div>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                  <p className="text-lg font-medium text-white">{photo.title}</p>
                  <FaExpand className="text-white/90" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-observe bg-[#F0E8D5] py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
          {[
            { Icon: FaCameraRetro, title: 'Curated Visuals', desc: 'Every photo reflects real moments from VelMont gatherings and spiritual programs.' },
            { Icon: FaImages, title: 'Growing Archive', desc: 'Our gallery evolves through festivals, workshops, and community service milestones.' },
            { Icon: FaExpand, title: 'Immersive Feel', desc: 'Designed as a visual journey through devotion, movement, and sacred stillness.' }
          ].map((item, i) => (
            <div
              key={i}
              className="gallery-zoom rounded-3xl border border-[#8B1538]/15 bg-white p-8 shadow-md"
              style={{ animationDelay: `${i * 140}ms` }}
            >
              <item.Icon className="mb-5 text-4xl text-[#8B1538]" />
              <h3 className="mb-4 text-3xl font-serif font-light text-[#8B1538]">{item.title}</h3>
              <p className="text-lg leading-relaxed text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes galleryUp {
          from { opacity: 0; transform: translateY(34px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes galleryZoom {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .gallery-up,
        .gallery-stagger {
          opacity: 0;
          transform: translateY(34px);
        }
        .gallery-zoom {
          opacity: 0;
          transform: scale(0.9);
        }
        .gallery-up-active {
          animation: galleryUp 0.9s ease-out forwards;
        }
        .gallery-stagger-active {
          animation: galleryUp 0.82s ease-out forwards;
        }
        .gallery-zoom-active {
          animation: galleryZoom 0.85s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default GalleryPage

