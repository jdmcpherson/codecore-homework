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