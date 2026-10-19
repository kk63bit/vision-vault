import React, { useEffect, useState } from 'react'
import {
  ArrowUpRight, ArrowRight, Menu, X, Sparkles, Code2, Youtube,
  Mail, Github, ExternalLink, Terminal, Cpu, Palette, Gamepad2,
  Rocket, Award, BookOpen, Zap, ChevronDown, Play, Globe, Star
} from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'Vision Vault',
    type: 'CREATOR PLATFORM',
    description: 'A growing tech and learning brand sharing AI tools, study hacks, tutorials and useful digital discoveries.',
    tags: ['Web', 'Content', 'AI tools'],
    link: 'https://vision-vault.base44.app/',
    icon: Globe,
    accent: 'cyan'
  },
  {
    number: '02',
    title: 'JARVIS Assistant',
    type: 'PYTHON • LEARNING PROJECT',
    description: 'An experiment in building a personal desktop assistant with voice interaction and a futuristic interface.',
    tags: ['Python', 'Voice UI', 'Automation'],
    link: '',
    icon: Cpu,
    accent: 'purple'
  },
  {
    number: '03',
    title: 'Aether OS Portfolio',
    type: 'PERSONAL WEB PROJECT',
    description: 'A neon-inspired portfolio concept that brings together projects, achievements, skills and creative work.',
    tags: ['React', 'CSS', 'UI design'],
    link: 'https://kk63bit.github.io/karthik-portfolio/',
    icon: Terminal,
    accent: 'pink'
  }
]

const skills = [
  { name: 'Python', detail: 'Learning & small programs', icon: Code2, level: 'LEARNING' },
  { name: 'Web Development', detail: 'HTML, CSS & React basics', icon: Globe, level: 'BUILDING' },
  { name: 'Creative Editing', detail: 'Short-form video concepts', icon: Palette, level: 'EXPLORING' },
  { name: 'AI Tools', detail: 'Testing useful AI workflows', icon: Sparkles, level: 'EXPLORING' },
  { name: 'Problem Solving', detail: 'Learning by making projects', icon: Zap, level: 'PRACTISING' },
  { name: 'Gaming', detail: 'Ideas, inspiration & fun', icon: Gamepad2, level: 'INTEREST' }
]

const journey = [
  { year: 'NOW', title: 'Building and experimenting', description: 'Learning code, trying new tools, and turning ideas into small projects.' },
  { year: '2025', title: 'Growing Vision Vault', description: 'Developing a tech and study-focused creator brand and experimenting with a web presence.' },
  { year: 'ONGOING', title: 'Learning step by step', description: 'Practising programming, design, communication and creative problem solving.' }
]

function Reveal({ children, className = '', delay = 0 }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])
  return <div className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>{children}</div>
}

function SectionTitle({ eyebrow, title, text }) {
  return <div className="section-title">
    <div className="eyebrow"><span className="eyebrow-line" />{eyebrow}</div>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')
  const navItems = ['Home', 'About', 'Projects', 'Gallery', 'Skills', 'Journey', 'YouTube', 'Achievements', 'Contact']

  useEffect(() => {
    const onScroll = () => {
      const sections = navItems.map(n => document.getElementById(n.toLowerCase()))
      const current = sections.filter(Boolean).filter(s => s.getBoundingClientRect().top <= 150).pop()
      if (current) setActive(navItems.find(n => n.toLowerCase() === current.id) || 'Home')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return <div className="site-shell">
    <div className="aurora" />
    <div className="grid-overlay" />
    <header className="topbar">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Aether OS home">
        <span className="brand-mark logo-mark"><img src={`${import.meta.env.BASE_URL}images/vision-vault-logo.png`} alt="" /></span>
        <span>VISION <span className="brand-light">VAULT</span><small>UNLOCK YOUR VISION</small></span>
      </a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        {menuOpen ? <X /> : <Menu />}
      </button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {navItems.map(item => <a key={item} className={active === item ? 'active' : ''} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's connect <ArrowUpRight size={15} /></a>
      </nav>
    </header>

    <main>
      <section id="home" className="hero section-wrap">
        <div className="hero-copy">
          <Reveal>
            <div className="status-pill"><span className="status-dot" /> TECH • STUDY • AI TOOLS • TUTORIALS</div>
            <p className="hero-kicker">WELCOME TO</p>
            <h1>VISION<br/><span className="gradient-text">VAULT</span></h1>
            <div className="hero-role"><span className="role-slash">//</span> Unlock Your Vision</div>
            <p className="hero-description">Exploring technology, AI tools, programming, study hacks, video editing, gaming and creative ideas. Learn something useful and build something amazing.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
              <a className="button button-ghost" href="https://www.youtube.com/@visionvault-26" target="_blank" rel="noreferrer"><Youtube size={17} /> Vision Vault</a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/kk63bit" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <span className="social-separator" />
              <a href="https://www.youtube.com/@visionvault-26" target="_blank" rel="noreferrer"><Youtube size={17} /> YouTube</a>
            </div>
          </Reveal>
        </div>
        <Reveal className="hero-visual" delay={180}>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="core-glow" />
          <div className="hero-emblem"><Sparkles size={55} strokeWidth={1.1} /><span>A</span></div>
          <div className="floating-card card-top"><span className="mini-icon cyan"><Terminal size={16}/></span><span><b>LEARN</b><small>One step at a time</small></span><span className="card-signal">●</span></div>
          <div className="floating-card card-bottom"><span className="mini-icon pink"><Rocket size={16}/></span><span><b>BUILD</b><small>Ideas into projects</small></span><span className="card-signal">●</span></div>
          <div className="visual-caption"><span className="caption-line" /> DIGITAL EXPLORER <span className="caption-line" /></div>
          <div className="coordinate coord-one">09° / 2026</div><div className="coordinate coord-two">SYSTEM ONLINE</div>
        </Reveal>
        <a className="scroll-cue" href="#about"><span className="scroll-mouse" /> SCROLL TO EXPLORE <ChevronDown size={15} /></a>
      </section>

      <section id="about" className="section-wrap section-block">
        <SectionTitle eyebrow="01 / ABOUT ME" title={<>Curiosity is my <span className="gradient-text">starting point.</span></>} text="A student with a maker mindset — learning new skills and exploring how technology can bring ideas to life." />
        <div className="about-grid">
          <Reveal className="about-main glass-panel">
            <div className="panel-label"><span className="tiny-square" /> PROFILE.LOG</div>
            <h3>The story behind<br/><span className="gradient-text">Vision Vault.</span></h3>
            <img className="creator-art" src={`${import.meta.env.BASE_URL}images/vision-vault-creator.png`} alt="Vision Vault creator artwork" />
            <p>I'm Karthik, a student interested in Python, web development, AI tools and digital creativity. I enjoy exploring how things work and using what I learn to create projects of my own.</p>
            <p>My approach is simple: stay curious, practise consistently, and keep improving one project at a time.</p>
            <div className="about-tags"><span>TECH ENTHUSIAST</span><span>LIFELONG LEARNER</span><span>CREATIVE THINKER</span></div>
          </Reveal>
          <Reveal className="about-side glass-panel" delay={100}>
            <div className="panel-label"><span className="tiny-square pink-square" /> QUICK FACTS</div>
            <div className="fact-row"><span className="fact-icon"><BookOpen size={18}/></span><div><small>CURRENT FOCUS</small><b>Study & coding</b></div></div>
            <div className="fact-row"><span className="fact-icon"><Code2 size={18}/></span><div><small>LEARNING</small><b>Python & web basics</b></div></div>
            <div className="fact-row"><span className="fact-icon"><Youtube size={18}/></span><div><small>CREATOR BRAND</small><b>Vision Vault</b></div></div>
            <div className="fact-row"><span className="fact-icon"><Rocket size={18}/></span><div><small>MINDSET</small><b>Build • Learn • Repeat</b></div></div>
          </Reveal>
        </div>
      </section>

      <section id="projects" className="section-wrap section-block">
        <SectionTitle eyebrow="02 / SELECTED WORK" title={<>Ideas in <span className="gradient-text">progress.</span></>} text="A collection of experiments, learning projects and digital ideas. This list can grow as you build more." />
        <div className="project-grid">
          {projects.map((project, i) => {
            const Icon = project.icon
            return <Reveal key={project.number} delay={i * 90} className={`project-card glass-panel glass-panel-hover accent-${project.accent}`}>
              <div className="project-top"><span className="project-number">{project.number} / 03</span><span className="project-icon"><Icon size={22}/></span></div>
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <div className="project-bottom">{project.link ? <a href={project.link} target="_blank" rel="noreferrer">View project <ArrowUpRight size={16}/></a> : <span className="in-progress"><span/> IN PROGRESS</span>}<span className="project-arrow"><ArrowUpRight size={18}/></span></div>
            </Reveal>
          })}
        </div>
      </section>

      <section id="skills" className="section-wrap section-block">
        <SectionTitle eyebrow="03 / TOOLKIT" title={<>Skills I'm <span className="gradient-text">growing.</span></>} text="A work in progress. These are areas I'm learning, practising or exploring — with plenty more to discover." />
        <div className="skills-grid">
          {skills.map((skill, i) => { const Icon = skill.icon; return <Reveal key={skill.name} delay={i * 50} className="skill-card glass-panel glass-panel-hover">
            <span className="skill-icon"><Icon size={21}/></span><div className="skill-copy"><h3>{skill.name}</h3><p>{skill.detail}</p></div><span className="skill-level">{skill.level}</span>
          </Reveal> })}
        </div>
      </section>

      <section id="journey" className="section-wrap section-block">
        <SectionTitle eyebrow="04 / THE JOURNEY" title={<>Progress over <span className="gradient-text">perfection.</span></>} text="Learning is not a straight line. Every experiment adds something new." />
        <div className="timeline">
          {journey.map((item, i) => <Reveal key={item.year} delay={i * 100} className="timeline-item"><div className="timeline-marker"><span/></div><div className="timeline-year">{item.year}</div><div className="timeline-card glass-panel"><h3>{item.title}</h3><p>{item.description}</p></div></Reveal>)}
        </div>
      </section>

      <section id="achievements" className="section-wrap section-block">
        <SectionTitle eyebrow="05 / MILESTONES" title={<>Small wins. <span className="gradient-text">Big motivation.</span></>} text="A space to record the moments, experiences and milestones that keep me moving forward." />
        <div className="achievement-card glass-panel">
          <div className="achievement-icon"><Award size={26}/></div><div className="achievement-copy"><span className="project-type">PERSONAL GROWTH</span><h3>Learning through experience</h3><p>School activities, Scout experiences, and personal projects are helping me build confidence, teamwork and practical skills.</p></div><Star className="achievement-star" size={22}/>
        </div>
      </section>

      <section id="youtube" className="section-wrap section-block">
        <div className="youtube-panel glass-panel">
          <div className="youtube-graphic"><div className="yt-ring ring-a"/><div className="yt-ring ring-b"/><div className="yt-play"><Play size={32} fill="currentColor"/></div></div>
          <div className="youtube-copy"><div className="eyebrow"><span className="eyebrow-line"/> CONTENT CREATION</div><h2>Welcome to <span className="gradient-text">Vision Vault.</span></h2><p>Unlock Your Vision. Explore tech, AI tools, study hacks, tutorials and more on my YouTube channel.</p><a className="button button-primary" href="https://www.youtube.com/@visionvault-26" target="_blank" rel="noreferrer"><Youtube size={17}/> Visit the channel <ArrowUpRight size={16}/></a><div className="channel-handle">@visionvault-26 <span>•</span> UNLOCK YOUR VISION</div></div>
        </div>
      </section>

      <section id="gallery" className="section-wrap section-block gallery-section">
        <SectionTitle eyebrow="06 / GALLERY" title={<>Snapshots of the <span className="gradient-text">process.</span></>} text="A place for project screenshots, creative experiments and memorable moments." />
        <div className="gallery-grid">
          <div className="gallery-tile tile-large"><div className="gallery-art art-one"><Sparkles size={40}/><span>IDEAS → ACTION</span></div><span className="gallery-caption">01 / EXPERIMENT</span></div>
          <div className="gallery-tile"><div className="gallery-art art-two"><Code2 size={34}/><span>KEEP CODING</span></div><span className="gallery-caption">02 / LEARN</span></div>
          <div className="gallery-tile"><div className="gallery-art art-three"><Rocket size={34}/><span>KEEP BUILDING</span></div><span className="gallery-caption">03 / CREATE</span></div>
        </div>
      </section>

      <section id="contact" className="section-wrap section-block contact-section">
        <div className="contact-panel gradient-border">
          <div className="contact-orb"><Mail size={29}/></div>
          <div className="eyebrow"><span className="eyebrow-line"/> OPEN CHANNEL</div>
          <h2>Have an idea? <span className="gradient-text">Let's connect.</span></h2>
          <p>I'm always interested in learning, discovering useful tools and exploring creative ideas.</p>
          <div className="contact-actions"><a className="button button-primary" href="mailto:hello@visionvault.example"><Mail size={17}/> Send an email <ArrowUpRight size={16}/></a><a className="button button-ghost" href="https://github.com/kk63bit" target="_blank" rel="noreferrer"><Github size={17}/> GitHub profile</a></div>
          <small className="contact-note">Replace the sample email address with your preferred public contact email before publishing.</small>
        </div>
      </section>
    </main>

    <footer className="footer">
      <a className="brand footer-brand" href="#home"><span className="brand-mark logo-mark"><img src={`${import.meta.env.BASE_URL}images/vision-vault-logo.png`} alt="" /></span><span>VISION <span className="brand-light">VAULT</span><small>UNLOCK YOUR VISION</small></span></a>
      <span className="footer-center">DESIGNED TO LEARN. BUILT TO EXPLORE.</span>
      <span className="footer-right">© {new Date().getFullYear()} VISION VAULT</span>
    </footer>
    <a className="back-top" href="#home" aria-label="Back to top"><ArrowUpRight size={18}/></a>
  </div>
}

export default App
