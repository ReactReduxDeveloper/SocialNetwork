import React from "react";
import c from './Profile.module.css'
import {MyPosts} from "./My posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AddPost, FinishStateType, PostsMassiveType, ProfilePageType, UpdateNewPostChange} from "../../Redux/State";


export type ProfileStateType = {
    Profilestate: ProfilePageType
    AddPost: (PostMessage: string) => void
    UpdateNewPostChange: (NewText: string) => void
}
export const Profile = (props: ProfileStateType) => {

    return (

        <div>
            <ProfileInfo/>
            <MyPosts state={props.Profilestate.PostsMassive} NewPostText={props.Profilestate.NewPostText}
                     UpdateNewPostChange={props.UpdateNewPostChange} AddPost={props.AddPost}/>
        </div>


    )


}