import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeIn, ease } from './Motion';
import { CONTACT } from '../content/site';

export default function CtaBand({
  eyebrow = 'Ready when you are',
  title = 'Start your modernization journey.',
  lead = 'Connect with our team to discuss your data, cloud or security landscape and define a clear, structured path forward.',
}) {
  return (
    <section className="gm-section gm-cta-section">
      <FadeIn y={32}>
        <motion.div
          className="gm-cta-box gm-cta-box--dark"
          whileInView={{ scale: [0.98, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="gm-cta-glow" aria-hidden="true" />
          <h2 className="gm-heading gm-cta-heading gm-cta-heading--light">{title}</h2>
          <p className="gm-cta-lead gm-cta-lead--light">{lead}</p>
          <div className="gm-cta-actions">
            <Link
              to="/contact"
              className="gm-btn gm-btn-primary gm-btn-glow"
              style={{ fontSize: 16, padding: '17px 36px' }}
            >
              Let&apos;s Connect
              <span className="gm-btn-arrow">→</span>
            </Link>
            <a
              href={CONTACT.phoneHref}
              className="gm-btn gm-btn-ghost"
              style={{ fontSize: 15, padding: '17px 28px' }}
            >
              {CONTACT.phone}
            </a>
          </div>
        </motion.div>
      </FadeIn>
    </section>
  );
}
