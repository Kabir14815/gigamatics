import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  IMPACT_DEFS, FAQS, MODEL, PILLARS, DELIVER, ADVANTAGES, MANAGED, INDUSTRIES, TRUST_LOGOS,
} from '../data';
import { FadeIn, Stagger, StaggerItem, Eyebrow, ease } from '../components/Motion';
import Hero from '../components/Hero';
import CtaBand from '../components/CtaBand';

function useCounter(active) {
  const [counts, setCounts] = useState(IMPACT_DEFS.map(() => 0));

  useEffect(() => {
    if (!active) return;
    const targets = IMPACT_DEFS.map((d) => d.to);
    const dur = 1400;
    const t0 = Date.now();
    const tick = () => {
      const p = Math.min(1, (Date.now() - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setCounts(targets.map((v) => v * e));
      if (p < 1) requestAnimationFrame(tick);
      else setCounts(targets);
    };
    requestAnimationFrame(tick);
  }, [active]);

  return counts;
}

function ImpactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const counts = useCounter(inView);

  return (
    <section id="impact" className="gm-impact" ref={ref}>
      <div className="gm-section gm-impact-inner">
        <FadeIn y={20}>
          <Eyebrow>Measurable impact</Eyebrow>
          <h2 className="gm-heading gm-heading--lg gm-impact-title">Results that speak for themselves.</h2>
        </FadeIn>
        <Stagger className="gm-grid-3">
          {IMPACT_DEFS.map((d, i) => (
            <StaggerItem key={d.label}>
              <div className="gm-impact-stat">
                <div className="gm-impact-value">
                  {counts[i].toFixed(d.dec)}{d.suffix}
                </div>
                <div className="gm-impact-label">{d.label}</div>
                <div className="gm-impact-desc">{d.desc}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState({});

  return (
    <section className="gm-band">
      <div className="gm-section--narrow gm-faq-section">
        <FadeIn>
          <h2 className="gm-heading gm-heading--md gm-faq-heading">Questions we hear often.</h2>
        </FadeIn>
        <Stagger className="gm-faq-list" delay={0.1}>
          {FAQS.map((f, i) => {
            const isOpen = !!open[i];
            return (
              <StaggerItem key={f.q}>
                <motion.div className="gm-faq-item">
                  <button
                    type="button"
                    className="gm-faq-btn"
                    onClick={() => setOpen((s) => ({ ...s, [i]: !s[i] }))}
                    aria-expanded={isOpen}
                  >
                    <span className="gm-faq-q">{f.q}</span>
                    <motion.span
                      className="gm-faq-icon"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease }}
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p className="gm-faq-a">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

const ECOSYSTEM = [
  {
    title: 'Cloud Platforms',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>,
    image: '/cloud-logos.png',
    logos: [],
    tags: ['Cloud Migration', 'Landing Zones', 'Governance', 'FinOps', 'Disaster Recovery']
  },
  {
    title: 'Databases',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    image: '/database-logos.png',
    logos: [],
    tags: ['Database Modernization', 'High Availability', 'Performance Tuning', 'Upgrades', 'Managed DBA']
  },
  {
    title: 'Data & Analytics',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
    image: '/data-analytics-logos.png',
    logos: [],
    tags: ['Data Engineering', 'Analytics Platforms', 'Data Modeling', 'Pipeline Automation']
  },
  {
    title: 'Infrastructure & DevOps',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    image: '/infrastructure-logos.png',
    logos: [],
    tags: ['Infrastructure as Code', 'Container Orchestration', 'Automation', 'CI/CD', 'Configuration Management']
  },
  {
    title: 'Observability',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
    image: '/observability-logos.png',
    logos: [],
    tags: ['Monitoring', 'Metrics', 'Logging', 'Alerting', 'Performance Insights']
  }
];

function EcosystemSection() {
  return (
    <section className="gm-section" style={{ padding: '64px 20px' }}>
      <FadeIn>
      <div style={{ background: '#F8FAFC', borderRadius: '32px', padding: '64px 40px', border: '1px solid #E2E8F0', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ height: '1px', background: '#CBD5E1', width: '40px' }} />
            <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.15em', color: '#0EA5E9', textTransform: 'uppercase' }}>
              Enterprise Technology Ecosystem
            </span>
            <div style={{ height: '1px', background: '#CBD5E1', width: '40px' }} />
          </div>
          <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#0F172A', marginBottom: '16px', fontFamily: '"Newsreader", serif' }}>
            End-to-End. Multi-Platform. Business Focused.
          </h2>
          <p style={{ fontSize: '16px', color: '#64748B', maxWidth: '600px', margin: '0 auto' }}>
            We work across the complete enterprise technology stack—from cloud and databases to DevOps and observability.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', marginBottom: '56px' }}>
          {ECOSYSTEM.map((category) => (
            <motion.div 
              key={category.title}
              whileHover={{ y: -8, boxShadow: '0 32px 64px -16px rgba(15, 23, 42, 0.15)' }}
              transition={{ duration: 0.3 }}
              style={{ 
                background: '#FFFFFF', 
                borderRadius: '16px', 
                padding: '32px 24px', 
                border: 'none', 
                boxShadow: '0 12px 32px -8px rgba(15, 23, 42, 0.08)',
                width: '100%',
                maxWidth: '340px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1E293B', margin: 0 }}>{category.title}</h3>
              </div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'center', marginBottom: '32px', flex: 1 }}>
                {category.image ? (
                  <img src={category.image} alt={category.title} style={{ width: '100%', maxWidth: '240px', height: 'auto', display: 'block', filter: 'brightness(1.08) contrast(1.08)', mixBlendMode: 'multiply' }} />
                ) : (
                  category.logos.map((logo) => (
                    <span key={logo.name} style={{ fontSize: '15px', fontWeight: logo.bold ? '800' : '600', color: logo.color }}>
                      {logo.name}
                    </span>
                  ))
                )}
              </div>

              <div style={{ height: '1px', background: '#E2E8F0', width: '100%', marginBottom: '20px' }} />

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
                {category.tags.map((tag, i) => (
                  <span key={tag} style={{ fontSize: '12px', color: '#64748B' }}>
                    {tag}{i < category.tags.length - 1 ? <span style={{ margin: '0 4px', color: '#CBD5E1' }}>|</span> : ''}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div style={{ background: '#F1F5F9', border: '1px solid #E2E8F0', borderRadius: '100px', padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ background: '#0EA5E9', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <p style={{ fontSize: '14px', color: '#334155', margin: 0 }}>
            <strong style={{ color: '#0F172A', fontWeight: '700' }}>One Partner. Every Layer Covered.</strong> 
            <span style={{ margin: '0 12px', color: '#CBD5E1' }}>|</span> 
            Gigamatics helps enterprises design, build, secure and operate resilient, high-performance technology environments.
          </p>
        </div>
      </div>
      </FadeIn>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />


      <section className="gm-section gm-engage-section">
        <FadeIn>
          <div className="gm-engage-header">
            <Eyebrow>How we engage</Eyebrow>
            <h2 className="gm-heading gm-heading--md">From strategy to stable operations.</h2>
          </div>
        </FadeIn>
        <Stagger className="gm-grid-3" style={{ gap: 20 }}>
          {MODEL.map((m, i) => (
            <StaggerItem key={m.kicker}>
              <motion.div
                className="gm-engage-card"
                whileHover={{ y: -6, boxShadow: '0 28px 56px -24px rgba(15,23,42,0.16)' }}
                transition={{ duration: 0.35, ease }}
              >
                <div className="gm-engage-card-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="gm-engage-kicker">{m.kicker.split('·')[1]?.trim() || m.kicker}</div>
                <h3 className="gm-engage-title">{m.title}</h3>
                <p className="gm-engage-body">{m.body}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section id="pillars" className="gm-section gm-pt-lg gm-pb-lg">
        <FadeIn>
          <div className="gm-section-header">
            <div className="gm-section-header__main">
              <Eyebrow>Our expertise</Eyebrow>
              <h2 className="gm-heading gm-heading--lg">Six pillars of enterprise technology.</h2>
            </div>
            <p className="gm-body gm-section-header__aside">
              Our consultants bring deep, domain-specific expertise to your most complex challenges — from cloud migration to AI-powered automation.
            </p>
          </div>
        </FadeIn>
        <Stagger className="gm-grid-3 gm-grid-stretch">
          {PILLARS.map((p) => (
            <StaggerItem key={p.num}>
              <motion.div style={{ height: '100%' }} whileHover={{ y: -6 }} transition={{ duration: 0.35, ease }}>
                <Link to={p.to} className="gm-pillar-card gm-pillar-card--accent">
                  <div className="gm-pillar-num">{p.num}</div>
                  <h3 className="gm-pillar-title">{p.title}</h3>
                  <p className="gm-pillar-body">{p.body}</p>
                  <span className="gm-pillar-link">Learn more →</span>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
      <EcosystemSection />

      <section className="gm-band">
        <div className="gm-section gm-band-inner gm-grid-2 gm-grid-2--deliver">
          <FadeIn>
            <Eyebrow>What we deliver</Eyebrow>
            <h2 className="gm-heading gm-heading--md gm-deliver-title">Strategy to execution.</h2>
            <p className="gm-body gm-deliver-lead">
              Structured, end-to-end consulting engagements that translate enterprise strategy into secure, scalable execution. Every engagement is architecture-led, outcome-defined and operationally accountable.
            </p>
            <Stagger className="gm-checklist">
              {DELIVER.map((d) => (
                <StaggerItem key={d.h}>
                  <div className="gm-check-item">
                    <span className="gm-check-icon">✓</span>
                    <p className="gm-check-text">
                      <strong style={{ fontWeight: 700 }}>{d.h}</strong>{' '}
                      <span style={{ color: 'var(--muted)' }}>— {d.b}</span>
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ display: 'inline-block', marginTop: 28 }}>
              <Link
                to="/contact"
                className="gm-btn gm-btn-primary gm-btn-glow"
                style={{ fontSize: 15.5, padding: '16px 30px' }}
              >
                Start a Conversation
                <span className="gm-btn-arrow">→</span>
              </Link>
            </motion.div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <motion.div className="gm-img-wrap" style={{ aspectRatio: '4/3', borderRadius: 18 }}>
              <img
                className="gm-img"
                src="/indian-office-gigamatics.png"
                alt="Gigamatics Indian Office"
              />
            </motion.div>
          </FadeIn>
        </div>
      </section>

      <section className="gm-section gm-pt-lg gm-pb-lg">
        <FadeIn>
          <Eyebrow>Why Gigamatics</Eyebrow>
          <h2 className="gm-heading gm-heading--lg gm-about-title">The consulting advantage.</h2>
        </FadeIn>
        <Stagger className="gm-grid-4 gm-grid-stretch">
          {ADVANTAGES.map((a) => (
            <StaggerItem key={a.num}>
              <div className="gm-advantage">
                <div className="gm-advantage-num">{a.num}</div>
                <h3 className="gm-advantage-title">{a.title}</h3>
                <p className="gm-advantage-body">{a.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <div style={{ marginTop: 32 }}>
          <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ display: 'inline-block' }}>
            <Link 
              to="/about" 
              className="gm-btn gm-btn-primary gm-btn-glow"
              style={{ fontSize: 15.5, padding: '16px 30px' }}
            >
              About Gigamatics
              <span className="gm-btn-arrow">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <ImpactSection />

      <section id="managed" className="gm-section gm-pt-lg gm-pb-lg">
        <FadeIn>
          <div className="gm-section-header">
            <div className="gm-section-header__main">
              <Eyebrow>Managed services</Eyebrow>
              <h2 className="gm-heading gm-heading--lg">Consulting-governed technology operations.</h2>
            </div>
            <p className="gm-body gm-section-header__aside">
              Architecture standards and governance frameworks defined by subject-matter experts, with day-to-day execution under structured oversight.
            </p>
          </div>
        </FadeIn>
        <Stagger className="gm-grid-3 gm-grid-stretch">
          {MANAGED.map((m) => (
            <StaggerItem key={m.title}>
              <Link to={m.to || '/managed-services'} className="gm-managed-card">
                <h3 className="gm-managed-title">
                  <span className="gm-managed-dot" />
                  {m.title}
                </h3>
                <p className="gm-managed-body">{m.body}</p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
        <div style={{ marginTop: 32 }}>
          <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ display: 'inline-block' }}>
            <Link 
              to="/managed-services" 
              className="gm-btn gm-btn-primary gm-btn-glow"
              style={{ fontSize: 15.5, padding: '16px 30px' }}
            >
              Explore Managed Services
              <span className="gm-btn-arrow">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="industries" className="gm-band">
        <div className="gm-section gm-pt-lg gm-pb-lg">
          <FadeIn>
            <Eyebrow>Industries we serve</Eyebrow>
            <h2 className="gm-heading gm-heading--lg gm-industries-title">Supporting critical industries.</h2>
            <p className="gm-body gm-industries-lead">
              Gigamatics supports organizations across industries that depend on stable, secure, and scalable technology platforms. Our experience spans regulated and high-growth sectors where data integrity, operational reliability, and governance are critical.
            </p>
          </FadeIn>
          <Stagger className="gm-grid-3 gm-grid-stretch">
            {INDUSTRIES.map((ind) => (
              <StaggerItem key={ind.title}>
                <div className="gm-industry-card">
                  <div className="gm-industry-img gm-img-wrap" style={{ borderRadius: 0, boxShadow: 'none' }}>
                    <img className="gm-img" src={ind.img} alt={ind.title} />
                  </div>
                  <div className="gm-industry-body">
                    <h3 className="gm-industry-title">{ind.title}</h3>
                    <p className="gm-industry-desc">{ind.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="gm-section gm-pt-lg gm-pb-lg">
        <div style={{ background: '#F8FAFC', borderRadius: '32px', padding: '80px 40px', border: '1px solid #E2E8F0', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <Eyebrow style={{ justifyContent: 'center' }}>From the founder</Eyebrow>
            <blockquote className="gm-quote" style={{ margin: '40px auto', fontSize: '28px', lineHeight: '1.4', color: '#0F172A', maxWidth: '900px' }}>
              "Enterprise technology consulting should be led by practitioners who understand architecture, governance and risk — <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>not by sales teams chasing volume.</em> Every engagement at Gigamatics benefits from direct leadership, structured thinking, and a genuine commitment to building platforms that endure."
            </blockquote>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#E2E8F0', color: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>SS</div>
              <div style={{ fontSize: '20px', fontWeight: '700', color: '#0F172A' }}>Samarth Sharma</div>
              <div style={{ fontSize: '16px', color: '#64748B', fontWeight: '600' }}>Founder & Principal Consultant, Gigamatics</div>
              <div style={{ fontSize: '14px', color: '#94A3B8', marginTop: '4px' }}>22+ years in enterprise technology · Cloud · Data · Security</div>
              <motion.a 
                whileHover={{ x: 4 }}
                href="https://www.linkedin.com/in/isamarthsharma" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '16px', color: 'var(--accent)', fontWeight: '600', fontSize: '15px' }}
              >
                LinkedIn <span style={{ fontSize: '18px' }}>→</span>
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </section>

      <FAQSection />
      <CtaBand />
    </>
  );
}
