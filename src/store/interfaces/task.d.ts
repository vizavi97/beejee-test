export interface TaskStateInterface {
    tasks: [] | TaskInterface[]
    tasks_length: number
    is_loading: boolean
    active_page: number
}


export interface TaskInterface {
    id: number
    email: string
    text: string
    username: string,
    status: number
}

export interface TasksDispatchInterface extends TaskStateInterface {}


export interface GetTasksDispatchInterface extends Omit<TasksDispatchInterface, "is_loading" | "active_page"> {}
export interface ChangeActiveTasksDispatchInterface extends Omit<TasksDispatchInterface, "is_loading" | "tasks_length"> {}
export interface LoadingTasksDispatchInterface extends Omit<TasksDispatchInterface, "tasks" | "tasks_length" | "active_page"> {}
export interface CreateTaskInterface extends Omit<TaskInterface, "id" | "status"> {}