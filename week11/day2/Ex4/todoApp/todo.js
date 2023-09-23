 class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({ task, completed: false });
    }

    markTaskAsComplete(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].completed = true;
        }
    }

    listAllTasks() {
        return this.tasks;
    }
}
module.exports = { TodoList };