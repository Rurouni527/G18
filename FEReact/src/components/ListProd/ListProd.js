import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { httpGet } from './../utils/fetch';
import FillTable from './../FillTable/FillTable';

const ListProd = (props) => {
    const [prods, setProds] = useState([]);

    useEffect(() => {
        const getProdsData = async() => {
            const prodsData = await httpGet(`${process.env.REACT_APP_BACKEND_URL}/scprod`);
            setProds(prodsData);
        };

        getProdsData();
    }, []);

    return ( <
        form className = "Data" >
        <
        div className = "ScreenName" >
        <
        p > Maestro de productos < /p> < /
        div > <
        div className = "AddLookProd" >
        <
        div id = "AddProd" >
        <
        Link className = { 'button' }
        to = { 'create' } > Agregar un nuevo producto < /Link> < /
        div > <
        div className = "LookProd" >
        <
        div id = "SearchOpt" >
        <
        p > Opciones de búsqueda: < /p> <
        div id = "SearchIdProd" >
        <
        input type = "radio"
        id = "IdProd"
        name = "SearchProd"
        value = "IdProd"
        checked / >
        <
        label
        for = "IdProd" > Identificador del producto < /label> < /
        div > <
        div id = "SearchDescProd" >
        <
        input type = "radio"
        id = "DescProd"
        name = "SearchProd"
        value = "DescProd" / >
        <
        label
        for = "DescProd" > Descripción del producto < /label> < /
        div > <
        /div> <
        div className = "TextToSearch" >
        <
        label
        for = "text" > < /label> <
        input type = "text"
        id = "search-text"
        name = "text"
        placeholder = "Producto a buscar" / >
        <
        div className = "lupa" >
        <
        img src = "lupa.png"
        alt = "" / >
        <
        /div> <
        /div> <
        /div> <
        /div> <
        div >
        <
        table >
        <
        thead >
        <
        tr >
        <
        th > ID Producto < /th>  <
        th > Descripción del producto < /th> <
        th > Valor unitario < /th> <
        th > Estado < /th> <
        /tr> <
        /thead> {
            (prods || []).map((item, index) => {
                return <FillTable
                idProducto = { item.idProducto }
                descrProducto = { item.descrProducto }
                valorUnitario = { item.valorUnitario }
                available = { item.available }
                /> ;
            })
        } <
        /table> <
        /div> <
        /form>
    )
}
export default ListProd;