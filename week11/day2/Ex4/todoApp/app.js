
// import { TodoList } from './todo.js';
const { TodoList } = require('./todo.js');
const todoList = new TodoList();

// Add tasks
todoList.addTask('Buy groceries');
todoList.addTask('Finish homework');
todoList.addTask('Go for a run');


todoList.markTaskAsComplete(1); //'Finish homework'
todoList.markTaskAsComplete(0);

// List all tasks
const tasks = todoList.listAllTasks();

// Display tasks
tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.completed ? '[Done]' : ''} ${task.task}`);
});