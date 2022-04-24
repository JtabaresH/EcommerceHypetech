const contenedorProductos = document.getElementById('container')
let ventanaCarrito = document.getElementById('boton-carrito');
let ventanaCarrito1 = document.getElementById('cerrar-carrito');
let clicBoton = document.getElementById('ventanaCarrito');
clic = 0;


/* NavBar efecto scroll */
window.onscroll = () => {
    let menu = document.getElementById('menu');
  if (window.scrollY > 45) {
      menu.style.background = "#FFFFFF";
      menu.style.boxShadow = "0px 0px 5px gray";
      menu.style.transition = "all 300ms linear";
    } else {
      menu.style.background = "transparent";
      menu.style.boxShadow = "none";
      menu.style.transition = "all 300ms linear";
    }
  }

/* Añadir stock de productos */
stockProductos.forEach((contProducto) => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src=${contProducto.img} alt="">
    <h4>${contProducto.nombre}</h4>
    <p>Stock: ${contProducto.stock} Und</p>
    <p class="price">Precio: $<span>${contProducto.precio}</span> USD</p>
    <button data-id=${contProducto.id} id="agregar-carrito" class="agregar-carrito">Añadir al carrito</button>
    `
    contenedorProductos.appendChild(div)
})

/* Carrito de compras */
function mover() {
    if(clic===0){
        clicBoton.style.left="0";
        clicBoton.style.transition="all 300ms linear";
        clic++;
    } else{
        clicBoton.style.left="100%";   
        clicBoton.style.transition="all 300ms linear"; 
        clic--;
        }   
}
ventanaCarrito.addEventListener('click', mover, true);
ventanaCarrito1.addEventListener('click', mover, true);



/* Copia de agregar articulos */
/* stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src=${producto.img} alt="">
    <h4>${producto.nombre}</h4>
    <p>Stock: ${producto.stock}</p>
    <p>Precio: ${producto.precio} USD</p>
    <button id="agregar${producto.id}" class="boton-agregar">Añadir al carrito</button>
    `
    contenedorProductos.appendChild(div)
}) */