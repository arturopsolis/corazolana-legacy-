<?php
  
  $ruta     = "https://www.corazolana.com";

  $nombre       = htmlspecialchars ($_POST["nombre"]);
  $estado       = htmlspecialchars ($_POST["estado"]);
  $cp           = htmlspecialchars ($_POST["cp"]);
  $telefono     = htmlspecialchars ($_POST["telefono"]);
  $email        = htmlspecialchars ($_POST["email"]);
  $total        = htmlspecialchars ($_POST["total"]);

  $tablaPedido  = $_POST["input-tabla"];
  //$tablaPedido  = str_replace('<td><button class="btn-delete-row">X</button></td>', "", $tablaPedido);
  //$tablaPedido  = str_replace('<th></th>', "", $tablaPedido);

  $total        = $_POST["total"];

  $recipients = array(
    "pedidos@corazolana.com", "arturopsolis@gmail.com", $email
  );
  
  $to     = implode(',', $recipients);
  
  $subject        = "Nuevo pedido del sitio Corazolana";
  $headers        = "MIME-Version: 1.0" . "\r\n";
  $headers       .= "Content-type:text/html;charset=UTF-8" . "\r\b";
  $headers       .= "From: Corazolana.com";

  $message       .= "<img src='" . $ruta . "/images/logo-corazolana-completo.png' style='display:block;position:relative;width:150px;margin:30px auto; text-transform: uppercase'/>";
  $message       .= "<p style='font-size: 22px; display:block;width:100%;max-width:600px;margin:15px auto;text-align:center;margin-bottom:30px'>";  
  $message       .=   "<strong>¡Hola " .$nombre ."!</strong>"; 
  $message       .= "</p>";
  $message       .= "<p style='font-size: 16px; display:block;width:100%;max-width:600px;margin:15px auto;text-align:left;margin-bottom:30px'>";  
  $message       .=   "Pronto nos pondremos en contacto contigo por Whatsapp o vía telefónica para confirmar tu pedido. "; 
  $message       .=   "<strong>Agradezco mucho tu preferencia.</strong>";
  $message       .=   "<br><br>";
  $message       .=   "Estado: "    . $estado     . "<br>";
  $message       .=   "Teléfono: "  . $telefono   . "<br>";
  $message       .=   "Email: "     . $email      . "<br>";
  $message       .=   "C.P.: "      . $cp         . "<br>";
  $message       .= "</p>";
  $message       .= "$tablaPedido";
  $message       .= "<p style='text-align:center;font-size:20px;'>";
  $message       .= "<strong>TOTAL: " . $total ."</strong></p>";
  $message       .= "<p style='font-size: 16px; display:block;width:100%;max-width:600px;margin:15px auto;text-align:center;margin-bottom:30px'>";  
  $message       .= "(Pedido sujeto a existencias) <br> Te mando un gran abrazo.";
  $message       .= "</p>";
  
  mail($to,utf8_decode($subject),utf8_decode($message),$headers);

?>

<?php include "includes/head.php" ?>
<?php include "includes/header.php" ?>

<div class="container">
  <div class="space-xs"></div>
    
    <img src="images/checkmark.png" class="check-icon" alt="check icon" />
    <h1 style="text-align:center">¡Gracias por elegirnos!</h1>
    <hr>

    <p class="text-center">
      <?php echo $nombre ?>, tu pedido está en proceso. 
      <br>
      <strong>
      Pronto me pondré en contacto contigo por Whatsapp para confirmar tu pedido. 
      </strong>
      <br>
      Hemos enviado una copia del pedido a tu correo 
      <?php echo "<a href='".$email."'>".$email."</a>" ?> .
    </p>

  <!-- ++++++++++++++++++++++++ -->
  <?php
    echo "<table cellpadding='10' border='1' style='margin:30px auto;text-align: center; border: 1px solid #f1f1f1;'>" . $tablaPedido . "</table>";

    echo "<p style='text-align:center;color:#000;font-size:18px;'><strong>TOTAL: " . $total . "</strong></p>";

  ?>
  <!-- ++++++++++++++++++++++++ -->
  <p class="text-center">
    (Pedido sujeto a existencias) <br>
    Te mando un gran abrazo.
  </p>
  <div class="space-lg"></div>

</div>

<!-- Borra las cookies depsues de enviar mail y mostrar pantalla de gracias -->
<script>
    Cookies.remove('pedido', { path: '' });
    Cookies.remove('total', { path: '' });
</script>


<?php include "includes/footer.php" ?>