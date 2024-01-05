import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';

export type FilterValuesType = "all" | "completed" | "active";

function App() {
    let [tasks, setTasks2] = useState<Array<TaskType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "React", isDone: false}
    ]);
    let [filter, setFilter] = useState<FilterValuesType>("all");

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks2(filteredTasks)
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    let tasksForTodolist = tasks;
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }
    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }

    return (
        <div className="App">
            <Todolist
                title="What tow learn"
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
