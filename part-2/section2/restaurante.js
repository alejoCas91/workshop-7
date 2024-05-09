function Persona(nombre, email, clave) {
  this.nombre = nombre;
  this.email = email;
  this.clave = clave;
}

Persona.prototype.autenticacion = function () {
  console.log(`Autenticacion exitosa`);
};

function Repartidor(nombre, email, clave, vehiculo, disponibilidad) {
  Persona.call(this, nombre, email, clave);
  this.vehiculo = vehiculo;
  this.disponibilidad=disponibilidad;
}

var Delivery = new Repartidor("Deivi", "email@example.com", "salchipapita", "Carro", true)

console.log(Delivery);

Repartidor.prototype.aceptarEnvio=function(){
    console.log(`Envio aceptado`);
}
Repartidor.prototype.actualizarUbicacion=function(){
    console.log(``);
}
Repartidor.prototype.completarEntrega=function(){
    console.log(``);
}
Repartidor.prototype.autenticacion=function(){
    console.log(``);
}
Repartidor.prototype.actualizarEstado=function(){
    console.log(``);
}

