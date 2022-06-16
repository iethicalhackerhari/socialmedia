const { postsHome, postCreate, postUpdate, postLike, postDelete, postGetOne, postsGetAll, postsGetTimeline, postsGetMyTimeline, postsFeed } = require('../controllers/postController');
const isUserLoggedIn = require('../middlewares/isUserLoggedIn');

const router = require('express').Router();



router.route('/').get(postsHome);
router.route('/create').post(isUserLoggedIn, postCreate);
router.route('/update/:id').put(isUserLoggedIn, postUpdate);
router.route('/like/:id').put(isUserLoggedIn, postLike);
router.route('/delete/:id').delete(isUserLoggedIn, postDelete);
router.route('/1/:id').get(postGetOne);
router.route('/all').get(postsGetAll);
router.route('/timeline/:id').get(postsGetTimeline);
router.route('/my-timeline').get(postsGetMyTimeline);
router.route('/feed').get(isUserLoggedIn, postsFeed);


module.exports = router; 