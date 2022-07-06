import React from "react";
import c from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {FinishStateType, MessagePageType} from "../../Redux/State";

type DialogsStateType = {
    state: MessagePageType
}
export const Dialogs = (props: DialogsStateType) => {


    const Dialogelement = props.state.DialogMassive.map((el) => {
        return (
            <DialogItem id={el.id} name={el.name}/>
        )
    })
    const Messageelement = props.state.MessageMassive.map((m) => {
        return (
            <Message id={m.id} message={m.message}/>
        )
    })
    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                {Dialogelement}
            </div>
            <div className={c.messages}>
                {Messageelement}
            </div>

        </div>


    )


}