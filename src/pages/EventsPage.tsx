import { useEffect } from 'react'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaStar, FaHandsHelping, FaPray } from 'react-icons/fa'
import pic3 from '../assets/pic3.jpg'
import caro2 from '../assets/caro2.png'
import pic8 from '../assets/pic8.jpg'

function EventsPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement
          const rise = section.querySelectorAll('.events-rise')
          const left = section.querySelectorAll('.events-left')
          const right = section.querySelectorAll('.events-right')
          const stagger = section.querySelectorAll('.events-stagger')

          if (entry.isIntersecting) {
            rise.forEach((el) => el.classList.add('events-rise-active'))
            left.forEach((el) => el.classList.add('events-left-active'))
            right.forEach((el) => el.classList.add('events-right-active'))
            stagger.forEach((el) => el.classList.add('events-stagger-active'))
          } else {
            rise.forEach((el) => el.classList.remove('events-rise-active'))
            left.forEach((el) => el.classList.remove('events-left-active'))
            right.forEach((el) => el.classList.remove('events-right-active'))
            stagger.forEach((el) => el.classList.remove('events-stagger-active'))
          }
        })
      },
      { threshold: 0.22, rootMargin: '0px 0px -10% 0px' }
    )

    document.querySelectorAll('.events-observe').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const upcomingEvents = [
    {
      title: 'Maha Shivaratri Night Satsang',
      date: 'March 7, 2026',
      time: '6:00 PM - 11:30 PM',
      location: 'VelMont Main Prayer Hall',
      desc: 'An evening of devotional chanting, guided meditation, and sacred rituals dedicated to Lord Shiva.',
      tag: 'Major Festival'
    },
    {
      title: 'Full Moon Meditation Circle',
      date: 'March 14, 2026',
      time: '7:00 PM - 8:30 PM',
      location: 'Garden Courtyard',
      desc: 'A guided meditation experience under the full moon focused on stillness, reflection, and gratitude.',
      tag: 'Monthly'
    },
    {
      title: 'Family Cultural Evening',
      date: 'March 28, 2026',
      time: '5:00 PM - 8:00 PM',
      location: 'Community Pavilion',
      desc: 'Music, storytelling, and interactive activities designed for families to celebrate heritage together.',
      tag: 'Community'
    }
  ]

  return (
    <div className="pt-20 bg-[#F8F4ED]">
      <section className="events-observe relative overflow-hidden bg-gradient-to-br from-[#8B1538] via-[#6E112C] to-[#2A1A25] text-white">
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#D4AF37]/30 blur-3xl"></div>
        <div className="absolute -left-20 bottom-[-120px] h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <div className="events-left">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#D4AF37]">VelMont Gatherings</p>
            <h1 className="mb-8 text-6xl font-serif font-light leading-tight md:text-8xl">Events</h1>
            <p className="max-w-xl text-xl leading-relaxed text-[#F0E8F3]">
              Join sacred festivals, meditation circles, and cultural programs designed to deepen spiritual connection and community bonds.
            </p>
            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/40 px-5 py-3 text-sm">
              <FaStar className="text-[#D4AF37]" />
              Registration open for March programs
            </div>
          </div>

          <div className="events-right relative">
            <img src={pic3} alt="Spiritual event gathering" className="h-[430px] w-full rounded-[2rem] object-cover shadow-2xl" />
            <div className="absolute -bottom-8 -left-10 hidden rounded-2xl bg-white/90 p-6 text-[#8B1538] shadow-xl lg:block">
              <p className="text-xs uppercase tracking-[0.25em] text-[#6E112C]">Next Event</p>
              <p className="mt-2 text-2xl font-serif">Maha Shivaratri</p>
              <p className="mt-2 text-sm">March 7, 2026 | 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      <section className="events-observe bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="events-rise mb-14 text-center">
            <h2 className="mb-5 text-5xl font-serif font-light text-[#8B1538] md:text-6xl">Upcoming Events</h2>
            <div className="mx-auto h-px w-24 bg-[#D4AF37]"></div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <article
                key={event.title}
                className="events-stagger rounded-3xl border border-[#8B1538]/10 bg-[#FFF8E7] p-8 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <p className="mb-5 inline-block rounded-full bg-[#8B1538] px-4 py-1 text-xs uppercase tracking-[0.2em] text-white">{event.tag}</p>
                <h3 className="mb-4 text-3xl font-serif font-light text-[#8B1538]">{event.title}</h3>
                <div className="mb-5 h-px w-16 bg-[#D4AF37]"></div>
                <div className="space-y-3 text-sm text-gray-700">
                  <p className="flex items-center gap-3"><FaCalendarAlt className="text-[#8B1538]" /> {event.date}</p>
                  <p className="flex items-center gap-3"><FaClock className="text-[#8B1538]" /> {event.time}</p>
                  <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-[#8B1538]" /> {event.location}</p>
                </div>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">{event.desc}</p>
                <button className="mt-8 rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-[#2C2C2C] transition-all duration-300 hover:scale-105 hover:bg-[#C49F27]">
                  Reserve Spot
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="events-observe bg-[#F4EBDD] py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_1fr]">
          <div className="events-left">
            <img src={caro2} alt="Community devotional event" className="h-[520px] w-full rounded-[2rem] object-cover shadow-xl" />
          </div>
          <div className="events-right">
            <h2 className="mb-5 text-5xl font-serif font-light text-[#8B1538] md:text-6xl">What To Expect</h2>
            <div className="mb-8 h-px w-24 bg-[#D4AF37]"></div>
            <div className="space-y-5">
              {[
                { Icon: FaPray, title: 'Sacred Rituals', desc: 'Authentic pooja, chanting, and spiritual guidance by experienced facilitators.' },
                { Icon: FaHandsHelping, title: 'Community Connection', desc: 'Warm spaces for families, elders, youth, and visitors to connect.' },
                { Icon: FaStar, title: 'Guided Participation', desc: 'Accessible formats for newcomers and long-time practitioners alike.' }
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="events-stagger rounded-2xl border border-[#8B1538]/15 bg-white p-6"
                  style={{ animationDelay: `${index * 140}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <item.Icon className="mt-1 text-2xl text-[#8B1538]" />
                    <div>
                      <h3 className="text-2xl font-serif text-[#8B1538]">{item.title}</h3>
                      <p className="mt-2 text-lg text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="events-observe relative overflow-hidden bg-[#1F2E33] py-24 text-white">
        <img src={pic8} alt="Temple event ambiance" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-[#1F2E33]/80"></div>
        <div className="events-rise relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-5xl font-serif font-light md:text-6xl">Host Your Spiritual Gathering</h2>
          <div className="mx-auto mb-8 h-px w-24 bg-[#D4AF37]"></div>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-[#DCE6E9]">
            Looking to organize a devotional, cultural, or wellness event? Our team can help coordinate venue, rituals, and volunteer support.
          </p>
          <button className="mt-10 rounded-full bg-[#D4AF37] px-12 py-4 text-lg font-semibold text-[#2C2C2C] transition-all duration-300 hover:scale-105 hover:bg-[#C49F27]">
            Request Event Support
          </button>
        </div>
      </section>

      <style>{`
        @keyframes eventsUp {
          from { opacity: 0; transform: translateY(35px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes eventsLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes eventsRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .events-rise,
        .events-stagger {
          opacity: 0;
          transform: translateY(35px);
        }
        .events-left {
          opacity: 0;
          transform: translateX(-60px);
        }
        .events-right {
          opacity: 0;
          transform: translateX(60px);
        }
        .events-rise-active {
          animation: eventsUp 0.9s ease-out forwards;
        }
        .events-left-active {
          animation: eventsLeft 0.95s ease-out forwards;
        }
        .events-right-active {
          animation: eventsRight 0.95s ease-out forwards;
        }
        .events-stagger-active {
          animation: eventsUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default EventsPage