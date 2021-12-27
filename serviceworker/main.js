async function getJson(){
    const url = 'http://127.0.0.1:3000/workertest'
    const res = await fetch(url,{
        method:'GET',
        mode:'cors'
    })
    const json = await res.json()
    console.log(json)
}

const swBtn = document.getElementById('sw');
var shopImg = document.createElement('img')
shopImg.src = './default.png'
swBtn.onclick = function(){
    getJson();
    var shopImg = document.createElement('img')
    shopImg.src = './shop.jpg'
    document.body.appendChild(shopImg)
}