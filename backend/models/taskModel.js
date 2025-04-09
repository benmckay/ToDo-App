const express = require('express');
const { getTasks, addTask, deleteTask, updateTask } = require('../controllers/tasksController');

const router = express.Router();

router.get('/', getTasks);
router.post('/', addTask);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);

module.exports = router;
