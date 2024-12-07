import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:1008/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const contentType = response.headers.get('content-type');
      let data;

      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      if (response.ok) {
        alert(data.message || 'Login successful');
        navigate('/dashboard');
      } else {
        setError(data.message || 'Invalid email or password');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while logging in');
    }

    setEmail('');
    setPassword('');
  };

  const styles = {
    body: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',  // Ensures the form is aligned to the right side
      minHeight: '100vh',
      background: 'url("https://positivepsychology.com.au/wp-content/uploads/2022/10/talent-developemnt-2-scaled.jpg") center/cover no-repeat',
      fontFamily: "'Open Sans', sans-serif",
      padding: '0 5%',
      position: 'relative',
    },
    homeButton: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      backgroundColor: '#007BFF',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '5px',
      textDecoration: 'none',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    wrapper: {
      width: '400px',
      padding: '30px',
      borderRadius: '8px',
      textAlign: 'center',
      backdropFilter: 'blur(9px)',
      backgroundColor: 'rgba(255, 255, 255, 0.9)', // Set light white color
      color: '#000',  // Change text color to black for better contrast
    },
    inputField: {
      margin: '15px 0',
      position: 'relative',
      borderBottom: '2px solid #ccc',
    },
    input: {
      width: '100%',
      height: '40px',
      background: 'transparent',
      border: 'none',
      color: '#000', // Change input text color to black for better visibility
      fontSize: '16px',
      outline: 'none',
    },
    label: {
      position: 'absolute',
      top: '50%',
      left: '0',
      transform: 'translateY(-50%)',
      color: '#000', // Change label color to black
      pointerEvents: 'none',
      transition: '0.15s ease',
      fontSize: '16px',
    },
    inputFocus: {
      fontSize: '0.8rem',
      top: '10px',
      transform: 'translateY(-120%)',
    },
    error: {
      color: 'red',
      marginBottom: '10px',
    },
    button: {
      width: '100%',
      padding: '12px 20px',
      backgroundColor: '#007BFF', // Keep button color consistent
      color: '#fff', // Keep button text white
      borderRadius: '3px',
      fontSize: '16px',
      cursor: 'pointer',
      border: '2px solid transparent',
      transition: '0.3s ease',
    },
    link: {
      color: '#007BFF', // Change link color to match the theme
      textDecoration: 'none',
    },
  };
  
  return (
    <div style={styles.body}>
      {/* Home button on the top left */}
      <Link to="/" style={styles.homeButton}>Home</Link>
      
      {/* Right side login form container */}
      <div style={styles.wrapper}>
        <h2>Login Form</h2>
        {error && <div style={styles.error}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div style={styles.inputField}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
            <label style={email ? styles.inputFocus : styles.label}>Enter your email</label>
          </div>
          <div style={styles.inputField}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
            <label style={password ? styles.inputFocus : styles.label}>Enter your password</label>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '25px 0 35px 0', color: '#fff' }}>
            <label>
              <input type="checkbox" />
              <span style={{ marginLeft: '8px' }}>Remember me</span>
            </label>
            <Link to="#" style={styles.link}>Forgot password?</Link>
          </div>
          <button type="submit" style={styles.button}>Log In</button>
        </form>
        <div style={{ marginTop: '30px' }}>
          <p>
            Don't have an account? <Link to="/signup" style={styles.link}>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
