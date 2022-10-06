let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let listadoDolar = document.getElementById("listado");
let imputPrestamo = document.getElementById("montoPrestamo");
let botonPrestamo = document.getElementById("aceptarPrestamo");

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
}

botonPrestamo.addEventListener("click", (e) =>{
    e.preventDefault();
    if(imputPrestamo.value != 0 && imputPrestamo.value < 70000){
        imputPrestamo.remove();
        botonPrestamo.remove();
    }
}) 