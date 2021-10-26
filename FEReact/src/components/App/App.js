import { BrowserRouter, Route } from 'react-router-dom';
import AppContextComponent from '../AppContext/AppContext';
import './App.css';
import Header from '../Header/Header';
import ListProd from '../ListProd/ListProd';
import EditProd from '../EditProd/EditProd';
import ListUsuario from '../ListUsuario/ListUsuario';
import EditUsuario from '../EditUsuario/EditUsuario';
import VentasOk from '../VentasOk/VentasOk';
import Panel  from '../Panel';
import Total from '../Total';
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
                Route path = "/ListUsuario"
                component = { ListUsuario }
                /> <
                Route path = "/list"
                component = { ListProd }
                /> <
                Route path = "/create"
                component = { EditProd }
                />  <
                Route path = "/createUser"
                component = { EditUsuario }
                /> <
                Route path = "/edit/:id?"
                component = { EditProd }
                /> < 
                Route path = "/VentasOk"
                component = { VentasOk }
                />  <
                Route path = "/Panel"
                component = { Panel }
                /> < 
                Route path = "/Total"
                component = { Total }
                /> </ >
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
        /Route>  < /
        AppContextComponent > <
        /BrowserRouter>
    );
}

export default App;