import { API } from "./api.js";
import { crearCard } from "./listarProductos.js";

const contenedor = document.querySelector(".grid-container");

let APIurl = "https://alurageek-3fad8-default-rtdb.firebaseio.com/productos.json";
let APIurlEliminar = "https://alurageek-3fad8-default-rtdb.firebaseio.com/productos/";

mostrarProductos();

async function mostrarProductos() {
    try {
        const productos = await API.listarProductos(APIurl);
        const identificador = Object.keys(productos);
        
        identificador.forEach(id => {
            const producto = productos[id];
            contenedor.innerHTML += crearCard(producto.nombre, producto.precio, producto.imagen, id);
        });

        const mensaje = document.getElementById("nohay");
        mensaje.textContent = "";

        return;
    }
    catch (error) {
        console.log("Error al obtener los productos:", error);
        const mensaje = document.getElementById("nohay");
        mensaje.textContent = "No se han agregado productos.";
        mensaje.classList.add("nohay");
        throw error;
    }
}


contenedor.addEventListener("click", event => eliminarProducto(event));

async function eliminarProducto(event) {
    if(event.target.classList.contains("bi-trash-fill")) {
        const padre = event.target.parentElement;
        let id = padre.getAttribute("data-index");
        id = `${id}.json`;

        try {
            const producto = await API.eliminarProducto(id, APIurlEliminar);

            padre.remove();
            return;
        }
        catch(error) {
            console.error("Error al intentar eliminar el producto:", error);
            throw error;
        }
    }
}

export { APIurl };
export { contenedor };
export { mostrarProductos };

const today = new Date();
document.getElementById("year").innerHTML = today.getFullYear();