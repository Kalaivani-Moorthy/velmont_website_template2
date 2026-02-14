import { useEffect } from 'react'
import { FaHandHoldingHeart, FaSeedling, FaSchool, FaUtensils, FaCheckCircle } from 'react-icons/fa'
import pic2 from '../assets/pic2.jpg'
import pic7 from '../assets/pic7.png'

function DonatePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement
          const rise = section.querySelectorAll('.donate-rise')
          const left = section.querySelectorAll('.donate-left')
          const right = section.querySelectorAll('.donate-right')
          const stagger = section.querySelectorAll('.donate-stagger')

          if (entry.isIntersecting) {
            rise.forEach((el) => el.classList.add('donate-rise-active'))
            left.forEach((el) => el.classList.add('donate-left-active'))
            right.forEach((el) => el.classList.add('donate-right-active'))
            stagger.forEach((el) => el.classList.add('donate-stagger-active'))
          } else {
            rise.forEach((el) => el.classList.remove('donate-rise-active'))
            left.forEach((el) => el.classList.remove('donate-left-active'))
            right.forEach((el) => el.classList.remove('donate-right-active'))
            stagger.forEach((el) => el.classList.remove('donate-stagger-active'))
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    )

    document.querySelectorAll('.donate-observe').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="pt-20 bg-[#FFF9EE]">
      <section className="donate-observe relative overflow-hidden bg-[#2B1730] text-white">
        <div className="absolute inset-0 opacity-20">
          <img src={pic7} alt="Temple background" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <div className="donate-left">
            <p className="mb-6 text-xs uppercase tracking-[0.34em] text-[#D4AF37]">Support VelMont</p>
            <h1 className="mb-8 text-6xl font-serif font-light leading-tight md:text-8xl">Donate</h1>
            <p className="max-w-xl text-xl leading-relaxed text-[#E8DFEA]">
              Your contribution powers spiritual programs, community care, and sacred spaces where people heal and grow.
            </p>
            <div className="mt-10 flex gap-6">
              <button className="rounded-full bg-[#D4AF37] px-8 py-4 text-lg font-semibold text-[#2C2C2C] transition-all duration-300 hover:scale-105 hover:bg-[#C49F27]">
                Donate Now
              </button>
              <button className="rounded-full border border-[#D4AF37] px-8 py-4 text-lg text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#2C2C2C]">
                Become Sponsor
              </button>
            </div>
          </div>

          <div className="donate-right relative">
            <img src={pic2} alt="Community support" className="h-[460px] w-full rounded-[2rem] object-cover shadow-2xl" />
            <div className="absolute -bottom-7 right-6 rounded-2xl bg-white p-6 text-[#8B1538] shadow-xl">
              <p className="text-sm uppercase tracking-[0.2em]">Impact This Year</p>
              <p className="text-4xl font-serif">7,000+ Lives</p>
            </div>
          </div>
        </div>
      </section>

      <section className="donate-observe bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="donate-rise mb-14 text-center">
            <h2 className="mb-6 text-5xl font-serif font-light text-[#8B1538] md:text-6xl">Choose Your Contribution</h2>
            <div className="mx-auto h-px w-24 bg-[#D4AF37]"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: 'Monthly Supporter', amount: '$25/mo', desc: 'Sustain meditation and weekly spiritual gatherings.' },
              { title: 'Community Builder', amount: '$100/mo', desc: 'Fund outreach, youth education, and prayer resources.' },
              { title: 'Temple Patron', amount: '$500/mo', desc: 'Drive long-term growth, infrastructure, and major events.' }
            ].map((tier, i) => (
              <article
                key={i}
                className="donate-stagger rounded-3xl border border-[#8B1538]/10 bg-[#FFF8E7] p-10 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={{ animationDelay: `${i * 140}ms` }}
              >
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8B1538]">{tier.title}</p>
                <p className="mb-5 text-5xl font-serif font-light text-[#8B1538]">{tier.amount}</p>
                <div className="mb-5 h-px w-16 bg-[#D4AF37]"></div>
                <p className="mb-8 text-lg leading-relaxed text-gray-600">{tier.desc}</p>
                <button className="w-full rounded-full bg-[#8B1538] py-3 text-white transition-colors hover:bg-[#6B1028]">
                  Select Plan
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="donate-observe bg-[#F2E9D9] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="donate-left rounded-3xl bg-white p-10 shadow-lg">
              <h3 className="mb-4 text-4xl font-serif font-light text-[#8B1538]">Where Your Donation Goes</h3>
              <div className="mb-6 h-px w-16 bg-[#D4AF37]"></div>
              <div className="space-y-4">
                {[
                  { Icon: FaHandHoldingHeart, text: 'Spiritual counseling and prayer services' },
                  { Icon: FaSchool, text: 'Workshops and educational cultural programs' },
                  { Icon: FaUtensils, text: 'Community meals and outreach support' },
                  { Icon: FaSeedling, text: 'Eco-conscious grounds and nature retreats' }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="donate-stagger flex items-center gap-4 rounded-xl border border-[#8B1538]/10 bg-[#FFF8E7] px-4 py-3"
                    style={{ animationDelay: `${i * 120}ms` }}
                  >
                    <item.Icon className="text-[#8B1538]" />
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="donate-right rounded-3xl bg-[#8B1538] p-10 text-white shadow-lg">
              <h3 className="mb-4 text-4xl font-serif font-light">Transparency Promise</h3>
              <div className="mb-6 h-px w-16 bg-[#D4AF37]"></div>
              <p className="mb-8 text-lg text-[#F3EAF6]">
                We operate with accountable stewardship. Contributions are directed to active programs with clear community outcomes.
              </p>
              <div className="space-y-4">
                {[
                  'Quarterly impact updates',
                  'Program-focused fund allocation',
                  'Volunteer-led operations support',
                  'Long-term sustainability planning'
                ].map((text, i) => (
                  <div key={i} className="donate-stagger flex items-center gap-3" style={{ animationDelay: `${i * 110}ms` }}>
                    <FaCheckCircle className="text-[#D4AF37]" />
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes donateUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes donateLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes donateRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .donate-rise,
        .donate-stagger {
          opacity: 0;
          transform: translateY(32px);
        }
        .donate-left {
          opacity: 0;
          transform: translateX(-60px);
        }
        .donate-right {
          opacity: 0;
          transform: translateX(60px);
        }
        .donate-rise-active {
          animation: donateUp 0.9s ease-out forwards;
        }
        .donate-left-active {
          animation: donateLeft 0.95s ease-out forwards;
        }
        .donate-right-active {
          animation: donateRight 0.95s ease-out forwards;
        }
        .donate-stagger-active {
          animation: donateUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default DonatePage

