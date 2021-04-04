
setInterval(() => {
    let bar = document.getElementById('bar')
    if (screen.width > 700) {
        bar.classList.add('display-none')
    }
    else{
        bar.classList.remove('display-none')
    }


}, 500);