import { Link } from 'react-router-dom';
import { FadeIn, Stagger, StaggerItem, Eyebrow } from '../components/Motion';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import { SERVICES, SERVICES_OVERVIEW } from '../content/services';

export default function Services() {
  const o = SERVICES_OVERVIEW;

  return (
    <>
      <PageHero
        eyebrow={o.eyebrow}
        title={o.title}
        lead={o.lead}
        actions={[
          { label: 'Start a Conversation', to: '/contact', primary: true },
          { label: 'Explore Services', to: '/services/data-modernization' },
        ]}
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

      <section className="gm-section gm-pb-lg">
        <FadeIn>
          <Eyebrow>{o.capabilitiesIntro.eyebrow}</Eyebrow>
          <h2 className="gm-heading gm-heading--md" style={{ marginBottom: 16 }}>{o.capabilitiesIntro.title}</h2>
          <p className="gm-body" style={{ maxWidth: '68ch', marginBottom: 36 }}>{o.capabilitiesIntro.body}</p>
        </FadeIn>
        <Stagger className="gm-grid-3 gm-grid-stretch">
          {SERVICES.map((s) => (
            <StaggerItem key={s.slug}>
              <Link to={s.path} className="gm-content-card gm-content-card--link">
                <h3 className="gm-content-card-title">{s.shortTitle}</h3>
                <p className="gm-content-card-body">{s.cardBody}</p>
                {s.cardIncludes && (
                  <ul className="gm-bullet-list">
                    {s.cardIncludes.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
                <span className="gm-pillar-link">Learn more →</span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="gm-band">
        <div className="gm-section gm-pt-lg gm-pb-lg">
          <FadeIn>
            <Eyebrow>How We Work</Eyebrow>
            <h2 className="gm-heading gm-heading--md" style={{ marginBottom: 36 }}>The Gigamatics Consulting Engagement Model</h2>
          </FadeIn>
          <Stagger className="gm-grid-2 gm-grid-stretch" style={{ gap: 20 }}>
            {o.phases.map((p, i) => (
              <StaggerItem key={p.title}>
                <div className="gm-phase-item gm-phase-item--card">
                  <div className="gm-phase-num">{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <h3 className="gm-phase-title">{p.title}</h3>
                    <p className="gm-phase-body">{p.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="gm-section gm-pt-lg gm-pb-lg">
        <FadeIn>
          <Eyebrow>Defined Deliverables</Eyebrow>
          <h2 className="gm-heading gm-heading--md" style={{ marginBottom: 18 }}>Every engagement produces tangible, documented outputs.</h2>
        </FadeIn>
        <Stagger className="gm-grid-2 gm-grid-stretch" style={{ gap: 20, marginTop: 28 }}>
          {o.deliverables.map((d) => (
            <StaggerItem key={d.title}>
              <div className="gm-principle-card">
                <h3 className="gm-principle-title">{d.title}</h3>
                <p className="gm-principle-body">{d.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="gm-band">
        <div className="gm-section gm-pt-lg gm-pb-lg">
          <FadeIn>
            <Eyebrow>Implementation & Outcomes</Eyebrow>
            <h2 className="gm-heading gm-heading--md" style={{ marginBottom: 36 }}>Consulting-Led. Engineering-Grounded.</h2>
          </FadeIn>
          <Stagger className="gm-phase-list">
            {o.outcomes.map((item) => (
              <StaggerItem key={item.num}>
                <div className="gm-phase-item">
                  <div className="gm-phase-num">{item.num}</div>
                  <div>
                    <h3 className="gm-phase-title">{item.title}</h3>
                    <p className="gm-phase-body">{item.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="gm-section gm-pt-lg gm-pb-lg">
        <FadeIn>
          <Eyebrow>Delivery Modes</Eyebrow>
          <h2 className="gm-heading gm-heading--md" style={{ marginBottom: 18 }}>Consulting, Implementation, or Managed</h2>
          <p className="gm-body" style={{ marginBottom: 28, maxWidth: '60ch' }}>
            Gigamatics engages across three modes depending on where your organization needs support. Many clients begin with consulting and progress through implementation into managed operations.
          </p>
        </FadeIn>
        <div className="gm-table-wrap">
          <table className="gm-table">
            <thead>
              <tr>
                <th>Service Domain</th>
                <th>Consulting & Advisory</th>
                <th>Implementation & Delivery</th>
                <th>Managed Operations</th>
              </tr>
            </thead>
            <tbody>
              {o.deliveryTable.map((row) => (
                <tr key={row.domain}>
                  <td>{row.domain}</td>
                  <td>{row.consulting}</td>
                  <td>{row.implement}</td>
                  <td>{row.managed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <CtaBand
        eyebrow="Start the Conversation"
        title="Not sure where to start? Let's assess your current landscape."
        lead="We offer a structured discovery call to understand where your platforms stand today — across architecture, security, reliability, and governance."
      />
    </>
  );
}
