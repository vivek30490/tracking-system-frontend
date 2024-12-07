import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/certifications';

export const fetchCertifications = () => axios.get(API_BASE_URL);
export const fetchCertificationById = (id) => axios.get(`${API_BASE_URL}/${id}`);
export const addCertification = (cert) => axios.post(API_BASE_URL, cert);
export const updateCertification = (id, cert) => axios.put(`${API_BASE_URL}/${id}`, cert);
export const deleteCertification = (id) => axios.delete(`${API_BASE_URL}/${id}`);
