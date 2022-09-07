<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sueño entre nubes | KIT | Corazolana</title>
        <link rel="shortcut icon" type="image/png" href="favicon.png">
        
        <!-- OGG -->
        <meta property="og:url"         content="https://www.corazolana.com" />
        <meta property="og:type"        content="website" />
        <meta property="og:title"       content="Corazolana | Instinto Lanero" />
        <meta property="og:site_name"   content="Corazolana" />
        <meta property="og:description" content="Tienda de suministros para crochet" />
        <meta property="og:image"       content="https://www.corazolana.com/images/og_thumbnail.jpg" />
        <meta itemprop="thumbnailUrl"   content="https://www.corazolana.com/images/og_thumbnail.jpg">
        <!-- Incluye fuentes -->
        <!-- AMPLITUD Reproductor
        <link rel="stylesheet" type="text/css" href="vendor/css/amplitud.css">
        <link href="https://fonts.googleapis.com/css?family=Lato:400,400i" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;800&display=swap" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/amplitudejs@latest/dist/amplitude.min.js"></script>
        -->
        <!-- BOOTSTRAP, WOW, MAIN -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="vendor/css/animate.css">
        <link rel="stylesheet" type="text/css" href="css/main.css?v=14092020">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;800&display=swap" rel="stylesheet">
    </head>
    <body>

    <?php 
        // toma la hora en formato de 24 horas
        $hora =  date('G');
        
        // rango de las 6 de la mañana a las 7 de la noche
        if( $hora > 5 && $hora < 20 ){
          include 'includes/portada-dia.php';
        }else{
          include 'includes/portada-noche.php';
        }
    ?>

    <section class="notaContainer">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="images/nina_dormida.png" class="img-nina wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0s"> 
          </div>
          <div class="col-md-4">
            <div class="txt-flex">
              <p>Dormir es una actividad necesaria para <strong>restablecer el equilibrio físico y psicológico</strong>. El número de horas para un descanso adecuado oscila entre 7 u 8 horas aunque estas cifras dependen de cada persona.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ventajas">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="text-center wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0s">Un descanso adecuado nos permite obtener:</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-12">
            <div class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
              <img src="images/icon-cerebro.png" class="img-center">
              <p class="text-center">La energía que necesitamos en el día a día.</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">     
            <div class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">    
              <img src="images/icon-rayo.png" class="img-center">
              <p class="text-center">Mejora nuestra atención y memoria.</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="wow animated fadeInUp" data-wow-duration="2s" data-wow-delay="0.9s">
              <img src="images/icon-rendimiento.png" class="img-center">
              <p class="text-center">Mejor rendimiento durante el día.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p class="text-center txt-pie">Hacerlo de forma inadecuada tiene efectos para nuestra de salud a corto y a largo plazo.</p>
          </div>
        </div>
      </div>
    </section>
  
    <section class="beneficios">
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-sm-12">
            <h3 class="wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0s"><span>5</span> Beneficios de dormir con antifaz</h3>
            <div id="accordion">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Tapa toda la luz. 
                    </button>
                  </h5>
                </div>
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div class="card-body">
                    La luz, y sobre todo la luz solar, funciona en el organismo como un despertador natural. Si los ojos captan la luz, estos mandan una señal al cerebro para activarlo y despertarlo.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Ayuda a crear melatonina. 
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div class="card-body">
                    La melatonina es una hormona que produce nuestro cuerpo de manera natural y que ayuda a controlar los ciclos del sueño o ritmos circadianos. La luz puede arruinar la creación de la melatonina.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Te ayudará a relajarte. 
                    </button>
                  </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div class="card-body">
                    Al colocártelo te obligas a cerrar los ojos y a mantener los párpados cerrados. De esta manera volver a abrirlos será mucho más complicado si no te quitas el antifaz. Así puedes centrarte en tus propios pensamientos y a relajarte, bloqueando cualquier tipo de estímulo visual.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingFour">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                      Ideal si compartes dormitorio.  
                    </button>
                  </h5>
                </div>
                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                  <div class="card-body">
                    Si duermes con tu pareja o compartes habitación con otra persona, el antifaz puede ser tu gran aliado. Es muy difícil que los ciclos y fases del sueño de ambos estén “sincronizados”. Seguro que alguno tiene el sueño más ligero que el otro, se levanta por las noches o simplemente tiene que despertarse antes por diferencias de horarios.
                  </div>
                </div>
              </div>
              <div class="card g">
                  <div class="card-header" id="headingFive">
                    <h5 class="mb-0">
                      <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                        Ayuda a reducir las ojeras.  
                      </button>
                    </h5>
                  </div>
                  <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                    <div class="card-body">
                      Dormir con antifaz puede ayudarte a reducir las bolsas y ojeras, ya que mejora la circulación de esta zona. La piel del contorno de los ojos es muy sensible, fina y delicada. El antifaz la protegerá de los ojos por las noches, y ayudará a activar la circulación de la sangre.
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 col-sm-12">
            <div class="flex--center-center">
              <img src="images/5beneficios.png" class="img-center img-accordion wow animated fadeInRight" data-wow-duration="2s" data-wow-delay="0.5s">
            </div>  
          </div>
        </div>
    </section>

    <section class="no-padding">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <img src="images/logo_kitnube.svg" class="logo-kit-nubes wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0s">
          </div>
        </div>
      </div>
    </section>

    <section class="kit-nubes">
      <div class="container">
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-8">
            <p>
              Kit “Sueños entre nubes”, es un patrón muy <strong>sencillo e ideal si vas iniciando</strong> en este camino de tejer a crochet, también es para las que ya dominan esta técnica y gustan de disfrutar y relajarse con patrones sencillos y bonitos.
            </p>
            <p>
              El kit tiene la cantidad de material que necesitas para tejer tu antifaz de nube, lo puedes realizar en tres colores diferentes:
            </p>

            <ul class="lista-antifaz">
              <li class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0s"><img src="images/antifaz_azulmarino.png"></li>
              <li class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s"><img src="images/antifaz_blanco.png"></li>
              <li class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s"><img src="images/antifaz_azulbebe.png"></li>
            </ul>
            
            <h3>¿Qué contiene el kit?</h3>
            <ul class="lista-materiales">
              <li>1 ovillo de Algodón reciclado (color de la nube que hayas elegido)</li>
              <li>Hilaza de algodón color coral para mejillas</li>
              <li>Hilaza de algodón color negro o blanco para las pestañas (depende del color que elijas la nube)</li>
              <li>Base de antifaz</li>
              <li>Hilo y aguja para unir tejido a base de antifaz</li>
            </ul>

            <p>* No incluye gancho (se sugiere usar el de 3 mm)</p>

          </div>
        </div>
      </div>
      <div class="layer-cajas wow animated slideInLeft" data-wow-duration="1s" data-wow-delay="0s"></div>
    </section>

    <section class="lo-quiero">
      <div class="container">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-10">
            <div class="btn-txt-container">
              <div class="btn-container">
                <!--a href="suscribete.php" class="big-btn big-btn-red wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0s" target="_blank">
                    <span>Quiero el patrón</span>
                    <span>Suscríbete y recibelo gratis</span>
                </a-->
                <a href="https://bazarama.com/producto/5f80af75c6572b29977f3fc2" target="_blank" class="big-btn big-btn-blue wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s" target="_blank">
                  <span>Quiero el kit</span>
                  <span>Todo lo que necesitas <br> para realizar tu antifaz</span>
                </a>
              </div>
              <p class="txt-center">
                Todos los patrones y vídeos están hechos con mucho AMOR, y son propiedad de Corazolana.<br>
                Son para el uso personal y no para comercializarlos.
              </p> 
            </div>       
          </div>
        </div>
      </div>
    </section>
              
    <footer>
      <div class="logo-corazolana">
        <a href="https://www.corazolana.com" target="_blank" alt="Enlace a la tienda oficial Corazolana">
          <img src="images/logo_corazolana.svg" class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0s">
        </a>
      </div>
      <ul class="redes-sociales">
        <li><a href="https://www.instagram.com/corazolana/" class="btn-instagram" target="_blank"><img src="images/ico_instagram.svg" class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s"></a></li>
        <li><a href="https://www.facebook.com/Corazolana/" class="btn-facebook" target="_blank"><img src="images/ico_facebook.svg" class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s"></a></li>
        <li><a href="https://wa.me/525585808076?text=¡Hola!"" class="btn-whatsapp" target="_blank"><img src="images/ico_whatsapp.svg" class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.9s"></a></li>
      </ul>
      <div class="creado-por">
          <div>CORAZOLANA © 2020</div>
          <div class="separador"></div>
          <div><a href="https://www.somnum.net" target="_blank" >Desarrollado por SOMNUM</a></div>
      </div>
    </footer>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    
    <!--script src="vendor/js/amplitud.js"></script-->
    <script src="js/main.js?v=14092020"></script>

    <script src="vendor/js/wow.js"></script>
    <script>
      new WOW().init();
    </script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-129146402-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-129146402-1');
    </script>  
    
</body>
</html>
