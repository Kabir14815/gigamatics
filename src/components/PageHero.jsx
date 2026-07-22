import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eyebrow, ease } from './Motion';

export default function PageHero({ eyebrow, title, lead, actions }) {
  return (
    <header className="gm-page-hero gm-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease }}
      >
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="gm-heading gm-heading--lg gm-page-hero-title">{title}</h1>
        {lead && <p className="gm-lead gm-page-hero-lead">{lead}</p>}
        {actions && (
          <div className="gm-hero-actions" style={{ marginTop: 28 }}>
            {actions.map((a) => (
              <Link
                key={a.label}
                to={a.to}
                className={`gm-btn ${a.primary ? 'gm-btn-primary gm-btn-glow' : 'gm-btn-secondary'}`}
                style={{ fontSize: 15, padding: '14px 26px' }}
              >
                {a.label}
                {a.primary && <span className="gm-btn-arrow">→</span>}
              </Link>
            ))}
          </div>
        )}
      </motion.div>
    </header>
  );
}
