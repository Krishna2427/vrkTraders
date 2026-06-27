import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import type { LanguageDictionary } from '../types';

interface ContactProps {
  t: LanguageDictionary;
}

export default function Contact({ t }: ContactProps) {
  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="container">
        <div className="section-header text-center">
          <h2>{t.contactTitle}</h2>
          <p>{t.contactSubtitle}</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-panel">
            <div className="contact-card">
              <div className="contact-card-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-card-text">
                <h4>{t.contactAddressTitle}</h4>
                <p>{t.contactAddressValue}</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <Phone size={24} />
              </div>
              <div className="contact-card-text">
                <h4>{t.contactPhoneTitle}</h4>
                <p>
                  <a href={`tel:${t.contactPhoneValue.replace(/\s+/g, '')}`}>
                    {t.contactPhoneValue}
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <Mail size={24} />
              </div>
              <div className="contact-card-text">
                <h4>{t.contactEmailTitle}</h4>
                <p>
                  <a href={`mailto:${t.contactEmailValue}`}>
                    {t.contactEmailValue}
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <Clock size={24} />
              </div>
              <div className="contact-card-text">
                <h4>{t.contactHoursTitle}</h4>
                <p>{t.contactHoursValue}</p>
              </div>
            </div>
          </div>

          {/* Premium Simulated Interactive Map */}
          <div className="map-container">
            <div className="map-badge">
              <MapPin size={14} style={{ color: 'red' }} />
              <span>Godavari Delta Sourcing Hub</span>
            </div>
            
            <div className="simulated-map" style={{ backgroundColor: '#dfebd3' }}>
              <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }} xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#1b5e20" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#1b5e20" stopOpacity="0" />
                  </radialGradient>
                  <filter id="shadow">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
                  </filter>
                </defs>
                
                {/* Grid Lines for agricultural geographic map feel */}
                <g stroke="rgba(0,0,0,0.03)" strokeWidth="1">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <line key={`v-${i}`} x1={`${i * 8}%`} y1="0" x2={`${i * 8}%`} y2="100%" />
                  ))}
                  {Array.from({ length: 15 }).map((_, i) => (
                    <line key={`h-${i}`} x1="0" y1={`${i * 8}%`} x2="100%" y2={`${i * 8}%`} />
                  ))}
                </g>

                {/* Sourcing Hub Connections Wave Rings */}
                <circle cx="50%" cy="50%" r="90" fill="url(#hubGradient)">
                  <animate attributeName="r" values="30;120;30" dur="8s" repeatCount="indefinite" />
                </circle>
                <circle cx="50%" cy="50%" r="140" fill="url(#hubGradient)">
                  <animate attributeName="r" values="60;180;60" dur="10s" repeatCount="indefinite" />
                </circle>

                {/* Sourcing region outlines (Mock curves representing agricultural Godavari river canals) */}
                <path 
                  d="M 10 180 Q 150 150, 250 250 T 500 200 T 800 300" 
                  fill="none" 
                  stroke="rgba(76, 140, 74, 0.25)" 
                  strokeWidth="8" 
                  strokeLinecap="round"
                />
                <path 
                  d="M 100 350 Q 350 200, 420 280 T 800 180" 
                  fill="none" 
                  stroke="rgba(76, 140, 74, 0.15)" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                />

                {/* Connection lines from main hub to other areas (e.g. Hyderabad, Chennai, Vizag, Bangalore) */}
                <g stroke="#1b5e20" strokeWidth="1.5" strokeDasharray="5,5">
                  <path d="M 50% 50% Q 30% 30%, 25% 35%"><animate attributeName="stroke-dashoffset" values="0;50" dur="4s" repeatCount="indefinite" /></path>
                  <path d="M 50% 50% Q 70% 30%, 75% 32%"><animate attributeName="stroke-dashoffset" values="0;50" dur="4s" repeatCount="indefinite" /></path>
                  <path d="M 50% 50% Q 40% 70%, 35% 75%"><animate attributeName="stroke-dashoffset" values="0;50" dur="4s" repeatCount="indefinite" /></path>
                  <path d="M 50% 50% Q 65% 70%, 70% 72%"><animate attributeName="stroke-dashoffset" values="0;50" dur="4s" repeatCount="indefinite" /></path>
                </g>

                {/* Cities Labels */}
                <g fill="#2e3d30" fontSize="11" fontWeight="600" opacity="0.6">
                  <circle cx="25%" cy="35%" r="4" fill="#2e3d30" />
                  <text x="25%" y="30%" textAnchor="middle">Hyderabad</text>
                  
                  <circle cx="75%" cy="32%" r="4" fill="#2e3d30" />
                  <text x="75%" y="27%" textAnchor="middle">Visakhapatnam</text>
                  
                  <circle cx="35%" cy="75%" r="4" fill="#2e3d30" />
                  <text x="35%" y="87%" textAnchor="middle">Bengaluru</text>
                  
                  <circle cx="70%" cy="72%" r="4" fill="#2e3d30" />
                  <text x="70%" y="84%" textAnchor="middle">Chennai</text>
                </g>
              </svg>

              {/* Simulated Marker Pin at Main Office (Godavari) */}
              <div className="map-marker-pin" style={{ position: 'absolute', top: '44%', left: '47%' }}>
                <div className="marker-label">VRK Warehouse Hub</div>
                <div className="marker-icon">
                  <MapPin size={22} fill="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
