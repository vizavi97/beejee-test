import React from 'react'
import {BACKEND_CONFIG} from "../config/backend.config";
import {useDispatch} from "react-redux";
import {changeTaskPage} from "../store/action/tasks.action";

interface TasksPaginationInterface {
    task_length: number,
    active_page: number
}

export const TasksPagination: React.FC<TasksPaginationInterface> = ({
                                                                        task_length,
                                                                        active_page
                                                                    }) => {
    const dispatch = useDispatch()
    const paginationCount = 5;
    const paginationArr = new Array(Math.ceil(task_length / BACKEND_CONFIG.TASKS_COUNT_PER_PAGINATE))
        .fill('')
        .map((item, key) => ++key);
    const changePage = (page: number) => dispatch(changeTaskPage(page))
    return (
        <div className="pagination">
            <ul className="pagination-list">
                {active_page > 1 && <li className={"pagination-item"}>
                    <button type='button' onClick={() => changePage(active_page - 1)}>prev</button>
                </li>}
                {active_page  > paginationCount && <li className={"pagination-item"}>
                    <button type='button' onClick={() => changePage(1)}>first</button>
                </li>}
                {active_page > Math.floor(paginationArr.length / 2) && <li className={"pagination-item"}>
                    <button
                        onClick={() => changePage(Math.floor(paginationArr.length / 2))}
                        type='button'
                    >...
                    </button>
                </li>}
                {paginationArr.map((item) =>
                    item >= active_page - paginationCount && item <= active_page + paginationCount ?
                    <li key={item} className={active_page === item ? "pagination-item active" : "pagination-item"}>
                        <button
                            onClick={() => changePage(item)}
                            type='button'
                        >{item}</button>
                    </li> : null
                )}
                {active_page < Math.floor(paginationArr.length / 2) - paginationCount &&
                <li className={"pagination-item"}>
                    <button
                        onClick={() => changePage(Math.floor(paginationArr.length / 2))}
                        type='button'
                    >
                        ...
                    </button>
                </li>}
                {active_page < paginationArr.length - paginationCount && <li className={"pagination-item"}>
                    <button type='button' onClick={() => changePage(paginationArr.length)}>last</button>
                </li>}
                {active_page < paginationArr.length && <li className={"pagination-item"}>
                    <button type='button' onClick={() => changePage(active_page + 1)}>next</button>
                </li>}
            </ul>
        </div>
    )
}
