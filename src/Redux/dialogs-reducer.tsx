import {PostsMassiveType, Send_Message, Update_New_Message_body} from "./State";
export const DialogsReducer = (state,action)=> {
    switch (action.type) {
        case Update_New_Message_body:
            state.NewMessageBody = action.body
            break;
        case Send_Message:
            let body = state.NewMessageBody
            state.NewMessageBody = ''
            state.MessageMassive.push({id: 6, message: body})
            break;
    }
}
