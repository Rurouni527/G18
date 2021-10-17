import { BrowserRouter, Route } from 'react-router-dom';
import AppContextComponent from '../AppContext/AppContext';
import './App.css';
import Header from '../Header/Header';
import MenuOption from '../MenuOption/MenuOption';
import ListProd from '../ListProd/ListProd';
import EditProd from '../EditProd/EditProd';
import React from 'react';

function App() {
    return ( <
        BrowserRouter >
        <
        React.Fragment >
        <
        Route path = "/"
        component = { Header }
        />  <
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
        />< /
        React.Fragment > <
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
        /Route> < /
        AppContextComponent > <
        /> <
        Route path = "/MenuOption"
        component = { MenuOption }
        /> <
        Route path = "/ListProd"
        component = { ListProd }
        /> <
        Route path = "/EditProd"
        component = { EditProd }
        /> < /
        React.Fragment > <
        /BrowserRouter>
    );
}

export default App;