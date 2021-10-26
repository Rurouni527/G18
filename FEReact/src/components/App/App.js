import React from "react";
import {BrowserRouter, Route} from "react-router-dom"
import './Rventas.css';
import Header from '../Header/Header';
import MenuOption from '../MenuOption/MenuOption';
import VentasOk from '../VentasOk/VentasOk';
import Panel from '../Panel';
import Total from '../Total';





function App() {
  return (
      
    <BrowserRouter>
      
      <Route path ="/" component={Header} />
      <Route path ="/" component={MenuOption} />
      <Route path ="/VentasOk" component={VentasOk} />
      <Route path ="/Panel" >< Panel/>< Total/></Route> 

    </BrowserRouter>
  )
}


export default App;
