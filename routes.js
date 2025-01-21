const express = require('express');
const commentsRouter = express.Router();
const resumeRouter = express.Router();

const CommentsController = require('./controllers/comments.js');
const CurriculumController = require('./controllers/curriculum.js');

// COMMENTS
commentsRouter.get('/', CommentsController.getAll);
commentsRouter.post('/', CommentsController.create );
commentsRouter.get('/:id', CommentsController.getById);
commentsRouter.put('/:id', CommentsController.update);
commentsRouter.delete('/:id', CommentsController.delete);

// RESUME
resumeRouter.get('/linkedIn', CurriculumController.getLinkedin);

module.exports = { commentsRouter, resumeRouter };
