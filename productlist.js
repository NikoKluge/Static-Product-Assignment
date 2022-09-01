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

/*      <article class="smallProduct"><a href="product.html">
                    <img class="images" src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="">
                    <h3 class="name">Sahara Team India Fanwear Round Neck Jersey</h3>
                    <p class="sub"> T-shirt</p>
                    <p class="price"> DKK 200,-</p>
                    <div class="onSale">
                        <p>Now DKK 120,- </p>
                        <p>-34%</p>

                    </div>
                </a>
                
                
                </article> */

function showProduct(product){
//gran the template
const template = document.querySelector("#smalllProductTemplate").content;
//clone it
const copy = template.cloneNode(true);
//change content
copy.querySelector(".sub").textContent = product.brandname + product.articletype;
copy.querySelector(".name").textContent = product.productdisplayname;
copy.querySelector(".price").textContent = "DKK" + product.price+",-";
// if(product.discount){
// copy.querySelector("article").classList.add("onSale");
// copy.querySelector("div p").textContent = "DKK"+product.price/product.discount +",-";
// }

// if(product.soldout){
//     copy.querySelector("article").classList.add(".soldout");
// }

copy.querySelector("img.images").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
//grab parent
const parent = document.querySelector("main");
//append 
parent.appendChild(copy);
}