import React from 'react';
import './App.css';
import Todolist, {TaskType} from "./Todolist";


function App() {
    const todolistTitle_1: string = "What to learn"
    const todolistTitle_2: string = "What to buy"
    const tasks_1: Array<TaskType> = [
        {id: 1, isDone: true, title: "HTML&CSS"},
        {id: 2, isDone: true, title: "JS"},
        {id: 3, isDone: false, title: "React"}
    ]

    const tasks_2: Array<TaskType> = [
        {id: 4, isDone: true, title: "Bread"},
        {id: 5, isDone: false, title: "Tea"},
        {id: 6, isDone: true, title: "Coffee"}
    ]

    return (
        <div className="App">
            <Todolist
                tasks={tasks_1}
                title={todolistTitle_1}/>
            <Todolist
                tasks={tasks_2}
                title={todolistTitle_2}/>
        </div>
    );
}

export default App;
