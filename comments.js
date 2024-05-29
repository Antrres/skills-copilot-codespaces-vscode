// Create web server
// Comments
// GET /comments
// POST /comments
// GET /comments/:id
// PUT /comments/:id
// DELETE /comments/:id

const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// Get all comments
router.get('/comments', (req, res, next) => {
    Comment.find({}, (err, comments) => {
        if (err) {
            return res.status(500).send('Error: ' + err);
        }
        res.json(comments);
    });
});

// Get a comment by id
router.get('/comments/:id', (req, res, next) => {
    Comment.findById(req.params.id, (err, comment) => {
        if (err) {
            return res.status(500).send('Error: ' + err);
        }
        res.json(comment);
    });
});

// Create a comment
router.post('/comments', (req, res, next) => {
    let newComment = new Comment({ content: req.body.content });