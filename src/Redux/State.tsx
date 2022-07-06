import React from "react";


export type PostsMassiveType = {
    id: number;
    message: string;
    likesCount: string
}
export type MessageMassiveType = {
    id: number;
    message: string;
}
export type DialogMassiveType = {
    id: number;
    name: string;

}
export type ProfilePageType = {
    PostsMassive: Array<PostsMassiveType>
}
export type MessagePageType = {
    MessageMassive: Array<MessageMassiveType>
    DialogMassive: Array<DialogMassiveType>
}
export type sidebar = {}
export type AppStateType = {
    ProfilePage: ProfilePageType
    MessagePage: MessagePageType
    Sidebar: sidebar
}
export type FinishStateType = {
    state: AppStateType
    AddPost: (PostMessage: string) => void
}
export type AddPostType = {
    AddPost: (PostMessage: string) => void
}
export const state: AppStateType = {
    ProfilePage: {
        PostsMassive: [
            {id: 1, message: "Hi", likesCount: "5"},
            {id: 2, message: "Hello", likesCount: "10"},
            {id: 3, message: "Privet", likesCount: "2"},
            {id: 4, message: "Hola", likesCount: "4"},
        ]
    },
    MessagePage: {
        MessageMassive: [
            {id: 1, message: "Hi"},
            {id: 2, message: "Yo"},
            {id: 3, message: "Hehey"},
        ],
        DialogMassive: [
            {
                id: 1,
                name: 'Dima'
            },
            {
                name: "Aleks",
                id: 2
            },
            {
                name: "Magomed",
                id: 3
            },
            {
                name: "Igor",
                id: 4
            },
            {
                name: "Vadim",
                id: 5
            },
            {
                name: "Vlad",
                id: 6
            }

        ]
    },
    Sidebar: {}


}
export const AddPost = (PostMessage: string) => {
    let NewPost: PostsMassiveType = {
        id: 5,
        message: PostMessage,
        likesCount: "0"
    }

    state.ProfilePage.PostsMassive.push(NewPost)
}