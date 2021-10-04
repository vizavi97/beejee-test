import {Dispatch} from "redux";
import {DispatchEvent} from "../interfaces/redux";
import {
    ChangeActiveTasksDispatchInterface, CreateTaskInterface,
    GetTasksDispatchInterface,
    LoadingTasksDispatchInterface
} from "../interfaces/task";
import {BACKEND_CONFIG, BACKEND_ROUTES} from "../../config/backend.config";
import {CHANGE_ACTIVE_TASKS_PAGE, CREATE_TASK, GET_TASKS, LOADING_TASKS} from "../types/task.types";
import {HIDE_ALL_MODAL} from "../types/modal.types";
import {ModalStateInterface} from "../interfaces/modal";

export const getTasks = () => (dispatch: Dispatch<DispatchEvent<GetTasksDispatchInterface | LoadingTasksDispatchInterface>>) => {
    dispatch({
        type: LOADING_TASKS,
        payload: {
            is_loading: true
        }
    })
    fetch(BACKEND_ROUTES.GET_TASKS + BACKEND_CONFIG.USERNAME)
        .then(resp => resp.json())
        .then(data => dispatch({
            type: GET_TASKS,
            payload: {
                tasks: data.message.tasks,
                tasks_length: data.message.total_task_count
            }
        }))
        .catch(err => console.log("err: ", err))
        .finally(() => dispatch({
            type: LOADING_TASKS,
            payload: {
                is_loading: false
            }
        }))
}


export const changeTaskPage = (page: number) => (dispatch: Dispatch<DispatchEvent<ChangeActiveTasksDispatchInterface | LoadingTasksDispatchInterface>>) => {
    dispatch({
        type: LOADING_TASKS,
        payload: {
            is_loading: true
        }
    })
    fetch(BACKEND_ROUTES.GET_TASKS + BACKEND_CONFIG.USERNAME + "&&page=" + page)
        .then(resp => resp.json())
        .then(data => dispatch({
            type: CHANGE_ACTIVE_TASKS_PAGE,
            payload: {
                tasks: data.message.tasks,
                active_page: page
            }
        }))
        .catch(err => console.log("err: ", err))
        .finally(() => dispatch({
            type: LOADING_TASKS,
            payload: {
                is_loading: false
            }
        }))

}
export const createTask = (task:CreateTaskInterface) => (dispatch: Dispatch<DispatchEvent<ChangeActiveTasksDispatchInterface | LoadingTasksDispatchInterface | null>>) => {
    dispatch({
        type: LOADING_TASKS,
        payload: {
            is_loading: true
        }
    })
    const formData  = new FormData();
    Object.entries(task).forEach(([key, value]) => formData.append(key, value as string));
    fetch(BACKEND_ROUTES.CREATE_TASK + BACKEND_CONFIG.USERNAME, {
        method: "POST",
        body: formData,
    })
        .then(resp => resp.json())
        .then(data => {
            if(data.status === "ok") {
                dispatch({
                    type: CREATE_TASK,
                    payload: null
                })
            }}
        )
        .catch(err => console.log("err: ", err))
        .finally(() => {
            dispatch({
                type: HIDE_ALL_MODAL,
                payload: null
            })
            dispatch({
                type: LOADING_TASKS,
                payload: {
                    is_loading: false
                }
            })
        })

}