import { FaOm, FaHeart, FaUsers, FaCalendarAlt } from 'react-icons/fa'
import { GiMeditation } from 'react-icons/gi'
import { useEffect, useState } from 'react'
import pic7 from '../assets/pic7.png'
import caro7 from '../assets/caro7.jpg'
import pic3 from '../assets/pic3.jpg'

function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement
          const slideLeftElements = section.querySelectorAll('.slide-left')
          const slideRightElements = section.querySelectorAll('.slide-right')
          const slideUpElements = section.querySelectorAll('.slide-up')
          const staggerElements = section.querySelectorAll('.stagger-fade')

          if (entry.isIntersecting) {
            section.classList.add('animate-in')
            slideLeftElements.forEach(el => el.classList.add('slide-left-active'))
            slideRightElements.forEach(el => el.classList.add('slide-right-active'))
            slideUpElements.forEach(el => el.classList.add('slide-up-active'))
            staggerElements.forEach(el => el.classList.add('stagger-active'))
          } else {
            section.classList.remove('animate-in')
            slideLeftElements.forEach(el => el.classList.remove('slide-left-active'))
            slideRightElements.forEach(el => el.classList.remove('slide-right-active'))
            slideUpElements.forEach(el => el.classList.remove('slide-up-active'))
            staggerElements.forEach(el => el.classList.remove('stagger-active'))
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    )

    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-[#FFF8E7]">
      {/* Hero */}
      <section className="relative h-screen flex items-center bg-gradient-to-br from-[#8B1538] to-[#6B1028] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={pic7} alt="Temple" className="w-full h-full object-cover animate-[zoom_20s_ease-in-out_infinite]" style={{animation: 'zoom 20s ease-in-out infinite'}} />
        </div>
        <div className={`relative z-10 max-w-7xl mx-auto px-6 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-7xl md:text-9xl font-serif font-light mb-6 animate-[fadeIn_1s_ease-out]">VelMont</h1>
          <h2 className="text-4xl md:text-6xl font-serif text-[#D4AF37] mb-8 animate-[fadeIn_1.2s_ease-out]">Spiritual Center</h2>
          <div className="w-32 h-px bg-[#D4AF37] mb-8 animate-[slideIn_1.4s_ease-out]"></div>
          <p className="text-2xl md:text-3xl font-light max-w-3xl mb-12 leading-relaxed animate-[fadeIn_1.6s_ease-out]">A sacred sanctuary for spiritual growth, cultural enrichment, and community connection</p>
          <div className="flex flex-wrap gap-6 animate-[fadeIn_1.8s_ease-out]">
            <button className="px-12 py-5 bg-[#D4AF37] text-[#2C2C2C] font-semibold text-lg hover:bg-[#C49F27] hover:scale-105 transition-all duration-300">Explore</button>
            <button className="px-12 py-5 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold text-lg hover:bg-[#D4AF37] hover:text-[#2C2C2C] hover:scale-105 transition-all duration-300">Contact</button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-32 bg-white fade-in-section opacity-0 transition-all duration-1000">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group slide-left">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#8B1538]/20 to-[#D4AF37]/20 blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <img src={caro7} alt="Temple" className="relative w-full h-[600px] object-cover shadow-2xl group-hover:scale-105 group-hover:rotate-2 transition-all duration-700" />
            </div>
            <div className="space-y-6 slide-right">
              <span className="text-xs font-bold tracking-[0.3em] text-[#8B1538] uppercase">About VelMont</span>
              <h2 className="text-6xl font-serif font-light text-[#8B1538]">A Sacred Sanctuary</h2>
              <div className="w-24 h-px bg-[#D4AF37]"></div>
              <p className="text-xl text-gray-700 leading-relaxed">Welcome to VelMont Spiritual Center, a Non-Profit Organization in the Bay Area, California, dedicated to cultivating a space for spiritual, cultural, educational, and meditative enrichment.</p>
              <p className="text-lg text-gray-600 leading-relaxed">We create a welcoming sanctuary where people from all backgrounds can explore their spiritual journey, connect with nature, and build meaningful community bonds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="py-32 bg-[#FFF8E7] fade-in-section opacity-0 transition-all duration-1000">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 slide-up">
            <span className="text-xs font-bold tracking-[0.3em] text-[#8B1538] uppercase">Our Foundation</span>
            <h2 className="text-6xl font-serif font-light text-[#8B1538] mt-6 mb-6">Vision & Mission</h2>
            <div className="w-24 h-px bg-[#D4AF37] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-white p-16 shadow-xl border-l-4 border-[#D4AF37] hover:shadow-2xl hover:-translate-y-2 hover:rotate-1 transition-all duration-500 slide-left">
              <h3 className="text-5xl font-serif font-light text-[#8B1538] mb-8">Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">Establish an open-space spiritual center where the community can embrace nature through hiking, yoga, meditation, and prayer. Our center harmoniously integrates local practices with global cultural values, creating a welcoming sanctuary for all.</p>
            </div>
            <div className="bg-white p-16 shadow-xl border-l-4 border-[#8B1538] hover:shadow-2xl hover:-translate-y-2 hover:-rotate-1 transition-all duration-500 slide-right">
              <h3 className="text-5xl font-serif font-light text-[#8B1538] mb-8">Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">Create a peaceful and inclusive sanctuary that fosters deep connection to nature and spirit. Through holistic practices, we provide a space for rejuvenation, inner peace, and spiritual well-being for all who seek it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event */}
      <section className="py-32 bg-[#8B1538] text-white fade-in-section opacity-0 transition-all duration-1000">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-6 slide-left">
              <span className="text-xs font-bold tracking-[0.3em] text-[#D4AF37] uppercase">Upcoming Event</span>
              <h2 className="text-7xl font-serif font-light">Maha Shivaratri</h2>
              <div className="w-24 h-px bg-[#D4AF37]"></div>
              <div className="flex items-center gap-4">
                <FaCalendarAlt className="text-3xl text-[#D4AF37] animate-pulse" />
                <p className="text-2xl">February 15, 2025 | 3:00 PM - 5:00 PM</p>
              </div>
              <p className="text-xl leading-relaxed">Join us for a sacred celebration with non-stop satsang. Experience the divine energy at sunset in our open-space spiritual center. A night of devotion, music, and spiritual awakening.</p>
              <button className="px-12 py-5 bg-[#D4AF37] text-[#2C2C2C] font-semibold text-lg hover:bg-[#C49F27] hover:scale-105 hover:shadow-2xl transition-all duration-300">Register Now</button>
            </div>
            <div className="relative group slide-right">
              <div className="absolute -inset-4 bg-[#D4AF37]/30 blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <img src={pic3} alt="Event" className="relative w-full h-[600px] object-cover shadow-2xl group-hover:scale-105 group-hover:-rotate-2 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 bg-white fade-in-section opacity-0 transition-all duration-1000">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 slide-up">
            <span className="text-xs font-bold tracking-[0.3em] text-[#8B1538] uppercase">Our Services</span>
            <h2 className="text-6xl font-serif font-light text-[#8B1538] mt-6 mb-6">What We Offer</h2>
            <div className="w-24 h-px bg-[#D4AF37] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { Icon: FaOm, title: 'Daily Worship', desc: 'Traditional rituals and prayers conducted with devotion and authenticity' },
              { Icon: GiMeditation, title: 'Meditation & Yoga', desc: 'Guided sessions for spiritual wellness and inner peace' },
              { Icon: FaUsers, title: 'Community', desc: 'Cultural programs and educational workshops for all ages' }
            ].map((item, i) => (
              <div key={i} className="group text-center p-12 bg-[#FFF8E7] hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 stagger-fade" style={{animationDelay: `${i * 200}ms`}}>
                <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-[#8B1538] to-[#D4AF37] rounded-full mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <item.Icon className="text-5xl text-white group-hover:-rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-3xl font-serif font-light text-[#8B1538] mb-6">{item.title}</h3>
                <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-[#FFF8E7] fade-in-section opacity-0 transition-all duration-1000">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            {[
              { number: '7,000+', label: 'Lives Touched' },
              { number: '200+', label: 'Volunteers' },
              { number: '15+', label: 'Projects Completed' }
            ].map((stat, i) => (
              <div key={i} className="hover:scale-110 transition-transform duration-300 stagger-fade" style={{animationDelay: `${i * 150}ms`}}>
                <div className="text-8xl font-serif font-light text-[#8B1538] mb-4 counter-animate">{stat.number}</div>
                <div className="w-20 h-px bg-[#D4AF37] mx-auto mb-4"></div>
                <p className="text-xl text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-br from-[#8B1538] to-[#6B1028] text-white text-center fade-in-section opacity-0 transition-all duration-1000">
        <div className="max-w-4xl mx-auto px-6 slide-up">
          <FaHeart className="text-8xl mx-auto mb-10 text-[#D4AF37] animate-[heartbeat_2s_ease-in-out_infinite]" />
          <h2 className="text-6xl font-serif font-light mb-8">Support Our Mission</h2>
          <div className="w-32 h-px bg-[#D4AF37] mx-auto mb-10"></div>
          <p className="text-2xl leading-relaxed mb-12">Your contribution helps us serve the community and preserve sacred traditions for future generations</p>
          <button className="px-16 py-6 bg-[#D4AF37] text-[#2C2C2C] font-semibold text-xl hover:bg-[#C49F27] hover:scale-110 hover:shadow-2xl transition-all duration-300">Donate Now</button>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { width: 0; }
          to { width: 8rem; }
        }
        @keyframes zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          10%, 30% { transform: scale(1.1); }
          20%, 40% { transform: scale(1); }
        }
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .slide-left {
          opacity: 0;
          transform: translateX(-100px);
        }
        .slide-left-active {
          animation: slideLeft 1s ease-out forwards;
        }
        .slide-right {
          opacity: 0;
          transform: translateX(100px);
        }
        .slide-right-active {
          animation: slideRight 1s ease-out forwards;
        }
        .slide-up {
          opacity: 0;
          transform: translateY(50px);
        }
        .slide-up-active {
          animation: slideUp 1s ease-out forwards;
        }
        .stagger-fade {
          opacity: 0;
        }
        .stagger-active {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .counter-animate {
          animation: slideUp 1s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default Home
