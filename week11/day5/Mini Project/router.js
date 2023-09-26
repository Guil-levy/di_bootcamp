const fs = require("fs");
const express = require("express");
const router = express.Router();

const tasksFilePath = "./tasks.json";

let tasks = [];

try {
  const data = fs.readFileSync(tasksFilePath, "utf-8");
  tasks = JSON.parse(data);
} catch (error) {
  console.error("Error reading tasks file:", error);
}

// Save to tasks.json
function saveTasks() {
  try {
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing tasks file:", error);
  }
}
// CRUD routes//
router.get("/tasks", (req, res) => {
  res.json(tasks);
});

router.get("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    res.status(404).json({ error: "Task not found" });
  } else {
    res.json(task);
  }
});

router.post("/tasks", (req, res) => {
  const newTask = req.body;
  newTask.id = tasks.length + 1;
  tasks.push(newTask);
  saveTasks();
  res.status(201).json(tasks);
});

//put
router.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedTask = req.body;
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    res.status(404).json({ error: "Task not found" });
  } else {
    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
    saveTasks();
    res.json(tasks[taskIndex]);
  }
});
//del
router.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    res.status(404).json({ error: "Task not found" });
  } else {
    tasks.splice(taskIndex, 1);
    saveTasks()
    res.status(204).send(tasks);
  }
});

module.exports = router;
