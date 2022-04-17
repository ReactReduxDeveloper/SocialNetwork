import React from "react";


export type postsType = {
    id: number;
    message: string;
    likescount: number;
}
export type DialogsDataType = {
    path: number;
    name: string
}

export type messageDataType = {
    message: string;
    likes: number
}
export type postspagetype = {
    posts: Array<postsType>
}
export type stateType = {
    ProfilePages: {
        posts: Array<postsType>

    }
    Messagespages: {
        messageData: Array<messageDataType>
        DialogsData: Array<DialogsDataType>
    }
}
export const state: stateType =
{

    ProfilePages: {
        posts: [
            {
                id: 1,
                message: "Hi, how are you",
                likescount: 12

            },
            {
                id: 1,
                message: "Hi, what do you do",
                likescount: 16

            },

        ]
    },
    Messagespages: {

        messageData: [
            {

                message: "Hi",
                likes: 23
            },
            {

                message: "Yo",
                likes: 25
            },
            {

                message: "Horray",
                likes: 20
            },


        ]
        ,

        DialogsData: [
            {
                path: 1,
                name: "Dima"

            },
            {
                path: 2,
                name: "Sasha"
            },
            {
                path: 3,
                name: "Georg"
            },
            {
                path: 4,
                name: "Magomed"
            },
            {
                path: 5,
                name: "Damir"
            },
            {
                path: 6,
                name: "Semen"
            },
        ]

    }

}


