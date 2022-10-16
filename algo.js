const $btnSignIn = document.querySelector('.sign-in-btn'),
    $btnSignUp = document.querySelector('.sign-up-btn'),
    $signUp = document.querySelector('.sign-up'),
    $signIn = document.querySelector('.sign-in'),
    $btnSignUpData = document.getElementById("btn-data"),
    $name = document.getElementById("Name"),
    $password = document.getElementById("Password"),
    $email = document.getElementById("Email"),
    $imputEmail = document.getElementById("imput-email"),
    $imputContraseña = document.getElementById("imput-contraseña"),
    $btnInicioSesion = document.getElementById("btn-inicio-sesion"),
    $error = document.getElementById("error");

    let lista_Usuarios_Parse = JSON.parse(localStorage.getItem("Usuarios"));

class Usuario {
    constructor(nombre, contraseña, mail, deuda, deudaUnaCuota, deudaTresCuotas, deudaSeisCuotas, deudaNueveCuotas) {

        this.nombre = nombre;
        this.contraseña = contraseña;
        this.mail = mail;
        this.deuda = deuda;
        this.deudaUnaCuota = deudaUnaCuota;
        this.deudaTresCuotas = deudaTresCuotas;
        this.deudaSeisCuotas = deudaSeisCuotas;
        this.deudaNueveCuotas = deudaNueveCuotas;
    }
}


let lista_Usuarios = [];
console.log(lista_Usuarios)

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
    }
});

$signUp.classList.add('bounce');
$signUp.classList.add('bounce');

$btnSignUpData.addEventListener("click", (e) => {
    e.preventDefault();
    if ($name.value != "" && $password.value != "" && $email.value != "") {
        let nuevoUsuario = new Usuario($name.value, $password.value, $email.value, 0, 0, 0, 0, 0, 0);
        lista_Usuarios.push(nuevoUsuario);
        let lista_Usuarios_JSON = JSON.stringify(lista_Usuarios);
        localStorage.setItem("Usuarios", lista_Usuarios_JSON);
        Swal.fire({
            icon: 'success',
            title: 'Usuario creado correctamente',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
    }

});

$btnInicioSesion.addEventListener("click", (e) => {
    e.preventDefault();
    let us = $imputEmail.value;
    let ps = $imputContraseña.value;

    for (let user of lista_Usuarios_Parse) {
        if (us == user.mail && ps == user.contraseña) {
            let UsuarioActivo = $imputEmail.value;
            let UsuarioActivoJson = JSON.stringify(UsuarioActivo)
            localStorage.setItem("Usuario Activo", UsuarioActivoJson)
            window.location.href = "loan.html";
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Usuario incorrecto',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
        }
    }
})

/* else if($email.value = mailsUsuarios){
        $email.style.borderColor = "red";
    } 
let mailsUsuarios = lista_Usuarios_Parse.map((el) => el.mail ); */

/* for( let i = 0 ; i < 2 ; i++){

    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("ingrese su apellido");
    let dni = prompt("Ingrese su DNI");
        let prestamo = parseFloat(prompt("Cuanto dinero quiere solicitar: . Si desea salir, escriba 0")) 
    let cuotas_prestamo = parseInt(prompt("Cuantas cuotas quiere pagarlo, 3/6/9/12. 3 cuotas 5% recargo, 6 7% recargo, 9 10% recargo, 12 15% recargo"))
    function calcular_prestamo(){
    if (cuotas_prestamo == 3){
    let porcentaje_tres = (((prestamo * 5) / 100) + prestamo);
    return porcentaje_tres;
    }
    else if (cuotas_prestamo == 6){
        let porcentaje_seis = (((prestamo * 7) / 100) + prestamo);
        return porcentaje_seis; 
    }
    else if (cuotas_prestamo == 9){
        let porcentaje_nueve = (((prestamo * 10) / 100) + prestamo);
        return porcentaje_nueve;
    }
    else if (cuotas_prestamo == 12){
        let porcentaje_doce = (((prestamo * 15) / 100) + prestamo);
        return porcentaje_doce;
    }
    else{
        alert("Monto de cuotas equivocado.")
    }
}
	calcular_prestamo();
    let deuda = calcular_prestamo();
    let nueva_Persona = new Personas(nombre , apellido , dni, deuda);
    lista_Personas.push( nueva_Persona);    
}

console.log(lista_Personas)

const buscar_nombre = lista_Personas.find ((el) => el.nombre === "Juan")
const deuda_filtrado = lista_Personas.filter ((el) => el.deuda > 10000)

console.log(buscar_nombre)

console.log( deuda_filtrado );

$btnSignUpData.addEventListener("click", registroPersonas)
function registroPersonas(){
    let nombre = $name.value;
    let contraseña = $password.value;
    let mail = $email.value;
    while(nombre != ""){
    let nueva_Persona = new Personas(nombre , contraseña, mail);
    lista_Personas.push( nueva_Persona);}  
    $signIn.classList.toggle('active');  
    $signUp.classList.toggle('active');
};

*/