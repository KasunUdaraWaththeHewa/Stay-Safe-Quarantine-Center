const express =require('express');

const {signupUser, loginUser} = require('../controllers/userController');

const router = express.Router();

router.get('/login', loginUser);

router.post('/register', signupUser);

module.exports = router;