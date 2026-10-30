import { FormEvent, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Github,
  Globe,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Send,
  Sparkles,
  Sun,
  X,
} from 'lucide-react'

const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Services', 'Contact']

const projects = [
  {
    number: '01',
    title: 'Northstar',
    description: 'A focused workspace for small teams to turn ambiguous ideas into clear, trackable momentum.',
    tags: ['Product strategy', 'React', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85',
    type: 'Product platform',
  },
  {
    number: '02',
    title: 'Sage & Signal',
    description: 'A considered commerce experience for a modern wellness brand with story at its centre.',
    tags: ['E-commerce', 'Next.js', 'Shopify'],
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85',
    type: 'Digital commerce',
  },
  {
    number: '03',
    title: 'Wayfinder',
    description: 'Helping independent businesses make better decisions with simple, human data visualisation.',
    tags: ['Data visualisation', 'TypeScript', 'Postgres'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85',
    type: 'Web application',
  },
]

const experiences = [
  {
    year: '2022 — now',
    role: 'Independent product engineer',
    company: 'Studio Morgan',
    description: 'Partnering with ambitious teams to shape and ship digital products from first sketch to steady state.',
  },
  {
    year: '2019 — 2022',
    role: 'Senior software engineer',
    company: 'Northstar Labs',
    description: 'Led frontend architecture and product delivery for a growing collaboration platform.',
  },
  {
    year: '2016 — 2019',
    role: 'Software engineer',
    company: 'Independent projects',
    description: 'Built a foundation across product development, design systems and early-stage technology.',
  },
]

const skills = [
  { title: 'Frontend', items: ['React & Next.js', 'TypeScript', 'Design systems', 'Motion & interaction'] },
  { title: 'Backend', items: ['Node.js', 'REST & GraphQL', 'PostgreSQL', 'Cloud architecture'] },
  { title: 'Product', items: ['Product strategy', 'UX & prototyping', 'Technical direction', 'Team facilitation'] },
]

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

function App() {
  const [isDark, setIsDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light'
  }, [isDark])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Alex Morgan home">
          AM<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="icon-button" onClick={() => setIsDark(!isDark)} aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="header-cta" href="#contact">Let's talk <ArrowUpRight size={16} /></a>
          <button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu" aria-expanded={menuOpen}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} aria-label="Mobile navigation">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
            <a href="#contact" onClick={closeMenu} className="mobile-nav-cta">Start a conversation <ArrowUpRight size={16} /></a>
          </motion.nav>
        )}
      </AnimatePresence>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <motion.p className="eyebrow" initial="hidden" animate="visible" variants={fadeUp}><span className="status-dot" /> Available for select projects</motion.p>
            <motion.h1 initial="hidden" animate="visible" variants={fadeUp}>Making technology<br /><em>feel more human.</em></motion.h1>
            <motion.p className="hero-lede" initial="hidden" animate="visible" variants={fadeUp}>I’m Alex — a software engineer and technology entrepreneur building thoughtful digital products for people and the planet.</motion.p>
            <motion.div className="hero-actions" initial="hidden" animate="visible" variants={fadeUp}>
              <a className="button button-dark" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#contact">Have a project in mind? <span>Let’s talk</span> <ArrowUpRight size={15} /></a>
            </motion.div>
          </div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }}>
            <div className="hero-image-wrap">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=85" alt="Portrait placeholder for Alex Morgan" />
              <div className="image-caption"><span>01</span><span>Engineer · Builder · Curious mind</span></div>
            </div>
            <div className="hero-sticker"><Sparkles size={16} /><span>Designing<br />with intent</span></div>
          </motion.div>
        </section>

        <div className="ticker" aria-label="Areas of expertise">
          <div className="ticker-track">{['Software engineering', 'Product thinking', 'Digital experiences', 'Technology with purpose', 'Software engineering', 'Product thinking'].map((item, index) => <span key={`${item}-${index}`}>{item} <i>✳</i></span>)}</div>
        </div>

        <section id="about" className="section-pad section about-section">
          <div className="section-label"><span>01</span><span>About me</span></div>
          <div className="about-grid">
            <h2>Good work lives<br />at the intersection<br /><em>of logic & feeling.</em></h2>
            <div className="about-copy">
              <p className="large-copy">I like making complex things feel simple. My work sits between engineering, design and strategy — turning early ideas into useful, resilient products people enjoy using.</p>
              <p>With a background spanning product teams and independent ventures, I bring a builder’s mindset to every collaboration. I care about the details, the bigger picture, and leaving things better than I found them.</p>
              <a href="#contact" className="text-link dark-link">More about my approach <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="about-meta"><span>Based in <strong>London / Remote</strong></span><span>Currently <strong>Building the next thing</strong></span><span>Elsewhere <a href="https://github.com" target="_blank" rel="noreferrer">Github ↗</a> <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a></span></div>
        </section>

        <section id="skills" className="section-pad section muted-section">
          <div className="section-label"><span>02</span><span>Capabilities</span></div>
          <div className="skills-intro"><h2>Ideas into<br /><em>impact.</em></h2><p>The tools change. The intent stays the same: thoughtful technology that solves the right problem, in the right way.</p></div>
          <div className="skills-grid">
            {skills.map((skill, index) => <motion.div className="skill-card" key={skill.title} whileHover={{ y: -5 }} transition={{ duration: .2 }}><span className="card-index">0{index + 1}</span><h3>{skill.title}</h3><ul>{skill.items.map(item => <li key={item}><Check size={14} />{item}</li>)}</ul></motion.div>)}
          </div>
        </section>

        <section id="projects" className="section-pad section projects-section">
          <div className="section-label"><span>03</span><span>Selected work</span></div>
          <div className="section-heading-row"><h2>A few things<br /><em>I’ve made.</em></h2><p>A selection of placeholder projects to show how the work might come together. Your real work can live here.</p></div>
          <div className="projects-list">
            {projects.map((project) => <motion.article className="project-card" key={project.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={fadeUp}>
              <div className="project-image"><img src={project.image} alt="" /><span className="project-type">{project.type}</span><a className="project-arrow" href="https://github.com" target="_blank" rel="noreferrer" aria-label={`View ${project.title} on Github`}><ArrowUpRight size={20} /></a></div>
              <div className="project-info"><span className="project-number">{project.number}</span><div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></div>
            </motion.article>)}
          </div>
          <a className="button button-outline centered-button" href="https://github.com" target="_blank" rel="noreferrer">View all projects <Github size={17} /></a>
        </section>

        <section id="experience" className="section-pad section muted-section">
          <div className="section-label"><span>04</span><span>Experience & education</span></div>
          <div className="timeline-grid">
            <h2>The path<br /><em>so far.</em></h2>
            <div className="timeline">{experiences.map((item, index) => <div className="timeline-item" key={item.role}><span className="timeline-year">{item.year}</span><div className="timeline-marker">{index === 0 ? <Sparkles size={13} /> : <span />}</div><div><h3>{item.role}</h3><strong>{item.company}</strong><p>{item.description}</p></div></div>)}<div className="timeline-item education-item"><span className="timeline-year">2012 — 2016</span><div className="timeline-marker"><span /></div><div><h3>BSc Computer Science</h3><strong>University placeholder</strong><p>A foundation in systems, logic and the joy of figuring things out.</p></div></div></div>
          </div>
        </section>

        <section id="services" className="section-pad section services-section">
          <div className="section-label"><span>05</span><span>How I can help</span></div>
          <div className="section-heading-row"><h2>Let’s make<br /><em>something useful.</em></h2><p>From the first question to the final pixel, I help teams move forward with clarity and confidence.</p></div>
          <div className="services-grid">{[{ icon: <Code2 />, title: 'Web development', text: 'Fast, accessible and expressive websites that give your ideas a proper home.' }, { icon: <Layers3 />, title: 'Software development', text: 'Reliable digital products built around real people, real needs and a clear point of view.' }, { icon: <Sparkles />, title: 'UI / UX design', text: 'Interfaces that feel intuitive, considered and genuinely pleasant to use.' }].map((service, index) => <motion.div className="service-item" key={service.title} whileHover={{ backgroundColor: 'var(--ink)', color: 'var(--paper)' }}><div className="service-icon">{service.icon}</div><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.text}</p><ArrowUpRight className="service-arrow" size={20} /></motion.div>)}</div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <div className="contact-heading"><span className="eyebrow">06 · Contact</span><h2>Have an idea?<br /><em>Let’s talk.</em></h2><p>Tell me a little about what you’re working on. I’ll get back to you within a few working days.</p><div className="contact-links"><a href="mailto:hello@example.com"><Mail size={17} /> hello@example.com</a><a href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a></div></div>
          <form className="contact-form" onSubmit={handleSubmit}><label>Your name<input name="name" required placeholder="Jane Smith" /></label><label>Email address<input name="email" type="email" required placeholder="jane@company.com" /></label><label>Tell me about your project<textarea name="message" required placeholder="A few words about what you’re building..." rows={4} /></label><button className="button button-light" type="submit">{sent ? 'Message ready to send' : 'Send message'} {sent ? <Check size={17} /> : <Send size={16} />}</button>{sent && <p className="form-success" role="status">Thanks — this demo form is ready to connect to your inbox.</p>}</form>
        </section>
      </main>

      <footer className="footer section-pad"><div className="footer-top"><a className="wordmark footer-mark" href="#top">AM<span>.</span></a><p>Software engineer & technology entrepreneur.<br />Making technology feel more human.</p><a className="back-top" href="#top">Back to top <ChevronDown size={16} /></a></div><div className="footer-bottom"><span>© 2024 Alex Morgan. Placeholder portfolio.</span><div><a href="https://github.com" target="_blank" rel="noreferrer"><Github size={16} /></a><a href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={16} /></a><a href="mailto:hello@example.com"><Mail size={16} /></a></div><span>Built with intention <Sparkles size={13} /></span></div></footer>
    </div>
  )
}

export default App
