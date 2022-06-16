const router = require('express').Router();
const {userHome, userUpdate, userDelete, userFollowOne, userUnfollowOne} = require('../controllers/userController');
const isUserLoggedIn = require('../middlewares/isUserLoggedIn');


router.route('/home').get(userHome);  
router.route('/update').put(isUserLoggedIn, userUpdate);
router.route('/delete').delete(isUserLoggedIn, userDelete);
router.route('/follow/:id').put(isUserLoggedIn, userFollowOne);
router.route('/unfollow/:id').put(isUserLoggedIn, userUnfollowOne);

module.exports = router;  