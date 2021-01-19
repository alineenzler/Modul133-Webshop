async function fetchProduct(){
    const productId = getParameterByName("pid");
    
    const response = await fetch("/product/" + productId);
    const productData = await response.json();
    const bodyElement = document.getElementById("detailItem");
    const div = document.createElement("div");
    div.innerHTML += `  <div class="col-md-6">
                                <img class="detailproduct-image" src="/Design/Bilder/${productData.image}">
                                </div>
                                <div class="col-md-6">
                                <b class="detailtitle">${productData.productName}</b>
                                <div>CHF ${productData.specialOfferPrice.toFixed(2)} 
                                <old>CHF ${productData.normalPrice.toFixed(2)}</old></div>
                                <div class="detailtext"> ${productData.description}</div>
                                </div>`

const addToButton = document.createElement("button");
    addToButton.addEventListener("click", async () => {
       const result = await fetch("/basket", {
           method: "put",
           body: "productId="+product.id,
           headers: {
               'Content-Type': 'application/x-www-form-urlencoded',
           }
       });
        console.log(await result.json())
    });
    addToButton.innerText = "Dem Warenkorb hinzufügen";
    div.append(addToButton);
    bodyElement.append(div);
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[[]]/g, '\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

fetchProduct().then();