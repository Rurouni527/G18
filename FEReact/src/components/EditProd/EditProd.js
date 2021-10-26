import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { httpPatch, httpGet, httpPost } from './../utils/fetch';
import './../App/App.css';

const EditProd = (props) => {
    const { pathname } = window.location;
    const isForEdit = !pathname.includes('create');

    const params = useParams();

    const [valorIdProd, cambiarValorIdProd] = useState('');
    const [valorDescr, cambiarValorDescr] = useState('');
    const [valorPrecio, cambiarValorPrecio] = useState('0.00');
    const [valorAval, cambiarValorAval] = useState(false);

    useEffect(() => {
        if (!params.id && isForEdit) {
            window.location.href = '/create';
            return;
        }

        const getProdData = async() => {
            const prodData = await httpGet(`${process.env.REACT_APP_BACKEND_URL}/scprod/${params.id}`);
            if (prodData) {
                const prodFound = prodData[0];
                if (prodFound) {
                    cambiarValorIdProd(prodFound.idProducto);
                    cambiarValorDescr(prodFound.descrProducto);
                    cambiarValorPrecio(prodFound.valorUnitario);
                    cambiarValorAval(prodFound.available);
                    //fileNamePhoto
                }
            }
        };

        getProdData();
    }, [isForEdit, params.id]);

    const saveData = async() => {
        if (valorPrecio <= 0) {
            alert("El precio debe ser mayor a cero.");
            return;
        };

        if (!valorDescr || valorDescr.length === 0) {
            alert("La descripción no puede quedar vacía.");
            return;
        };

        const prodObject = {
            idProducto: valorIdProd,
            descrProducto: valorDescr,
            fileNamePhoto: "archivofoto.png",
            valorUnitario: valorPrecio,
            available: valorAval === "nodisponible" ? false : true
        };

        if (isForEdit) {
            const updatedProd = await httpPatch(`${process.env.REACT_APP_BACKEND_URL}/scprod/${params.id}`, { body: JSON.stringify(prodObject), });

            if (updatedProd[0].idProducto) {
                alert("Producto fue guardado.");
            } else {
                alert("Producto NO fue guardado.");
            }
        } else {
            const createdProd = await httpPost(`${process.env.REACT_APP_BACKEND_URL}/scprod`, { body: JSON.stringify(prodObject), });

            if (createdProd._id) {
                alert("Producto fue guardado.");
            } else {
                alert("Producto NO fue guardado.");
            }
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
        value = { valorIdProd }
        onChange = {
            (event) => { cambiarValorIdProd(event.target.value) }
        }
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
        value = { valorDescr }
        onChange = {
            (event) => { cambiarValorDescr(event.target.value) }
        }
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
        value = { valorPrecio }
        onChange = {
            (event) => { cambiarValorPrecio(event.target.value) }
        }
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
        id = "Estado"
        onChange = {
            (event) => { cambiarValorAval(event.target.value) }
        } >
        <
        option value = "nodisponible"
        selected = { `${valorAval}` === "true" ? "selected" : "" } > No disponible < /option> <
        option value = "disponible"
        selected = { `${valorAval}` === "true" ? "selected" : "" } > Disponible < /option> < /
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