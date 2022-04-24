class Carrito{
    /* Añadir producto al carrito */
    comprarProducto(e){
        e.preventDefault();
        if(e.target.classList.contains('agregar-carrito')){
            const producto = e.target.parentElement;
            this.leerDatosProducto(producto);
        }
    }

    /* Leer datos relevantes del producto */
    leerDatosProducto(producto) {
        const infoProducto = {
            imagen: producto.querySelector('img').src,
            titulo: producto.querySelector('h4').textContent,
            precio: producto.querySelector('.price span').textContent,
            id: producto.querySelector('button').getAttribute('data-id'),
            cantidad: 1
        }
        this.insertarCarrito(infoProducto);
    }

    /* Insertar datos del producto en el carrito */
    insertarCarrito(producto) {
        const row = document.createElement('tr');
        row.classList.add('listadoEnCarrito')
        row.innerHTML = `
        <td>
            <img src="${producto.imagen}" width=50>
        </td>
        <td>${producto.titulo}</td>
        <td>${producto.cantidad}</td>
        <td>${producto.precio}</td>
        <td>
            <a href="#" class="borrar-producto far fa-trash-alt" data-id="${producto.id}"></a>
        </td>
        `;
        listaproductos.appendChild(row);
    }

    /* Eliminar producto seleccionado del carrito */
    eliminarProducto(e){
        e.preventDefault();
        let producto, productoID;
        if(e.target.classList.contains('borrar-producto')){
            e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement;
            productoID = producto.querySelector('a').getAttribute('data-id');
        }
    }

    /* Vaciar carrito */
    vaciarCarrito(e){
        e.preventDefault();
        while(listaproductos.firstChild){
            listaproductos.removeChild(listaproductos.firstChild);
        }
        return false;
    }

    /* Local Storage */
    guardarProductosLocalStorage(producto){

    }
}
