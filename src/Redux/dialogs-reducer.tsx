import {PostsMassiveType, Send_Message, Update_New_Message_body} from "./State";

let InitialState = {
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
}
export const DialogsReducer = (state = InitialState,action)=> {
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
