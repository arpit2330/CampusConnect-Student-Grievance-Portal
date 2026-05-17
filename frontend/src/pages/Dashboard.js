import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user')); // store this after login
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Complaint Management</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <h2>Welcome, {user?.name} 👋</h2>
        <p className="text-muted">Role: {user?.role}</p>

        {user?.role === 'student' ? <StudentPanel /> : <AdminPanel />}
      </Container>
    </>
  );
};

export default Dashboard;
// Student dashboard

const StudentPanel = () => {
  const navigate = useNavigate();

  return (
    <>
      <Row className="mt-4">
        <Col md={6}>
          <Card className="p-4 shadow-sm">
            <h4>Submit Complaint</h4>
            <p>Raise a new complaint to the admin.</p>
            <Button variant="primary" onClick={() => navigate('/submit-complaint')}>
              Add Complaint
            </Button>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="p-4 shadow-sm">
            <h4>Your Complaints</h4>
            <p>You can view the status of complaints here.</p>
            <Button variant="info" onClick={() => navigate('/my-complaints')}>
              View Complaints
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );
};

// admin dashboard 

const AdminPanel = () => {
  const navigate = useNavigate();

  return (
    <>
      <Row className="mt-4">
        <Col>
          <Card className="p-4 shadow-sm">
            <h4>All Complaints</h4>
            <p>Review and update the status of complaints.</p>
            <Button variant="warning" onClick={() => navigate('/admin-complaints')}>
              Manage Complaints
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );
};

// export default AdminPanel;