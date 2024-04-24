const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Goal = require('../../models/Goal');

var bodyParser = require('body-parser');

module.exports = router;

router.post('/', auth, bodyParser.json(), (req,res)=>{
    Goal.create(req.body)
        .then((goal)=> res.json({ msg: 'Goal added successfully' }))
        .catch((err)=> res.status(400).json({ err }));
});

router.get('/:id', auth, (req,res) => {
    Goal.findById(req.params.id)
        .then((goal) => res.json(goal))
        .catch((err) => res.status(400).json({ err }))
});

router.get('/', auth, (req,res) => {
    Goal.find()
        .then((goals) => res.json(goals))
        .catch((err) => res.status(400).json({ err }))
});

router.put('/:id', auth, bodyParser.json(), (req,res) => {
    Goal.findByIdAndUpdate(req.params.id, req.body)
        .then((goal) => res.json({ msg: 'Updated successfully' }))
        .catch((err) => res.status(400).json({ err }))
});

router.delete('/:id', auth, (req,res) => {
    Goal.findByIdAndDelete(req.params.id)
        .then((goal) => res.json({ msg: 'Item entry deleted successfully' }))
        .catch((err) => res.status(400).json({ err }))
});