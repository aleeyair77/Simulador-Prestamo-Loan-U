let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let divCadaDeuda = document.getElementById("divCadaDeuda")
let divDeudaMaximaPDP = document.getElementById("divDeudaMaximaPDP")


let lista_Usuarios_Parse = JSON.parse(localStorage.getItem("Usuarios"));
let listaUsuarioActivoParse = JSON.parse(localStorage.getItem("Usuario Activo"));

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

let encontrarDeudaUsuario = lista_Usuarios_Parse.find((el) => el.mail == listaUsuarioActivoParse);
let arrayDeudas = [{
    id: 1,
    deuda: encontrarDeudaUsuario.deudaUnaCuota,
    cuota: "una"
}, {
    id: 2,
    deuda: encontrarDeudaUsuario.deudaTresCuotas,
    cuota: "tres"
}, {
    id: 3,
    deuda: encontrarDeudaUsuario.deudaSeisCuotas,
    cuota: "seis"
}, {
    id: 4,
    deuda: encontrarDeudaUsuario.deudaNueveCuotas,
    cuota: "nueve"
}]
console.log(encontrarDeudaUsuario)
console.log(arrayDeudas)

function creandoDeudaMaxima(){
    const montoDeuda = document.createElement("h1");
    montoDeuda.textContent = 'Deuda total: ' + encontrarDeudaUsuario.deuda;
    const btnCuotaDeuda = document.createElement("button");
        btnCuotaDeuda.classList.add("btn");
        btnCuotaDeuda.classList.add("btn-outline-dark");
        btnCuotaDeuda.classList.add("p-1");
        btnCuotaDeuda.textContent = 'Pagar Deuda';
        divDeudaMaximaPDP.appendChild(montoDeuda);
        divDeudaMaximaPDP.appendChild(btnCuotaDeuda);
        btnCuotaDeuda.addEventListener("click", () => {
            let confirmacionUsuario = lista_Usuarios_Parse.find((el) => el.mail == listaUsuarioActivoParse);
                let UsuariosNuevos = lista_Usuarios_Parse.filter(el => el.mail !== listaUsuarioActivoParse)
                let deudaConfirmacionUsuario = [confirmacionUsuario]
                const UsuarioActulizadoPrestamo = deudaConfirmacionUsuario.map((el) => {
                    return {
                        nombre: el.nombre,
                        contraseña: el.contraseña,
                        mail: el.mail,
                        deuda: el.deuda - el.deuda,
                        deudaUnaCuota: el.deudaUnaCuota - el.deudaUnaCuota,
                        deudaTresCuotas: el.deudaTresCuotas - el.deudaTresCuotas,
                        deudaSeisCuotas: el.deudaSeisCuotas - el.deudaSeisCuotas,
                        deudaNueveCuotas: el.deudaNueveCuotas - el.deudaNueveCuotas,
                    }
                })
                let usuarioActualizadoObjeto = UsuarioActulizadoPrestamo.find((el) => el.mail == listaUsuarioActivoParse);
                UsuariosNuevos.push(usuarioActualizadoObjeto);
                let usuariosNuevosParse = JSON.stringify(UsuariosNuevos);
                localStorage.setItem("Usuarios", usuariosNuevosParse);
                window.location.href = "loan.html";

        })
}

function creandoDivsCuotas() {
    arrayDeudas.forEach(function (deuda) {
        const montoDeuda = document.createElement("div");
        const montoDeudaTexto = document.createElement("h5");
        montoDeuda.classList.add("col-6");
        montoDeuda.classList.add("p-3");
        montoDeuda.setAttribute('id', 'divPagoDeDeudaPorCuotas');
        montoDeudaTexto.textContent = 'Deuda generada en ' + deuda.cuota + ' cuota/s: ' + deuda.deuda;
        const btnCuotaDeuda = document.createElement("button");
        btnCuotaDeuda.classList.add("btn");
        btnCuotaDeuda.classList.add("btn-outline-dark");
        btnCuotaDeuda.classList.add("p-1");
        btnCuotaDeuda.classList.add("btn-sm");
        btnCuotaDeuda.setAttribute("style", "--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;");
        btnCuotaDeuda.textContent = 'Pagar Deuda';
        montoDeuda.appendChild(montoDeudaTexto);
        montoDeuda.appendChild(btnCuotaDeuda);
        divCadaDeuda.appendChild(montoDeuda);
        btnCuotaDeuda.addEventListener("click", () => {
            if (deuda.id == "1") {
                let confirmacionUsuario = lista_Usuarios_Parse.find((el) => el.mail == listaUsuarioActivoParse);
                let UsuariosNuevos = lista_Usuarios_Parse.filter(el => el.mail !== listaUsuarioActivoParse)
                let deudaConfirmacionUsuario = [confirmacionUsuario]
                const UsuarioActulizadoPrestamo = deudaConfirmacionUsuario.map((el) => {
                    return {
                        nombre: el.nombre,
                        contraseña: el.contraseña,
                        mail: el.mail,
                        deuda: el.deuda - el.deudaUnaCuota,
                        deudaUnaCuota: el.deudaUnaCuota - el.deudaUnaCuota,
                        deudaTresCuotas: el.deudaTresCuotas,
                        deudaSeisCuotas: el.deudaSeisCuotas,
                        deudaNueveCuotas: el.deudaNueveCuotas,
                    }
                })
                let usuarioActualizadoObjeto = UsuarioActulizadoPrestamo.find((el) => el.mail == listaUsuarioActivoParse);
                UsuariosNuevos.push(usuarioActualizadoObjeto);
                let usuariosNuevosParse = JSON.stringify(UsuariosNuevos);
                localStorage.setItem("Usuarios", usuariosNuevosParse);
                window.location.href = "loan.html";
            } else if (deuda.id == "2") {
                let confirmacionUsuario = lista_Usuarios_Parse.find((el) => el.mail == listaUsuarioActivoParse);
                let UsuariosNuevos = lista_Usuarios_Parse.filter(el => el.mail !== listaUsuarioActivoParse)
                let deudaConfirmacionUsuario = [confirmacionUsuario]
                const UsuarioActulizadoPrestamo = deudaConfirmacionUsuario.map((el) => {
                    return {
                        nombre: el.nombre,
                        contraseña: el.contraseña,
                        mail: el.mail,
                        deuda: el.deuda - el.deudaTresCuotas / 3,
                        deudaUnaCuota: el.deudaUnaCuota,
                        deudaTresCuotas: el.deudaTresCuotas - el.deudaTresCuotas / 3,
                        deudaSeisCuotas: el.deudaSeisCuotas,
                        deudaNueveCuotas: el.deudaNueveCuotas,
                    }
                })
                let usuarioActualizadoObjeto = UsuarioActulizadoPrestamo.find((el) => el.mail == listaUsuarioActivoParse);
                UsuariosNuevos.push(usuarioActualizadoObjeto);
                let usuariosNuevosParse = JSON.stringify(UsuariosNuevos);
                localStorage.setItem("Usuarios", usuariosNuevosParse);
                window.location.href = "loan.html";
            }
            else if (deuda.id == "3") {
                let confirmacionUsuario = lista_Usuarios_Parse.find((el) => el.mail == listaUsuarioActivoParse);
                let UsuariosNuevos = lista_Usuarios_Parse.filter(el => el.mail !== listaUsuarioActivoParse)
                let deudaConfirmacionUsuario = [confirmacionUsuario]
                const UsuarioActulizadoPrestamo = deudaConfirmacionUsuario.map((el) => {
                    return {
                        nombre: el.nombre,
                        contraseña: el.contraseña,
                        mail: el.mail,
                        deuda: el.deuda - el.deudaSeisCuotas / 6,
                        deudaUnaCuota: el.deudaUnaCuota,
                        deudaTresCuotas: el.deudaTresCuotas,
                        deudaSeisCuotas: el.deudaSeisCuotas - el.deudaTresCuotas / 6,
                        deudaNueveCuotas: el.deudaNueveCuotas,
                    }
                })
                let usuarioActualizadoObjeto = UsuarioActulizadoPrestamo.find((el) => el.mail == listaUsuarioActivoParse);
                UsuariosNuevos.push(usuarioActualizadoObjeto);
                let usuariosNuevosParse = JSON.stringify(UsuariosNuevos);
                localStorage.setItem("Usuarios", usuariosNuevosParse);
                window.location.href = "loan.html";
            }
            else if (deuda.id == "4") {
                let confirmacionUsuario = lista_Usuarios_Parse.find((el) => el.mail == listaUsuarioActivoParse);
                let UsuariosNuevos = lista_Usuarios_Parse.filter(el => el.mail !== listaUsuarioActivoParse)
                let deudaConfirmacionUsuario = [confirmacionUsuario]
                const UsuarioActulizadoPrestamo = deudaConfirmacionUsuario.map((el) => {
                    return {
                        nombre: el.nombre,
                        contraseña: el.contraseña,
                        mail: el.mail,
                        deuda: el.deuda - el.deudaNueveCuotas / 9,
                        deudaUnaCuota: el.deudaUnaCuota,
                        deudaTresCuotas: el.deudaTresCuotas,
                        deudaSeisCuotas: el.deudaSeisCuotas ,
                        deudaNueveCuotas: el.deudaNueveCuotas - el.deudaNueveCuotas / 9,
                    }
                })
                let usuarioActualizadoObjeto = UsuarioActulizadoPrestamo.find((el) => el.mail == listaUsuarioActivoParse);
                UsuariosNuevos.push(usuarioActualizadoObjeto);
                let usuariosNuevosParse = JSON.stringify(UsuariosNuevos);
                localStorage.setItem("Usuarios", usuariosNuevosParse);
                window.location.href = "loan.html";
            }


        })
    })
}

creandoDeudaMaxima()
creandoDivsCuotas()
// // function divDeudaMaxima(){
// //     const montoDeuda = document.createElement("h1");
// //     montoDeuda.textContent = 'Monto total de su deuda: ' + encontrarDeudaUsuario.deuda;
// //     const btnCuotaDeudaMaxima = document.createElement("button");
// //     btnCuotaDeudaMaxima.classList.add("btn");
// //     btnCuotaDeudaMaxima.classList.add("btn-outline-primary");
// //     btnCuotaDeudaMaxima.classList.add("p-1");
// //     btnCuotaDeudaMaxima.textContent = 'Pagar deuda';
// //     deudaMaxima.appendChild(montoDeuda);
// //     deudaMaxima.appendChild(btnCuotaDeudaMaxima);
// // }

// function divDeudaCuotaTres(){
//     const montoDeudaCuotaTres = document.createElement("h2");
//     montoDeudaCuotaTres.textContent = 'Monto total de su deuda: ' + encontrarDeudaUsuario.deudaTresCuotas;
//     const btnCuotaDeudaCuotaTres = document.createElement("button");
//     btnCuotaDeudaCuotaTres.classList.add("btn");
//     btnCuotaDeudaCuotaTres.classList.add("btn-outline-primary");
//     btnCuotaDeudaCuotaTres.classList.add("p-1");
//     btnCuotaDeudaCuotaTres.textContent = 'Pagar deuda';
//     deudaCuotaTres.appendChild(montoDeudaCuotaTres);
//     deudaCuotaTres.appendChild(btnCuotaDeudaCuotaTres);
// }

// function divDeudaCuotaSeis(){
//     const montoDeudaCuotaSeis = document.createElement("h2");
//     montoDeudaCuotaSeis.textContent = 'Monto total de su deuda: ' + encontrarDeudaUsuario.deudaSeisCuotas;
//     const btnCuotaDeudaCuotaSeis = document.createElement("button");
//     btnCuotaDeudaCuotaSeis.classList.add("btn");
//     btnCuotaDeudaCuotaSeis.classList.add("btn-outline-primary");
//     btnCuotaDeudaCuotaSeis.classList.add("p-1");
//     btnCuotaDeudaCuotaSeis.textContent = 'Pagar deuda';
//     deudaCuotaTres.appendChild(montoDeudaCuotaTres);
//     deudaCuotaTres.appendChild(btnCuotaDeudaCuotaTres);
// }


// divDeudaMaxima()
// divDeudaCuotaTres()