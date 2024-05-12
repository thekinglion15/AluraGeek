import { obtenerProductos } from "./api.js";
import { crearProducto } from "./api.js";
import { eliminarProducto } from "./api.js";

document.addEventListener("DOMContentLoaded", async function() {
    try {
        const productos = await obtenerProductos();
        console.log("Lista de productos:", productos);
    } catch (error) {
        console.error("Error al obtener productos:", error);
    }
});

const nuevoProducto = {
    nombre: "Nuevo Producto",
    precio: 100,
    imagen: "ruta/de/la/imagen.jpg"
};

document.addEventListener("DOMContentLoaded", async function () {
    try {
        const productoCreado = await crearProducto(nuevoProducto);
        console.log("Producto creado:", productoCreado);
    } catch (error) {
        console.error("Error al crear el nuevo producto:", error);
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const contenedorProductos = document.querySelector(".productos");

  contenedorProductos.addEventListener("click", async function (event) {
    if (event.target.classList.contains("eliminar-btn")) {
      const id = event.target.dataset.id;
      try {
        const respuesta = await eliminarProducto(id);
        console.log("Producto eliminado:", respuesta);
        alert("Producto eliminado exitosamente.");
        // Puedes realizar otras acciones después de eliminar el producto, como actualizar la lista de productos en la página
      } catch (error) {
        console.error("Error al eliminar el producto:", error);
        alert("Error al eliminar el producto. Por favor, intenta nuevamente.");
      }
    }
  });
});










/*document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".productos");
    const form = document.getElementById("formulario");
    const limpiar = document.getElementById("limpiar");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const precio = document.getElementById("precio").value;
        const imagen = document.getElementById("imagen").value;

        fetch("productos.json").then(response => response.json()).then(data => {
            const nuevoId = data.length > 0 ? Math.max(...data.map(item => item.id)) + 1 : 1;
            const nuevoProducto = {
                id: nuevoId,
                nombre: nombre,
                precio: precio,
                imagen: imagen
            };
            data.push(nuevoProducto);
            return data;
        }).then(actualizado => {
            const productosJson = JSON.stringify(actualizado, null, 2);
            fetch("productos.json", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: productosJson
            });
        }).then(() => {
            mostrarProductos();
            form.reset();
        }).catch(error => console.error("Error al agregar el producto:", error));
    });

    limpiar.addEventListener("click", function() {
        form.reset();
    });

    function mostrarProductos() {
        fetch("productos.json").then(response => response.json()).then(data => {
            if(data.length === 0) {
                const mensaje = document.createElement("p");
                mensaje.classList.add("nohay");
                mensaje.textContent = "No se han agregado productos.";
                container.appendChild(mensaje);
            }
            else {
                const grid = document.createElement("div");
                grid.classList.add("grid-container");
                container.appendChild(grid);

                data.forEach(producto => {
                    const card = document.createElement("div");
                    card.classList.add("card");
                    
                    const imagen = document.createElement("img");
                    imagen.src = producto.imagen;
                    imagen.alt = producto.nombre;

                    const nombre = document.createElement("h3");
                    nombre.textContent = producto.nombre;

                    const precio = document.createElement("p");
                    precio.textContent = producto.precio;

                    const boton = document.createElement("button");
                    boton.classList.add("boton");

                    const eliminar = document.createElement("i");
                    eliminar.classList.add("bi");
                    eliminar.classList.add("bi-trash-fill");
                    boton.appendChild(eliminar);

                    card.appendChild(imagen);
                    card.appendChild(nombre);
                    card.appendChild(precio);
                    card.appendChild(boton);

                    grid.appendChild(card);
                });
            }
        }).catch(error => console.error("Error al cargar los productos:", error));
    }

    mostrarProductos();
});
*/









/**
 * Retrieves the current year and sets it as the content of an HTML element with the id "year".
 * Uses the Date object to get the current year.
 */ 
const today = new Date();
document.getElementById("year").innerHTML = today.getFullYear();