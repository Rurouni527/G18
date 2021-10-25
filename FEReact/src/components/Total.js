import {Link} from "react-router-dom"
const Total = () => {
    return (
        <div class="total">
            <form class="formulario">
                <div for="" class ="container--flex">
                    <label class ="form__label">Precio </label>
                    <input type ="number" class ="form__input"></input>
                </div>

                <div class ="container--flex">
                    <label for="" class ="form__label">Cantidad</label>
                    <input type ="number" class ="form__input"></input>
                </div>

                <div class ="container--flex">
                    <label for="" class ="form__label">Total</label>
                    <input type ="number" class ="form__input"></input>
                </div>
            </form>
        <div class="botones2">
        <Link to="/VentasOk">
            <button>Volver al Maestro de Ventas </button> 
        </Link>
            <button>Guardar </button>
        </div>
        </div>
    )
}

export default Total;