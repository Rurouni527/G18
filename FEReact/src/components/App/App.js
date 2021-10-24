import { BrowserRouter, Route } from 'react-router-dom';
import AppContextComponent from '../AppContext/AppContext';
import './App.css';
import Header from '../Header/Header';
import MenuOption from '../MenuOption/MenuOption';
import ListProd from '../ListProd/ListProd';
import EditProd from '../EditProd/EditProd';
import React from 'react';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import { getToken } from './../utils/getToken';

function App() {
    const token = getToken();

    return ( <
        BrowserRouter >
        <
        React.Fragment >
        <
        Route path = "/"
        component = { Header }
        /> <
        GoogleSignIn / > {
            token ? ( <
                >
                <
                Route path = "/MenuOption"
                component = { MenuOption }
                /> <
                Route path = "/list"
                component = { ListProd }
                /> <
                Route path = "/create"
                component = { EditProd }
                /> <
                Route path = "/edit/:id?"
                component = { EditProd }
                /> <
                />
            ) : null
        } <
        /React.Fragment> <
        AppContextComponent >
        <
        Route path = { '/ListProd' } >
        <
        ListProd / >
        <
        /Route> <
        Route path = { '/EditProd' } >
        <
        EditProd / >
        <
        /Route>  <
        /AppContextComponent> <
        /BrowserRouter>
    );
}

export default App;