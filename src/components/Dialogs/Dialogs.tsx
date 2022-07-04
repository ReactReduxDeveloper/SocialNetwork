import React from "react";
import c from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemType = {
    name: string
    id: string
}
type MessageType = {
    message: string
}
const DialogItem = (props: DialogItemType) => {
    let path = c.dialog + "" + c.active
    return (
        <div className={path}><NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink></div>


    )
}
const Message = (props: MessageType) => {
    return (
        <div className={c.message}>{props.message}</div>
    )
}
export const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                <DialogItem name="Dima" id="1"/>
                <DialogItem name="Aleks" id="2"/>
                <DialogItem name="Magomed" id="3"/>
                <DialogItem name="Igor" id="4"/>
                <DialogItem name="Vadim" id="5"/>
                <DialogItem name="Vlad" id="6"/>
            </div>
            <div className={c.messages}>
                <Message message="Hi"/>
                <Message message="Yo"/>
                <Message message="Hehey"/>
            </div>

        </div>


    )


}