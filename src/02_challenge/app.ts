interface TodoItem {
    id: number;
    title: string;
    status: StatusVersions;
    completedOn?: Date;
}

enum StatusVersions {
    TODO = 'todo',
    INPROGRESS = 'in-progress',
    DONE = 'done'
}

const todoItems: TodoItem[] = [
    { id: 1, title: "Learn HTML", status: StatusVersions.DONE, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: StatusVersions.INPROGRESS },
    { id: 3, title: "Write the best app in the world", status: StatusVersions.TODO },
]


function addTodoItem(todo: string): TodoItem {
    const id = getNextId(todoItems)

    const newTodo = {
        id,
        title: todo,
        status: StatusVersions.TODO,
    }

    todoItems.push(newTodo)

    return newTodo;
}

function getNextId<T extends { id: number }>(items: T[]): number {

    return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))