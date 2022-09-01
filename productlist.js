const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
    .then(function(res) {
        return res.json();

    })
    .then(function(data){
        handleProductList(data);
    })

function handleProductList(data){
    console.log(data);
    data.forEach(showProduct)
}

/* <article class="smallProduct"><a href="product.html">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="">
        <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
        <p class=" sub"> T-shirt</p>
        <p class="price"> DKK 200,-</p></a>                
    </article> */

function showProduct(product){
//gran the template
const template = document.querySelector("#smalllProductTemplate").content;
//clone it
const copy = template.cloneNode(true);
//change content
copy.querySelector(".sub").textContent = product.articletype;
copy.querySelector(".name").textContent = product.brandname;
copy.querySelector(".price").textContent = product.price;
copy.querySelector("img").scr = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`
//grab parent
const parent = document.querySelector("main");
//append 
parent.appendChild(copy);
}