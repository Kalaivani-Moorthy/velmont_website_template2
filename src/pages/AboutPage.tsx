import { useEffect } from 'react'
import { FaHeart, FaHandsHelping, FaStar, FaMountain, FaOm, FaGlobeAmericas, FaBook, FaSeedling } from 'react-icons/fa'
import { GiMeditation } from 'react-icons/gi'
import caro1 from '../assets/caro1.jpg'
import caro7 from '../assets/caro7.jpg'
import pic3 from '../assets/pic3.jpg'

function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement
          const revealElements = section.querySelectorAll('.about-reveal')
          const revealLeftElements = section.querySelectorAll('.about-reveal-left')
          const revealRightElements = section.querySelectorAll('.about-reveal-right')
          const staggerElements = section.querySelectorAll('.about-stagger')

          if (entry.isIntersecting) {
            section.classList.add('about-visible')
            revealElements.forEach((el) => el.classList.add('about-reveal-active'))
            revealLeftElements.forEach((el) => el.classList.add('about-reveal-left-active'))
            revealRightElements.forEach((el) => el.classList.add('about-reveal-right-active'))
            staggerElements.forEach((el) => el.classList.add('about-stagger-active'))
          } else {
            section.classList.remove('about-visible')
            revealElements.forEach((el) => el.classList.remove('about-reveal-active'))
            revealLeftElements.forEach((el) => el.classList.remove('about-reveal-left-active'))
            revealRightElements.forEach((el) => el.classList.remove('about-reveal-right-active'))
            staggerElements.forEach((el) => el.classList.remove('about-stagger-active'))
          }
        })
      },
      { threshold: 0.25, rootMargin: '0px 0px -8% 0px' }
    )

    document.querySelectorAll('.about-observe').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="pt-20 bg-[#FFF8E7]">
      <section className="about-observe relative overflow-hidden bg-[#1E1324] text-white">
        <div className="absolute -top-20 right-[-120px] h-80 w-80 rounded-full bg-[#D4AF37]/20 blur-3xl animate-[aboutFloat_9s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-120px] left-[-80px] h-96 w-96 rounded-full bg-[#8B1538]/50 blur-3xl animate-[aboutFloat_11s_ease-in-out_infinite]"></div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:py-28">
          <div className="about-reveal-left flex flex-col justify-center">
            <span className="mb-6 w-fit rounded-full border border-[#D4AF37]/40 px-4 py-2 text-xs tracking-[0.25em] text-[#D4AF37]">
              VELMONT STORY
            </span>
            <h1 className="mb-8 text-6xl font-serif font-light leading-tight md:text-8xl">About VelMont</h1>
            <p className="max-w-xl text-xl leading-relaxed text-[#E8DDEB]">
              A spiritual destination designed for stillness, culture, and community transformation.
            </p>
            <div className="mt-10 flex gap-8">
              <div>
                <p className="text-4xl font-serif text-[#D4AF37]">7,000+</p>
                <p className="text-sm uppercase tracking-[0.2em] text-[#D9CDE0]">Lives Touched</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-[#D4AF37]">200+</p>
                <p className="text-sm uppercase tracking-[0.2em] text-[#D9CDE0]">Volunteers</p>
              </div>
            </div>
          </div>

          <div className="about-reveal-right relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#D4AF37]/40 via-[#8B1538]/30 to-[#1E1324] blur-2xl"></div>
            <img
              src={caro1}
              alt="VelMont Spiritual Grounds"
              className="relative h-[520px] w-full rounded-[2.5rem] object-cover shadow-2xl ring-1 ring-white/10"
            />
            <div className="absolute bottom-8 left-8 max-w-xs rounded-2xl border border-white/20 bg-black/35 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">Bay Area, California</p>
              <p className="mt-2 text-lg leading-snug text-white">Rooted in tradition, built for modern spiritual life.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-observe bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_1fr]">
            <div className="about-reveal-left">
              <h2 className="text-5xl font-serif font-light text-[#8B1538] md:text-6xl">A Sanctuary With Purpose</h2>
              <div className="my-8 h-px w-28 bg-[#D4AF37]"></div>
              <p className="mb-6 text-xl leading-relaxed text-gray-700">
                VelMont Spiritual Center is a non-profit in the Bay Area focused on spiritual, cultural, educational,
                and meditative enrichment.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Our vision combines nature, tradition, and inclusive community practice so each person can reconnect
                with inner peace in a meaningful way.
              </p>
              <div className="mt-10 rounded-2xl border-l-4 border-[#D4AF37] bg-[#FFF8E7] p-6 shadow-lg">
                <p className="text-sm uppercase tracking-[0.2em] text-[#8B1538]">Core Thought</p>
                <p className="mt-3 text-2xl font-serif font-light text-[#8B1538]">
                  "Spiritual life grows deepest where people feel they belong."
                </p>
              </div>
            </div>

            <div className="about-reveal-right relative">
              <img src={caro7} alt="Temple at VelMont" className="h-[580px] w-full rounded-[2rem] object-cover shadow-2xl" />
              <img
                src={pic3}
                alt="VelMont gathering"
                className="absolute -bottom-8 -left-10 hidden h-52 w-64 rounded-2xl object-cover shadow-xl ring-4 ring-white lg:block"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-observe bg-[#FFF8E7] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="about-reveal text-center mb-16">
            <h2 className="mb-6 text-5xl font-serif font-light text-[#8B1538] md:text-6xl">Pillars of VelMont</h2>
            <div className="mx-auto h-px w-24 bg-[#D4AF37]"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { Icon: FaHeart, title: 'Compassion First', desc: 'Every event and service starts with care, dignity, and heart-led support.' },
              { Icon: GiMeditation, title: 'Inner Balance', desc: 'Meditation, yoga, and prayer are offered as practical daily tools for calm.' },
              { Icon: FaGlobeAmericas, title: 'Open Community', desc: 'Cultural inclusion and global values shape how we gather and grow together.' }
            ].map((stat, i) => (
              <div
                key={i}
                className="about-stagger rounded-3xl border border-[#8B1538]/10 bg-white p-10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={{ animationDelay: `${i * 180}ms` }}
              >
                <stat.Icon className="mb-6 text-5xl text-[#8B1538]" />
                <h3 className="mb-4 text-3xl font-serif font-light text-[#8B1538]">{stat.title}</h3>
                <div className="mb-5 h-px w-14 bg-[#D4AF37]"></div>
                <p className="text-lg leading-relaxed text-gray-600">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-observe bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="about-reveal text-center mb-16">
            <h2 className="mb-6 text-5xl font-serif font-light text-[#8B1538] md:text-6xl">Journey and Initiatives</h2>
            <div className="mx-auto h-px w-24 bg-[#D4AF37]"></div>
          </div>
          <div className="mb-16 grid gap-10 lg:grid-cols-3">
            {[
              { Icon: FaHandsHelping, title: 'Community Service', value: '200+ Volunteers' },
              { Icon: FaStar, title: 'Active Projects', value: '15+ Running Initiatives' },
              { Icon: FaHeart, title: 'Community Impact', value: '7,000+ Lives Touched' }
            ].map((item, i) => (
              <div
                key={i}
                className="about-stagger rounded-2xl border border-[#D4AF37]/30 bg-[#FFF8E7] p-8 text-center"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <item.Icon className="mx-auto mb-4 text-4xl text-[#8B1538]" />
                <p className="text-sm uppercase tracking-[0.2em] text-[#8B1538]">{item.title}</p>
                <p className="mt-2 text-2xl font-serif text-[#8B1538]">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {[
              { Icon: FaMountain, title: 'Nature Immersion', desc: 'Hiking and outdoor walking experiences that connect individuals with the healing power of nature' },
              { Icon: GiMeditation, title: 'Holistic Wellness', desc: 'Regular yoga, meditation, and prayer sessions for physical, mental, and spiritual well-being' },
              { Icon: FaOm, title: 'Hindu Prayer Hall', desc: 'A dedicated sacred space for worship, reflection, and spiritual practice' },
              { Icon: FaGlobeAmericas, title: 'Cultural Integration', desc: 'Celebrating diverse values and spiritual practices from around the world' },
              { Icon: FaBook, title: 'Community Education', desc: 'Educational workshops, retreats, and events promoting personal growth' },
              { Icon: FaSeedling, title: 'Eco-Conscious', desc: 'Sustainable practices and land stewardship in harmony with nature' }
            ].map((item, i) => (
              <div
                key={i}
                className="about-stagger group rounded-3xl border border-[#8B1538]/10 bg-white p-10 shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:shadow-xl"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <item.Icon className="mb-6 text-5xl text-[#D4AF37] transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mb-5 text-3xl font-serif font-light text-[#8B1538]">{item.title}</h3>
                <div className="mb-5 h-px w-16 bg-[#D4AF37]"></div>
                <p className="text-lg leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-observe bg-gradient-to-br from-[#8B1538] to-[#5E0D24] py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="about-reveal">
            <h2 className="mb-6 text-5xl font-serif font-light md:text-6xl">Walk This Path With Us</h2>
            <div className="mx-auto mb-8 h-px w-24 bg-[#D4AF37]"></div>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-[#F2EAF5]">
              Join our spiritual programs, volunteer in community initiatives, and help us build a living sanctuary for future generations.
            </p>
            <button className="mt-10 rounded-full bg-[#D4AF37] px-12 py-4 text-lg font-semibold text-[#2C2C2C] transition-all duration-300 hover:scale-105 hover:bg-[#C49F27]">
              Become Part of VelMont
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes aboutFadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes aboutFadeLeft {
          from { opacity: 0; transform: translateX(-70px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes aboutFadeRight {
          from { opacity: 0; transform: translateX(70px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes aboutFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
        .about-reveal {
          opacity: 0;
          transform: translateY(40px);
        }
        .about-reveal-left {
          opacity: 0;
          transform: translateX(-70px);
        }
        .about-reveal-right {
          opacity: 0;
          transform: translateX(70px);
        }
        .about-stagger {
          opacity: 0;
          transform: translateY(28px);
        }
        .about-reveal-active {
          animation: aboutFadeUp 0.9s ease-out forwards;
        }
        .about-reveal-left-active {
          animation: aboutFadeLeft 0.95s ease-out forwards;
        }
        .about-reveal-right-active {
          animation: aboutFadeRight 0.95s ease-out forwards;
        }
        .about-stagger-active {
          animation: aboutFadeUp 0.85s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default AboutPage
