import React from "react";
import c from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (

        <div>
            <div>
                <img src="https://exaline.ru/storage/app/media/bulgaria.jpg"/>
            </div >
            <div className={c.DescriptionBlock}>ava + description</div>

        </div>


    )


}