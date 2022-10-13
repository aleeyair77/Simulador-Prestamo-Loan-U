let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
let listadoDolar = document.getElementById("listado");
let presentacionUsuarioActivo = document.getElementById("usuarioActivo");
let muestraDeuda = document.getElementById("muestraDeuda");


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

let lista_Usuarios_Parse = JSON.parse(localStorage.getItem("Usuarios"));
let listaUsuarioActivoParse = JSON.parse(localStorage.getItem("Usuario Activo"));

let usuarioActivoMuestra = lista_Usuarios_Parse.find((el) => el.mail == listaUsuarioActivoParse);
presentacionUsuarioActivo.innerHTML = usuarioActivoMuestra.nombre;
console.log(usuarioActivoMuestra.deuda)
muestraDeuda.innerHTML = usuarioActivoMuestra.deuda;