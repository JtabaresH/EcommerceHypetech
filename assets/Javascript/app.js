const contenedorProductos = document.getElementById('container')

let carrito = []

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src=${producto.img} alt="">
    <h4>${producto.nombre}</h4>
    <p>Stock: ${producto.cantidad}</p>
    <p>Precio: ${producto.precio} USD</p>
    <button id="agregar${producto.id}" class="boton-agregar">Añadir al carrito</button>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)
    
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })
})

const agregarAlCarrito = (prodId) => {
    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito)
}