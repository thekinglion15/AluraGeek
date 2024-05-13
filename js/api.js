import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyDjF7Jt-3V-4Ja_sAovbBHkgekmVW84AaQ",
    authDomain: "alurageek-3fad8.firebaseapp.com",
    databaseURL: "https://alurageek-3fad8-default-rtdb.firebaseio.com",
    projectId: "alurageek-3fad8",
    storageBucket: "alurageek-3fad8.appspot.com",
    messagingSenderId: "145565268054",
    appId: "1:145565268054:web:294c729c470ea066ade3f7",
    measurementId: "G-50KML50LCL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

async function listarProductos(API_URL) {
    try {
        const response = await fetch(API_URL);

        if(!response.ok) {
            throw new Error("No se pudo obtener la lista de productos.");
        }

        const data = await response.json();
        return data;
    }
    catch(error) {
        console.error("Error al obtener los productos:", error);
        throw error;
    }
}

async function crearProducto(nombre, precio, imagen, url) {
    try {
        const response = await fetch(url,  {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: nombre,
                precio: precio,
                imagen: imagen
            })
        });

        if(!response.ok) {
            throw new Error("No se pudo crear el nuevo producto.");
        }

        const data = await response.json();
        return data;
    }
    catch(error) {
        console.error("Error al crear el nuevo producto:", error);
        throw error;
    }
}

async function eliminarProducto(id, url) {
    try {
        const response = await fetch(`${url}${id}`, {
            method: "DELETE"
        });

        if(!response.ok) {
            throw new Error("No se pudo eliminar el producto.");
        }

        const data = await response.json();
        return data;
    }
    catch(error) {
        console.error("Error al eliminar el producto:", error);
        throw error;
    }
}

export const API = { listarProductos, crearProducto, eliminarProducto };