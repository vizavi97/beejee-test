import {combineReducers} from "redux";
import {taskReducer} from "./task.reducer";
import {ModalReducer} from "./modal.reducer";

export const rootReducer = combineReducers({
    tasks: taskReducer,
    modals: ModalReducer
})