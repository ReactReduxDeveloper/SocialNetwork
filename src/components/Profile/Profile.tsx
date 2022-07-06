import React from "react";
import c from './Profile.module.css'
import {MyPosts} from "./My posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AddPost, FinishStateType, PostsMassiveType, ProfilePageType} from "../../Redux/State";


export type ProfileStateType = {
    state: ProfilePageType
    AddPost:(PostMessage:string)=>void
}
export const Profile = (props:ProfileStateType) => {

    return (

        <div>
            <ProfileInfo/>
            <MyPosts state={props.state.PostsMassive} AddPost={props.AddPost}/>
        </div>


    )


}