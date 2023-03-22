  <div class="pedido-container oculto" id="pedido-container">
    
      <div id="btn-ver-pedido" class="btn-ver-pedido btn-ver-cerrar">
        Mi Pedido <span id="unidades-totales"></span>
        <div class="btn-cerrar"><i class="fas fa-times"></i></div>
      </div>

    <div class="pedido-content">
      <div id="tabla-pedido-container"></div>
      <div id="costo-total" class="costo-total"></div>
      <form class="form-pedido" action="gracias-pedido.php" method="POST">
        <!-- ++++++++++++++++++++++++++++ -->
        <p class="aviso">Llena tus datos para ordenar este pedido.</p>
        <textarea type="hidden" name="input-tabla" id="input-tabla" class="hidden">
          <?php if(isset($_COOKIE["pedido"])){ echo $_COOKIE["pedido"];}?>   
        </textarea>    
        <?php
          if(isset($_COOKIE["total"])){ 
            $totalCookie = $_COOKIE["total"];
          }
          echo '<input type="hidden" name="total" id="total" value="' . $totalCookie . '">';        
        ?>
      <div class="row">
        <div class="col-12">
          <input type="text" name="nombre" placeholder="Nombre" required>
        </div>
        <div class="col-12">
          <input type="text" name="telefono" placeholder="Teléfono Celular (10 dígitos)" required>
        </div>
        
        <div class="col-12">
          <input type="email" name="email" placeholder="Correo Electrónico" required>
        </div>
        <div class="col-12">
            <select name="estado">
              <option value="" disabled selected>Estado</option>
              <option>Aguascalientes</option>
              <option>Baja California</option>
              <option>Baja California Sur</option>
              <option>Campeche</option>
              <option>Coahuila de Zaragoza</option>
              <option>Colima</option>
              <option>Chiapas</option>
              <option>Chihuahua</option>
              <option>Distrito Federal</option>
              <option>Durango</option>
              <option>Guanajuato</option>
              <option>Guerrero</option>
              <option>Hidalgo</option>
              <option>Jalisco</option>
              <option>México</option>
              <option>Michoacán de Ocampo</option>
              <option>Morelos</option>
              <option>Nayarit</option>
              <option>Nuevo León</option>
              <option>Oaxaca</option>
              <option>Puebla</option>
              <option>Querétaro</option>
              <option>Quintana Roo</option>
              <option>San Luis Potosí</option>
              <option>Sinaloa</option>
              <option>Sonora</option>
              <option>Tabasco</option>
              <option>Tamaulipas</option>
              <option>Tlaxcala</option>
              <option>Veracruz de Ignacio de la Llave</option>
              <option>Yucatán</option>
              <option>Zacatecas</option>
            </select>
        </div>
        <div class="col-12">
          <input type="number" name="cp" placeholder="Código Postal" required>
        </div>
        <div class="col-12">
          <input type="number" name="captcha" placeholder="5+5" required>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <input type="submit" value="Enviar pedido">
        </div>
      </div>
    </form>
  </div>
</div>


