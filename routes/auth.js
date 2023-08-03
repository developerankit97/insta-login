const express = require('express');
const router = express.Router();
const {instaLogin} = require('../controllers/auth');

router.get('/insta', instaLogin);

module.exports = router;
