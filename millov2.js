    class Task {
        constructor(task, person) {
            this.task = task;
            this.person = person;
        }

        render() {
            let output = `${this.task}`;
            if (this.person) {
                output += ` • ${this.person}`
            };
            return output;
        }
    }

    class List {
        constructor(name) {
            this.name = name;
            this.tasks = [];
        }

        addTask(task) {
            this.tasks.push(task);
            return `Added task "${task.task}" to list "${this.name}"`;
        }

        removeTask(removeTask) {
            let index = this.tasks.indexOf(removeTask);
            for (let task of this.tasks) {
                if (task.task == removeTask) {
                    let result = task;
                    this.tasks.splice(index, 1)
                    // console.log(`Removed task "${removeTask} from "${this.name}"`);
                    return result
                }
            } 
            return `Task not found`
        }

        render() {
            let result = ``;
            let counter = 1;
            result += `|----------\n`;
            result += `| ${this.name}\n`;
            result += `|----------\n`;
            for (let task of this.tasks) {
                result += `| ${counter}: ${task.render()}\n`;
                counter++;
            }
            return result;
        }
    }

    class Board {
        constructor(name) {
            this.name = name;
            this.lists = [];
        }

        addList(list) {
            this.lists.push(list);
            return `Added list "${list.name}" to board "${this.name}"`;
        }

        removeList(removeList) {
            let index = this.lists.indexOf(removeList);
            for (let list of this.lists) {
                if (list.name == removeList) {
                    let result = list;
                    this.lists.splice(index, 1)
                    console.log(`Removed list "${removeList} from "${this.name}"`);
                    return result;
                }
            } 
            return `Task not found`
        }

        render() {
            let result = ``;
            result += `|************\n`
            result += `| *${this.name}*\n`
            result += `|************\n`
            for (let list of this.lists) {
                result += `${list.render()}\n`;
            }
            return result;
        }

        moveTaskTo(task, moveFromList, moveToList) {
            let toList = null;
            let fromList = null;
            for (let i = 0; i < this.lists.length; i++) {
                // console.log(this.lists[i])
                if (this.lists[i].name  === moveFromList) {
                    // console.log(this.lists[i]);
                    fromList = this.lists[i];
                } else if (this.lists[i].name === moveToList) {
                    // console.log(this.lists[i])
                    toList = this.lists[i];
                }
            }
            if (toList != null && fromList != null) {
                toList.addTask(fromList.removeTask(task));
                return `Moved task ${task} from ${moveFromList} to ${moveToList}`
            } else {
                return "A list was not found";
            }
        }
    }
