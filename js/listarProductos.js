function crearCard(nombre, precio, imagen, id) {
    const card = `
        <div class="card" data-index="${id}">
            <div class="image">
                <img src="${imagen}" alt="${nombre}">
            </div>
            <h3>${nombre}</h3>
            <p>$${precio}</p>
            <i class="bi bi-trash-fill boton"></i>
        </div>
    `;

    return card;
}

export { crearCard };