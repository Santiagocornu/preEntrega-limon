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
    
    <input type="button" value="sumar Producto" onclick="agregarProducto()">
    <input type="button" value="Mostrar Productos" onclick="mostrarProductos()" >
    <input type="button" value="Eliminar Producto" onclick="eliminarProducto()" >
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
