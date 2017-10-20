class Task {
    constructor(task, name) {
        this.task = task;
        this.name = name;
    }

    render() {
         let output = `${this.task}`;
         if (this.name) {
             output += ` • ${this.name}`
         };
         return console.log(output);
    }
}

class List {
    constructor(list) {
        this.list = list;
        this.tasks = [];
    }

    addTask(task) {
        let newTask = task
        this.tasks.push(newTask);
        return `Added task "${newTask.task}" to list "${this.list}"`;
    }

    removeTask(task) {

    }

    render() {

    }
}

class Board {
    constructor(board) {

    }

    addList(list) {

    }
        
    removeList(listToRemove) {

    }
        
    render() {

    }

    moveTaskTo(task, fromList, toList) {

    }
}