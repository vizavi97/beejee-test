import {DispatchEvent} from "../interfaces/redux";
import {HIDE_ALL_MODAL, SHOW_AUTH_MODAL, SHOW_TASK_MODAL} from "../types/modal.types";
import {ModalStateInterface} from "../interfaces/modal";

const initialState = {
    show_task_modal: false,
    show_auth_modal: false,
} as ModalStateInterface

export const ModalReducer = (state = initialState, action: DispatchEvent<null>) => {
    const {type} = action
    switch (type) {
        case SHOW_TASK_MODAL: {
            return {
                ...state,
                show_task_modal: true
            }
        }
        case SHOW_AUTH_MODAL: {
            return {
                ...state,
                show_auth_modal: true
            }
        }
        case HIDE_ALL_MODAL: {
            return {
                show_task_modal: false,
                show_auth_modal: false
            }
        }

        default:
            return state
    }
}