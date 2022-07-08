import React from "react";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {SideBarReducer} from "./sidebar-reducer";

export const Update_New_Message_body = "Update_New_Message_body"
export const Send_Message = "Send_Message"
export let store: StoreType = {
    _state: {
        ProfilePage: {
            PostsMassive: [
                {id: 1, message: "Hi", likesCount: "5"},
                {id: 2, message: "Hello", likesCount: "10"},
                {id: 3, message: "Privet", likesCount: "2"},
                {id: 4, message: "Hola", likesCount: "4"},
            ],
            NewPostText: "It-Kam"
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

            ],
            NewMessageBody: ""
        },

        Sidebar: {}
    },
    getState() {
        return this._state
    },
    _CallSubscriber() {
        console.log('State changed');
    },

    subscribe(observer: () => void) {
        this._CallSubscriber = observer
    },
    dispatch(action) {
        this._state.ProfilePage =  ProfileReducer(this._state.ProfilePage, action)
        this._state.MessagePage =  DialogsReducer(this._state.MessagePage, action)
        this._state.Sidebar =  SideBarReducer(this._state.Sidebar, action)
        this._CallSubscriber(this._state)
    }
}

export type StoreType = {
    _state: AppStateType
    getState: () => AppStateType
    _CallSubscriber: (_state: AppStateType) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void

}
export type ActionTypes = AddPostActionType | UpdateNewPostChangeActionType | UpdateNewMessageActionType | SendMessageActionType

export const UpdateNewMessagebody = (body:string)=> {
    return {
        type:Update_New_Message_body,
        body: body
    } as const

}
export const AddPostActionCreator = (PostMessage: string) => {
    return {
        type: "ADD-POST",
        PostMessage: PostMessage

    } as const
}
export const UpdateNewPostChangeActionCreator = (NewText: string) => {
    return {
        type: "UPDATE-NEW-POST-CHANGE",
        NewText: NewText

    } as const
}
export let SendMessageActionCreator = (body:string)=> {
    return {
        type:Send_Message,
        body:body
}
}
export type SendMessageActionType = ReturnType<typeof SendMessageActionCreator>
export type UpdateNewMessageActionType = ReturnType<typeof UpdateNewMessagebody>
export type AddPostActionType = ReturnType<typeof AddPostActionCreator>
export type UpdateNewPostChangeActionType = ReturnType<typeof UpdateNewPostChangeActionCreator>

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
    NewPostText: string


}
export type MessagePageType = {
    MessageMassive: Array<MessageMassiveType>
    DialogMassive: Array<DialogMassiveType>
    NewMessageBody: string
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
