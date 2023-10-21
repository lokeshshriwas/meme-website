const img = document.getElementById("image")
const author = document.querySelector(".creator")
const btn = document.getElementById("btn")
const url = "https://meme-api.com/gimme"
const title = document.querySelector(".title")

window.addEventListener("load", meme())

async function meme(){
    const res = await fetch(url)
    const main = await res.json()
    inject(main)
}

function inject(content){
    img.src = content.url
    author.innerText = `Author: ${content.author}`
    title.innerText = content.title
}


btn.addEventListener("click", function (){
    meme()
})
