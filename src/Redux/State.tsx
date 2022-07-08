import React from "react";

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

            ]
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
        if (action.type === "ADD-POST") {
            let NewPost: PostsMassiveType = {
                id: 5,
                message: action.PostMessage,
                likesCount: "0"
            }
            this._state.ProfilePage.PostsMassive.push(NewPost)
            this._state.ProfilePage.NewPostText = ""
            this._CallSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-POST-CHANGE") {
            this._state.ProfilePage.NewPostText = action.NewText
            this._CallSubscriber(this._state)
        }
    }
}

export type StoreType = {
    _state: AppStateType
    getState: () => AppStateType
    _CallSubscriber: (_state: AppStateType) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void

}
export type ActionTypes = AddPostActionType | UpdateNewPostChangeActionType
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
