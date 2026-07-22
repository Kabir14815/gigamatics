import { Link } from 'react-router-dom';
import { FadeIn, Stagger, StaggerItem, Eyebrow } from './Motion';
import PageHero from './PageHero';
import CtaBand from './CtaBand';

export default function DetailPage({ page, parentLabel, parentTo }) {
  if (!page) return null;

  return (
    <>
      <PageHero
        eyebrow={parentLabel}
        title={page.title}
        lead={page.intro}
        actions={[
          { label: 'Start a Conversation', to: '/contact', primary: true },
          { label: parentLabel, to: parentTo },
        ]}
      />

      {page.pillarsIntro && (
        <section className="gm-section gm-pt-md gm-pb-md">
          <FadeIn>
            <Eyebrow>Core capabilities</Eyebrow>
            <h2 className="gm-heading gm-heading--md" style={{ marginBottom: 18 }}>What we cover</h2>
            <p className="gm-body" style={{ maxWidth: '68ch' }}>{page.pillarsIntro}</p>
          </FadeIn>
        </section>
      )}

      {page.pillars?.length > 0 && (
        <section className="gm-section gm-pb-lg">
          <Stagger className="gm-grid-3 gm-grid-stretch">
            {page.pillars.map((p) => (
              <StaggerItem key={p.title}>
                <div className="gm-content-card">
                  <h3 className="gm-content-card-title">{p.title}</h3>
                  <p className="gm-content-card-body">{p.body}</p>
                  {p.includes?.length > 0 && (
                    <ul className="gm-bullet-list">
                      {p.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      )}

      {page.engagementPhases?.length > 0 && (
        <section className="gm-band">
          <div className="gm-section gm-pt-lg gm-pb-lg">
            <FadeIn>
              <Eyebrow>How we engage</Eyebrow>
              <h2 className="gm-heading gm-heading--md" style={{ marginBottom: 36 }}>Structured engagement model</h2>
            </FadeIn>
            <Stagger className="gm-phase-list">
              {page.engagementPhases.map((phase, i) => (
                <StaggerItem key={phase.title}>
                  <div className="gm-phase-item">
                    <div className="gm-phase-num">{String(i + 1).padStart(2, '0')}</div>
                    <div>
                      <h3 className="gm-phase-title">{phase.title}</h3>
                      <p className="gm-phase-body">{phase.body}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {page.principles?.length > 0 && (
        <section className="gm-section gm-pt-lg gm-pb-lg">
          <FadeIn>
            <Eyebrow>How we think</Eyebrow>
            <h2 className="gm-heading gm-heading--md" style={{ marginBottom: 36 }}>Guiding principles</h2>
          </FadeIn>
          <Stagger className="gm-grid-2 gm-grid-stretch" style={{ gap: 20 }}>
            {page.principles.map((p) => (
              <StaggerItem key={p.title}>
                <div className="gm-principle-card">
                  <h3 className="gm-principle-title">{p.title}</h3>
                  <p className="gm-principle-body">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <div style={{ marginTop: 40 }}>
            <Link to="/contact" className="gm-btn gm-btn-primary gm-btn-glow" style={{ fontSize: 15, padding: '14px 26px' }}>
              Start a Conversation
              <span className="gm-btn-arrow">→</span>
            </Link>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
