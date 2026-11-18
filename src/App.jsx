import { useState } from 'react'
import {
  ArrowRight, ArrowUpRight, Menu, X, Phone, MapPin, Clock,
  ShieldCheck, Sparkles, Heart, Smile, Stethoscope, Star,
  Instagram, Facebook, Mail, CheckCircle2, ChevronDown
} from 'lucide-react'

// ===================== EDIT YOUR CLINIC DETAILS HERE =====================
const CLINIC = {
  name: 'Saleena Medical Center',
  shortName: 'SALEENA',
  phoneDisplay: '+971 XX XXX XXXX',       // Replace with clinic phone number
  phoneLink: '+971XXXXXXXXX',             // Digits only, include country code
  whatsapp: '971XXXXXXXXX',               // Digits only, include country code
  email: 'info@yourclinic.com',           // Replace with clinic email
  address: 'Add your clinic address, Abu Dhabi, UAE',
  mapQuery: 'Saleena Medical Center, Abu Dhabi, UAE',
  hours: 'Saturday – Thursday: 9:00 AM – 9:00 PM',
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/'
}
// ========================================================================

const services = [
  { icon: Sparkles, number: '01', title: 'Cosmetic Dentistry', text: 'Personalised smile-enhancing treatments designed around your goals.' },
  { icon: Smile, number: '02', title: 'Teeth Whitening', text: 'A brighter-looking smile with professional care and guidance.' },
  { icon: ShieldCheck, number: '03', title: 'General Dentistry', text: 'Routine examinations, prevention and everyday dental care.' },
  { icon: Stethoscope, number: '04', title: 'Root Canal Treatment', text: 'Care focused on relieving discomfort and helping preserve natural teeth.' },
  { icon: Heart, number: '05', title: 'Dental Implants', text: 'Explore tooth-replacement options with an individual treatment plan.' },
  { icon: Smile, number: '06', title: 'Orthodontics', text: 'Options to help improve tooth alignment and bite concerns.' }
]

// Replace these sample profiles with the clinic's actual practitioners and credentials.
const doctors = [
  { name: 'Dr. [Doctor Name]', role: 'General Dentist', detail: 'Add verified qualifications and areas of clinical interest.', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85' },
  { name: 'Dr. [Doctor Name]', role: 'Cosmetic Dentist', detail: 'Add verified qualifications and areas of clinical interest.', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=85' },
  { name: 'Dr. [Doctor Name]', role: 'Orthodontist', detail: 'Add verified qualifications and areas of clinical interest.', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85' }
]

// Replace these illustrative quotes with genuine, permission-approved patient reviews.
const testimonials = [
  { quote: 'The team made me feel comfortable and explained every step clearly. The clinic environment was welcoming.', name: 'Patient testimonial', detail: 'Replace with an approved patient name or initials' },
  { quote: 'A thoughtful experience from the first enquiry through to my appointment. I appreciated the clear communication.', name: 'Patient testimonial', detail: 'Replace with an approved patient name or initials' },
  { quote: 'Professional, friendly care in a calm and modern setting. I felt listened to throughout my visit.', name: 'Patient testimonial', detail: 'Replace with an approved patient name or initials' }
]

function SectionHeading({ eyebrow, title, text, light = false }) {
  return <div className={`section-heading ${light ? 'light' : ''}`}>
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [formMessage, setFormMessage] = useState('')

  const whatsappUrl = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent('Hello Saleena Medical Center, I would like to enquire about an appointment.')}`
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC.mapQuery)}`
  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(CLINIC.mapQuery)}&output=embed`

  const closeMenu = () => setMenuOpen(false)
  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Appointment enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nMessage: ${form.message}`
    )
    setFormMessage('Your email app should open with your enquiry. Please send the prepared email to complete your request.')
    window.location.href = `mailto:${CLINIC.email}?subject=${subject}&body=${body}`
  }

  const navLinks = [
    ['Homeee', '#home'], ['About', '#about'], ['Services', '#services'],
    ['Our Doctors', '#doctors'], ['Testimonials', '#testimonials'], ['Contact', '#contact']
  ]

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span><Clock size={14} /> {CLINIC.hours}</span>
          <span className="topbar-right"><MapPin size={14} /> {CLINIC.address}</span>
        </div>
      </div>

      <header className="header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Saleena Medical Center home">
            <span className="brand-mark"><span></span><span></span></span>
            <span className="brand-copy"><strong>SALEENA</strong><small>MEDICAL CENTER</small></span>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            {navLinks.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Book a Visit <ArrowUpRight size={16} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image"></div>
          <div className="hero-shade"></div>
          <div className="container hero-content">
            <div className="hero-copy">
              <span className="eyebrow eyebrow-light"><span className="eyebrow-line"></span> CONFIDENCE BEGINS WITH A SMILE</span>
              <h1>Care that makes<br /><em>you smile.</em></h1>
              <p>Thoughtful dental care in a calm, welcoming environment. Discover a more personal approach to your oral health at Saleena Medical Center.</p>
              <div className="hero-actions">
                <a className="btn btn-gold" href="#contact">Enquire About an Appointment <ArrowRight size={17} /></a>
                <a className="text-link light-link" href="#services">Explore our services <ArrowUpRight size={16} /></a>
              </div>
              <div className="hero-note"><span className="note-icon"><ShieldCheck size={19} /></span><span><strong>Your comfort matters</strong><small>Care guided by your individual needs</small></span></div>
            </div>
            <div className="hero-side-note"><span>01 / 03</span><i></i><span>THOUGHTFUL DENTAL CARE</span></div>
          </div>
          <div className="hero-bottom"><span>SALEENA MEDICAL CENTER</span><span>ABU DHABI · UAE</span></div>
        </section>

        <section className="intro section-pad" id="about">
          <div className="container intro-grid">
            <div className="intro-visual">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1100&q=85" alt="Bright, modern dental clinic interior" />
              <div className="image-caption"><span className="caption-icon"><Sparkles size={19} /></span><span><strong>A welcoming experience</strong><small>Designed around your comfort</small></span></div>
              <div className="visual-outline"></div>
            </div>
            <div className="intro-copy">
              <SectionHeading eyebrow="WELCOME TO SALEENA" title={<>A healthier smile.<br /><em>A more confident you.</em></>} text="Your smile deserves attentive care, clear guidance and a team that listens." />
              <p className="body-copy">At Saleena Medical Center, our aim is to make every visit feel considered and comfortable. We believe good dental care starts with understanding your needs and helping you make informed decisions about your oral health.</p>
              <p className="body-copy">From routine check-ups to smile-enhancing treatments, our team is here to guide you through your care journey.</p>
              <a className="under-link" href="#contact">Get to know our team <ArrowUpRight size={17} /></a>
              <div className="intro-points">
                <div><CheckCircle2 /><span>Personalised attention</span></div>
                <div><CheckCircle2 /><span>Clear treatment guidance</span></div>
                <div><CheckCircle2 /><span>Comfort-focused environment</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="container">
            <div className="services-top">
              <SectionHeading eyebrow="WHAT WE OFFER" title={<>Care for every<br /><em>kind of smile.</em></>} text="Explore our dental services. Our team can help you understand which options may be suitable for your needs." />
              <a className="under-link" href="#contact">Ask about a treatment <ArrowUpRight size={17} /></a>
            </div>
            <div className="service-grid">
              {services.map(({ icon: Icon, number, title, text }) => <article className="service-card" key={number}>
                <div className="service-card-top"><span className="service-icon"><Icon size={23} /></span><span className="service-number">{number}</span></div>
                <h3>{title}</h3><p>{text}</p>
                <a href="#contact" aria-label={`Enquire about ${title}`}><ArrowUpRight size={19} /></a>
              </article>)}
            </div>
            <p className="disclaimer">Treatment availability is subject to clinical assessment. Please contact the clinic for details.</p>
          </div>
        </section>

        <section className="statement">
          <div className="statement-bg"></div>
          <div className="container statement-content">
            <span className="eyebrow eyebrow-light">THE SALEENA EXPERIENCE</span>
            <h2>Good care is about<br /><em>more than teeth.</em></h2>
            <p>It's about feeling heard, understanding your options and being supported at every step.</p>
            <a className="btn btn-outline-light" href="#contact">Talk to our team <ArrowRight size={17} /></a>
          </div>
        </section>

        <section className="doctors section-pad" id="doctors">
          <div className="container">
            <SectionHeading eyebrow="MEET THE TEAM" title={<>Care led by <em>people.</em></>} text="Get to know the professionals who may be part of your care journey." />
            <div className="doctor-grid">
              {doctors.map((doctor, index) => <article className="doctor-card" key={index}>
                <div className="doctor-image"><img src={doctor.image} alt="Sample doctor portrait – replace with the actual practitioner's photo" /><span className="doctor-index">0{index + 1}</span></div>
                <div className="doctor-info"><span className="doctor-role">{doctor.role}</span><h3>{doctor.name}</h3><p>{doctor.detail}</p></div>
              </article>)}
            </div>
            <p className="disclaimer">Sample profiles and stock photographs are placeholders. Replace with actual practitioners, verified qualifications and approved photographs before publishing.</p>
          </div>
        </section>

        <section className="testimonial-section section-pad" id="testimonials">
          <div className="container testimonial-layout">
            <div className="testimonial-intro">
              <SectionHeading eyebrow="KIND WORDS" title={<>A little care<br /><em>goes a long way.</em></>} text="Every patient's experience matters. Read what visitors have shared about their time with us." />
              <div className="rating-note"><div className="stars"><Star /><Star /><Star /><Star /><Star /></div><small>Patient feedback matters to us</small></div>
            </div>
            <div className="testimonial-cards">
              {testimonials.map((item, index) => <article className="quote-card" key={index}>
                <div className="quote-mark">“</div><p>{item.quote}</p>
                <div className="quote-person"><span className="quote-avatar">{index + 1}</span><span><strong>{item.name}</strong><small>{item.detail}</small></span></div>
              </article>)}
            </div>
            <p className="disclaimer testimonial-disclaimer">The quotes above are illustrative sample text, not verified patient reviews. Replace with genuine reviews and obtain permission before publishing.</p>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="container">
            <div className="contact-heading">
              <SectionHeading eyebrow="WE'RE HERE TO HELP" title={<>Let's talk about<br /><em>your smile.</em></>} text="Have a question or want to enquire about an appointment? Send us a message and our team will be happy to assist." />
            </div>
            <div className="contact-grid">
              <div className="contact-details">
                <a className="contact-item" href={`tel:${CLINIC.phoneLink}`}><span className="contact-icon"><Phone /></span><span><small>CALL US</small><strong>{CLINIC.phoneDisplay}</strong></span><ArrowUpRight /></a>
                <a className="contact-item" href={`mailto:${CLINIC.email}`}><span className="contact-icon"><Mail /></span><span><small>EMAIL US</small><strong>{CLINIC.email}</strong></span><ArrowUpRight /></a>
                <a className="contact-item" href={mapUrl} target="_blank" rel="noreferrer"><span className="contact-icon"><MapPin /></span><span><small>FIND US</small><strong>{CLINIC.address}</strong></span><ArrowUpRight /></a>
                <div className="contact-hours"><Clock /><span><small>OPENING HOURS</small><strong>{CLINIC.hours}</strong></span></div>
                <a className="btn btn-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"> <Phone size={17} /> Chat with us on WhatsApp <ArrowUpRight size={16} /></a>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-heading"><span className="eyebrow">SEND AN ENQUIRY</span><h3>How can we help?</h3><p>Fields marked * are required.</p></div>
                <div className="form-row">
                  <label>Your name *<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Enter your name" /></label>
                  <label>Email address *<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label>
                </div>
                <div className="form-row">
                  <label>Phone number *<input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+971 ..." /></label>
                  <label>Service of interest
                    <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                      <option value="">Select a service</option>{services.map(s => <option key={s.number}>{s.title}</option>)}
                    </select>
                  </label>
                </div>
                <label>Your message<textarea rows="4" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us how we can help..." /></label>
                <button className="btn btn-primary form-submit" type="submit">Send enquiry <ArrowRight size={17} /></button>
                {formMessage && <p className="form-message" role="status">{formMessage}</p>}
                <small className="privacy-note">Please do not include sensitive medical information in this general enquiry form.</small>
              </form>
            </div>
          </div>
        </section>

        <section className="map-section">
          <div className="map-frame"><iframe title="Map showing Saleena Medical Center search location" src={mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
          <div className="map-label"><span className="map-pin"><MapPin /></span><span><small>VISIT SALEENA</small><strong>{CLINIC.address}</strong><a href={mapUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={14} /></a></span></div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <a className="brand brand-light" href="#home"><span className="brand-mark"><span></span><span></span></span><span className="brand-copy"><strong>SALEENA</strong><small>MEDICAL CENTER</small></span></a>
              <p>Thoughtful dental care, centred around you. We look forward to welcoming you.</p>
              <div className="socials"><a href={CLINIC.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a><a href={CLINIC.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a></div>
            </div>
            <div className="footer-links"><h4>Explore</h4><a href="#about">About us</a><a href="#services">Our services</a><a href="#doctors">Our doctors</a><a href="#testimonials">Testimonials</a></div>
            <div className="footer-links"><h4>Get in touch</h4><a href={`tel:${CLINIC.phoneLink}`}>{CLINIC.phoneDisplay}</a><a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a><a href={mapUrl} target="_blank" rel="noreferrer">{CLINIC.address}</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp enquiries</a></div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Saleena Medical Center. All rights reserved.</span><a href="#home">Back to top ↑</a></div>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with Saleena Medical Center on WhatsApp"><Phone size={22} /></a>
    </>
  )
}

export default App
