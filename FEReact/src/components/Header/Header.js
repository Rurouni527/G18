import {Link} from "react-router-dom"
const Header = () => {
    return (
        <div class="nav">
            <section class="header">
                <div class="logo">
                    <img src="https://i.imgur.com/ro3yYEW.jpg" alt =""></img>
                </div>
                <div class="menu">
                <form>
                    <Link to="/VentasOk">
                        <button>Ventas </button> 
                    </Link>
                    <button>Productos</button>
                    <button>Usuarios</button>
                </form>
                </div>
            </section>
        </div>
    )
}

export default Header;
