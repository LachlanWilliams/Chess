const express = require('epxress');
const blogController = require('../controllers/blogcontroller');

const router = express.Router();

router.get('/create', blogController.blog_create_get);
router.get('/', blogController.blog_index);
router.get('/', blogController.blog_create_post);
router.get('/:id', blogController.blog_details);
router.get('/:id', blogController.blog_delete);

module.exports = router;