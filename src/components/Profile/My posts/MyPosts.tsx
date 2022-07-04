import c from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (

        <div className={c.PostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                <textarea></textarea>
                </div>
                <div>
                <button>Add post</button>
                </div>
            </div>
            <div className={c.posts}>

                <Post message={"Hi"}/>
                <Post message={"Hello"}/>

            </div>
        </div>
    )
}