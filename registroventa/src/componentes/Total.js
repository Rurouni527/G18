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
        <a href="https://www.youtube.com/"><button>Cancelar </button></a>  
        <a href="https://github.com/"><button>Guardar </button></a> 
        </div>
        </div>
    )
}

export default Total;