let Carrito = JSON.parse(localStorage.getItem('Carrito')) || [];

function agregarAlCarrito() {
    let form = document.getElementById('carritoForm');
    let id = form.carritoId.value;
    let cantidad = Number(form.carritoCantidad.value);

    if (cantidad <= 0) {
        alert('Por favor, ingresa una cantidad válida.');
        return;
    }

    let productoExistente = Productos.find(producto => producto.id == id);
    if (productoExistente) {
        if (productoExistente.cantidad >= cantidad) {
            let objeto = {
                id: productoExistente.id,
                cantidad: cantidad,
                valor: productoExistente.precio,
                nombre: productoExistente.nombre,
                imagen: productoExistente.imagen, 
            };

            Carrito.push(objeto);
            console.log(Carrito);

            productoExistente.cantidad -= cantidad;

            
            localStorage.setItem('Carrito', JSON.stringify(Carrito));
        } else {
            alert('No hay suficiente cantidad del producto en el inventario.');
        }
    } else {
        alert('El producto con este ID no existe.');
    }
}


function removerDelCarrito() {
    let form = document.getElementById('carritoForm');
    let id = form.carritoId.value;
    let cantidad = Number(form.carritoCantidad.value);

    let productoEnCarrito = Carrito.find(producto => producto.id === id);
    if (productoEnCarrito) {
        if (productoEnCarrito.cantidad >= cantidad) {
            productoEnCarrito.cantidad -= cantidad;

            let productoExistente = Productos.find(producto => producto.id === id);
            productoExistente.cantidad += cantidad;

            if (productoEnCarrito.cantidad === 0) {
                let index = Carrito.indexOf(productoEnCarrito);
                Carrito.splice(index, 1);
            }

            console.log(Carrito);

            
            localStorage.setItem('Carrito', JSON.stringify(Carrito));
        } else {
            alert('No hay suficiente cantidad del producto en el carrito.');
        }
    } else {
        alert('El producto con este ID no existe en el carrito.');
    }
}

function calcularPrecioTotal() {
    let total = 0;
    for (let producto of Carrito) {
        total += producto.valor * producto.cantidad;
    }
    alert(`El precio total del pedido es: ${total}`);
}
