const ListUsuario = () => {
    return (
        <form class="Data">
            <div class="AddLookProd">
                <div id="AddProd">
                    <a href = {' /EditUsuario '} class="btn_new">Crear Usuario</a>
                </div>
            </div>
            <table>
                <tr>
                <th>ID Usuario</th>
                <th>Nombre</th>
                <th>Rol</th>
                <th>Estado de Usuario</th>
                <th>Acciones</th>
            </tr>
            <tr>
                <td>cz-256</td>
                <td>Camilo Zapata</td>
                <td>Administrador</td>
                <td>Autorizado</td>
                <td>
                    <a class="link_edit" href="#">Editar</a>
                    <a class="link_delete" href="#">Eliminar</a>
                </td>
            </tr>
            <tr>
                <td>sv-256</td>
                <td>Santiago Martínez</td>
                <td>Vendedor</td>
                <td>Autorizado</td>
                <td>
                    <a class="link_edit" href="#">Editar</a>
                    <a class="link_delete" href="#">Eliminar</a>
                </td>
            </tr>
            <tr>
                <td>lz-256</td>
                <td>Laura Cadavid</td>
                <td>Vendedor</td>
                <td>Autorizado</td>
                <td>
                    <a class="link_edit" href="#">Editar</a>
                    <a class="link_delete" href="#">Eliminar</a>
                </td>
            </tr>
            <tr>
                <td>sl-256</td>
                <td>Sofia Pérez</td>
                <td>Administrador</td>
                <td>Autorizado</td>
                <td>
                    <a class="link_edit" href="#">Editar</a>
                    <a class="link_delete" href="#">Eliminar</a>
                </td>
            </tr>
            </table> 
        </form>
    )
}
export default ListUsuario;