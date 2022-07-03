import React from "react";
import c from './Profile.module.css'
import {MyPosts} from "./My posts/MyPosts";

export const Profile = () => {
    return (

        <div className={c.content}>
            <img src="https://exaline.ru/storage/app/media/bulgaria.jpg"/>
            <div>ava + description</div>
            <MyPosts />
        </div>


    )


}