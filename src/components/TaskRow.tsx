import React from 'react'
import {TaskInterface} from "../store/interfaces/task";
import {getStatusInfo} from "../helpers/status.helper";

interface TaskRowInterface extends TaskInterface {
}

export const TaskRow: React.FC<TaskRowInterface> = ({
                                                        username,
                                                        email,
                                                        text,
                                                        status
                                                    }) => {
    const statusInfo = getStatusInfo(status)
    return (
        <tr>
            <td>{username}</td>
            <td>{email}</td>
            <td>{text}</td>
            <td className={"status"}>
                <span className={"status-emoji"}>
                    {statusInfo.emoji}
                    <span className={"status-text"}>
                        {statusInfo.text}
                    </span>
                </span>
            </td>
        </tr>
    )
}
