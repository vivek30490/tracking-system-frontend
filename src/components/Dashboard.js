import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [certifications, setCertifications] = useState([
      {
        name: 'AWS Solutions Architect',
        organization: 'Amazon Web Services',
        status: 'Active',
        obtained: '2023-06-15',
        expires: '2026-06-15',
        tags: ['Cloud Architecture', 'AWS', 'Infrastructure'],
        pdf: 'https://www.pdf-archive.com/2017/07/02/aws-certified-solutions-architect-associate-certificate/preview-aws-certified-solutions-architect-associate-certificate-1.jpg', // PDF URL
      },
      {
        name: 'Professional Scrum Master',
        organization: 'Scrum.org',
        status: 'Expiring Soon',
        obtained: '2023-01-10',
        expires: '2024-04-01',
        tags: ['Agile', 'Scrum', 'Project Management'],
        pdf: 'https://guntherverheyen.com/wp-content/uploads/2020/08/Professional-Scrum-Master-I-Certificate.png', // PDF URL
      },
      {
        name: 'Certified Kubernetes Administrator',
        organization: 'Cloud Native Computing Foundation',
        status: 'Expired',
        obtained: '2022-03-20',
        expires: '2023-03-20',
        tags: ['Kubernetes', 'Container Orchestration', 'DevOps'],
        pdf: 'https://th.bing.com/th/id/OIP.DOOsatC5ZAr1V9hsfhIpiQHaFn?rs=1&pid=ImgDetMain', // PDF URL
      },
    ]);
  
  const [showForm, setShowForm] = useState(false);
  const [newCertification, setNewCertification] = useState({
    name: '',
    organization: '',
    status: 'Active',
    obtained: '',
    expires: '',
    tags: '',
    pdf: null,
  });
  const [viewDetails, setViewDetails] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const navigate = useNavigate();

  const statusColors = {
    Active: 'green',
    'Expiring Soon': 'orange',
    Expired: 'red',
  };

  const handleAddCertification = () => {
    const updatedCertifications = [
      ...certifications,
      {
        ...newCertification,
        tags: newCertification.tags.split(',').map((tag) => tag.trim()),
      },
    ];
    setCertifications(updatedCertifications);
    setShowForm(false);
    setNewCertification({
      name: '',
      organization: '',
      status: 'Active',
      obtained: '',
      expires: '',
      tags: '',
      pdf: null,
    });
  };

  const handleCancelAddCertification = () => {
    setShowForm(false);
    setNewCertification({
      name: '',
      organization: '',
      status: 'Active',
      obtained: '',
      expires: '',
      tags: '',
      pdf: null,
    });
  };

  const handleDeleteCertification = (index) => {
    const confirmation = window.confirm('Are you sure you want to delete this certification?');
    if (confirmation) {
      const updatedCertifications = certifications.filter((_, idx) => idx !== index);
      setCertifications(updatedCertifications);
    }
  };

  const handleViewDetails = (cert) => {
    setViewDetails(cert);
  };

  const handleCloseDetails = () => {
    setViewDetails(null);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setNewCertification({ ...newCertification, pdf: file });
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const filteredCertifications = certifications.filter((cert) => {
    const matchesSearchTerm =
      cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? cert.tags.includes(selectedTag) : true;
    return matchesSearchTerm && matchesTag;
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Header Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>Certification Dashboard</h1>
        <button
          style={{
            padding: '10px 20px',
            background: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Search and Filter */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search certifications..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '1em',
            width: '60%',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '1em',
            width: '30%',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        >
          <option value="">Filter by Tag</option>
          {[...new Set(certifications.flatMap((cert) => cert.tags))].map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        <button
          style={{
            padding: '10px 20px',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => setShowForm(true)}
        >
          + Add Certification
        </button>
      </div>

      {/* Form for Adding Certifications */}
      {showForm && (
        <div
          style={{
            margin: '20px 0',
            padding: '20px',
            background: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2>Add New Certification</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '10px' }}>
            <input
              type="text"
              placeholder="Certification Name"
              value={newCertification.name}
              onChange={(e) => setNewCertification({ ...newCertification, name: e.target.value })}
              style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
            <input
              type="text"
              placeholder="Organization"
              value={newCertification.organization}
              onChange={(e) => setNewCertification({ ...newCertification, organization: e.target.value })}
              style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
            <select
              value={newCertification.status}
              onChange={(e) => setNewCertification({ ...newCertification, status: e.target.value })}
              style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            >
              <option value="Active">Active</option>
              <option value="Expiring Soon">Expiring Soon</option>
              <option value="Expired">Expired</option>
            </select>
            <input
              type="date"
              value={newCertification.obtained}
              onChange={(e) => setNewCertification({ ...newCertification, obtained: e.target.value })}
              style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
            <input
              type="date"
              value={newCertification.expires}
              onChange={(e) => setNewCertification({ ...newCertification, expires: e.target.value })}
              style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
            <input
              type="text"
              placeholder="Tags (comma-separated)"
              value={newCertification.tags}
              onChange={(e) => setNewCertification({ ...newCertification, tags: e.target.value })}
              style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={handleAddCertification}
              style={{
                padding: '10px 20px',
                background: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Add Certification
            </button>
            <button
              onClick={handleCancelAddCertification}
              style={{
                padding: '10px 20px',
                background: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Display Certifications */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
        }}
      >
        {filteredCertifications.map((cert, index) => (
          <div
            key={index}
            style={{
              background: '#ffffff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 style={{ margin: '0 0 10px', fontSize: '1.5em' }}>{cert.name}</h3>
            <p style={{ color: '#666', marginBottom: '10px' }}>{cert.organization}</p>
            <span
              style={{
                display: 'inline-block',
                padding: '5px 10px',
                color: 'white',
                borderRadius: '15px',
                fontSize: '0.9em',
                marginBottom: '15px',
                backgroundColor: statusColors[cert.status],
              }}
            >
              {cert.status}
            </span>
            <p>Obtained: {cert.obtained}</p>
            <p>Expires: {cert.expires}</p>
            <div style={{ marginTop: '10px' }}>
              {cert.tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    display: 'inline-block',
                    background: '#e0e0e0',
                    color: '#333',
                    padding: '5px 10px',
                    borderRadius: '15px',
                    fontSize: '0.8em',
                    marginRight: '5px',
                    marginBottom: '5px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            {cert.pdf && (
              <div style={{ marginTop: '10px' }}>
                <a href={cert.pdf} target="_blank" rel="noopener noreferrer">
                  View Certificate PDF
                </a>
              </div>
            )}
            <button
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                background: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleViewDetails(cert)}
            >
              View Details
            </button>
            <button
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                background: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleDeleteCertification(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      {viewDetails && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '8px',
              width: '400px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h2>{viewDetails.name}</h2>
            <p>Organization: {viewDetails.organization}</p>
            <p>Status: {viewDetails.status}</p>
            <p>Obtained: {viewDetails.obtained}</p>
            <p>Expires: {viewDetails.expires}</p>
            <div>
              {viewDetails.tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    display: 'inline-block',
                    background: '#e0e0e0',
                    color: '#333',
                    padding: '5px 10px',
                    borderRadius: '15px',
                    fontSize: '0.8em',
                    marginRight: '5px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            {viewDetails.pdf && (
              <div style={{ marginTop: '10px' }}>
                <a href={viewDetails.pdf} target="_blank" rel="noopener noreferrer">
                  View Certificate PDF
                </a>
              </div>
            )}
            <button
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                background: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={handleCloseDetails}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
