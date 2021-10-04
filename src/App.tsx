import React, {useEffect} from 'react';
import './assets/App.css';
import {Tasks} from "./components/Tasks";
import {useDispatch, useSelector} from "react-redux";
import {getTasks} from "./store/action/tasks.action";
import {Header} from "./components/Header";
import {ModalWindow} from "./components/ui/Modal";
import {RootState} from "./store/interfaces/root";
import {CreateTask} from "./components/CreateTask";

function App() {
    const {show_task_modal,show_auth_modal} = useSelector((state:RootState) => state.modals)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasks())
    }, [dispatch])

    return (
        <div className="App">
            <Header/>
            <Tasks/>
            {show_task_modal && <ModalWindow><CreateTask/></ModalWindow>}
            {show_auth_modal && <ModalWindow>authModal</ModalWindow>}
        </div>
    );
}

export default App;
