const express = require('express');
const router = express.Router();
const {instaLogin} = require('../controllers/auth');

router.post('/insta-access', instaLogin);

module.exports = router;
