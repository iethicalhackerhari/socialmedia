const router = require('express').Router();
const {userHome, userUpdate, userDelete} = require('../controllers/userController');
const isUserLoggedIn = require('../middlewares/isUserLoggedIn');


router.route('/home').get(userHome);  
router.route('/update').put(isUserLoggedIn, userUpdate);
router.route('/delete').delete(isUserLoggedIn, userDelete);


module.exports = router;  