// function Persona(nombre, email, clave){
//     this.nombre = nombre;
//     this.email = email;
//     this.clave = clave;
// }

// function Usuario(nombre, email, clave, puntosacumulados){
//     Persona.call(this, nombre, email, clave)
//     this.puntosacumulados = puntosacumulados;
// }

// Usuario.prototype.acumularPuntos=function(){
//     console.log(`estamos acumulando puntos`)
// }

// Usuario.prototype.canjearPuntos=function(){
//     console.log(`canjeaste puntos!`)
// }

// var nombre = prompt("ponga name");

// var Usuario1 = new Usuario(nombre, "email@gmail.com", "salchipapita", 1234)
// console.log(Usuario1)
// Usuario1.acumularPuntos();
// Usuario1.canjearPuntos();

// function Administrador(nombre, email,clave){
//     Persona.call(this, nombre, email, clave)
// }

// var Admin = new ProductoFisico("nombre", "nombre@gmail.com", "hamburguesalover")
// console.log(Admin)

// Administrador.prototype.agregarProducto=function(){
//     console.log(`agregaste un producto`)
// }

// Administrador.prototype.modificarProducto=function(){
//     console.log(`modificaste un producto`)
// }

// Administrador.prototype.eliminarUsuario=function(){
//     console.log(`eliminaste un Usuario`)
// }
// Admin.agregarProducto()
// Admin.modificarProducto()
// Admin.eliminarUsuario()

// function Productos(nombre, puntosNecesarios, cantidadDisponible, stock){
//     this.nombre = nombre;
//     this.puntosNecesarios = puntosNecesarios;
//     this.cantidadDisponible = cantidadDisponible;
//     this.stock = stock;
// }

// function ProductoFisico(nombre, puntosNecesarios, cantidadDisponible, stock, precio){
//     Productos.call(this, nombre, puntosNecesarios, cantidadDisponible, stock)
//     this.precio = precio;
// }

// var ProducF = new ProductoFisico("nombre", 2500, 3000, true, 125000)
// console.log(ProducF)

// ProductoFisico.prototype.actualizarStock=function(){
//     console.log(`actualizaste el stock`)
// }

// ProductoFisico.prototype.obtenerInfo=function(){
//     console.log(`Obtuviste la información`)
// }

// ProductoFisico.prototype.enviarProducto=function(){
//     console.log(`Enviaste un producto`)
// }
// ProducF.actualizarStock()
// ProducF.obtenerInfo()
// ProducF.enviarProducto()

// function ProductoVirtual(nombre, puntosNecesarios, cantidadDisponible, stock, url){
//     Productos.call(this, nombre, puntosNecesarios, cantidadDisponible, stock)
//     this.url = url;
// }

// var ProducV = new ProductoVirtual("nombre", 2500, 3000, true, "www.acaestanlosproductos.com")
// ProductoVirtual.prototype.obtenerInfo=function(){
//     console.log("Obtuviste la información")
// }
// ProductoVirtual.prototype.descargar=function(){
//     console.log("Descargaste el producto")
// }
// ProductoVirtual.prototype.obtenerProductoEmail=function(){
//     console.log("El producto ha sido enviado a tu email exitosamente")
// }

// ProducV.obtenerInfo()
// ProducV.descargar()
// ProducV.obtenerProductoEmail()

// function Actividad(tipo, puntosOtorgados){
//     this.tipo=tipo;
//     this.puntosOtorgados=puntosOtorgados;
// }

// var Activ = new Actividad("bolos", 2000)
// console.log(Activ)

// Actividad.prototype.completarActividad=function(){
//     console.log(`Ha terminado tu actividad`)
// }
// Activ.completarActividad()

// function OrdenDeCanje(usuario, producto, fecha){
//     this.usuario = usuario;
//     this.producto = producto;
//     this.fecha = fecha;
// }

// var Redem = new OrdenDeCanje("Alejo", "lavadora", "10/05/2024")
// console.log(Redem)

// OrdenDeCanje.prototype.confirmarOrden=function(){
//     console.log(`Orden confirmada con exito`);
// }

// OrdenDeCanje.prototype.cancelarOrden=function(){
//     console.log(`Orden cancelada con exito`);
// }

// Redem.confirmarOrden()
// Redem.cancelarOrden()

// function CategoriaDelProducto(nombre, descripcion){
//     this.nombre = nombre;
//     this.descripcion = descripcion;
// }

// var CategoryProduc = new CategoriaDelProducto("lavadora","lava ropa")
// console.log(CategoryProduc);

// CategoriaDelProducto.prototype.listarProductos=function(){
//     console.log(`tus productos son ${CategoryProduc}`)
// }

// CategoryProduc.listarProductos()