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
        this.saveInLocalStorage(producto);
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
        this.eliminarProductoLocalStorage(productoID);
    }

    /* Vaciar carrito */
    vaciarCarrito(e){
        e.preventDefault();
        while(listaproductos.firstChild){
            listaproductos.removeChild(listaproductos.firstChild);
        }
        this.vaciarLocalStorage();
        return false;

    }

    /* Local Storage */
    saveInLocalStorage(producto){
        let productos;
        productos = this.inLocalStorage();
        productos.push(producto);
        localStorage.setItem('productos', JSON.stringify(productos));
    }

    /* Local Storage Actual */
    inLocalStorage(){
        let productoLS;
        if(localStorage.getItem('productos') === null){
            productoLS = [];
        } else {
            productoLS = JSON.parse(localStorage.getItem('productos'));
        }
        return productoLS;
    }

    /* Eliminar producto del Local Storage */
    eliminarProductoLocalStorage(productoID){
        let productosLS;
        productosLS = this.inLocalStorage();
        productosLS.forEach(function(productoLS, index){
            if(productoLS.id === productoID){
                productosLS.splice(index, 1);
            }
        });
        localStorage.setItem('productos', JSON.stringify(productosLS));
    }

    /* Cargar artiulos en el Local Storage al actualizar */
    leerLocalStorage(){
        let productosLS;
        productosLS = this.inLocalStorage();
        productosLS.forEach(function(producto){
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
        });
    }

    /* Eliminar todos los productos del local Storage */
    vaciarLocalStorage(){
        localStorage.clear();
    }
}
