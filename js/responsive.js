

let main = document.getElementById('main')
let inicio = document.getElementById('iniciar')
let entrar = document.getElementById('entrar')
let header = document.getElementById('header')
let logo = document.getElementById('logo')
let bar = document.getElementById('bar')

entrar.addEventListener('click', function(){
    inicio.classList.add('display-none')
    main.classList.remove('display-none')
    header.classList.remove('display-none')

    
}
)






setInterval(() => {
    let valorInicio = inicio.className
    if (screen.width > 700 ) {
        bar.classList.add('display-none')
    }
    else{
        if( valorInicio !== "main-inicio display-none"){
            bar.classList.add('display-none')
           
        }
        else{
            bar.classList.remove('display-none')
        }
    }


}, 200);


function mainAInicio(){
 
}

logo.addEventListener('click',function(){
    inicio.classList.remove('display-none')
    main.classList.add('display-none')
    header.classList.add('display-none')
})