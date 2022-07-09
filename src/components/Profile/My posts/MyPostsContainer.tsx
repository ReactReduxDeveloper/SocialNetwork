import c from "./MyPosts.module.css";
import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {
    ActionTypes, AddPostActionCreator,
    AddPostActionType,
    FinishStateType,
    PostsMassiveType,
    ProfilePageType, UpdateNewPostChangeActionCreator,
    UpdateNewPostChangeActionType
} from "../../../Redux/State";
import {ProfileStateType} from "../Profile";


type MyPostsStateType = {
    state: Array<PostsMassiveType>
    NewPostText: string
    dispatch:(action: ActionTypes)=>void
}
export const MyPostsContainer = (props: MyPostsStateType) => {

    const PostsMap = props.state.map((el) => {
        return (
            <Post message={el.message} id={el.id} likesCount={el.likesCount}/>
        )

    })
    const ReactCreateRef = React.createRef<HTMLTextAreaElement>()
    const AddPost = () => {
        props.dispatch(AddPostActionCreator(props.NewPostText))

    }
    const OnChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(UpdateNewPostChangeActionCreator(e.currentTarget.value))
    }
    return (
<MyPosts state={} NewPostText={} dispatch={}


          
    )
}