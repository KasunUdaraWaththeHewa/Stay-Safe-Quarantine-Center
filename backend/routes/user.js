const express =require('express');

const {signupUser, loginUser} = require('../controllers/userController');

const router = express.Router();

router.post('/login', loginUser);

router.post('/signup', signupUser);

router.post('/changepassword', changePassword);
module.exports = router;