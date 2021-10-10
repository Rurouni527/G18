import { Link } from 'react-router-dom';

const ListProd = () => {
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
        to = { '/EditProd' } > Agregar un nuevo producto < /Link> < /
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
        /div> < /
        div > <
        /div> < /
        div > <
        table >
        <
        tr >
        <
        th > ID Producto < /th> <
        th > Descripción del producto < /th> <
        th > Valor unitario < /th> <
        th > Estado < /th> < /
        tr > <
        tr >
        <
        td > < Link className = { 'idCodeProd' }
        to = { '/EditProd' } > G18 - 1 < /Link>< /td > < td > Product A < /td > < td > 80.000 < /td > < td > Disponible < /td > < /
        tr > <
        tr >
        <
        td > < Link className = { 'idCodeProd' }
        to = { '/EditProd' } > G18 - 2 < /Link>< /td > < td > Product B < /td > < td > 120.000 < /td > < td > Disponible < /td > < /
        tr > <
        tr >
        <
        td > < Link className = { 'idCodeProd' }
        to = { '/EditProd' } > G18 - 3 < /Link>< /td > < td > Product C < /td > < td > 75.000 < /td > < td > Disponible < /td > < /
        tr > <
        tr >
        <
        td > < Link className = { 'idCodeProd' }
        to = { '/EditProd' } > G18 - 4 < /Link>< /td > < td > Product D < /td > < td > 50.000 < /td > < td > No disponible < /td > < /
        tr > < /
        table > <
        /form>
    )
}
export default ListProd;