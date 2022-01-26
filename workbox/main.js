async function getJson(){
    const url = 'http://127.0.0.1:3000/workertest'
    const res = await fetch(url,{
        method:'GET',
        mode:'cors'
    })
    const json = await res.json()
    console.log(json)
}

const imgBtn = document.getElementById('img');
const jsonBtn = document.getElementById('json');

var shopImg = document.createElement('img')
shopImg.src = './default.png'
imgBtn.onclick = function(){
    var shopImg = document.createElement('img')
    shopImg.src = './images/waimai.png'
    shopImg.width = 50;
    document.body.appendChild(shopImg)
}

jsonBtn.onclick = function(){
    getJson();
}