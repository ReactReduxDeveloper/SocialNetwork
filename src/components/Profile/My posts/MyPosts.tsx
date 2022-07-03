import c from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";

export const MyPosts =()=> {
return (

    <div> My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={c.posts}>

     <Post message={"Hi"}/>
     <Post message={"Hello"}/>

        </div>
    </div>
)
}