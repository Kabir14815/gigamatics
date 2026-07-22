import { useState } from 'react';
import { FadeIn, Stagger, StaggerItem, Eyebrow } from '../components/Motion';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import { CONTACT } from '../content/site';

const INTERESTS = [
  'Data Modernization',
  'Cloud & Infrastructure',
  'Security & Compliance',
  'Disaster Recovery',
  'Platform Reliability',
  'AI & Automation',
  'FinOps',
  'Managed Services',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    phone: '',
    interest: INTERESTS[0],
    message: '',
  });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Gigamatics enquiry — ${form.interest}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Company: ${form.company}`,
        `Role: ${form.role}`,
        `Phone: ${form.phone}`,
        `Area of Interest: ${form.interest}`,
        '',
        form.message || '(No message provided)',
      ].join('\n'),
    );
    window.location.href = `${CONTACT.emailHref}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with us"
        lead="Discuss your objectives, challenges, or upcoming initiatives with our team. Share a brief overview of your requirements, and we’ll respond with a structured next step aligned to your environment and priorities."
      />

      <section className="gm-section gm-pb-lg">
        <Stagger className="gm-grid-3" style={{ gap: 20, marginBottom: 48 }}>
          <StaggerItem>
            <div className="gm-content-card">
              <Eyebrow>Phone</Eyebrow>
              <a href={CONTACT.phoneHref} className="gm-content-card-title" style={{ display: 'block' }}>{CONTACT.phone}</a>
              <p className="gm-content-card-body">{CONTACT.hours}</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="gm-content-card">
              <Eyebrow>Email</Eyebrow>
              <a href={CONTACT.emailHref} className="gm-content-card-title" style={{ display: 'block' }}>{CONTACT.email}</a>
              <p className="gm-content-card-body">We typically respond within one business day.</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="gm-content-card">
              <Eyebrow>Registered Address</Eyebrow>
              <p className="gm-content-card-title" style={{ fontSize: 20 }}>{CONTACT.address}</p>
            </div>
          </StaggerItem>
        </Stagger>

        <FadeIn>
          <div className="gm-contact-form-wrap">
            <Eyebrow>Enquiry</Eyebrow>
            <h2 className="gm-heading gm-heading--md" style={{ marginBottom: 12 }}>Get a solution for your business</h2>
            <p className="gm-body" style={{ marginBottom: 28, maxWidth: '56ch' }}>
              Share a brief overview of your requirements and we’ll respond with a structured next step.
            </p>
            <form className="gm-contact-form" onSubmit={onSubmit}>
              <div className="gm-form-grid">
                <label>
                  <span>Your name</span>
                  <input required value={form.name} onChange={update('name')} placeholder="Full name" />
                </label>
                <label>
                  <span>Work email</span>
                  <input required type="email" value={form.email} onChange={update('email')} placeholder="you@company.com" />
                </label>
                <label>
                  <span>Company Name</span>
                  <input value={form.company} onChange={update('company')} placeholder="Organisation" />
                </label>
                <label>
                  <span>Role / Title</span>
                  <input value={form.role} onChange={update('role')} placeholder="Your role" />
                </label>
                <label>
                  <span>Contact Number</span>
                  <input value={form.phone} onChange={update('phone')} placeholder="+91 ..." />
                </label>
                <label>
                  <span>Area of Interest</span>
                  <select value={form.interest} onChange={update('interest')}>
                    {INTERESTS.map((i) => <option key={i} value={i}>{i}</option>)}
                  </select>
                </label>
              </div>
              <label className="gm-form-full">
                <span>Your message (optional)</span>
                <textarea rows={5} value={form.message} onChange={update('message')} placeholder="Tell us about your environment and priorities" />
              </label>
              <button type="submit" className="gm-btn gm-btn-primary gm-btn-glow" style={{ fontSize: 15, padding: '14px 28px' }}>
                Send Message
                <span className="gm-btn-arrow">→</span>
              </button>
            </form>
          </div>
        </FadeIn>
      </section>

      <CtaBand />
    </>
  );
}
