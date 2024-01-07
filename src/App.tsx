import React, {useState} from 'react';
import './App.css';
import Todolist, {TaskType} from "./Todolist";

export type FilterValuesType = "all" | "active" | "completed"

function App() {
    const todolistTitle: string = "What to learn"
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, isDone: true, title: "HTML&CSS"},
        {id: 2, isDone: true, title: "JS"},
        {id: 3, isDone: false, title: "React"}
    ])

    const removeTask = (tasksId: number) => {
        const nextState: Array<TaskType> = []
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id !== tasksId) {
                nextState.push()
            }
        }
        setTasks(nextState)
    }

    const [filter, setFilter] = useState<FilterValuesType>("active")
    const getFilteredTasksForRender = (allTasks: Array<TaskType>, filterValue: FilterValuesType): Array<TaskType> => {
        switch (filterValue) {
            case "active":
                return allTasks.filter(t => t.isDone === false)
            case "completed":
                return allTasks.filter(t => t.isDone === true)
            default:
                return allTasks
        }
    }
    const changeFilter = (nextFilterValue: FilterValuesType) => {
        setFilter(nextFilterValue)
    }
    const filteredTasksForRender: Array<TaskType> = getFilteredTasksForRender(tasks, filter)
    return (
        <div className="App">
            <Todolist
                tasks={filteredTasksForRender}
                title={todolistTitle}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
