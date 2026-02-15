const express = require('express');
const router = express.Router();
const { submitContact, getContacts, deleteContact } = require('../controllers/contactController');
const { protect } = require('../middleware/auth');

router.post('/contact', submitContact);
router.get('/contacts', protect, getContacts);
router.delete('/contacts/:id', protect, deleteContact);

module.exports = router;
