import {DispatchEvent} from "../interfaces/redux";
import {TasksDispatchInterface, TaskStateInterface} from "../interfaces/task";
import {CHANGE_ACTIVE_TASKS_PAGE, CREATE_TASK, GET_TASKS, LOADING_TASKS} from "../types/task.types";

const initialState = {
    tasks: [],
    tasks_length: 0,
    is_loading: false,
    active_page: 1
} as TaskStateInterface

export const taskReducer = (state = initialState, action: DispatchEvent<TasksDispatchInterface>) => {
    const {type, payload} = action
    switch (type) {
        case GET_TASKS: {
            return {
                ...state,
                tasks: payload.tasks,
                tasks_length: payload.tasks_length
            }
        }
        case CREATE_TASK: {
            return {
                ...state,
                tasks_length: ++state.tasks_length
            }
        }
        case LOADING_TASKS: {
            return {
                ...state,
                is_loading: payload.is_loading
            }
        }
        case CHANGE_ACTIVE_TASKS_PAGE: {
            return {
                ...state,
                tasks: payload.tasks,
                active_page: payload.active_page,
            }
        }
        default:
            return state
    }
}