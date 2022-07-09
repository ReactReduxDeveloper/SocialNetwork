import {combineReducers, createStore} from "redux";
import {DialogsReducer} from "./dialogs-reducer";
import {ProfileReducer} from "./profile-reducer";
import {SideBarReducer} from "./sidebar-reducer";


let reducers = combineReducers(
    {
        MessagePage:DialogsReducer,
        ProfilePage:ProfileReducer,
        Sidebar:SideBarReducer
    }
)
export let store = createStore()