import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogsData} from "../Dialogs";

export const Dialog: React.FC<DialogsData> = (p) => {
    let PathNumber = "/dialogs/" + p.path;
    return (
        <div className={s.item + ' ' + s.active}>
            <NavLink to={PathNumber}>{p.name}</NavLink>
        </div>)
}