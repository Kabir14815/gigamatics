import { Link } from 'react-router-dom';
import { FadeIn, Stagger, StaggerItem, Eyebrow } from '../components/Motion';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import { ABOUT } from '../content/about';

export default function About() {
  const { whatWeAre, howWeWork, engagementModel, principles, conversation } = ABOUT;

  return (
    <>
      <PageHero
        eyebrow={ABOUT.eyebrow}
        title={ABOUT.title}
        lead={ABOUT.lead}
        actions={[
          { label: 'Work With Us', to: '/contact', primary: true },
          { label: 'Our Services', to: '/services' },
        ]}
      />

      <section className="gm-section gm-pt-lg gm-pb-lg">
        <FadeIn>
          <Eyebrow>{whatWeAre.eyebrow}</Eyebrow>
          <h2 className="gm-heading gm-heading--md" style={{ marginBottom: 20 }}>{whatWeAre.title}</h2>
          {whatWeAre.body.split('\n\n').map((para) => (
            <p key={para.slice(0, 40)} className="gm-body" style={{ maxWidth: '72ch', marginBottom: 16 }}>{para}</p>
          ))}
        </FadeIn>
        <Stagger className="gm-grid-3 gm-grid-stretch" style={{ marginTop: 40 }}>
          {whatWeAre.pillars.map((p) => (
            <StaggerItem key={p.title}>
              <div className="gm-content-card">
                <h3 className="gm-content-card-title">{p.title}</h3>
                <p className="gm-content-card-body">{p.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="gm-band">
        <div className="gm-section gm-pt-lg gm-pb-lg">
          <FadeIn>
            <Eyebrow>{howWeWork.eyebrow}</Eyebrow>
            <h2 className="gm-heading gm-heading--md" style={{ marginBottom: 36 }}>{howWeWork.title}</h2>
          </FadeIn>
          <Stagger className="gm-phase-list">
            {howWeWork.items.map((item) => (
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
          <Eyebrow>{engagementModel.eyebrow}</Eyebrow>
          <h2 className="gm-heading gm-heading--md" style={{ marginBottom: 18 }}>{engagementModel.title}</h2>
          <p className="gm-body" style={{ maxWidth: '68ch', marginBottom: 36 }}>{engagementModel.body}</p>
        </FadeIn>
        <Stagger className="gm-grid-2 gm-grid-stretch" style={{ gap: 20 }}>
          {engagementModel.cards.map((c) => (
            <StaggerItem key={c.title}>
              <div className="gm-principle-card">
                <h3 className="gm-principle-title">{c.title}</h3>
                <p className="gm-principle-body">{c.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="gm-band">
        <div className="gm-section gm-pt-lg gm-pb-lg">
          <FadeIn>
            <Eyebrow>{principles.eyebrow}</Eyebrow>
            <h2 className="gm-heading gm-heading--md" style={{ marginBottom: 36 }}>{principles.title}</h2>
          </FadeIn>
          <Stagger className="gm-grid-3 gm-grid-stretch">
            {principles.items.map((p) => (
              <StaggerItem key={p.title}>
                <div className="gm-content-card">
                  <h3 className="gm-content-card-title">{p.title}</h3>
                  <p className="gm-content-card-body">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="gm-section gm-pt-lg gm-pb-lg">
        <FadeIn>
          <Eyebrow>{conversation.eyebrow}</Eyebrow>
          <h2 className="gm-heading gm-heading--md" style={{ marginBottom: 18 }}>{conversation.title}</h2>
          <p className="gm-body" style={{ maxWidth: '60ch', marginBottom: 36 }}>{conversation.body}</p>
        </FadeIn>
        <Stagger className="gm-grid-3 gm-grid-stretch">
          {conversation.cards.map((c) => (
            <StaggerItem key={c.title}>
              <div className="gm-content-card">
                <h3 className="gm-content-card-title">{c.title}</h3>
                <p className="gm-content-card-body">{c.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <div style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link to="/contact" className="gm-btn gm-btn-primary gm-btn-glow">Work With Us <span className="gm-btn-arrow">→</span></Link>
          <Link to="/services" className="gm-btn gm-btn-secondary">Our Services</Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
