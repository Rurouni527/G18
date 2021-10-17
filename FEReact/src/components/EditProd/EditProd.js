import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { httpPatch, httpPost } from './../utils/fetch';
import './../App/App.css';
//import { httpGet, httpPatch, httpPost } from './../utils/fetch';

const EditProd = () => {
    const { pathname } = window.location;
    const isForEdit = !pathname.includes('create');

    if (isForEdit) {
        console.log('Es para edición');
    } else {
        console.log('Es para creación');
    }

    const saveData = async() => {
        const idProducto = document.getElementById("IDproducto");
        const dataDescr = document.getElementById("txtDescproducto");
        const dataPrecio = document.getElementById("Preciounitario");

        if (dataPrecio.value <= 0) {
            alert("El precio debe ser mayor a cero.");
            return;
        };

        if (!dataDescr.value || dataDescr.length === 0) {
            alert("La descripción no puede quedar vacía.");
            return;
        };

        const prodObject = {
            idProducto: idProducto.value,
            descrProducto: dataDescr.value,
            fileNamePhoto: "archivofoto.png",
            valorUnitario: dataPrecio.value,
            available: true
        };

        const createdProd = await httpPost(`${process.env.REACT_APP_BACKEND_URL}/scprod`, { body: JSON.stringify(prodObject), });

        if (createdProd._id) {
            alert("Producto fue guardado.");
        } else {
            alert("Producto NO fue guardado.");
        }
    }

    return ( <
        form className = "Data" >
        <
        div className = "ScreenName" >
        <
        p > Maestro de productos - Editar un producto < /p> </div > <
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
        select >
        <
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
        onClick = { saveData } >
        Guardar < /button> <
        Link className = { 'button' }
        to = { '/list' } > Volver al Maestro de productos < /Link> < /
        div > <
        /form>
    )
}

export default EditProd;