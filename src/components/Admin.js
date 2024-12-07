import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const [certifications, setCertifications] = useState([
    {
      id: 1,
      name: 'AWS Solutions Architect',
      organization: 'Amazon Web Services',
      status: 'Active',
      obtained: '15/6/2023',
      expires: '15/6/2026',
      tags: ['Cloud Architecture', 'AWS', 'Infrastructure'],
    },
    {
      id: 2,
      name: 'Professional Scrum Master',
      organization: 'Scrum.org',
      status: 'Expiring Soon',
      obtained: '10/1/2023',
      expires: '1/4/2024',
      tags: ['Agile', 'Scrum', 'Project Management'],
    },
    {
      id: 3,
      name: 'Certified Kubernetes Administrator',
      organization: 'Cloud Native Computing Foundation',
      status: 'Expired',
      obtained: '20/3/2022',
      expires: '20/3/2023',
      tags: ['Kubernetes', 'Container Orchestration', 'DevOps'],
    },
  ]);

  const [newCertification, setNewCertification] = useState({
    name: '',
    organization: '',
    status: 'Active',
    obtained: '',
    expires: '',
    tags: '',
  });

  const [editCertification, setEditCertification] = useState(null);

  const statusColors = {
    Active: 'green',
    'Expiring Soon': 'orange',
    Expired: 'red',
  };

  // Create Operation
  const handleAddCertification = () => {
    const newCert = {
      ...newCertification,
      id: certifications.length + 1, // Assign a new unique ID
      tags: newCertification.tags.split(',').map((tag) => tag.trim()),
    };
    setCertifications([...certifications, newCert]);
    setNewCertification({ name: '', organization: '', status: 'Active', obtained: '', expires: '', tags: '' });
  };

  // Read Operation (Display Certifications)
  const handleViewDetails = (id) => {
    const cert = certifications.find((cert) => cert.id === id);
    alert(`Certification Details:\nName: ${cert.name}\nOrganization: ${cert.organization}\nStatus: ${cert.status}\nObtained: ${cert.obtained}\nExpires: ${cert.expires}\nTags: ${cert.tags.join(', ')}`);
  };

  // Update Operation
  const handleEditCertification = (cert) => {
    setEditCertification({ ...cert });
  };

  const handleSaveEditedCertification = () => {
    const updatedCertifications = certifications.map((cert) =>
      cert.id === editCertification.id ? editCertification : cert
    );
    setCertifications(updatedCertifications);
    setEditCertification(null); // Close the editing form after saving
  };

  const handleCancelEdit = () => {
    setEditCertification(null); // Close the editing form without saving
  };

  // Delete Operation
  const handleDeleteCertification = (id) => {
    const updatedCertifications = certifications.filter((cert) => cert.id !== id);
    setCertifications(updatedCertifications);
  };

  // Handle Logout
  const handleLogout = () => {
    // Perform any necessary logout actions (e.g., clearing session, etc.)
    alert('Logged out!');
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Logout Button in Top Right Corner */}
      <button
        onClick={handleLogout}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '10px 20px',
          background: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Logout
      </button>

      <h1 style={{ textAlign: 'center' }}>Admin Dashboard</h1>

      {/* Form for Adding/Editing Certification */}
      <div style={{ marginBottom: '20px' }}>
        <h2>{editCertification ? 'Edit Certification' : 'Add Certification'}</h2>
        <input
          type="text"
          placeholder="Certification Name"
          value={editCertification ? editCertification.name : newCertification.name}
          onChange={(e) =>
            editCertification
              ? setEditCertification({ ...editCertification, name: e.target.value })
              : setNewCertification({ ...newCertification, name: e.target.value })
          }
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <input
          type="text"
          placeholder="Organization"
          value={editCertification ? editCertification.organization : newCertification.organization}
          onChange={(e) =>
            editCertification
              ? setEditCertification({ ...editCertification, organization: e.target.value })
              : setNewCertification({ ...newCertification, organization: e.target.value })
          }
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <select
          value={editCertification ? editCertification.status : newCertification.status}
          onChange={(e) =>
            editCertification
              ? setEditCertification({ ...editCertification, status: e.target.value })
              : setNewCertification({ ...newCertification, status: e.target.value })
          }
          style={{ padding: '10px', marginRight: '10px' }}
        >
          <option value="Active">Active</option>
          <option value="Expiring Soon">Expiring Soon</option>
          <option value="Expired">Expired</option>
        </select>
        <input
          type="date"
          value={editCertification ? editCertification.obtained : newCertification.obtained}
          onChange={(e) =>
            editCertification
              ? setEditCertification({ ...editCertification, obtained: e.target.value })
              : setNewCertification({ ...newCertification, obtained: e.target.value })
          }
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <input
          type="date"
          value={editCertification ? editCertification.expires : newCertification.expires}
          onChange={(e) =>
            editCertification
              ? setEditCertification({ ...editCertification, expires: e.target.value })
              : setNewCertification({ ...newCertification, expires: e.target.value })
          }
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <input
          type="text"
          placeholder="Tags (comma-separated)"
          value={editCertification ? editCertification.tags.join(', ') : newCertification.tags}
          onChange={(e) =>
            editCertification
              ? setEditCertification({ ...editCertification, tags: e.target.value.split(',').map((tag) => tag.trim()) })
              : setNewCertification({ ...newCertification, tags: e.target.value })
          }
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <button
          onClick={editCertification ? handleSaveEditedCertification : handleAddCertification}
          style={{
            padding: '10px 20px',
            background: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {editCertification ? 'Save Changes' : 'Add Certification'}
        </button>
        {editCertification && (
          <button
            onClick={handleCancelEdit}
            style={{
              padding: '10px 20px',
              background: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginLeft: '10px',
            }}
          >
            Cancel
          </button>
        )}
      </div>

      {/* Certification List */}
      <h2>Certifications</h2>
      {certifications.map((cert) => (
        <div
          key={cert.id}
          style={{
            background: '#ffffff',
            padding: '20px',
            marginBottom: '10px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3>{cert.name}</h3>
          <p>{cert.organization}</p>
          <p>Status: <span style={{ color: statusColors[cert.status] }}>{cert.status}</span></p>
          <p>Obtained: {cert.obtained}</p>
          <p>Expires: {cert.expires}</p>
          <p>Tags: {cert.tags.join(', ')}</p>
          <button
            onClick={() => handleViewDetails(cert.id)}
            style={{
              padding: '10px 20px',
              background: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            View Details
          </button>
          <button
            onClick={() => handleEditCertification(cert)}
            style={{
              padding: '10px 20px',
              background: '#ffc107',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginLeft: '10px',
            }}
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteCertification(cert.id)}
            style={{
              padding: '10px 20px',
              background: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginLeft: '10px',
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Admin;
