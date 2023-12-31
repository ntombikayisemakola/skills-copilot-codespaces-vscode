Synthesizing 9/10 solutions (Duplicates hidden)

=======
Suggestion 1

// Create web server for comment
//==================================

// Import module
const express = require ('express');
const router = express.Router();
const commentController = ('../controllers/comments');

// Handle request
router.get('/', commentController.comment_list);
router.get('/create', commentController.comment_create_get);
router.post('/create', commentController.comment_create_post);
router.get('/:id/delete', commentController.comment_delete);