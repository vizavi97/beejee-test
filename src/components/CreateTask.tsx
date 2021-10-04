import React, {ChangeEvent, FormEvent, useState} from 'react'
import {CreateTaskInterface} from "../store/interfaces/task";
import {InputField} from "./ui/InputField";
import {submitTaskFormValidator} from "../helpers/validators/task.validator";
import {createTask} from "../store/action/tasks.action";
import {useDispatch} from "react-redux";

export const CreateTask: React.FC = () => {
    const dispatch = useDispatch()
    const [error, setError] = useState<null | string>(null)
    const [disable, setDisable] = useState<boolean>(false)
    const [form, setForm] = useState<CreateTaskInterface>({
        email: '',
        username: '',
        text: '',
    })
    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        const err = submitTaskFormValidator(form)
        console.log(err)
        if (err) {
            setError(err)
        } else {
            console.log(form)
            setDisable(() => true)
            setError(null)
            dispatch(createTask(form))
            setDisable(() => false)
        }
    }
    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setForm((state: CreateTaskInterface) => ({
            ...state,
            [name]: value
        }))
    }
    return (
        <>
            <h2>Создание записи</h2>
            <form onSubmit={submitHandler} className={'modal-content__form'}>
                <InputField type={"text"}
                            onChange={inputHandler}
                            name={"email"}
                            placeholder={"Email"}
                            value={form.email}
                            label={"email"}
                            disabled={disable}

                />
                <InputField type={"text"}
                            onChange={inputHandler}
                            name={"username"}
                            placeholder={"Имя пользователя"}
                            value={form.username}
                            label={"Имя пользователя"}
                            disabled={disable}
                />
                <InputField type={"text"}
                            onChange={inputHandler}
                            name={"text"}
                            placeholder={"Текст"}
                            value={form.text}
                            label={"Текст"}
                            disabled={disable}
                />
                {Boolean(error) && <div className={'input-invalid'}>
                    <p>{error}</p>
                </div>}
                <button
                    type={'submit'}
                    className={'btn'}
                    disabled={disable}
                >Отправить</button>
            </form>
        </>
    )
}
