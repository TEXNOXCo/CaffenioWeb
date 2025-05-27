    const carrito = [];

  function agregarAlCarrito(boton) {
    const contenedor = boton.closest(".producto");

    const tipoBebidaSelect = contenedor.querySelector(".tipoBebida");
    const tamañoSelect = contenedor.querySelector(".tamañoBebida");
    const tipoCafeSelect = contenedor.querySelector(".tipoCafe");
    const tipoLecheSelect = contenedor.querySelector(".tipoLeche");

    const tipoBebida = tipoBebidaSelect.value;
    const tamaño = tamañoSelect.value;
    const tipoCafe = tipoCafeSelect.value;
    const tipoLeche = tipoLecheSelect.value;

    const precioBase = parseFloat(tipoBebidaSelect.selectedOptions[0].dataset.precio);
    const precioTamaño = parseFloat(tamañoSelect.selectedOptions[0].dataset.precio);
    const precioCafe = parseFloat(tipoCafeSelect.selectedOptions[0].dataset.precio);
    const precioLeche = parseFloat(tipoLecheSelect.selectedOptions[0].dataset.precio);

    const precioFinal = precioBase + precioTamaño + precioCafe + precioLeche;

    const producto = {
      nombre: tipoBebida,
      tamaño,
      tipoCafe,
      tipoLeche,
      precio: precioFinal
    };

    carrito.push(producto);
    actualizarCarrito();
  }

function actualizarCarrito() {
  const lista = document.getElementById("listaCarrito");
  const totalEl = document.getElementById("totalCarrito");
  lista.innerHTML = "";

  let total = 0;

  carrito.forEach((item, index) => {
    const li = document.createElement("li");

    // Descripción del producto
    let descripcion = `${item.nombre}`;

    if (item.tipoBebida) {
      descripcion += ` — Tipo: ${item.tipoBebida}, Tamaño: ${item.tamaño}, Café: ${item.tipoCafe}, Leche: ${item.tipoLeche}`;
    } else if (item.cobertura) {
      descripcion += ` — Tamaño: ${item.tamaño}, Cobertura: ${item.cobertura}`;
    }

    // Mostrar descripción y botón eliminar
    li.innerHTML = `
      ${descripcion} — $${item.precio.toFixed(2)}
      <button onclick="eliminarDelCarrito(${index})" style="margin-left:10px; background:#e0e0e0; color:#333; border:none; padding:4px 8px; cursor:pointer;">Eliminar</button>`;

    lista.appendChild(li);
    total += item.precio;
  });

  totalEl.textContent = total.toFixed(2);
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}


  
   function agregarPostre(boton) {
    const contenedor = boton.closest(".producto");

    const tipoPostreSelect = contenedor.querySelector(".tipoPostre");
    const tamañoSelect = contenedor.querySelector(".tamañoPostre");
    const coberturaSelect = contenedor.querySelector(".coberturaPostre");

    const tipoPostre = tipoPostreSelect.value;
    const tamaño = tamañoSelect.value;
    const cobertura = coberturaSelect.value;

    const precioBase = parseFloat(tipoPostreSelect.selectedOptions[0].dataset.precio);
    const precioTamaño = parseFloat(tamañoSelect.selectedOptions[0].dataset.precio);
    const precioCobertura = parseFloat(coberturaSelect.selectedOptions[0].dataset.precio);

    const precioFinal = precioBase + precioTamaño + precioCobertura;

    const producto = {
      nombre: tipoPostre,
      tamaño,
      cobertura,
      precio: precioFinal
    };

    carrito.push(producto);
    actualizarCarrito();
  }

  function agregarCafeGranoAlCarrito(btn) {
  const contenedor = btn.closest('.producto');

  const tipoGrano = contenedor.querySelector('.tipoGrano');
  const presentacion = contenedor.querySelector('.presentacionGrano');

  const precioBase = parseFloat(tipoGrano.selectedOptions[0].dataset.precio || 0);
  const precioExtra = parseFloat(presentacion.selectedOptions[0].dataset.extra || 0);

  const total = precioBase + precioExtra;

  const item = {
    nombre: contenedor.dataset.producto,
    tipoGrano: tipoGrano.value,
    presentacion: presentacion.value,
    precio: total
  };

  carrito.push(item);
  actualizarCarrito();
}

function agregarAlimentoAlCarrito(btn) {
  const contenedor = btn.closest('.producto');

  const tipoAlimento = contenedor.querySelector('.tipoAlimento');
  const acompanamiento = contenedor.querySelector('.acompanamiento');

  const precioBase = parseFloat(tipoAlimento.selectedOptions[0].dataset.precio || 0);
  const precioExtra = parseFloat(acompanamiento.selectedOptions[0].dataset.extra || 0);

  const total = precioBase + precioExtra;

  const item = {
    nombre: contenedor.dataset.producto,
    tipo: tipoAlimento.value,
    acompanamiento: acompanamiento.value,
    precio: total
  };

  carrito.push(item);
  actualizarCarrito();
}

function agregarComboPredeterminado(bebida, complemento, precio) {
  const combo = {
    nombre: "Combo",
    bebida: bebida,
    complemento: complemento,
    precio: precio
  };

  carrito.push(combo);
  actualizarCarrito();
}

document.addEventListener("DOMContentLoaded", function () {
  const btnPagar = document.getElementById("btnPagar");

  btnPagar.addEventListener("click", function () {
    const total = document.getElementById("totalCarrito").innerText;

    if (parseFloat(total) === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    // Aquí podrías enviar los datos al servidor o mostrar un resumen de compra
    alert("Gracias por tu compra. Total pagado: $" + total);

    // Vaciar carrito después de pagar
    document.getElementById("listaCarrito").innerHTML = "";
    document.getElementById("totalCarrito").innerText = "0.00";
  });
}); 