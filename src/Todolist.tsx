import React, {useState} from "react";
import {filterType} from "./App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
}

export const Todolist = (props: PropsType) => {
    let [filteredTasks, setFilteredTasks] = useState<filterType>("All")

    const tasksFilter = (filterKey: filterType) => {
        setFilteredTasks(filterKey)
    }

    const filterFoo = () => {
        switch (filteredTasks) {
            case "Active": {
                return props.tasks.filter(el => !el.isDone)
            }
            case "Completed": {
                return props.tasks.filter(el => el.isDone)
            }
            default:
                return props.tasks
        }
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {filterFoo().map(el => {
                    return (
                        <li key={el.id}>
                            <button onClick={() => props.removeTask(el.id)}>X</button>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => tasksFilter('All')}>All</button>
                <button onClick={() => tasksFilter('Active')}>Active</button>
                <button onClick={() => tasksFilter('Completed')}>Completed</button>
            </div>
        </div>
    )
}
