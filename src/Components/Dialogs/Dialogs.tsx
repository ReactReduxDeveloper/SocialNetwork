import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {Dialog} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


export type DialogsData = {
    path:number
    name:string
}
export type ArrayDialogsData = {
    DialogsData:Array<DialogsData>
    messageData:Array<messageData>
}
export type  messageData = {
    message:string
    likes: number
}




export const Dialogs = (props:ArrayDialogsData ) => {
    const dialogElements = props.DialogsData.map((dia) => <Dialog name={dia.name} path={dia.path}/>);
    const messagesElements = props.messageData.map((m) => {
        <Message message={m.message} likes={m.likes}/>
    })
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}