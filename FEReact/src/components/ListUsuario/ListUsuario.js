import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { httpGet } from './../utils/fetch';
import { getToken } from './../utils/getToken';
import FillUTable from './../FillUTable/FillUTable';

const ListUsuario = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const token = getToken();
        if (!token) {
            window.location.href = '/'; // redirecciona a la página principal
            return;
        }

        const getUsersData = async() => {
            const usersData = await httpGet(`${process.env.REACT_APP_BACKEND_URL}/users`);
            setUsers(usersData);
        };

        getUsersData();
    }, []);

    return ( <
        form class = "Data" >
        <
        div class = "AddLookProd" >
        <
        div id = "AddProd" >
        <
        Link className = { 'button' }
        to = { 'createUser' } > Agregar un nuevo usuario < /Link> < /
        div > <
        /div> <
        table >
        <
        thead >
        <
        tr >
        <
        th > Nombre < /th> <
        th > Email < /th> <
        th > Rol < /th> < /
        tr > <
        /thead> <
        tbody > {
            (users || []).map((item, index) => {
                return <FillUTable
                name = { item.name }
                email = { item.email }
                role = { item.role }
                /> ;
            })
        } < /tbody>  < /
        table > < /
        form >
    )
}
export default ListUsuario;