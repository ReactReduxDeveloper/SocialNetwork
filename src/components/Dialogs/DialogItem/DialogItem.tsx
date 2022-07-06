import React from "react";
import c from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


export type DialogItemType = {
    name: string
    id: number
}
export type MessageType = {
    message: string
    id: number
}


export const DialogItem = (props: DialogItemType) => {

    let path = c.dialog + "" + c.active
    return (

        <div className={path}><NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink></div>


    )
}





