import { useEffect } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa'
import pic4 from '../assets/pic4.jpg'

function ContactPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement
          const up = section.querySelectorAll('.contact-up')
          const left = section.querySelectorAll('.contact-left')
          const right = section.querySelectorAll('.contact-right')
          const stagger = section.querySelectorAll('.contact-stagger')

          if (entry.isIntersecting) {
            up.forEach((el) => el.classList.add('contact-up-active'))
            left.forEach((el) => el.classList.add('contact-left-active'))
            right.forEach((el) => el.classList.add('contact-right-active'))
            stagger.forEach((el) => el.classList.add('contact-stagger-active'))
          } else {
            up.forEach((el) => el.classList.remove('contact-up-active'))
            left.forEach((el) => el.classList.remove('contact-left-active'))
            right.forEach((el) => el.classList.remove('contact-right-active'))
            stagger.forEach((el) => el.classList.remove('contact-stagger-active'))
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    )

    document.querySelectorAll('.contact-observe').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="pt-20 bg-[#F8F2E8]">
      <section className="contact-observe relative overflow-hidden bg-[#1C3144] text-white">
        <div className="absolute inset-0 opacity-25">
          <img src={pic4} alt="Contact VelMont" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C3144]/90 via-[#1C3144]/75 to-[#7A1F3D]/75"></div>
        <div className="contact-up relative mx-auto max-w-6xl px-6 py-24 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.34em] text-[#D4AF37]">Reach VelMont</p>
          <h1 className="mb-6 text-6xl font-serif font-light md:text-8xl">Contact Us</h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-[#E2ECF3]">
            Whether you are planning a visit, joining a program, or supporting our mission, we are here to help.
          </p>
        </div>
      </section>

      <section className="contact-observe bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              { Icon: FaMapMarkerAlt, title: 'Address', text: 'VelMont Spiritual Center, Bay Area, California' },
              { Icon: FaPhone, title: 'Phone', text: '+1 (925) 385-6225' },
              { Icon: FaEnvelope, title: 'Email', text: 'contact@velmont.org' },
              { Icon: FaClock, title: 'Hours', text: 'Sunday 10:00 AM - 12:30 PM' }
            ].map((item, i) => (
              <div
                key={i}
                className="contact-stagger rounded-2xl border border-[#8B1538]/10 bg-[#FFF8E7] p-7 shadow-sm"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <item.Icon className="mb-4 text-3xl text-[#8B1538]" />
                <h3 className="mb-2 text-2xl font-serif text-[#8B1538]">{item.title}</h3>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-observe bg-[#F8F2E8] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="contact-left rounded-3xl bg-[#8B1538] p-10 text-white shadow-xl">
            <h2 className="mb-5 text-5xl font-serif font-light">Plan Your Visit</h2>
            <div className="mb-8 h-px w-20 bg-[#D4AF37]"></div>
            <p className="mb-8 text-lg leading-relaxed text-[#F5EAF3]">
              Share your interest and our team will guide you on programs, schedule details, and visiting arrangements.
            </p>
            <div className="space-y-4">
              {[
                'General inquiries and first-time visitor support',
                'Program registration and volunteer sign-up',
                'Event and cultural partnership requests'
              ].map((text, i) => (
                <div key={i} className="contact-stagger flex items-start gap-3" style={{ animationDelay: `${i * 140}ms` }}>
                  <FaPaperPlane className="mt-1 text-[#D4AF37]" />
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-right rounded-3xl bg-white p-10 shadow-xl">
            <h3 className="mb-4 text-4xl font-serif font-light text-[#8B1538]">Send Message</h3>
            <div className="mb-8 h-px w-20 bg-[#D4AF37]"></div>
            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="rounded-xl border border-gray-200 px-5 py-3 outline-none transition-colors focus:border-[#D4AF37]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="rounded-xl border border-gray-200 px-5 py-3 outline-none transition-colors focus:border-[#D4AF37]"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-200 px-5 py-3 outline-none transition-colors focus:border-[#D4AF37]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-gray-200 px-5 py-3 outline-none transition-colors focus:border-[#D4AF37]"
              />
              <textarea
                rows={6}
                placeholder="How can we help?"
                className="w-full resize-none rounded-xl border border-gray-200 px-5 py-3 outline-none transition-colors focus:border-[#D4AF37]"
              ></textarea>
              <button
                type="submit"
                className="w-full rounded-full bg-[#8B1538] px-6 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#6B1028]"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes contactUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes contactLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes contactRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .contact-up,
        .contact-stagger {
          opacity: 0;
          transform: translateY(32px);
        }
        .contact-left {
          opacity: 0;
          transform: translateX(-60px);
        }
        .contact-right {
          opacity: 0;
          transform: translateX(60px);
        }
        .contact-up-active {
          animation: contactUp 0.85s ease-out forwards;
        }
        .contact-left-active {
          animation: contactLeft 0.9s ease-out forwards;
        }
        .contact-right-active {
          animation: contactRight 0.9s ease-out forwards;
        }
        .contact-stagger-active {
          animation: contactUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default ContactPage

