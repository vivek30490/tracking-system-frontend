import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:1008/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          role: formData.role,
          password: formData.password,
        }),
      });

      if (response.ok) {
        alert('Successfully Signed Up!');
        setError('');
        navigate('/login');
      } else {
        const errorText = await response.text();
        console.error('Server error:', errorText);
        setError(errorText || 'Sign up failed');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div style={styles.container}>
      {/* Home button on the top left */}
      <Link to="/" style={styles.homeButton}>Home</Link>
      
      <div style={styles.signupBox}>
        <h2 style={styles.title}>Sign Up</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          {error && <p style={styles.error}>{error}</p>}

          <label style={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <label style={styles.label}>Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            style={styles.input}
            required
          >
            <option value="">Select a role</option>
            <option value="ADMIN">ADMIN</option>
            <option value="USER">USER</option>
          </select>

          <label style={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <label style={styles.label}>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        <p style={styles.loginLink}>
          Already have an account? <Link to="/login" style={styles.link}>Login</Link>
        </p>
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url("https://positivepsychology.com.au/wp-content/uploads/2022/10/talent-developemnt-2-scaled.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: 'Arial, sans-serif',
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
  signupBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '400px',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    textAlign: 'left',
    fontSize: '14px',
    marginBottom: '5px',
    marginTop: '15px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    fontSize: '14px',
  },
  button: {
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '20px',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
  loginLink: {
    marginTop: '20px',
    fontSize: '14px',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
};

export default SignUp;
