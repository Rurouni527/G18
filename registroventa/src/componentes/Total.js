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
        <a href="https://github.com/Rurouni527/G18/blob/feature/JuanD/FEReact/src/components/App/App.js"><button>Cancelar </button></a>  
        <a href="https://github.com/Rurouni527/G18/blob/feature/JuanD/FEReact/src/components/App/App.js"><button>Guardar </button></a> 
        </div>
        </div>
    )
}

export default Total;