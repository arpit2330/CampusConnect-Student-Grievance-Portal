import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import AdminSidebar from './AdminSidebar';
const AdminDashboard = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('All');

    const [complaints, setComplaints] = useState([]);
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (!user || user.role !== 'admin') {
            alert("Access denied. Admins only.");
            navigate('/login'); // Or wherever you want to redirect
            return;
        }
        const fetchComplaints = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/complaints', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setComplaints(res.data);
            } catch (err) {
                console.error('Failed to fetch complaints:', err.response?.data || err.message);
            }
        };

        fetchComplaints();
    }, [navigate]);

    return (
        <div className="container mt-4">
            <h2>All Complaints</h2>
            <div className="row">
             {/* <div className="col-md-3">
                <AdminSidebar />
            </div>  */}
            <div className="mb-3">
                <label htmlFor="filterStatus" className="form-label"><strong>Filter by Status:</strong></label>
                <select
                    id="filterStatus"
                    className="form-select w-auto"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                </select>
            </div>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Student</th>
                        <th>Subject</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {complaints
                        .filter((c) => filter === 'All' || c.status === filter)
                        .map((c) => (
                            <tr key={c._id}>
                                <td>{c.student?.name}</td>
                                <td>{c.subject}</td>
                                <td>{c.description}</td>
                                <td>
                                    <select
                                        value={c.status || 'Pending'}
                                        onChange={async (e) => {
                                            try {
                                                await axios.put(
                                                    `http://localhost:5000/api/complaints/${c._id}/status`,
                                                    { status: e.target.value },
                                                    {
                                                        headers: {
                                                            Authorization: `Bearer ${localStorage.getItem('token')}`,
                                                        },
                                                    }
                                                );
                                                // Update the local state
                                                setComplaints((prev) =>
                                                    prev.map((item) =>
                                                        item._id === c._id ? { ...item, status: e.target.value } : item
                                                    )
                                                );
                                            } catch (err) {
                                                alert('Failed to update status');
                                            }
                                        }}
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Resolved">Resolved</option>
                                    </select>
                                </td>
                                <td>{new Date(c.createdAt).toLocaleString()}</td>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Write response..."
                                        value={c.response || ''}
                                        onChange={(e) => {
                                            const updated = e.target.value;
                                            setComplaints((prev) =>
                                                prev.map((item) =>
                                                    item._id === c._id ? { ...item, response: updated } : item
                                                )
                                            );
                                        }}
                                        onBlur={async () => {
                                            try {
                                                await axios.put(
                                                    `http://localhost:5000/api/complaints/${c._id}/response`,
                                                    { response: c.response },
                                                    {
                                                        headers: {
                                                            Authorization: `Bearer ${localStorage.getItem('token')}`,
                                                        },
                                                    }
                                                );
                                            } catch (err) {
                                                alert('Failed to update response');
                                            }
                                        }}
                                    />
                                </td>

                            </tr>
                        ))}

                </tbody>


            </table>
        </div>
        </div>
    );
};

export default AdminDashboard;
