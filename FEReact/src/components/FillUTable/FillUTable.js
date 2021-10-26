const FillUTable = (props) => {

    return ( <
        tr >
        <
        td > { `${props.name}` } < /td > <
        td > { `${props.email}` } < /td> <
        td > { `${props.role}` } < /td> < /
        tr >
    );
}

export default FillUTable;