import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FadeIn, Stagger, StaggerItem, Eyebrow, ease } from '../components/Motion';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import { MANAGED_OVERVIEW } from '../content/managed';

export default function ManagedServices() {
  const o = MANAGED_OVERVIEW;
  const [open, setOpen] = useState({});

  return (
    <>
      <PageHero
        eyebrow={o.eyebrow}
        title={o.title}
        lead={o.lead}
        actions={[{ label: 'Start a Conversation', to: '/contact', primary: true }]}
      />

      <section className="gm-section gm-pb-lg">
        <Stagger className="gm-stats-row">
          {o.stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="gm-stat-chip">
                <div className="gm-stat-chip-value">{s.value}</div>
                <div className="gm-stat-chip-label">{s.label}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="gm-band">
        <div className="gm-section gm-pt-lg gm-pb-lg">
          <FadeIn>
            <Eyebrow>{o.difference.eyebrow}</Eyebrow>
            <h2 className="gm-heading gm-heading--md" style={{ marginBottom: 16 }}>{o.difference.title}</h2>
            <p className="gm-body" style={{ maxWidth: '68ch', marginBottom: 36 }}>{o.difference.body}</p>
          </FadeIn>
          <Stagger className="gm-grid-3 gm-grid-stretch">
            {o.difference.columns.map((col) => (
              <StaggerItem key={col.title}>
                <div className={`gm-compare-card ${col.highlight ? 'gm-compare-card--accent' : ''}`}>
                  <h3 className="gm-content-card-title">{col.title}</h3>
                  <p className="gm-compare-sub">{col.subtitle}</p>
                  <ul className="gm-bullet-list">
                    {col.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="gm-section gm-pt-lg gm-pb-lg">
        <FadeIn>
          <Eyebrow>Service Areas</Eyebrow>
          <h2 className="gm-heading gm-heading--md" style={{ marginBottom: 36 }}>Four Domains. One Governance Standard.</h2>
        </FadeIn>
        <Stagger className="gm-phase-list">
          {o.domains.map((d) => (
            <StaggerItem key={d.num}>
              <div className="gm-domain-card">
                <div className="gm-phase-num">{d.num}</div>
                <div>
                  <h3 className="gm-phase-title">{d.title}</h3>
                  <p className="gm-phase-body">{d.body}</p>
                  <ul className="gm-bullet-list" style={{ marginTop: 14 }}>
                    {d.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <Link to={d.to} className="gm-pillar-link" style={{ marginTop: 16, display: 'inline-block' }}>
                    Learn More →
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="gm-band">
        <div className="gm-section gm-pt-lg gm-pb-lg">
          <FadeIn>
            <Eyebrow>Onboarding Model</Eyebrow>
            <h2 className="gm-heading gm-heading--md" style={{ marginBottom: 36 }}>Structured Onboarding. No Shortcuts.</h2>
          </FadeIn>
          <Stagger className="gm-grid-2 gm-grid-stretch" style={{ gap: 20 }}>
            {o.onboarding.map((step) => (
              <StaggerItem key={step.num}>
                <div className="gm-phase-item gm-phase-item--card">
                  <div className="gm-phase-num">{step.num}</div>
                  <div>
                    <h3 className="gm-phase-title">{step.title}</h3>
                    <p className="gm-phase-body">{step.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="gm-section gm-pt-lg gm-pb-lg">
        <FadeIn>
          <Eyebrow>Onboarding FAQs</Eyebrow>
          <h2 className="gm-heading gm-heading--md" style={{ marginBottom: 28 }}>Questions about managed onboarding</h2>
        </FadeIn>
        <div className="gm-faq-list" style={{ maxWidth: 820 }}>
          {o.faqs.map((f, i) => {
            const isOpen = !!open[i];
            return (
              <div key={f.q} className="gm-faq-item">
                <button
                  type="button"
                  className="gm-faq-btn"
                  onClick={() => setOpen((s) => ({ ...s, [i]: !s[i] }))}
                  aria-expanded={isOpen}
                >
                  <span className="gm-faq-q">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3, ease }} className="gm-faq-icon">+</motion.span>
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
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand
        eyebrow="Ready to Engage"
        title="Operations that follow the architecture you designed."
        lead="Discuss your environment with a senior practitioner — we’ll identify the right service scope, governance model, and onboarding approach for your needs."
      />
    </>
  );
}
