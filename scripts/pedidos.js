
let Pedidos = [];
let idPedido = 0;

window.realizarPedido = function() {
    if (Carrito.length === 0) {
        Swal.fire('El carrito está vacío.');
        return;
    }

    let pedido = {
        id: idPedido++, 
        carrito: [...Carrito]
    };

    Pedidos.push(pedido); 

    localStorage.setItem('Pedidos', JSON.stringify(pedidos));

    vaciarCarrito();

    Swal.fire(`El pedido ha sido realizado con éxito. El ID de tu pedido es: ${pedido.id}`);
}

function cargarPedidos() {
    let pedidosGuardados = JSON.parse(localStorage.getItem('Pedidos'));
    if (pedidosGuardados) {
        Pedidos = pedidosGuardados;
        idPedido = Pedidos.length;
    }
}
