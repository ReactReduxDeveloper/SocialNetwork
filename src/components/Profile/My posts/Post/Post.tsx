import c from "./Post.module.css";
import React from "react";

export type PostType = {
    message:string
}
export const Post = (props:PostType)=> {

    return <div
        className={c.item}>
        <img src="https://waralbum.ru/wp-content/uploads/wpforo/attachments/15805/3633-03.jpg" />
        {props.message}
        <div><span>like</span></div>
    </div>
}
