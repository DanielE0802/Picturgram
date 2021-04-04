let main = document.getElementById('main')
let inicio = document.getElementById('iniciar')
let entrar = document.getElementById('entrar')
let header = document.getElementById('header')
let logo = document.getElementById('logo')
let bar = document.getElementById('bar')
let inputs = document.querySelectorAll("#iniciar > div.main-right > div.main-right-top > div.main-form > form > input[type=text]")
let nombre = document.querySelector("#main > div.main-right > div.main-right-user > div > span:nth-child(1)")
let user= document.querySelector("#main > div.main-right > div.main-right-user > div > span:nth-child(2)")



entrar.addEventListener('click', function () {
    let valorInput1 = inputs[0].value
    let valorInput2 = inputs[1].value
    if (valorInput1 != "") {

        inicio.classList.add('display-none')
        main.classList.remove('display-none')
        header.classList.remove('display-none')

        nombre.innerHTML = valorInput1
        user.innerHTML ="<br> " +"@" + valorInput1;

        let timerInterval
        Swal.fire({
          title: 'Bienvenido!',
          icon:"success",
          timer: 2500,
          timerProgressBar: true,
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
          }
        })
    } else {
        Swal.fire({
            title: "Oops...",
            text:"Por favor ingrese un nombre de usuario",
            icon: "error",
            
        })

    }
})




setInterval(() => {
    let valorInicio = inicio.className
    if (screen.width > 700) {
        bar.classList.add('display-none')
    } else {
        if (valorInicio !== "main-inicio display-none") {
            bar.classList.add('display-none')

        } else {
            bar.classList.remove('display-none')
        }
    }


}, 200);


function mainAInicio() {

}

logo.addEventListener('click', function () {
    inicio.classList.remove('display-none')
    main.classList.add('display-none')
    header.classList.add('display-none')
})