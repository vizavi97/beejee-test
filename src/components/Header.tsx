import React from 'react'
import {useDispatch} from "react-redux";
import {showAuthModal, showTaskModal} from "../store/action/modal.action";

export const Header: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <div className={'header'}>
            <div className={'container'}>
                <div className={'header-container'}>
                    <div className={'header-create'}>
                        <button
                            type={"button"}
                            className={"btn"}
                            onClick={() => dispatch(showTaskModal())}
                        >Создать заметку</button>
                    </div>
                    <div className={'header-enter'}>
                        <button
                            type={"button"}
                            className={"btn"}
                            onClick={() => dispatch(showAuthModal())}
                        >Войти</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
