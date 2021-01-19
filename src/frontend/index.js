async function startup() {
    const products = (await (await fetch("/product")).json()).data;
    const ProductList = document.getElementById("productItem");
    for(const product of products){
        const div = document.createElement("div");
        div.classList.add("col-md-3");
        div.innerHTML = `   <div class="pointer" id="${product.id}">
                            <img class="product-image" src="/Design/Bilder/${product.image}">
                            <b>${product.productName}</b>
                            <div>CHF ${product.specialOfferPrice.toFixed(2)} 
                            <old>CHF ${product.normalPrice.toFixed(2)}</old></div>
                            </div>`;
        ProductList.append(div)
        div.addEventListener ("click", () => {
            window.location.href = "/product.html?pid=" + product.id;
        })
    } 
     
}

startup();