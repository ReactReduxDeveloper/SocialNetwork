import React from 'react';
import i from "./Post.module.css";

type PropsType = {
    message:string
    likes:number
}

export const Post:React.FC<PropsType> = (p) => {
    return (


        <div className={i.item}>
            <div>
            <img
                src="https://get.pxhere.com/photo/wildlife-zoo-mammal-fauna-primate-chimpanzee-vertebrate-macaque-western-gorilla-great-ape-common-chimpanzee-new-world-monkey-184653.jpg"/>
                {p.message}
            </div>
            <span>likes = </span>
            {p.likes}
        </div>

)
}

