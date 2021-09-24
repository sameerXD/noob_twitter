const express = require('express');
const router = express.Router();
const postController = require('../controller/postController.js');

router.route('/:email')
    .post(postController.createPost)

router.route('/:email')
    .delete(postController.deletePost)

router.route('/:id')
    .put(postController.updatePost)

router.route('/:email')
    .get(postController.getPosts)

module.exports = router;