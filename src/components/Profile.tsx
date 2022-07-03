import React from "react";
import c from './Profile.module.css'

export const Profile = () => {
    return (

        <div className={c.content}>
            <img src="https://exaline.ru/storage/app/media/bulgaria.jpg"/>
            <div>ava + description</div>
            <div>My posts</div>
            <div> New post</div>
            <div className={c.posts}>
                <div className={c.item}>post 1</div>
                <div className={c.item}>post 2</div>


            </div>
        </div>




    )


}