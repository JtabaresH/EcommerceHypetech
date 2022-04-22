const contenedorProductos = document.getElementById('container')


stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src=${producto.img} alt="">
    <h4>${producto.nombre}</h4>
    <p>Stock: ${producto.cantidad}</p>
    <p>Precio: $ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Añadir al carrito</button>
    `
    contenedorProductos.appendChild(div)
})