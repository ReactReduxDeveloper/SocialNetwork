import React from 'react';
import i from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {Profileinfo} from "./Profileinfo/Profileinfo";
import {postspagetype} from "../../Redux/State";
import {state} from "../../Redux/State";
import {statetype} from "../../index";

export const Profile = (props:statetype) => {

    return <div className={i.content}>
        <Profileinfo/>
        <MyPosts posts={props.statetype.ProfilePages.posts}/>
    </div>
}

