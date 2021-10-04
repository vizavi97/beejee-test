import {TaskStateInterface} from "./task";
import {ModalStateInterface} from "./modal";

export interface RootState {
    tasks: TaskStateInterface,
    modals: ModalStateInterface
}