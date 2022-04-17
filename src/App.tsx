import React, {useState} from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {ArrayDialogsData, Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {stateType} from "./Redux/State";
import {state} from "./Redux/State";
import {statetype} from "./index";

function App(props: statetype) {

    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Routes>

                        <Route path="/profile/*" element={<Profile posts={props.statetype.ProfilePages.posts}/>}/>
                        <Route path="/dialogs/*"
                               element={<Dialogs DialogsData={props.statetype.Messagespages.DialogsData}
                                                 messageData={props.statetype.Messagespages.messageData}/>}/>

                    </Routes>
                </div>

            </div>
        </Router>
    );
}


export default App;
