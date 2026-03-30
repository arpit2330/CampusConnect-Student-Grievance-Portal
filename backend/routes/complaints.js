const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint');
const authMiddleware = require('../middleware/authMiddleware'); // JWT middleware

// Submit a complaint
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { subject, description } = req.body;
    const complaint = new Complaint({
      student: req.user.id,
      subject,
      description,
    });
    await complaint.save();
    res.status(201).json({ message: 'Complaint submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Get student’s own complaints
router.get('/mine', authMiddleware, async (req, res) => {
  try {
    const complaints = await Complaint.find({ student: req.user.id }).sort({ createdAt: -1 });
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Get all complaints (admin only)
router.get('/', authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ msg: 'Access denied' });
    }

    const complaints = await Complaint.find().populate('student', 'name email'); // populate student info
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});


// Update complaint status (Admin only)
router.put('/:id/status', authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ msg: 'Access denied' });
    }

    const { status } = req.body;

    const complaints = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(complaints);
  } catch (err) {
    res.status(500).json({ msg: 'Error updating complaint status' });
  }
});

router.put('/:id/response', authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ msg: 'Access denied' });
    }

    const { response } = req.body;

    const complaints = await Complaint.findByIdAndUpdate(
      req.params.id,
      { response },
      { new: true }
    );

    res.json(complaints);
  } catch (err) {
    res.status(500).json({ msg: 'Error updating response' });
  }
});
module.exports = router;
