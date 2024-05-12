import { crearProducto } from "./api.js";

document.addEventListener("DOMContentLoaded", function () {
  const nuevoProductoForm = document.getElementById("formulario");

  nuevoProductoForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const imagen = document.getElementById("imagen").value;

    const nuevoProducto = {
      nombre: nombre,
      precio: precio,
      imagen: imagen
    };

    try {
      const productoCreado = await crearProducto(nuevoProducto);
      console.log("Producto creado:", productoCreado);
      alert("Producto creado exitosamente.");
      // Puedes realizar otras acciones después de crear el producto, como actualizar la lista de productos en la página
    } catch (error) {
      console.error("Error al crear el nuevo producto:", error);
      alert("Error al crear el producto. Por favor, intenta nuevamente.");
    }

    // Limpiar los campos del formulario después de enviarlo
    nuevoProductoForm.reset();
  });
});