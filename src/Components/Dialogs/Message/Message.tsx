import React from "react";
import s from "../Dialogs.module.css";
import {messageData} from "../Dialogs";

export const Message = (props:messageData) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}