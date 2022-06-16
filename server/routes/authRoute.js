const router = require('express').Router();
const {register, login, logout} = require('../controllers/authController');
const isUserLoggedIn = require('../middlewares/isUserLoggedIn');


router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').post(isUserLoggedIn,logout);



module.exports = router;