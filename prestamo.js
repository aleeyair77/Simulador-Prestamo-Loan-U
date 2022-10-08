

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let listadoDolar = document.getElementById("listado");
let imputPrestamo = document.getElementById("montoPrestamo");
let botonPrestamo = document.getElementById("aceptarPrestamo");
let divCuotas = document.getElementById("divCuotas")
let containerPrestamo = document.getElementById("container-solicitar-prestamo");

let montoSolicitado = imputPrestamo.value;

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
    interes: "10%"},
    {id: 5,
      cuota: "doce",
      interes: "15%"}];

      console.log(cuotas)


closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});


// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
};

botonPrestamo.addEventListener("click", (e)=>{
  e.preventDefault();
    solicitandoPrestamo();
    cuotasPrestamo()
    });


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

console.log(solicitandoPrestamo())

function cuotasPrestamo(){
  cuotas.forEach(function(cuota){
    const btnCuota = document.createElement("button");
    btnCuota.classList.add("btn")
    btnCuota.classList.add("btn-outline-primary")
    btnCuota.textContent = 'Pagar en ' + cuota.cuota + ' cuotas';
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
              'ahora seleccione sus cuotas',
              'success'
            )
          }
        })
      }
    });
})
};

function porcentajeUno(numero) {
  let cincoPorciento = (((numero * 5) / 100) + numero);
  return cincoPorciento;}

  function porcentajeTres(numero) {
    (((numero * 10) / 100) + numero);
    return porcentajeTres;}

    function porcentajeSeis(numero) {
      (((numero * 20) / 100) + numero);
      return porcentajeSeis;}

      function porcentajeNueve(numero) {
        (((numero * 30) / 100) + numero);
        return porcentajeNueve;}

        function porcentajeDoce(numero) {
          (((numero * 50) / 100) + numero);
          return porcentajeDoces;}