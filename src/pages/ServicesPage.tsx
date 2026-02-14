import { useEffect } from 'react'
import { FaOm, FaUsers, FaLeaf, FaHandsHelping, FaSun, FaBookOpen } from 'react-icons/fa'
import { GiMeditation } from 'react-icons/gi'
import pic6 from '../assets/caro6.jpg'
import pic8 from '../assets/caro5.jpg'

function ServicesPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement
          const rise = section.querySelectorAll('.services-rise')
          const left = section.querySelectorAll('.services-left')
          const right = section.querySelectorAll('.services-right')
          const stagger = section.querySelectorAll('.services-stagger')

          if (entry.isIntersecting) {
            rise.forEach((el) => el.classList.add('services-rise-active'))
            left.forEach((el) => el.classList.add('services-left-active'))
            right.forEach((el) => el.classList.add('services-right-active'))
            stagger.forEach((el) => el.classList.add('services-stagger-active'))
          } else {
            rise.forEach((el) => el.classList.remove('services-rise-active'))
            left.forEach((el) => el.classList.remove('services-left-active'))
            right.forEach((el) => el.classList.remove('services-right-active'))
            stagger.forEach((el) => el.classList.remove('services-stagger-active'))
          }
        })
      },
      { threshold: 0.22, rootMargin: '0px 0px -10% 0px' }
    )

    document.querySelectorAll('.services-observe').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="pt-20 bg-[#F7F4EF]">
      <section className="services-observe relative overflow-hidden bg-[#1A2D33] text-white">
        <div className="absolute -right-24 top-12 h-72 w-72 rounded-full bg-[#D4AF37]/25 blur-3xl"></div>
        <div className="absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-[#7A1F3D]/45 blur-3xl"></div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <div className="services-left">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#D4AF37]">Spiritual Programs</p>
            <h1 className="mb-8 text-6xl font-serif font-light leading-tight md:text-8xl">Our Services</h1>
            <p className="max-w-xl text-xl text-[#D9E2E5]">
              Designed as a complete spiritual ecosystem, each service nurtures calm, wisdom, and meaningful human connection.
            </p>
          </div>
          <div className="services-right relative">
            <img src={pic6} alt="Yoga and spiritual gathering" className="h-[420px] w-full rounded-[2rem] object-cover shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="services-observe bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="services-rise mb-14 text-center">
            <h2 className="mb-5 text-5xl font-serif font-light text-[#8B1538] md:text-6xl">Signature Offerings</h2>
            <div className="mx-auto h-px w-24 bg-[#D4AF37]"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {[
              { Icon: FaOm, title: 'Daily Worship', desc: 'Morning and evening pooja with authentic Vedic rituals.' },
              { Icon: GiMeditation, title: 'Meditation & Yoga', desc: 'Guided inner-balance practices for all levels.' },
              { Icon: FaUsers, title: 'Family Programs', desc: 'Intergenerational events that build stronger bonds.' },
              { Icon: FaLeaf, title: 'Nature Retreats', desc: 'Hiking and outdoor prayer sessions in open landscapes.' },
              { Icon: FaBookOpen, title: 'Scripture & Learning', desc: 'Talks and workshops to deepen spiritual understanding.' },
              { Icon: FaHandsHelping, title: 'Community Seva', desc: 'Volunteer-led support projects rooted in compassion.' }
            ].map((item, i) => (
              <article
                key={i}
                className="services-stagger rounded-3xl border border-[#8B1538]/10 bg-[#FDF8EE] p-9 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                style={{ animationDelay: `${i * 110}ms` }}
              >
                <item.Icon className="mb-5 text-4xl text-[#8B1538]" />
                <h3 className="mb-4 text-3xl font-serif font-light text-[#8B1538]">{item.title}</h3>
                <div className="mb-4 h-px w-16 bg-[#D4AF37]"></div>
                <p className="text-lg leading-relaxed text-gray-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-observe bg-[#F3EBD9] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.2fr]">
            <div className="services-left">
              <img src={pic8} alt="Temple service experience" className="h-[480px] w-full rounded-[1.8rem] object-cover shadow-xl" />
            </div>
            <div className="services-right">
              <h2 className="mb-5 text-5xl font-serif font-light text-[#8B1538] md:text-6xl">How We Serve</h2>
              <div className="mb-8 h-px w-24 bg-[#D4AF37]"></div>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Attend', desc: 'Join open sessions for prayer, meditation, and community interaction.' },
                  { step: '02', title: 'Engage', desc: 'Participate in workshops, retreats, and shared cultural celebrations.' },
                  { step: '03', title: 'Transform', desc: 'Carry calm, purpose, and service into your daily personal life.' }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="services-stagger flex gap-5 rounded-2xl border border-[#8B1538]/15 bg-white p-6"
                    style={{ animationDelay: `${i * 160}ms` }}
                  >
                    <p className="text-3xl font-serif text-[#D4AF37]">{item.step}</p>
                    <div>
                      <h3 className="text-2xl font-serif text-[#8B1538]">{item.title}</h3>
                      <p className="text-lg text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-3 rounded-xl bg-[#8B1538] px-6 py-4 text-white">
                <FaSun className="text-[#D4AF37]" />
                <p>Weekly highlight: Sunday Satsang, 10:00 AM - 12:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes servicesUp {
          from { opacity: 0; transform: translateY(35px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes servicesLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes servicesRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .services-rise,
        .services-stagger {
          opacity: 0;
          transform: translateY(35px);
        }
        .services-left {
          opacity: 0;
          transform: translateX(-60px);
        }
        .services-right {
          opacity: 0;
          transform: translateX(60px);
        }
        .services-rise-active {
          animation: servicesUp 0.9s ease-out forwards;
        }
        .services-left-active {
          animation: servicesLeft 0.95s ease-out forwards;
        }
        .services-right-active {
          animation: servicesRight 0.95s ease-out forwards;
        }
        .services-stagger-active {
          animation: servicesUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default ServicesPage

