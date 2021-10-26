const FillTable = (props) => {

    return ( <
        tr >
        <
        td > { `${props.idProducto}` } < /td > <
        td > < a href = { `/edit/${props.idProducto}` } > { `${props.descrProducto}` } < /a> < /td > <
        td > { `${props.valorUnitario}` } < /td> <
        td > { `${props.available}` === 'true' ? 'Disponible' : 'No disponible' } < /td> < /
        tr >
    );
}

export default FillTable;