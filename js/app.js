const url = `https://api.unsplash.com/photos/?client_id=7tlK20S_-PXvoucU1TQi_CrGfgGhhpoHHDlrlqLIWTA`

let containerImg = document.querySelectorAll("body > main > div > div.main-left > div.main-left-post > div > div.post-img > img")


callApi = async  () => {
    let data = await fetch (url)
    let resp = await data.json()
    return resp
}

let info = callApi()

info.then(response => {
    for (var i = 0; i <= 10; i++) {
        containerImg[i].setAttribute("src", response[i].urls.regular)
    }
}).catch(error => {
    console.error(error);
})

