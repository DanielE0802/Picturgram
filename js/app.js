const url = `https://api.unsplash.com/photos/?client_id=7tlK20S_-PXvoucU1TQi_CrGfgGhhpoHHDlrlqLIWTA`

let containerImg = document.querySelectorAll("body > main > div > div.main-left > div.main-left-post > div > div.post-img > img")
let autores = document.querySelectorAll("#main > div.main-left > div.main-left-post > div > div.user > p")
let perfilImg = document.querySelectorAll("#main > div.main-left > div.main-left-post > div > div.user > img")
let description = document.querySelectorAll("#main > div.main-left > div.main-left-post > div > div.reactions > div.description")
let date = document.querySelectorAll("#main > div.main-left > div.main-left-post > div > div.reactions > div.date")


callApi = async () => {
    let data = await fetch(url)
    let resp = await data.json()
    return resp
}

let info = callApi()

info.then(response => {
    for (var i = 0; i <= 10; i++) {
        containerImg[i].setAttribute("src", response[i].urls.regular)
        autores[i].innerHTML= "@" + response[i].user.instagram_username
        perfilImg[i].setAttribute("src", response[i].user.profile_image.medium )
        description[i].innerHTML = response[i].alt_description
        date[i].innerHTML = response[i].created_at
    }
}).catch(error => {
    console.error(error);
})