import {PostsMassiveType} from "./State";

export const ProfileReducer = (state, action) => {
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