const urlParams = new URLSearchParams(window.location.search)
console.log(urlParams.get("id"))

let profile = document.querySelector(".profile")
let profileGrid = document.querySelector(".seller-products-grid")

let url = "https://my-json-server.typicode.com/DeBrother112/VovaMarketPlace/db"

let xhr = new XMLHttpRequest()
xhr.open("GET", `${url}users/${id}`)
xhr.responseType = "json"
xhr.onload = () => {
    let user = xhr.response
    profile.innerHTML = `
    <img src="${user.img}" alt="user" class="profile-img">
            <div class="text">
                <h1>${user.name}</h1>
                <h2>${unser.surname}</h2>
                <p>Balance:${user.balance}</p>
            </div>`
}
xhr.send()

let pxhr = new XMLHttpRequest()
pxhr.open("GET", `${url}products?author_id=${id}`)
pxhr.responseType = "json"
pxhr.onload = () => {
    let products = pxhr.response
    profileGrid.innerHTML = ""
    products.forEach((product) => {
        profileGrid.innerHTML += `
        <div class="product">
            <img src="${product.img}" alt="">
            <h2 class="product-name">${product.name}</h2>
            <p class="product-desc">${product.description}</p>
            <div class="price-bar">
                <p class="product-price">${product.price}</p>
                <button onclick=""><i class="fa-solid fa-plus"></i></button>
            </div>
        </div> `
    })
}
pxhr.send()