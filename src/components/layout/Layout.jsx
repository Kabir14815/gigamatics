import { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ease } from '../Motion';
import { MAIN_NAV, FOOTER_LINKS, CONTACT } from '../../content/site';

function Dropdown({ item, mobile, onNavigate }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  if (mobile) {
    return (
      <div className="gm-mobile-group">
        <button type="button" className="gm-mobile-group-btn" onClick={() => setOpen((v) => !v)}>
          <NavLink to={item.to} onClick={onNavigate}>{item.label}</NavLink>
          <span aria-hidden="true">{open ? '−' : '+'}</span>
        </button>
        {open && (
          <div className="gm-mobile-sub">
            {item.children.map((c) => (
              <NavLink key={c.to} to={c.to} onClick={onNavigate}>{c.label}</NavLink>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="gm-nav-dropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <NavLink to={item.to} className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
        {item.label}
        <span className="gm-nav-caret" aria-hidden="true">▾</span>
      </NavLink>
      <AnimatePresence>
        {open && (
          <motion.div
            className="gm-nav-menu"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2, ease }}
          >
            {item.children.map((c) => (
              <Link key={c.to} to={c.to} onClick={() => setOpen(false)}>{c.label}</Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const navShadow = useTransform(scrollY, [0, 12], ['none', '0 8px 32px -12px rgba(15,23,42,0.12)']);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="gm-page">
      <div className="gm-ambient" aria-hidden="true">
        <span className="gm-glow-1" />
        <span className="gm-glow-2" />
        <span className="gm-grain" />
      </div>

      <motion.nav className="gm-nav" style={{ boxShadow: navShadow }}>
        <div className="gm-section gm-nav-inner">
          <Link to="/" className="gm-logo">
            <img src="/assets/logo.png" alt="GIGAMATICS" className="gm-logo-img" />
          </Link>

          <div className="gm-nav-links">
            {MAIN_NAV.map((item) => (
              item.children ? (
                <Dropdown key={item.label} item={item} />
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                >
                  {item.label}
                </NavLink>
              )
            ))}
          </div>

          <div className="gm-nav-actions">
            <Link to="/contact" className="gm-btn gm-btn-dark gm-nav-cta">
              Let&apos;s Connect
            </Link>
            <button
              type="button"
              className="gm-nav-burger"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="gm-mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease }}
            >
              <div className="gm-section gm-mobile-nav-inner">
                {MAIN_NAV.map((item) => (
                  item.children ? (
                    <Dropdown key={item.label} item={item} mobile onNavigate={() => setMobileOpen(false)} />
                  ) : (
                    <NavLink
                      key={item.label}
                      to={item.to}
                      end={item.to === '/'}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  )
                ))}
                <Link to="/contact" className="gm-btn gm-btn-primary" onClick={() => setMobileOpen(false)}>
                  Let&apos;s Connect
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main>
        <Outlet />
      </main>

      <footer className="gm-footer-wrap">
        <div className="gm-section gm-footer-grid">
          <div>
            <Link to="/" className="gm-logo" style={{ marginBottom: 16 }}>
              <img src="/assets/logo.png" alt="GIGAMATICS" className="gm-logo-img" />
            </Link>
            <p className="gm-footer-tagline">Consult. Implement. Operate.</p>
            <p className="gm-footer-desc">
              An enterprise technology partner helping organizations modernize with confidence — from strategy through operations.
            </p>
          </div>
          <div>
            <div className="gm-footer-col-label">Explore</div>
            <div className="gm-footer-links">
              {FOOTER_LINKS.map((l) => (
                <Link key={l.to} to={l.to}>{l.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <div className="gm-footer-col-label">Contact</div>
            <div className="gm-footer-links">
              <a href={CONTACT.emailHref}>{CONTACT.email}</a>
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              <span>{CONTACT.addressShort}</span>
              <span>{CONTACT.hours}</span>
            </div>
          </div>
          <div>
            <div className="gm-footer-col-label">Follow</div>
            <div className="gm-footer-links">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://x.com/" target="_blank" rel="noreferrer">X / Twitter</a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
        </div>
        <div className="gm-section gm-footer-bar">
          <span>© 2026 {CONTACT.company}</span>
          <span>All rights reserved</span>
        </div>
      </footer>
    </div>
  );
}
