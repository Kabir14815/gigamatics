import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          background: '#F4F7FB',
          fontFamily: 'system-ui, sans-serif',
          color: '#0F172A',
          textAlign: 'center',
        }}
        >
          <div>
            <h1 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Something went wrong</h1>
            <p style={{ opacity: 0.7, maxWidth: '40ch', margin: '0 auto 1rem' }}>
              The page failed to load. Try a hard refresh, or visit the hosted URL directly.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              style={{
                color: '#0F62D4',
                fontWeight: 600,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 'inherit',
              }}
            >
              Reload page →
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
