import React from "react";
import c from './Profile.module.css'
import {MyPosts} from "./My posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {
    ActionTypes,
    AddPostActionType,

    FinishStateType,
    PostsMassiveType,
    ProfilePageType,
    StoreType, UpdateNewPostChangeActionType,

} from "../../Redux/State";


export type ProfileStateType = {
    Profilestate: ProfilePageType
    dispatch:(action: ActionTypes)=>void

}
export const Profile = (props: ProfileStateType) => {

    return (

        <div>
            <ProfileInfo/>
            <MyPosts state={props.Profilestate.PostsMassive} NewPostText={props.Profilestate.NewPostText}
                     dispatch={props.dispatch}/>
        </div>


    )


}