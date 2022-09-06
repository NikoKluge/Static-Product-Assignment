



const url = `https://kea-alt-del.dk/t7/api/brands`;



// fetch data
fetch (url)
    .then(res=>res.json())
    .then(data=>goThroughEach(data))

//forEach

function goThroughEach(data){
    data.forEach(showBrand);
}

//that function
function showBrand(oneBrand){
    console.log(oneBrand);

    //grad template
const template = document.querySelector("#templatecategory").content;
    //clone 
const copy = template.cloneNode(true);
    //change content
copy.querySelector("a").textContent = oneBrand.brandname;
copy.querySelector("a").href = `productlist.html?brandname=${oneBrand.brandname.id}`;
    //find parent
const parent = document.querySelector(".group ol");
    //append it
parent.appendChild(copy);


}