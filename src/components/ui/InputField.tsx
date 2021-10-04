import React, {ChangeEvent, FocusEvent, HTMLInputTypeAttribute, useState} from 'react'
import {createTaskInputValidator} from "../../helpers/validators/task.validator";
import {TaskInterface} from "../../store/interfaces/task";

interface InputFieldInterface {
    type: HTMLInputTypeAttribute
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    name: keyof TaskInterface | string
    placeholder: string
    value: string
    label: string
    disabled?: boolean
}

type InputFieldError = {
    status: boolean,
    message: string | null
}

export const InputField: React.FC<InputFieldInterface> = ({
                                                              type = "text",
                                                              onChange,
                                                              label,
                                                              name,
                                                              placeholder,
                                                              value,
                                                              disabled = false,
                                                          }) => {
    const [error,setError] = useState<InputFieldError>({
        status: false,
        message: null
    })
    const blurEvent = (event: FocusEvent<HTMLInputElement>) => {
        const {name,value} = event.target
        const validationError = createTaskInputValidator(name,value)
        if(validationError) {
            setError(() => ({status: true, message: validationError}))
        }
        else {
            setError(() => ({status: false, message: null}))
        }
    }
    return (
        <div className={error.status ? "input input-invalid" : "input"}>
            <label>
                <span>{label}</span>
                <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={blurEvent}
                    disabled={disabled}
                />
            </label>
            {error.status && <div><p>{error.message}</p></div>}
        </div>
    )
}