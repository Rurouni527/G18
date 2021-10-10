import { Link } from 'react-router-dom';

const validatePrecio = () => {
    const datoPrecio = document.getElementById("Preciounitario").value;
}

const EditProd = () => {
    return ( <
        form className = "Data" >
        <
        div className = "ScreenName" >
        <
        p > Maestro de productos - Editar un producto < /p> < /
        div > <
        div className = "EditVarProd" >
        <
        div className = "Fields" >
        <
        div className = "IDproducto" >
        <
        label
        for = "IDproducto" > ID producto < /label> <
        input type = "text"
        id = "IDproducto"
        name = "IDproducto"
        placeholder = "ID producto" / >
        <
        /div> <
        div className = "Descproducto" >
        <
        label
        for = "txtDescproducto" > Descripción del producto < /label> <
        input type = "text"
        id = "txtDescproducto"
        name = "txtDescproducto"
        placeholder = "Descripción del producto" / >
        <
        /div> <
        div className = "Preciounitario" >
        <
        label
        for = "Preciounitario" > Precio unitario < /label> <
        input type = "number"
        id = "Preciounitario"
        name = "Preciounitario"
        placeholder = "0.00"
        min = "0"
        step = "0.01"
        pattern = "/^[0-9]*(\.?)[0-9]+$/." / >
        <
        /div> <
        div className = "Estado" >
        <
        label
        for = "Estado" > Estado < /label> <
        select name = "Estado"
        id = "Estado" >
        <
        option value = "nodisponible" > No disponible < /option> <
        option value = "disponible" > Disponible < /option> < /
        select > <
        /div> < /
        div > <
        div className = "ImgProd" >
        <
        div className = "LoadImg" >
        <
        input id = "filephoto"
        type = "file" / > < /
        div > <
        div className = "DisplImag" >
        <
        img src = "Camisa.jpg"
        className = "imagprod"
        alt = "" / >
        <
        /div>     < /
        div > <
        /div>     <
        div className = "CancelGrabar" >
        <
        button type = { 'button' }
        onClick = { validatePrecio } >
        Grabar < /button> <
        Link className = { 'button' }
        to = { '/ListProd' } > Volver al Maestro de productos < /Link> < /
        div > <
        /form>
    )
}

export default EditProd;