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

type DialogsStateType = {
    state: MessagePageType
    dispatch: (action: ActionTypes) => void
}
export const Dialogs = (props: DialogsStateType) => {

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
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                {Dialogelement}
            </div>
            <div className={c.messages}>
                <div> {Messageelement}</div>
                <div>
                    <div><textarea onChange={OnNewMessageChange} value={NewMessageBody} placeholder="Text"></textarea>
                    </div>
                    <div>
                        <button onClick={OnSendMessageClick}>Send</button>
                    </div>

                </div>
            </div>

        </div>


    )


}