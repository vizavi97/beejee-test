import {Dispatch} from "redux";
import {DispatchEvent} from "../interfaces/redux";
import {HIDE_ALL_MODAL, SHOW_AUTH_MODAL, SHOW_TASK_MODAL} from "../types/modal.types";



export const showTaskModal = () => (dispatch: Dispatch<DispatchEvent<null>>) => {
    dispatch({
        type: SHOW_TASK_MODAL,
        payload: null
    })
}

export const showAuthModal = () => (dispatch: Dispatch<DispatchEvent<null>>) => {
    dispatch({
        type: SHOW_AUTH_MODAL,
        payload: null
    })
}
export const hideAllModal = () => (dispatch: Dispatch<DispatchEvent<null>>) => {
    dispatch({
        type: HIDE_ALL_MODAL,
        payload: null
    })
}