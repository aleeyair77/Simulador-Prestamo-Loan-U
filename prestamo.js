// variables que uso para dom
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let listadoDolar = document.getElementById("listado");
let imputPrestamo = document.getElementById("montoPrestamo");
let botonPrestamo = document.getElementById("aceptarPrestamo");
let divCuotas = document.getElementById("divCuotas")
let containerPrestamo = document.getElementById("container-solicitar-prestamo");
let montoPorAceptar = document.getElementById("montoPorAceptar")




// variables para utilizar los datos en JSON
let montoSolicitado = imputPrestamo.value;
let lista_Usuarios_Parse = JSON.parse(localStorage.getItem("Usuarios"));
let listaUsuarioActivoParse = JSON.parse(localStorage.getItem("Usuario Activo"));

// constantes para crear los botones de las cuotas
const cuotas = [{id: 1,
cuota: "una",
interes: "3%"},
{id: 2,
cuota: "tres",
interes: "5%"},
{id: 3,
  cuota: "seis"
  ,
  interes: "7%"},
  {id: 4,
    cuota: "nueve",
    interes: "10%"}];

      console.log(cuotas)


// funcion para la barra
closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();
});

// funcion para la barra
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
};

// evento que crea los prestamos
botonPrestamo.addEventListener("click", (e)=>{
  e.preventDefault();
    solicitandoPrestamo();
    mostrarMontoSolicitado();
    cuotasPrestamo()
    });

// funcion que indica el monto a pagar cuando seleccionan las cuotas
function mostrarMontoSolicitado(){
  const confirmarMonto = document.createElement("h1")
  confirmarMonto.classList.add("text-center")
  confirmarMonto.textContent = 'En cuantas cuotas desea pagar el monto de ' + imputPrestamo.value;
  montoPorAceptar.appendChild(confirmarMonto)
}

// funcion que solicita el monto del prestamo
function solicitandoPrestamo() {
  if(imputPrestamo.value != 0 && imputPrestamo.value < 70000){
    containerPrestamo.remove();
    let montoSolicitado = imputPrestamo.value;
    Swal.fire({
      title: '¿Estas seguro de solicitar el monto por: ' + montoSolicitado + '?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar monto'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Confirmado!',
          'ahora seleccione sus cuotas',
          'success'
        )
      }
    })
};
let montoSolicitado = imputPrestamo.value;
return montoSolicitado;
};

// funcion que crea los botones de cuotas, calcula el prestamo y sus cuotas e intereses
function cuotasPrestamo(){
  cuotas.forEach(function(cuota){
    const btnCuota = document.createElement("button");
    btnCuota.classList.add("btn")
    btnCuota.classList.add("btn-outline-dark")
    btnCuota.textContent = 'Pagar en ' + cuota.cuota + ' cuota/s';
    divCuotas.appendChild(btnCuota)
    btnCuota.addEventListener("click", ()=>{
      if(cuota.id == "1"){
        let prestamoCuotaUno = porcentajeUno(parseFloat(solicitandoPrestamo()))
        Swal.fire({
          title: '¿Estas seguro de solicitar el monto por: ' + prestamoCuotaUno + '?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Confirmar monto'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              '¡Confirmado!',
              'Prestamo Solicitado',
              'success'
            )
            let confirmacionUsuario = lista_Usuarios_Parse.find((el) => el.mail == listaUsuarioActivoParse);
            let UsuariosNuevos = lista_Usuarios_Parse.filter(el => el.mail !== listaUsuarioActivoParse)
            let deudaConfirmacionUsuario = [confirmacionUsuario]
            const UsuarioActulizadoPrestamo = deudaConfirmacionUsuario.map((el)=>{
              return {
                nombre: el.nombre,
                contraseña: el.contraseña,
                mail: el.mail,
                deuda: el.deuda + prestamoCuotaUno,
                deudaUnaCuota : el.deudaUnaCuota + prestamoCuotaUno,
                deudaTresCuotas : el.deudaTresCuotas,
                deudaSeisCuotas : el.deudaSeisCuotas,
                deudaNueveCuotas : el.deudaNueveCuotas,
              }
            })
            let usuarioActualizadoObjeto = UsuarioActulizadoPrestamo.find((el) => el.mail == listaUsuarioActivoParse);
            UsuariosNuevos.push(usuarioActualizadoObjeto);
            let usuariosNuevosParse = JSON.stringify(UsuariosNuevos);
            localStorage.setItem("Usuarios", usuariosNuevosParse);
            window.location.href = "loan.html";
          }
        })
      }
      else if(cuota.id == "2"){
        let prestamoCuotaTres = porcentajeTres(parseFloat(solicitandoPrestamo()))
        Swal.fire({
          title: '¿Estas seguro de solicitar el monto por: ' + prestamoCuotaTres + '?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Confirmar monto'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              '¡Confirmado!',
              'Prestamo Solicitado',
              'success'
            )
            let confirmacionUsuario = lista_Usuarios_Parse.find((el) => el.mail == listaUsuarioActivoParse);
            let UsuariosNuevos = lista_Usuarios_Parse.filter(el => el.mail !== listaUsuarioActivoParse)
            let deudaConfirmacionUsuario = [confirmacionUsuario]
            const UsuarioActulizadoPrestamo = deudaConfirmacionUsuario.map((el)=>{
              return {
                nombre: el.nombre,
                contraseña: el.contraseña,
                mail: el.mail,
                deuda: el.deuda + prestamoCuotaTres,
                deudaUnaCuota : el.deudaUnaCuota,
                deudaTresCuotas : el.deudaTresCuotas + prestamoCuotaTres,
                deudaSeisCuotas : el.deudaSeisCuotas,
                deudaNueveCuotas : el.deudaNueveCuotas,
              }
            })
            let usuarioActualizadoObjeto = UsuarioActulizadoPrestamo.find((el) => el.mail == listaUsuarioActivoParse);
            UsuariosNuevos.push(usuarioActualizadoObjeto);
            let usuariosNuevosParse = JSON.stringify(UsuariosNuevos);
            localStorage.setItem("Usuarios", usuariosNuevosParse);
            window.location.href = "loan.html";
          }
        })
      }
      else if(cuota.id == "3"){
        let prestamoCuotaSeis = porcentajeSeis(parseFloat(solicitandoPrestamo()))
        Swal.fire({
          title: '¿Estas seguro de solicitar el monto por: ' + prestamoCuotaSeis + '?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Confirmar monto'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              '¡Confirmado!',
              'Prestamo Solicitado',
              'success'
            )
            let confirmacionUsuario = lista_Usuarios_Parse.find((el) => el.mail == listaUsuarioActivoParse);
            let UsuariosNuevos = lista_Usuarios_Parse.filter(el => el.mail !== listaUsuarioActivoParse)
            let deudaConfirmacionUsuario = [confirmacionUsuario]
            const UsuarioActulizadoPrestamo = deudaConfirmacionUsuario.map((el)=>{
              return {
                nombre: el.nombre,
                contraseña: el.contraseña,
                mail: el.mail,
                deuda: el.deuda + prestamoCuotaSeis,
                deudaUnaCuota : el.deudaUnaCuota,
                deudaTresCuotas : el.deudaTresCuotas,
                deudaSeisCuotas : el.deudaSeisCuotas + prestamoCuotaSeis,
                deudaNueveCuotas : el.deudaNueveCuotas,
              }
            })
            let usuarioActualizadoObjeto = UsuarioActulizadoPrestamo.find((el) => el.mail == listaUsuarioActivoParse);
            UsuariosNuevos.push(usuarioActualizadoObjeto);
            let usuariosNuevosParse = JSON.stringify(UsuariosNuevos);
            localStorage.setItem("Usuarios", usuariosNuevosParse);
            window.location.href = "loan.html";
          }
        })
      }
      else if(cuota.id == "4"){
        let prestamoCuotaNueve = porcentajeNueve(parseFloat(solicitandoPrestamo()))
        Swal.fire({
          title: '¿Estas seguro de solicitar el monto por: ' + prestamoCuotaNueve + '?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Confirmar monto'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              '¡Confirmado!',
              'Prestamo Solicitado',
              'success'
            )
            let confirmacionUsuario = lista_Usuarios_Parse.find((el) => el.mail == listaUsuarioActivoParse);
            let UsuariosNuevos = lista_Usuarios_Parse.filter(el => el.mail !== listaUsuarioActivoParse)
            let deudaConfirmacionUsuario = [confirmacionUsuario]
            const UsuarioActulizadoPrestamo = deudaConfirmacionUsuario.map((el)=>{
              return {
                nombre: el.nombre,
                contraseña: el.contraseña,
                mail: el.mail,
                deuda: el.deuda + prestamoCuotaNueve,
                deudaUnaCuota : el.deudaUnaCuota,
                deudaTresCuotas : el.deudaTresCuotas,
                deudaSeisCuotas : el.deudaSeisCuotas,
                deudaNueveCuotas : el.deudaNueveCuotas + prestamoCuotaNueve,
              }
            })
            let usuarioActualizadoObjeto = UsuarioActulizadoPrestamo.find((el) => el.mail == listaUsuarioActivoParse);
            UsuariosNuevos.push(usuarioActualizadoObjeto);
            let usuariosNuevosParse = JSON.stringify(UsuariosNuevos);
            localStorage.setItem("Usuarios", usuariosNuevosParse);
            window.location.href = "loan.html";
          }
        })
      }
    });
})
};

// calculador de porcentajes de las cuotas
function porcentajeUno(numero) {
  let cincoPorciento = (((numero * 5) / 100) + numero);
  return cincoPorciento;}

  function porcentajeTres(numero) {
    let tresPorciento = (((numero * 10) / 100) + numero);
    return tresPorciento;}

    function porcentajeSeis(numero) {
      let seisPorciento = (((numero * 20) / 100) + numero);
      return seisPorciento;}

      function porcentajeNueve(numero) {
      let nuevePorciento =  (((numero * 30) / 100) + numero);
        return nuevePorciento;}
