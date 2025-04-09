const db = require('../db'); // Import the database connection

// Get all tasks
const getTasks = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM tasks');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error fetching tasks:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Add a new task
const addTask = async (req, res) => {
  const { title, priority } = req.body;

  if (!title || !priority) {
    return res.status(400).json({ message: 'Title and priority are required.' });
  }

  try {
    const result = await db.query(
      'INSERT INTO tasks (title, priority, completed) VALUES ($1, $2, $3) RETURNING *',
      [title, priority, false]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error adding task:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete a task
const deleteTask = (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found.' });
  }

  tasks.splice(taskIndex, 1);
  res.status(200).json({ message: 'Task deleted successfully.' });
};

// Update a task
const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, priority, completed } = req.body;

  const task = tasks.find((task) => task.id === parseInt(id));

  if (!task) {
    return res.status(404).json({ message: 'Task not found.' });
  }

  if (title) task.title = title;
  if (priority) task.priority = priority;
  if (typeof completed === 'boolean') task.completed = completed;

  res.status(200).json(task);
};

module.exports = {
  getTasks,
  addTask,
  deleteTask,
  updateTask,
};