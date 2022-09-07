const pedido = {
  articulos: [],
  cuantasUnidades() {
    let conteo = 0;
    for (let i = 0; i < this.articulos.length; i++) {
      conteo += this.articulos[i].unidades;
    }
    return conteo;
  },
  borrarRegistro(x) {
    this.articulos.splice(x, 1);
    refrescarTabla();
    refrescarTotal();
    notificarUnidades();
    igualarHiddenInputs();
  },
  total() {
    let result = this.articulos.reduce(function (contador, item) {
      return contador + item.precio;
    }, 0);
    return result;
  },
  totalMasIVA() {
    return Math.round(this.costoTotal() * 1.16);
  },
  tablaHTML() {
    let arr = this.articulos;
    let holderHTML = "";
    let tabla = document.createElement("div");

    tabla.className = "pedido";
    tabla.setAttribute("id", "pedido");

    for (let i = 0; i < arr.length; i++) {
      holderHTML += `<div class="item-producto">
                            <div class="row">
                                <div class="col-3">
                                    <img src="${
                                      arr[i].fotoSRC
                                    }" class="img-producto">
                                </div>
                                <div class="col-6" style="padding-left:0">
                                    <h3>${arr[i].nombreProducto}</h3>
                                    <h4>${arr[i].color}</h4>
                                    <p>${formatMoney(arr[i].precio)}</p>
                                </div>
                                <div class="col-2 no-padding">
                                    <p class="text-center">${
                                      arr[i].unidades
                                    }</p>
                                </div>
                                <div class="col-1 no-padding">
                                    <button class="btn-delete-row" onclick="pedido.borrarRegistro(${i})"><i class="far fa-trash-alt"></i></button></td>
                                </div>
                            </div>
                        </div>`;
    }
    tabla.innerHTML = holderHTML;
    return tabla;
  },
  tablaSTR() {
    let arr = this.articulos;
    let holderStr = "";

    holderStr += `<table cellpadding="10" border="1" style="margin:30px auto;text-align: left; border: 1px solid #f1f1f1;">
                        <tr>
                            <th style="text-align:center">Producto</th>
                            <th style="text-align:center">Color</th>
                            <th style="text-align:center">Unidades</th>
                            <th style="text-align:center">Precio</th>
                        </tr>`;

    for (let i = 0; i < arr.length; i++) {
      holderStr += `<tr>
                            <td style="text-align:left">${
                              arr[i].nombreProducto
                            }</td>
                            <td style="text-align:left">${arr[i].color}</td>
                            <td style="text-align:center">${
                              arr[i].unidades
                            }</td>
                            <td style="text-align:left">${formatMoney(
                              arr[i].precio
                            )}</td>
                        </tr>`;
    }
    holderStr += `</table>`;

    return holderStr;
  },
  formatMoney(num) {
    if (typeof num === "number") {
      return "$" + num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  unformatMoney(str) {
    let regex = /^\$/;
    let result = regex.test(str);
    if (result) {
      let newStr = str.replace(regex, "");
      newNum = parseFloat(newStr);
      return newNum;
    }
    return result;
  },
  date: new Date(),
};

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++ FUNCIONES +++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function formatMoney(num) {
  if (typeof num === "number") {
    return "$" + num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
function unformatMoney(str) {
  let regex = /^\$/;
  let result = regex.test(str);
  if (result) {
    let newStr = str.replace(regex, "");
    newNum = parseFloat(newStr);
    return newNum;
  }
  return result;
}
function igualarHiddenInputs() {
  let inputTabla = document.querySelector("textarea#input-tabla");
  let strTabla = pedido.tablaSTR();
  inputTabla.value = strTabla;
}
function setCookiePedido() {
  let newCookiePedido = JSON.stringify(pedido.articulos);
  Cookies.set("pedido", newCookiePedido, { expires: 3, path: "" });
}
function refrescarTabla() {
  let tablaPedido = document.getElementById("tabla-pedido-container");
  tablaPedido.innerHTML = "";
  tablaPedido.append(pedido.tablaHTML());
}
function refrescarTotal() {
  let costoTotal = document.getElementById("costo-total");
  let inputTotal = document.getElementById("total");
  let total = pedido.formatMoney(pedido.total());

  costoTotal.textContent = `Total: ${total} MXN`;
  inputTotal.value = total;
}
function notificarUnidades() {
  let divUnidades = document.getElementById("unidades-totales");
  divUnidades.textContent = pedido.cuantasUnidades();

  divUnidades.style.display = "block";
  divUnidades.style.animationName = "salta";

  // Despues de un segundo quita la animación
  setTimeout(function () {
    divUnidades.style.animationName = "none";
  }, 1000);
}
function notificacionProducto() {
  let nombreProducto = document.querySelector("#nombre-producto").textContent;
  let unidades = document.querySelector("select#unidades").value;
  let divNotificacion = document.getElementById("notificacion");
  let colorProducto;

  divNotificacion.textContent = `Se agregó ${unidades} ${nombreProducto}`;
  if (document.querySelector("#color-seleccionado") !== null) {
    colorProducto = document.querySelector("#color-seleccionado").textContent;
    if (colorProducto !== undefined) {
      divNotificacion.textContent += ` ${colorProducto}`;
    }
  }
}
function barraPedido() {
  if (pedido.cuantasUnidades() > 0) {
    document.getElementById("pedido-container").classList.remove("oculto");
    document.getElementById("btn-ver-pedido").classList.remove("oculto");
  }
}
function articuloExistente(nombre, color) {
  if (pedido.articulos.length !== 0) {
    for (let i = 0; i < pedido.articulos.length; i++) {
      if (
        nombre === pedido.articulos[i].nombreProducto &&
        color === pedido.articulos[i].color
      ) {
        return i;
      }
    }
  }
  return -1;
}
function agregarArticulo() {
  let nombreProducto = document.getElementById("nombre-producto").textContent;
  let color = "";
  let unidades = parseInt(document.querySelector("select#unidades").value);
  let precioUnitario = unformatMoney(
    document.querySelector("p#precio").innerHTML
  );
  let precio = unidades * precioUnitario;
  let fotoSRC = document.querySelector("#imagen-producto img").src;

  if (document.getElementById("color-seleccionado")) {
    color = document.getElementById("color-seleccionado").textContent;
  }

  let indiceArtExistente = articuloExistente(nombreProducto, color);
  if (indiceArtExistente == -1) {
    // Si NO existe en el pedido se agrega el nuevo articulo
    let newObj = {
      nombreProducto,
      color,
      unidades,
      precio,
      precioUnitario,
      precio,
      fotoSRC,
    };
    pedido.articulos.push(newObj);
  } else {
    // Si ya existe en el pedido se actualiza su información
    pedido.articulos[indiceArtExistente].precio += precio;
    pedido.articulos[indiceArtExistente].unidades += unidades;
  }

  notificacionProducto();
  refrescarTabla();
  refrescarTotal();
  notificarUnidades();
  barraPedido();
  igualarHiddenInputs();
  setCookiePedido();
}

// BOTÓN VER Y CERRAR PEDIDO
let btnVerCerrar = document.querySelectorAll(".btn-ver-cerrar");
let pedidoContainer = document.getElementById("pedido-container");
let btnVerPedido = document.getElementById("btn-ver-pedido");

btnVerCerrar.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    pedidoContainer.classList.toggle("active");
    btnVerPedido.classList.toggle("active");
  });
});
