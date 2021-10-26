import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { httpGet } from './../utils/fetch';
import { getToken } from './../utils/getToken';
import FillTable from './../FillTable/FillTable';

const ListProd = (props) => {
    const [prods, setProds] = useState([]);
    const [prodsFltr, setProdsFltr] = useState([]);
    const [filter, setFilter] = useState('');
    const [filterByIdProd, cambiarTipoFiltro] = useState(false);

    useMemo(() => {
        if (!filter)
            setProdsFltr(prods);

        setProdsFltr(
            prods.filter((curProdList) => {
                if (filterByIdProd)
                    return curProdList.idProducto.includes(filter);
                else
                    return curProdList.descrProducto.toLowerCase().includes(filter.toLowerCase());
            })
        );
    }, [filter, prods, filterByIdProd]);


    useEffect(() => {
        const token = getToken();
        if (!token) {
            window.location.href = '/'; // redirecciona a la página principal
            return;
        }

        const getProdsData = async() => {
            const prodsData = await httpGet(`${process.env.REACT_APP_BACKEND_URL}/scprod`);
            setProds(prodsData);
            setProdsFltr(prodsData);
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
        onClick = {
            () => {
                cambiarTipoFiltro(true);
            }
        }
        / > <
        label
        for = "IdProd" > ID Producto < /label> < /
        div > <
        div id = "SearchDescProd" >
        <
        input type = "radio"
        id = "DescProd"
        name = "SearchProd"
        value = "DescProd"
        onClick = {
            () => {
                cambiarTipoFiltro(false);
            }
        }
        / > <
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
        value = { filter }
        onChange = {
            (e) => {
                setFilter(e.target.value);
            }
        }
        placeholder = "Producto a buscar" / >
        <
        div className = "lupa" >
        <
        img src = "lupa.png"
        alt = "" / >
        <
        /div> < /
        div > <
        /div> < /
        div > <
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
        th > Estado < /th> < /
        tr > <
        /thead> <
        tbody > {
            (prodsFltr || []).map((item, index) => {
                return <FillTable
                idProducto = { item.idProducto }
                descrProducto = { item.descrProducto }
                valorUnitario = { item.valorUnitario }
                available = { item.available }
                /> ;
            })
        } < /tbody> < /
        table > <
        /div> < /
        form >
    )
}

export default ListProd;