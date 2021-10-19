const FillTable = (props) => {

    return ( <
        div >
        <
        tbody >
        <
        tr >
        <
        td > < a href = { `/edit/${props.idProducto}` } > { `${props.idProducto}` } < /a></td >
        <
        td > { `${props.descrProducto}` } < /td> <
        td > { `${props.valorUnitario}` } < /td> <
        td > { `${props.available}` === 'true' ? 'Disponible' : 'No disponible' } < /td> < /
        tr >
        <
        /tbody> < /
        div >
    );
}

export default FillTable;