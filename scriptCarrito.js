let Carrito = [];

function agregarAlCarrito() {
    let form = document.getElementById('carritoForm');
    let id = form.carritoId.value;
    let cantidad = Number(form.carritoCantidad.value);
    let nombre = form.carritoNombre.value;

    let productoExistente = Productos.find(Productos => Productos.id === id);
    if (productoExistente) {
        if (productoExistente.cantidad >= cantidad) {
            let objeto = {
                id: id,
                cantidad: cantidad,
                valor: productoExistente.valor,
                nombre: nombre,
            };

            Carrito.push(objeto);
            console.log(Carrito);

            productoExistente.cantidad -= cantidad;
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
