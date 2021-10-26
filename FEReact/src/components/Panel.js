import React from "react";

const Panel = () => {
    return (
        <div className="App">
            <basefont face="Arial"></basefont>
            <form action="#" target="" method="get" name="formDatosPersonales">
                <div id="divA">
                    <label for="nombre"><font color="#4682B4" face="Arial">Nombre</font><font color="FF0000">*</font> </label>
                    <input type="text" name="nombre" id="nombre" />
                    <label for="ID cliente"><font color="#4682B4" face="Arial">ID cliente</font><font color="FF0000">*</font> </label>
                    <input type="text" name="ID cliente" id="ID cliente" />
                </div>
                <div id="divB">
                    <label for="ID venta"><font color="#4682B4" face="Arial">ID venta</font><font color="FF0000">*</font></label>
                    <input type="text" name="ID venta" id="ID venta" />
                    <label for="ID vendedor"><font color="#4682B4" face="Arial">ID vendedor</font><font color="FF0000">*</font></label>
                    <input type="text" name="ID vendedor" id="ID vendedor" />

                    <label for="Fecha venta" ><font color="#4682B4" face="Arial">Fecha venta</font><font color="FF0000">*</font></label>
                    <select name="Fecha venta" id="Fecha venta">
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                    </select>
                    <select>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>
                    <select>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                    </select>
                </div>

            </form>
            <form action="#" target="" method="get" name="formDatosProducto">
                <fieldset>
                    <legend><font color="#4682B4" face="Arial" />Producto </legend>
                    <p>
                        <img src="camisasInformales.jpg" width="200" height="150" align="left" alt="" />
                    </p>
                    <input type="button" id="botonA" value="Agregar producto+" onclick="" />
                    <p><label>Referencia<input type="number" name="Referencia" /></label></p>
                    <div class="box">
                        <div class="container-1">
                            <span class="icon"><i class="fa fa-search"></i></span>
                            <input type="search" id="Productos" placeholder="Productos" />
                        </div>
                    </div>
                    <p>Cantidad <input type="number" name="number" value="1" /></p>
                    <p><label>Valor unitario<input type="number" name="Valor unitario" /></label></p>
                </fieldset>
            </form>
        </div>
    )
}

export default Panel;