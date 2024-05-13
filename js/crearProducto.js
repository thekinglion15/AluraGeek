import { API } from "./api.js";
import { APIurl } from "./main.js";
import { mostrarProductos } from "./main.js";
import { contenedor } from "./main.js";

const limpiar = document.getElementById("limpiar");
const enviar = document.getElementById("enviar");
const form = document.getElementById("formulario");

enviar.addEventListener("click", event => {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const imagen = document.getElementById("imagen").value;

    agregar(nombre, precio, imagen);
});

async function agregar(nombre, precio, imagen) {
    try {
        const nuevo = await API.crearProducto(nombre, precio, imagen, APIurl);

        if(nuevo === null) {
            throw new Error("Error al intentar agregar el producto.");
        }

        contenedor.innerHTML = "";
        mostrarProductos();
        form.reset();
        return;
    }
    catch(error) {
        console.error("Error al intentar agregar el producto:", error);
        throw error;
    }
}

limpiar.addEventListener("click", function() {
    form.reset();
});