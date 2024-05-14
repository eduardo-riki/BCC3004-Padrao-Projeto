class Task {
    execute() {
        throw new Error();
    }
}

class SimpleTask extends Task {
    constructor(description) {
        super();
        this.description = description;
    }

    execute() {
        console.log(`Executando tarefa: ${this.description}`);
    }
}

class TaskList extends Task {
    constructor() {
        super();
        this.tasks = [];
    }

    add(task) {
        this.tasks.push(task);
    }

    remove(task) {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }

    execute() {
        console.log('Executando lista de tarefas:');
        this.tasks.forEach(task => {
            task.execute();
        });
    }
}

const task1 = new SimpleTask('Tarefa 1');
const task2 = new SimpleTask('Tarefa 2');
const task3 = new SimpleTask('Tarefa 3');

const subTaskList = new TaskList();
subTaskList.add(new SimpleTask('Subtarefa 1'));
subTaskList.add(new SimpleTask('Subtarefa 2'));

const mainTaskList = new TaskList();
mainTaskList.add(task1);
mainTaskList.add(task2);
mainTaskList.add(subTaskList);
mainTaskList.add(task3);

mainTaskList.execute();
