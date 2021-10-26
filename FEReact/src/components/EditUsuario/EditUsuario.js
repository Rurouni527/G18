const EditUsuario = () => {
    return ( <
        form class = "Data" >
        <
        div class = "EditVarProd" >
        <
        div class = "Fields" >
        <
        div class = "usuario" >
        <
        label
        for = "usuario" > ID Usuario < /label> <
        input type = "text"
        id = "usuario"
        name = "usuario"
        placeholder = "ID usuario" / >
        <
        /div> <
        div class = "nombre" >
        <
        label
        for = "nombre" > Nombre Completo < /label> <
        input type = "text"
        id = "nombre"
        name = "nombre"
        placeholder = "Nombre completo" / >
        <
        /div> <
        div class = "rol" >
        <
        label
        for = "rol" > Rol de Usuario < /label> <
        select name = "rol"
        id = "Rol" >
        <
        option value = "administrador" > Administrador < /option> <
        option value = "vendedor" > Vendedor < /option> <
        /select> <
        /div> <
        div class = "estado" >
        <
        label
        for = "estado" > Estado de Usuario < /label> <
        select name = "estado"
        id = "estado" >
        <
        option value = "pendiente" > Pendiente < /option> <
        option value = "autorizado" > Autorizado < /option> <
        option value = "noautorizado" > No autorizado < /option> <
        /select> <
        /div> <
        /div> <
        /div>     <
        div class = "CancelGrabar" >
        <
        button > Guardar < /button> <
        /div> <
        div class = "CancelGrabar" >
        <
        /div> 

        <
        /form>
    )
}

export default EditUsuario;