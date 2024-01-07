import React, {FC} from "react";
import {FilterValuesType} from "./App";

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeFilter: (nextFilterValue: FilterValuesType) => void
}
export type TaskType = {
    id: number
    isDone: boolean
    title: string
}

const Todolist: FC<TodolistPropsType> = (
    {
        title,
        tasks,
        removeTask,
        changeFilter
    }) => {

    const listItems: Array<JSX.Element> = tasks.map((t) => {
        const onclickRemoveTaskHandler = () => removeTask(t.id)
        return (
            <li key={t.id}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={onclickRemoveTaskHandler}>x</button>
            </li>
        )
    })

    const tasksList: JSX.Element = tasks.length
        ? <ul>{listItems}</ul>
        : <span>Your tasksList is empty</span>

    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {tasksList}
            <div>
                <button onClick={() => changeFilter("all")}>All</button>
                <button onClick={() => changeFilter("active")}>Active</button>
                <button onClick={() => changeFilter("completed")}>Completed</button>
            </div>
        </div>
    )
}

export default Todolist;
