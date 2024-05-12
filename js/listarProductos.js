import { obtenerProductos, eliminarProducto } from "./api.js";

document.addEventListener("DOMContentLoaded", function () {
  const contenedorProductos = document.querySelector(".productos");

  // Función para renderizar los productos en la página
  async function renderizarProductos() {
    try {
      const productos = await obtenerProductos();
      contenedorProductos.innerHTML = ""; // Limpiar el contenedor de productos

      if (productos.length === 0) {
        contenedorProductos.innerHTML = "<p>No hay productos disponibles.</p>";
      } else {
        productos.forEach(producto => {
          const card = document.createElement("div");
          card.classList.add("producto-card");
          card.innerHTML = `
            <h2>${producto.nombre}</h2>
            <p>Precio: $${producto.precio}</p>
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <button class="eliminar-btn" data-id="${producto.id}">Eliminar</button>
          `;
          contenedorProductos.appendChild(card);
        });

        // Agregar escuchador de eventos para eliminar productos
        contenedorProductos.addEventListener("click", async function (event) {
          if (event.target.classList.contains("eliminar-btn")) {
            const id = event.target.dataset.id;
            try {
              await eliminarProducto(id);
              alert("Producto eliminado exitosamente.");
              await renderizarProductos(); // Actualizar la lista de productos después de eliminar
            } catch (error) {
              console.error("Error al eliminar el producto:", error);
              alert("Error al eliminar el producto. Por favor, intenta nuevamente.");
            }
          }
        });
      }
    } catch (error) {
      console.error("Error al cargar los productos:", error);
      contenedorProductos.innerHTML = "<p>Error al cargar los productos. Por favor, intenta nuevamente.</p>";
    }
  }

  // Llamar a la función para renderizar productos al cargar la página
  renderizarProductos();
});