import React from 'react';
import i from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {postspagetype} from "../../../Redux/State";
import {statetype} from "../../../index";



export const MyPosts = (props:statetype) => {

    const postsElement = props.posts.map((p) => <Post message={p.message} likes={p.likescount}/>)

    return <div className={i.content}>

        <div className={i.postBlock}>
            <div className={i.mypost}>
                My posts
            </div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={i.posts}>
                {postsElement}
            </div>
        </div>
    </div>
}

