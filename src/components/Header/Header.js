import { Link } from 'react-router-dom';

const Header = () => {
    return ( <
        section className = "header" >
        <
        div className = "logo" >
        <
        img src = "LogoSC.png"
        alt = "" / > <
        /div > <
        div className = "menu" >
        <
        Link className = { 'button' }
        to = { '/' } > Ventas < /Link> <
        Link className = { 'button' }
        to = { '/ListProd' } > Productos < /Link> <
        Link className = { 'button' }
        to = { '/' } > Usuarios < /Link> < /
        div > <
        /section> 
    )
}

export default Header;