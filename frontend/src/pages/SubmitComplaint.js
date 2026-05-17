import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SubmitComplaint = () => {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({ subject: '', description: '' });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const token = localStorage.getItem('token');
    await axios.post(
      '${import.meta.env.VITE_API_URL}/api/complaints',
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    alert('Complaint submitted!');
     navigate('/dashboard'); //  Automatically redirect
  } catch (err) {
    console.error('Submit Error:', err.response?.data || err.message);
    alert('Failed to submit complaint');
  }
};

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow">
        <h4 className="mb-3">Submit a Complaint</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              required
            />
          </Form.Group>
          <Button type="submit" variant="primary">Submit</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default SubmitComplaint;
