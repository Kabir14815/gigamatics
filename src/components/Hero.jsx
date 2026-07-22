import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ease } from './Motion';
import { HERO_METRICS, HERO_PILLS } from '../data';

export default function Hero() {
  return (
    <header className="gm-hero-wrap">
      <div className="gm-grid-2 gm-section">
        <div className="gm-hero-copy">
          <motion.div
            className="gm-hero-badge"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="gm-hero-badge-dot" />
            Enterprise Technology Partner
          </motion.div>

          <motion.h1
            className="gm-heading gm-heading--hero gm-heading--hero-split"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease }}
          >
            Designing resilient platforms, from strategy through{' '}
            <em className="gm-text-gradient">operations.</em>
          </motion.h1>

          <motion.p
            className="gm-lead gm-lead--hero"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease }}
          >
            We bring together senior practitioners across cloud, data, security, and platform engineering to help enterprises modernize with confidence — from strategy through operations.
          </motion.p>

          <motion.div
            className="gm-hero-pills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26, ease }}
          >
            {HERO_PILLS.map((pill, i) => (
              <span key={pill} className="gm-hero-pill-wrap">
                {i > 0 && <span className="gm-hero-pill-sep" aria-hidden="true">·</span>}
                <span className="gm-hero-pill">{pill}</span>
              </span>
            ))}
          </motion.div>

          <motion.div
            className="gm-hero-actions"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease }}
          >
            <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="gm-btn gm-btn-primary gm-btn-glow"
                style={{ fontSize: 15.5, padding: '16px 30px' }}
              >
                Start a Conversation
                <span className="gm-btn-arrow">→</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/services"
                className="gm-btn gm-btn-secondary"
                style={{ fontSize: 15.5, padding: '16px 28px' }}
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

        </div>

        <motion.div
          className="gm-hero-visual-col"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          <div style={{ position: 'relative', maxWidth: '380px', margin: '-40px 0 0 auto', transform: 'translateY(-20px)' }}>
            <div style={{ background: '#fff', borderRadius: '20px', padding: '36px 32px', boxShadow: '0 24px 64px -20px rgba(15, 98, 212, 0.15)', border: '1px solid rgba(15, 23, 42, 0.06)', position: 'relative', zIndex: 2 }}>
              <div style={{ width: '48px', height: '48px', background: '#4A80F0', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg>
              </div>

              <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em', color: '#4A80F0', textTransform: 'uppercase', marginBottom: '10px' }}>Platform Health</div>
              <div style={{ fontSize: '20px', fontWeight: '700', color: '#0F172A', marginBottom: '32px', lineHeight: '1.3' }}>Enterprise Readiness Scorecard</div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px', marginBottom: '10px' }}>
                    <span style={{ color: '#64748B', fontWeight: '500' }}>Cloud Architecture</span>
                    <span style={{ color: '#4A80F0', fontWeight: '600' }}>Optimized</span>
                  </div>
                  <div style={{ height: '6px', background: '#F1F5F9', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '92%', height: '100%', background: '#4A80F0', borderRadius: '4px' }}></div>
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px', marginBottom: '10px' }}>
                    <span style={{ color: '#64748B', fontWeight: '500' }}>Security Posture</span>
                    <span style={{ color: '#4A80F0', fontWeight: '600' }}>Governed</span>
                  </div>
                  <div style={{ height: '6px', background: '#F1F5F9', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '85%', height: '100%', background: '#4A80F0', borderRadius: '4px' }}></div>
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px', marginBottom: '10px' }}>
                    <span style={{ color: '#64748B', fontWeight: '500' }}>Recovery Readiness</span>
                    <span style={{ color: '#4A80F0', fontWeight: '600' }}>Validated</span>
                  </div>
                  <div style={{ height: '6px', background: '#F1F5F9', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '100%', height: '100%', background: '#4A80F0', borderRadius: '4px' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
              style={{ position: 'absolute', top: '-16px', right: '-24px', background: '#fff', padding: '12px 20px', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 12px 24px -8px rgba(15, 23, 42, 0.1)', border: '1px solid rgba(15, 23, 42, 0.05)', zIndex: 3, fontSize: '13.5px', fontWeight: '600', color: '#0F172A' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4A80F0', boxShadow: '0 0 0 4px rgba(74, 128, 240, 0.2)' }}></div>
              Governance Active
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }}
              style={{ position: 'absolute', bottom: '-20px', left: '-32px', background: '#fff', padding: '12px 20px', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 12px 24px -8px rgba(15, 23, 42, 0.1)', border: '1px solid rgba(15, 23, 42, 0.05)', zIndex: 3, fontSize: '13.5px', fontWeight: '600', color: '#0F172A' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 0 4px rgba(16, 185, 129, 0.2)' }}></div>
              Architecture Reviewed
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="gm-hero-grid-bg" aria-hidden="true" />
    </header>
  );
}
