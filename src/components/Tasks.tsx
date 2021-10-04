import React from 'react'
import {useSelector} from "react-redux";
import {TaskRow} from "./TaskRow";
import {TasksPagination} from "./TasksPagination";
import {RootState} from "../store/interfaces/root";

export const Tasks: React.FC = () => {
    const {
        tasks,
        tasks_length,
        is_loading,
        active_page
    } = useSelector((state: RootState) => state.tasks)
    if (is_loading) {
        return (
            <div className={'loader'}>
                <p>loading...</p>
            </div>
        )
    }
    return (
        <div className='container'>
            <table className='table'>
                <thead>
                <tr>
                    <th>username</th>
                    <th>email</th>
                    <th>text</th>
                    <th>status</th>
                </tr>
                </thead>
                <tbody>
                {tasks.map((item, key: number) =>
                    <TaskRow key={key} status={item.status} id={item.id} email={item.email} text={item.text}
                             username={item.username}/>
                )}
                </tbody>
            </table>
            <TasksPagination active_page={active_page} task_length={tasks_length}/>
        </div>
    )
}
