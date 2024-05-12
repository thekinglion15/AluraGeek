const API_URL = "productos.json";

async function obtenerProductos() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("No se pudo obtener la lista de productos.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    throw error; // Propaga el error para que pueda ser manejado externamente
  }
}

async function crearProducto(nuevoProducto) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(nuevoProducto)
    });
    if (!response.ok) {
      throw new Error("No se pudo crear el nuevo producto.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al crear el nuevo producto:", error);
    throw error; // Propaga el error para que pueda ser manejado externamente
  }
}

async function eliminarProducto(id) {
  const url = `${API_URL}/${id}`;
  try {
    const response = await fetch(url, {
      method: "DELETE"
    });
    if (!response.ok) {
      throw new Error("No se pudo eliminar el producto.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    throw error; // Propaga el error para que pueda ser manejado externamente
  }
}

export { obtenerProductos, crearProducto, eliminarProducto };