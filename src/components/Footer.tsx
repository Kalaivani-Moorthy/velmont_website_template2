import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl mb-4" style={{fontFamily: 'var(--font-serif)', color: 'var(--color-gold)'}}>VelMont Spiritual Center</h3>
            <p className="text-gray-300 leading-relaxed">A sacred sanctuary dedicated to spiritual growth, cultural enrichment, and community service.</p>
          </div>
          <div>
            <h4 className="text-lg mb-4 font-semibold" style={{color: 'var(--color-gold)'}}>Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3"><FaPhone className="text-[#D4AF37]" /> +1 (925) 385-6225</div>
              <div className="flex items-center gap-3"><FaEnvelope className="text-[#D4AF37]" /> contact@velmont.org</div>
              <div className="flex items-center gap-3"><FaMapMarkerAlt className="text-[#D4AF37]" /> Bay Area, California</div>
            </div>
          </div>
          <div>
            <h4 className="text-lg mb-4 font-semibold" style={{color: 'var(--color-gold)'}}>Hours</h4>
            <div className="text-gray-300 space-y-2">
              <p>Sunday: 10:00 AM - 12:30 PM</p>
              <p>Special Events: As Posted</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-6 text-center text-gray-400 text-sm">
        <p>&copy; 2025 VelMont Spiritual Center. All rights reserved. | Tax ID: 88-2380771</p>
      </div>
    </footer>
  )
}

export default Footer
