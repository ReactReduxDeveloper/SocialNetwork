import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AppStateType, state, UpdateNewPostChange} from "./Redux/State";

type FinishStateType = {
    state: AppStateType
    AddPost: (PostMessage: string) => void
    UpdateNewPostChange: (NewText: string) => void

}

function App(props: FinishStateType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/dialogs' render={() => <Dialogs state={props.state.MessagePage}/>}/>
                        <Route path="/profile"
                               render={() => <Profile Profilestate={props.state.ProfilePage} AddPost={props.AddPost}
                                                      UpdateNewPostChange={props.UpdateNewPostChange}/>}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
