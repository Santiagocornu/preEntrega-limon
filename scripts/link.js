let formulario= `

<form id="formulario" class="formulario">
    <label for="name">Nombre:</label>
    <input type="text" id="name" name="name">
    
    <label for="id">id:</label>
    <input type="number" id="id" name="id">

    <label for="imagen">imagen del producto:</label>
    <input type="text" id="imagen" name="imagen" min="0">

    <label for="quantity">Cantidad:</label>
    <input type="number" id="quantity" name="quantity" min="1">

    <label for="value">Valor del producto:</label>
    <input type="number" id="value" name="value" min="0">
    
    <input type="button" value="sumar Producto" onclick="AgregarProducto()">
    <input type="button" value="Mostrar Productos" onclick="MostrarProductos()" >
    <input type="button" value="Eliminar Producto" onclick="EliminarProducto()" >
</form>
`;

function showForm() {
    document.getElementById('formContainer').innerHTML = formulario;
}

let carritoForm = `
<form id="carritoForm" class="formulario">
    <label for="carritoId">ID:</label>
    <input type="text" id="carritoId" name="carritoId">
    
    <label for="carritoNombre">Nombre:</label>
    <input type="text" id="carritoNombre" name="carritoNombre">

    <label for="carritoCantidad">Cantidad:</label>
    <input type="number" id="carritoCantidad" name="carritoCantidad" min="1">
    
    <input type="button" value="Agregar al carrito" onclick="agregarAlCarrito()" >
    <input type="button" value="remover Del Carrito" onclick="removerDelCarrito()">
    <input type="button" value="resultado" onclick="calcularPrecioTotal()">
    <input type="button" value="eliminar" onclick="vaciarCarrito()">
    <input type="button" value="realizar pedido" onclick="realizarPedido()">
</form>
`;

function showCarritoForm() {
    document.getElementById('formContainer').innerHTML = carritoForm;
}

function showProductCard(){
    let productCardHTML = ''; 

    Productos.forEach(producto => {
        let card = `
        <div class="product-card">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>ID: ${producto.id}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Cantidad: ${producto.cantidad}</p>
        </div>
        `;
        productCardHTML += card;
    });

    document.getElementById('formContainer').innerHTML = productCardHTML;
}

function showOrderCard() {
    let orderCardHTML = ''; 

    Pedidos.forEach(pedido => {
        let card = `
        <div class="order-card">
            <h2>Pedido ID: ${pedido.id}</h2>
            ${pedido.carrito.map(producto => `
                <div class="product-info">
                    <p>Producto ID: ${producto.id}</p>
                    <p>Nombre: ${producto.nombre}</p>
                    <p>Cantidad: ${producto.cantidad}</p>
                    <p>Precio: ${producto.valor}</p>
                </div>
            `).join('')}
        </div>
        `;
        orderCardHTML += card;
    });

    document.getElementById('formContainer').innerHTML = orderCardHTML;
}

