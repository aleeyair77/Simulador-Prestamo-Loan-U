

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let listadoDolar = document.getElementById("listado");
let imputPrestamo = document.getElementById("montoPrestamo");
let botonPrestamo = document.getElementById("aceptarPrestamo");
let divCuotas = document.getElementById("divCuotas")
let containerPrestamo = document.getElementById("container-solicitar-prestamo");

const cuotas = [{id: 1,
cuota: "uno"},
{id: 2,
cuota: "tres"},
{id: 3,
  cuota: "seis"},
  {id: 4,
    cuota: "nueve"},
    {id: 5,
      cuota: "doce"}];

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
    cuotasPrestamo();
    });


function solicitandoPrestamo() {
  if(imputPrestamo.value != 0 && imputPrestamo.value < 70000){
    let montoSolcitado = imputPrestamo.value;
    containerPrestamo.remove();
    Swal.fire({
      title: '¿Estas seguro de solicitar el monto por: ' + montoSolcitado + '?',
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
}

function cuotasPrestamo(){
  cuotas.forEach(function(cuota){
    const btnCuota = document.createElement("button");
    btnCuota.classList.add("btn")
    btnCuota.classList.add("btn-outline-primary")
    btnCuota.textContent = 'Pagar en ' + cuota.cuota + ' cuotas';
    divCuotas.appendChild(btnCuota)
  })
  
}

// function (){
//   if (cuotasPrestamo == 1){
//     let porcenaje_uno = (((montoSolcitado * 3)/ 100) + montoSolcitado);
//     return porcenaje_uno;
//   }
//   else if (cuotas_prestamo == 3){
//   let porcentaje_tres = (((montoSolcitado * 5) / 100) + montoSolcitado);
//   return porcentaje_tres;
//   }
//   else if (cuotas_prestamo == 6){
//       let porcentaje_seis = (((montoSolcitado * 7) / 100) + montoSolcitado);
//       return porcentaje_seis; 
//   }
//   else if (cuotas_prestamo == 9){
//       let porcentaje_nueve = (((montoSolcitado * 10) / 100) + prmontoSolcitado);
//       return porcentaje_nueve;
//   }
//   else if (cuotas_prestamo == 12){
//       let porcentaje_doce = (((montoSolcitado * 15) / 100) + montoSolcitado);
//       return porcentaje_doce;
//   }
// };