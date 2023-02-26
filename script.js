const produtos_div = document.querySelector("#produtos")
const logos = ["https://cdn.shopify.com/s/files/1/0513/8425/4632/files/Logo_Quad_120x.png?v=1666882997","https://cdn.shopify.com/s/files/1/0513/8425/4632/files/Logo_Quad_white_120x.png?v=1666882950"]
const requestURL = "products.json"
const request = new Request(requestURL)
var dark_state = true
let carrinho = []
let preco = 0

const check = document.querySelector("#toggle")
check.addEventListener("change", function(){
    if(check.checked){
        document.querySelector("#color-scheme").content = "dark"
        document.querySelector(".logo").src = logos[1]
        document.querySelector(".carrinho").src = "./126510_w.png"
    }else{
        document.querySelector("#color-scheme").content = "light"
        document.querySelector(".logo").src = logos[0]
        document.querySelector(".carrinho").src = "./126510.png"
    }
})

window.onload = (event) => {
    fetch(request).then((response) => response.json()).then((data) => data_upload(data))
}

//setInterval(function(){fetch(request).then((response) => response.json()).then((data) => data_upload(data))},1000)

function data_upload(data){
    var html = ""
	console.log("hi")
    for (let i = 0; i < data.length; i++) {
        html+=`<div class='produto' id='${i}'>`
        html+=`<img src="${data[i].img}">`
        html+=`<p class="infos">${data[i].info}</p>`
        html+=`<p id="preco">${data[i].preco}€</p>`
        html+=`<button class="compra" onclick="button(${i})">Comprar</button>`
        html+=`</div>`
    }
	document.querySelector("#produtos").innerHTML = html
    
}

function button(id){
    fetch(request).then((response) => response.json()).then((data) =>{
        let item = data[id]
        if(confirm(`Quer adicionar ${item.info} ao carrinho`)){
            alert("Adicionado com sucesso")
            carrinho.push(item.info)
            preco += item.preco
            document.querySelector(".numero").innerHTML = new String(preco) + " €"
        }
    })
}

function carrinho_show(){
    if(carrinho[0] != null){
        let items = "No carrinho tem: \n"
        carrinho.forEach(e => {
            items += new String(new String(e) + "\n")
        })
        alert(items)
    }else{
        alert("Nada no carrinho")
    }
}