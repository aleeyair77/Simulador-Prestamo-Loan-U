let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let listadoDolar = document.getElementById("listado")
// funcion para la barra
closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});

// funcion para la barra
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
  } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
  }
};



fetch("https://api.bluelytics.com.ar/v2/latest")
    .then(response => response.json())
    .then(data => {listadoDolar.innerHTML = `<span> Dolar Blue venta: ${data.blue.value_sell}</span>
                                            <span> Dolar Blue compra: ${data.blue.value_buy}</span>`
})