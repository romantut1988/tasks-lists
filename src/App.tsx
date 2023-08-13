import React, {useState} from "react";
import './App.css';
import {Todolist} from "./Todolist";

export type filterType = "All" | "Active" | "Completed"

function App() {
    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "React", isDone: false}
    ])

    const removeTask = (taskId: number) => {
        setTasks(tasks.filter((el) => el.id !== taskId))
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasks}
                removeTask={removeTask}
            />
        </div>
    );
}

export default App;
