const urlParams = new URLSearchParams(window.location.search);
const brandname = urlParams.get("brandname");
console.log(brandname);

const url = `https://kea-alt-del.dk/t7/api/products?limit=100&=${brandname}`;


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


function showProduct(product){

//gran the template
const template = document.querySelector("#smalllProductTemplate").content;
//clone it
const copy = template.cloneNode(true);
//change content
copy.querySelector("a").href=`product.html?id=${product.id}`;
copy.querySelector(".sub").textContent = product.brandname + product.articletype;
copy.querySelector(".name").textContent = product.productdisplayname;
copy.querySelector(".price").textContent = "DKK" + product.price+",-";
copy.querySelector("img.images").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
//grab parent
const parent = document.querySelector("main");
//append 
parent.appendChild(copy);
}