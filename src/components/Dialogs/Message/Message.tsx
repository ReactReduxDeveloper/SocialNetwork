import React from "react";
import c from './../Dialogs.module.css'


export type DialogItemType = {
    name: string
    id: number
}
export type MessageType = {
    message: string
    id: number
}


export const Message = (props: MessageType) => {
    return (
        <div className={c.message}>{props.message}</div>
    )
}

