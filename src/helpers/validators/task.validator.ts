import {CreateTaskInterface, TaskInterface} from "../../store/interfaces/task";

const emailRegular = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const createTaskInputValidator = (name: keyof TaskInterface | string, value: string): string | undefined => {

    if (name === "username" && value.length < 2) {
        return "Поле имени должно быть длиннее 2х символов"
    }
    if (name === "email" && value.length < 2) {
        return "Поле Email должно быть длиннее 2х символов"
    }
    if (name === "email" && !emailRegular.test(value)) {
        return "Некорректный  email адрес"
    }
    if (name === "text" && value.length < 2) {
        return "Поле Текст должно быть длиннее 2х символов"
    }
}

export const submitTaskFormValidator = (form: CreateTaskInterface): string | undefined => {
    if (Object.entries(form).some(elem => !String(elem[1]).length)) {
        return "Ошибка: Все поля должны быть заполнены"
    }
    if (form.username.length < 2) {
        return "Поле Имя пользователя должно быть длиннее 2х символов"
    }
    if (form.email.length < 2) {
        return "Поле Фамилии должно быть длиннее 2х символов"
    }
    if (!emailRegular.test(form.email)) {
        return "Некорректный  email адрес"
    }
    if (form.text.length < 2) {
        return "Поле Текст должно быть длиннее 2х символов"
    }
}