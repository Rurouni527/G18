
import {Link} from "react-router-dom"
const VentasOk = () => {
    return (
        <form class="Data">
            <div class="AddLookVenta">
                <div id="AddVenta">
                    <form method="get" action="Panel.js">
                    <Link to="/Panel">
                        <button>Registrar nueva venta</button>
                    </Link>
                    </form>
                </div>
                <div class="BuscVenta">
                
                        <div class="TextToSearch">
                            <input type="text" id="search-text" name="text" placeholder="Busque por id" />
                            <div class="lupa">
                            <form method="get" action="/VentasOk">
                                <button><img src="https://imgur.com/r4EIzVC.jpg" width="25" height="25" alt=""></img></button>
                                </form>
                            </div>
                        </div>
                        
                </div>
            </div>
            <table>
                <thead>
                <tr>
                <th>ID Venta</th><th>ID Cliente</th><th>ID Vendedor</th><th>Producto</th><th>Cantidad</th><th>Valor Total</th><th>Fecha de pago</th><th>Estado</th>
                </tr>
                </thead>
                <tr><td>G-18-0001</td><td>1010101010</td><td>1000000001</td><td>Camisas</td><td>10</td><td>350.000</td><td>15/03/2021</td><td>Entregado</td></tr>
                <tr><td>G-18-0002</td><td>1010101010</td><td>1000102001</td><td>Sudaderas</td><td>12</td><td>373.000</td><td>13/07/2021</td><td>Pendiente</td> </tr>
                <tr><td>G-18-0003</td><td>1010101010</td><td>1000010001</td><td>Pantalonetas</td><td>3</td><td>110.000</td><td>01/03/2021</td><td>En Proceso</td></tr>
                </table>
            <div class="EditarVenta">
            <form method="get" action="http://google.com">
                    <Link to="/Panel">
                        <button>Editar</button>
                    </Link>
                </form>
            </div>
        </form>
    )
}
export default VentasOk;
