const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

const url = `https://kea-alt-del.dk/t7/api/products/${id}`;



// fetch data
fetch (url)
    .then(res=>res.json())
    .then(data=>showProduct(data))
// populate page 

function showProduct(product){
    console.log(product)
    // document.querySelector(".breadcrumbs .brand").textContent = product.brandname;
    // document.querySelector(".breadcrumbs .productname").textContent = product.productdisplayname;
  


    document.querySelector("section h3").textContent = product.productdisplayname;

    document.querySelector("section .modelname").textContent = product.productdisplayname;
    document.querySelector("section .brandinfo").textContent =product.brandbio;
    document.querySelector("section .color").textContent =product.basecolour;
    document.querySelector("section .inventorynumber").textContent =product.id;
    document.querySelector("section .inventorynumber").textContent =product.id;
    document.querySelector("img.productimage").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;


}



