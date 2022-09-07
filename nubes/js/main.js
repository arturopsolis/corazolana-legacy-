/* +++++++++++++++ DATA +++++++++++++++ */

var arrFrases = [
  {'frase':'Todos nuestros sueños se pueden hacen realidad si tenemos el coraje de perseguirlos.','autor':'Walt Disney',},
  {'frase':'Atrévete a soñar la vida que has soñado para ti mismo. Ve hacia adelante y haz que tus sueños se hagan realidad.','autor':'Ralph Waldo Emerson',},
  {'frase':'La mayor aventura que puedes pasar es vivir la vida de tus sueños.','autor':'Oprah Winfrey',},
  {'frase':'Todo gran sueño comienza con un gran soñador. ','autor':'Harriet Tubman',},
  {'frase':'Recuerda siempre: tienes en tu interior la fuerza, la paciencia y la pasión para alcanzar las estrellas y cambiar el mundo.','autor':'Harriet Tubman',},
  {'frase':'Para conseguir grandes cosas, debemos no sólo actuar, sino también soñar, no solo planear, sino también creer.','autor':'Anatole France',},
  {'frase':'Para hacer los sueños realidad, se necesita una gran cantidad de determinación, dedicación, autodisciplina y esfuerzo.','autor':'Jesse Owens',},
  {'frase':'Los sueños son necesarios para la vida.','autor':'Anais Nin',},
  {'frase':'Los sueños deben ser escuchados y aceptados, porque muchos de ellos se hacen realidad.','autor':'Paracelso',},
  {'frase':'Los sueños y pasiones almacenados en nuestro corazón son las llaves más importantes que pueden liberar nuestro potencial.','autor':'John C. Maxwell',},
  {'frase':'Los sueños son las respuestas actuales a las preguntas del mañana.','autor':'Edgar Cayce',},
  {'frase':'Si uno avanza confiadamente en la dirección de sus sueños y se esfuerza por vivir la vida que ha imaginado, se encontrará con un éxito inesperado.','autor':'Henry David Thoreau',},
  {'frase':'Una actitud positiva puede hacer sueños realidad.','autor':'David Bailey',},
  {'frase':'Ayuda a otros a conseguir sus sueños y conseguirás los tuyos.','autor':'Les Brown',},
  {'frase':'Confía en los sueños, porque en ellos se esconden la puerta a la eternidad.','autor':'Kahil Gibran',},
  {'frase':'La posibilidad de hacer un sueño realidad es lo que hace interesante a la vida.','autor':'Paulo Coelho',},
  {'frase':'No te dejes intimidar por los miedos en tu mente. Déjate llevar por los sueños en tu corazón.','autor':'Roy T. Bennett',},
  {'frase':'A veces los sueños que se hacen realidad son los sueños que ni siquiera sabías que tenías.','autor':'Alice Sebold',},
  {'frase':'Sigue tu corazón y tus sueños se harán realidad.','autor':'Anónimo',},
  {'frase':'Cree en tus sueños. Se te dieron por una razón.','autor':'Katina Mayer',},
  {'frase':'Mantente enfocado, persigue tus sueños y continúa avanzando hacia tus metas.','autor':'LL Cool J',},
  {'frase':'El futuro pertenece a aquellos que creen en la belleza de sus sueños.','autor':'Eleanor Roosevelt',},
  {'frase':'Atrévete a soñar la vida que has soñado para ti mismo. Ve hacia adelante y haz que tus sueños se hagan realidad.','autor':'Ralph Waldo Emerson',},
  {'frase':'No olvidemos nuestros sueños por falta de tiempo. Si de verdad se quiere, se puede.','autor':'Paulo Coelho',},
  {'frase':'Demasiados de nosotros no vivimos nuestros sueños porque vivimos nuestros miedos','autor':'Les Brown',},
  {'frase':'Un sueño es un deseo que hace tu corazón.','autor':'Walt Disney',},
  {'frase':'Tienes que soñar antes de que tus sueños se hagan realidad.','autor':'A. P. J. Abdul Kalam',},
  {'frase':'La realidad esta equivocada. Los sueños son reales.','autor':'Tupac Shakur',},
  {'frase':'Nunca te dan un sueño sin concederte también el poder de hacerlo real.','autor':'Richard Bach',},
  {'frase':'Para conseguir grandes cosas, debemos no solo actuar, sino también soñar, no solo planear, sino también creer.','autor':'Anatole France',},
  {'frase':'Cuando tienes un sueño tienes que agarrarlo y nunca dejarlo ir.','autor':'Carol Burnett',},
  {'frase':'Un soñador es el que solo puede encontrar su camino con la luz de la Luna y su castigo es que ve el amanecer antes que el resto del mundo.','autor':'Oscar Wilde',},
  {'frase':'Solo hay una cosa que hace a un sueño imposible de conseguir: el miedo al fracaso.','autor':'Paulo Coelho',},
  {'frase':'Ve a por ello ahora. El futuro no esta prometido a nadie.','autor':'Wayne W. Dyer',},
  {'frase':'Los sueños deben ser escuchados y aceptados, porque muchos de ellos se hacen realidad.','autor':'Paracelso',},
  {'frase':'Apunta alto, porque las estrellas están escondidas en tu alma. Sueña profundamente, porque cada sueño precede la meta.','autor':'Pamela Vaull Starr',},
  {'frase':'Cualquier sueño que merece la pena soñar, merece la pena el esfuerzo para hacerlo realidad.','autor':'Evan Gourley',},
  {'frase':'Para aquellos que se atreven a soñar, hay un mundo entero para ganar.','autor':'Dhirubhai Ambani',},
  {'frase':'Los sueños y pasiones almacenados en nuestro corazón son las llaves más importantes que pueden liberar nuestro potencial.','autor':'John C. Maxwell',},
  {'frase':'Si soñar poco es peligroso, la cura no es soñar menos, sino soñar más, soñar todo el tiempo.','autor':'Marcel Proust',},
  {'frase':'Los sueños son las respuestas actuales a las preguntas del mañana.','autor':'Edgar Cayce',},
  {'frase':'Sueño mi pintura y pinto mi sueño.','autor':'Vincent van Gogh',},
  {'frase':'Puede ser que los que hacen más, más sueñan.','autor':'Stephen Butler Leacock',},
  {'frase':'Un viaje de mil kilómetros debe comenzar con un solo paso.','autor':'Lao Tzu',},
  {'frase':'El ayer es la memoria de hoy y el mañana es el sueño de hoy.','autor':'Khalil Gibran',},
  {'frase':'He tenido sueños y he tenido pesadillas. Supero las pesadillas porque tengo sueños.','autor':'Jonas Salk',},
  {'frase':'Cuanto más puedes soñar, más puedes hacer.','autor':'Michael Korda',},
  {'frase':'El que mira fuera sueña, el que mira adentro se despierta.','autor':'Carl Jung',},
  {'frase':'La esperanza es un sueño despierto.','autor':'Aristóteles',},
  {'frase':'No te dejes paralizar por el miedo; es lo que impide a tanta gente vivir sus sueños.','autor':'Mark Fisher',},
  {'frase':'No sigas el camino, ve en su lugar donde no hay camino y deja huella.','autor':'Ralph Waldo Emerson',},
  {'frase':'Nunca te pongas límites, ve tras tus sueños, no tengas miedos de empujar tus límites.','autor':'Paula Radcliffe',},
  {'frase':'Hagamos nuestro futuro ahora, hagamos nuestros sueños del mañana realidad.','autor':'Malala Yousafzai',},
  {'frase':'Tienes que seguir empujando hacia esos sueños, no importa los contratiempos que sucedan.','autor':'Anthony Hamilton',},
  {'frase':'A veces, los únicos realistas son los soñadores.','autor':'Paul Wellstone',},
  {'frase':'Los grandes sueños crean la magia que guían las almas de las personas a la grandeza.','autor':'Bill McCartney',},
  {'frase':'Una actitud positiva puede hacer sueños realidad.','autor':'David Bailey',},
  {'frase':'Nuestra vida es más real cuando estamos en sueños despiertos.','autor':'Henry David Thoreau',},
  {'frase':'No cumplir tus sueños serán una perdida para el mundo, porque el mundo necesita el don de todo el mundo.','autor':'Barbara Sher',},
  {'frase':'Acaricia tus visión y sueños, ya que son los hijos de tu alma, las huellas de tus logros.','autor':'Napoleon Hill',},
  {'frase':'El compromiso lleva a la acción. La acción te acerca a tus sueños.','autor':'Marcia Wieder',},
  {'frase':'Tan pronto como comiences a perseguir un sueño, tu vida despierta y todo tiene significado.','autor':'Barbara Sher',},
  {'frase':'Se necesita mucho coraje para mostrar tus sueños a alguien más.','autor':'Erma Bombeck',},
  {'frase':'Ten el coraje de perseguir tus sueños. Es el primer paso para llegar a tu destino.','autor':'Nikita Koloff',},
  {'frase':'Prefiero los sueños del futuro que la historia del pasado.','autor':'Patrick Henry',},
  {'frase':'Los sueños crecen si tú creces.','autor':'Zig Ziglar',},
  {'frase':'Hay una gran cantidad de sangre, sudor y coraje tras los sueños alcanzados y éxitos.','autor':'Paul Bryant',},
  {'frase':'Dentro de nuestros sueños y aspiraciones encontramos nuestras oportunidades.','autor':'Sugar Ray Leonard',},
  {'frase':'Confía en los sueños, porque en ellos se esconden la puerta a la eternidad.','autor':'Kahil Gibran',},
  {'frase':'Nada sucede al menos que tengas primero un sueño.','autor':'Carl Sandburg',},
  {'frase':'No hay nada como un sueño para crear el futuro.','autor':'Victor Hugo',},
  {'frase':'El deseo se transforma en impulso cuando el sueño crea una pasión para actuar.','autor':'Dr. Robert Anthony',},
  {'frase':'No existe ningún sueño que no puedas volver realidad, si aprendes a usar la fuerza creativa.','autor':'Robert Collier',},
  {'frase':'Sueño. A veces creo que es la única cosa correcta que hago.','autor':'Haruki Murakami',},
  {'frase':'La posibilidad de hacer un sueño realidad es lo que hace interesante a la vida.','autor':'Paulo Coelho',},
  {'frase':'Un sueño que sueñas solo, es solo un sueño. Un sueño que sueñas con alguien más, es una realidad.','autor':'John Lennon',},
  {'frase':'Los sueños son las piedras de toque de nuestro carácter.','autor':'Henry David Thoreau',},
  {'frase':'No te dejes intimidar por los miedos en tu mente. Déjate llevar por los sueños en tu corazón.','autor':'Roy T. Bennett',},
  {'frase':'Sigue tu corazón y tus sueños se harán realidad.','autor':'Autor desconocido',},
];

/* +++++++++++++++ FUNCIONES +++++++++++++++ */

const frasesRandom = () => {
  let randomNum   = Math.floor(Math.random() * 10 );
  let frase       = arrFrases[randomNum]['frase'];
  let autor       = arrFrases[randomNum]['autor'];
  let arr  = [frase, autor];
  return arr;
}

function tiempo(){
  var date          = new Date();
  var horas         = date.getHours();
  var minutos       = date.getMinutes();  

  if( minutos < 10 ){ minutos = "0" + minutos }

  var hora          = horas + ":" + minutos ; 
  divDia.innerHTML  = semana[date.getDay()];
  divHora.innerHTML = hora ;
}

/* +++++++++++++++ EJECUCIÓN +++++++++++++++++++++ */

 let divFrase        = document.getElementById("frase");
 let divAutor        = document.getElementById("autor");
 let arrFraseRandom  = frasesRandom();
 divFrase.innerHTML  = arrFraseRandom[0];
 divAutor.innerHTML  = "-" + arrFraseRandom[1];

/* ++++++++++++++++ ANIMACIÓN SOL / LUNA ++++++++++++++++ */

let amigurumiSolLuna = document.getElementById("amigurumi-principal");
amigurumiSolLuna.addEventListener("webkitAnimationEnd", function(){
  amigurumiSolLuna.style.animation = "balanceoAnim 4s ease infinite alternate";
});


let arrEstrellas = document.querySelectorAll(".estrella");
let animDuration = 2;
arrEstrellas.forEach(function(estrella){
  estrella.addEventListener("webkitAnimationEnd", function(){
    console.log("debe emepzar animación")
    estrella.style.animation = "popAnimAfter 1s ease-in-out infinite alternate 0s";
    animDuration += 0.2;
    estrella.style.animationDuration = animDuration + "s";
  });
});


