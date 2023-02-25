const produtos_div = document.querySelector("#produtos")
const logos = ["https://cdn.shopify.com/s/files/1/0513/8425/4632/files/Logo_Quad_120x.png?v=1666882997","https://cdn.shopify.com/s/files/1/0513/8425/4632/files/Logo_Quad_white_120x.png?v=1666882950"]
const requestURL = "./products.json"
const request = new Request(requestURL)
var dark_state = true

const storage = sessionStorage

let fundos = storage.getItem("fundos")

let arr = [[{"img":"https://via.placeholder.com/750"},{"info":"olha uma raquete aqui"},{"preco":500000}]]


document.querySelector("#darkmode").addEventListener("click", function(){
    if(dark_state){
        document.querySelector("#color-scheme").content = "dark"
        document.querySelector(".logo").src = logos[1]
    }else{
        document.querySelector("#color-scheme").content = "light"
        document.querySelector(".logo").src = logos[0]
    }
    dark_state = !dark_state
})

window.onload = (event) => {
    //fetch(request).then((response) => response.json()).then((data) => data_upload(data))
	data_upload(arr)
}

//setInterval(function(){fetch(request).then((response) => response.json()).then((data) => data_upload(data))},1000)

function data_upload(data){
    var html = ""
	console.log("hi")
    for (let i = 0; i < data.length; i++) {
        html+=`<div class='produto' id='${i}'>`
        html+=`<img src="${data[i][0].img}">`
        html+=`<p class="infos">${data[i][1].info}</p>`
        html+=`<p id="preco">${data[i][2].preco}€</p>`
        html+=`<button onclick="button(${i})">Comprar</button>`
        html+=`</div>`
    }
	document.querySelector("#produtos").innerHTML = html
    
}

function button(id){
    //TODO fazer o handeler dos botoes de compra
}




