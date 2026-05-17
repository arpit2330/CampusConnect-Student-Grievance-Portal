import React, { useEffect, useState } from 'react';
import { Container, Table, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';

const MyComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/complaints/mine', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((res) => {
      setComplaints(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
  }, []);

  if (loading) return <Spinner className="m-5" animation="border" />;

  return (
    <Container className="mt-4">
      <h4>Your Complaints</h4>
      {complaints.length === 0 ? (
        <Alert variant="info" className="mt-3">No complaints found.</Alert>
      ) : (
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Description</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((comp) => (
              <tr key={comp._id}>
                <td>{comp.subject}</td>
                <td>{comp.description}</td>
                <td>{comp.status}</td>
                <td>{new Date(comp.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default MyComplaints;
