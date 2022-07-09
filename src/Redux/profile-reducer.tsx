import {PostsMassiveType} from "./State";

let InitialState =  {
    PostsMassive: [
        {id: 1, message: "Hi", likesCount: "5"},
        {id: 2, message: "Hello", likesCount: "10"},
        {id: 3, message: "Privet", likesCount: "2"},
        {id: 4, message: "Hola", likesCount: "4"},
    ],
        NewPostText: "It-Kam"
}
export const ProfileReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "ADD-POST":
            let NewPost: PostsMassiveType = {
                id: 5,
                message: action.PostMessage,
                likesCount: "0"
            }
            state.PostsMassive.push(NewPost)
            state.ProfilePage.NewPostText = ""
            break;
        case "UPDATE-NEW-POST-CHANGE":
            state.NewPostText = action.NewText
            break;
    }
    return state
}