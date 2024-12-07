import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CertificationDetails = () => {
    const { id } = useParams(); // Get the certification ID from URL parameters
    const navigate = useNavigate(); // Use navigate for routing
    const [certification, setCertification] = useState(null);

    // Fetch certification details based on id from the URL
    useEffect(() => {
        fetch(http://localhost:1008/api/certifications/${id})
            .then((response) => response.json())
            .then((data) => setCertification(data))
            .catch((error) => console.error('Error fetching certification:', error));
    }, [id]);

    // Navigate back to the dashboard
    const handleBack = () => {
        navigate('/'); // Navigate to the homepage or dashboard
    };

    return (
        <div>
            {certification ? (
                <div>
                    <button onClick={handleBack}>Back to Dashboard</button>
                    <h2>{certification.title}</h2>
                    <p><strong>Organization:</strong> {certification.organization}</p>
                    <p><strong>Status:</strong> {certification.status}</p>
                    <p><strong>Obtained:</strong> {certification.obtainedDate}</p>
                    <p><strong>Expires:</strong> {certification.expiryDate}</p>
                    <p><strong>Description:</strong> {certification.description}</p>
                    <div>
                        <strong>Tags:</strong>
                        {certification.tags.map((tag, index) => (
                            <span key={index}>{tag}</span>
                        ))}
                    </div>
                </div>
            ) : (
                <p>Loading certification details...</p>
            )}
        </div>
    );
};

export default CertificationDetails;