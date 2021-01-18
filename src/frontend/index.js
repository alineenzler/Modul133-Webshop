async function startup() {
    const products = (await (await fetch("/Allproducts")).json()).data;
    const ProductList = document.getElementById("productItem");
    for(const product of products){
        ProductList.insertAdjacentHTML(`beforeend`, `
        <div class="col-md-3">
        <div id="${product.id}">
            <img class="product-image" src="/Design/Bilder/${product.image}">
            <b>${product.productName}</b>
            <div>CHF ${product.specialOfferPrice.toFixed(2)} <old>CHF ${product.normalPrice.toFixed(2)}</old></div>
        </div>
        </div>
        `);
    } 
     
}

startup();