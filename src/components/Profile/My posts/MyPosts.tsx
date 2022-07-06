import c from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";
import {FinishStateType, PostsMassiveType, ProfilePageType} from "../../../Redux/State";
import {ProfileStateType} from "../Profile";


type MyPostsStateType = {
    state:Array<PostsMassiveType>
    AddPost:(PostMessage:string)=>void
}
export const MyPosts = (props:MyPostsStateType) => {

    const PostsMap = props.state.map((el) => {
        return (
            <Post message={el.message} id={el.id} likesCount={el.likesCount}/>
        )

    })
    const ReactCreateRef = React.createRef<HTMLTextAreaElement>()
    const AddPost = ()=> {
        if (ReactCreateRef.current) {props.AddPost(ReactCreateRef.current.value)}

    }
    return (

        <div className={c.PostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={ReactCreateRef}></textarea>
                </div>
                <div>
                    <button onClick={AddPost}>Add post</button>
                </div>
            </div>
            <div className={c.posts}>

                {PostsMap}

            </div>
        </div>
    )
}