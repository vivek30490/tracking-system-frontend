import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const styles = {
    body: {
      fontFamily: "'Arial', sans-serif",
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      backgroundImage: 'url(https://image.freepik.com/free-vector/skill-levels-knob-button-increasing-skills-level_127544-130.jpg)', // Replace with your background image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      color: 'white',
    },
    header: {
      backgroundColor: 'rgba(40, 44, 52, 0.8)', // Semi-transparent background for header
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    nav: {
      listStyle: 'none',
      display: 'flex',
      gap: '15px',
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      transition: 'color 0.3s',
    },
    hero: {
      padding: '50px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      textAlign: 'left',
    },
    heroText: {
      maxWidth: '500px',
    },
    ctaButton: {
      padding: '10px 20px',
      margin: '10px',
      border: 'none',
      cursor: 'pointer',
      backgroundColor: '#007BFF',
      color: 'white',
      transition: 'background-color 0.3s',
    },
    learnMoreButton: {
      padding: '10px 20px',
      margin: '10px',
      border: '2px solid #007BFF',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      color: '#007BFF',
      transition: 'background-color 0.3s, color 0.3s',
    },
    section: {
      padding: '50px',
      textAlign: 'center',
    },
    cardContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
    },
    footer: {
      backgroundColor: 'rgba(40, 44, 52, 0.8)', // Semi-transparent footer
      color: 'white',
      padding: '50px',
      textAlign: 'center',
    },
    footerLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
    },
    footerBottom: {
      marginTop: '20px',
    },
    blackText: {
      color: 'black', // Define a style for black text
    },
  };

  return (
    <div style={styles.body}>
      {/* Header */}
      <header style={styles.header}>
        <div className="logo">CertTrack</div>
        <nav>
          <ul style={styles.nav}>
            <li><Link to="/" style={styles.navLink}>Home</Link></li>
            <li><Link to="/Certifications" style={styles.navLink}>Certifications</Link></li>
            <li><Link to="/help" style={styles.navLink}>Help Center</Link></li>
            <li><Link to="/signup" style={styles.navLink}>Login/Sign Up</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroText}>
          <h1 style={{ color: 'white' }}>Easily Track and Manage Your Professional Certifications</h1>
          <p>The renewal reminders are a lifesaver.</p>
          <Link to="/signup">
            <button style={styles.ctaButton}>Sign Up Now</button>
          </Link>
          <Link to="/Certifications">
          <button style={styles.learnMoreButton}>Learn More</button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.section}>
        <h2>What You Can Do</h2>
        <div style={styles.cardContainer}>
          <div className="feature-card">
            <h3>Certification Management</h3>
            <p>Store, access, and manage all your certifications in one place.</p>
          </div>
          <div className="feature-card">
            <h3>Renewal Reminders</h3>
            <p>Never miss a deadline—get alerts for upcoming renewals.</p>
          </div>
          <div className="feature-card">
            <h3>Admin Controls</h3>
            <p>Easily manage certifications and renewals for your entire team.</p>
          </div>
          <div className="feature-card">
            <h3>Instant Verification</h3>
            <p>Securely share and verify your certifications with employers.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={styles.section}>
        <h2>How It Works</h2>
        <div style={styles.cardContainer}>
          <div className="step">
            <h3 style={styles.blackText}>Step 1: Sign Up</h3>
            <p style={styles.blackText}>Create your free account and start tracking your certifications.</p>
          </div>
          <div className="step">
            <h3 style={styles.blackText}>Step 2: Add Certifications</h3>
            <p style={styles.blackText}>Upload and record your certification details.</p>
          </div>
          <div className="step">
            <h3 style={styles.blackText}>Step 3: Track Expiration Dates</h3>
            <p style={styles.blackText}>Receive reminders before your certifications expire.</p>
          </div>
          <div className="step">
            <h3 style={styles.blackText}>Step 4: Renew & Access</h3>
            <p style={styles.blackText}>Keep your certifications up-to-date and easily accessible.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={styles.section}>
        <h2 style={styles.blackText}>Trusted by Professionals Worldwide</h2>
        <div style={styles.cardContainer}>
          <div className="testimonial-card">
            <p style={styles.blackText}>"CertTrack has saved me hours of work managing my certifications!"</p>
            <h4 style={styles.blackText}>— Jane Doe, Project Manager</h4>
          </div>
          <div className="testimonial-card">
            <p style={styles.blackText}>"The renewal reminders are a lifesaver."</p>
            <h4 style={styles.blackText}>— John Smith, IT Specialist</h4>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <div className="footer-content">
          <ul style={styles.footerLinks}>
            <li><a href="#about" style={styles.navLink}>About Us</a></li>
            <li><a href="#privacy" style={styles.navLink}>Privacy Policy</a></li>
            <li><a href="#terms" style={styles.navLink}>Terms of Service</a></li>
            <li><a href="#contact" style={styles.navLink}>Contact</a></li>
          </ul>
          <div className="social-media">
            <a href="#linkedin" style={styles.navLink}>LinkedIn</a>
            <a href="#twitter" style={styles.navLink}>Twitter</a>
            <a href="#facebook" style={styles.navLink}>Facebook</a>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>© 2024 Professional Certification Tracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
