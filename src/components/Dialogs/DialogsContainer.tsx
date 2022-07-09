import React, {ChangeEvent} from "react";
import c from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionTypes,
    FinishStateType,
    MessagePageType,
    SendMessageActionCreator,
    UpdateNewMessagebody
} from "../../Redux/State";
import {Dialogs} from "./Dialogs";

type DialogsStateType = {
    state: MessagePageType
    dispatch: (action: ActionTypes) => void
}
export const DialogsContainer = (props: DialogsStateType) => {

    const OnNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.dispatch(UpdateNewMessagebody(body))
    }
    const OnSendMessageClick = () => {
        props.dispatch(SendMessageActionCreator())
    }
    const NewMessageBody = props.state.NewMessageBody
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
       <Dialogs state={} dispatch={}/>


    )


}