const productId = new URLSearchParams(window.location.search).get("productId");
const productOverview = document.querySelector("main");

if (productId) {
  fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Product data:", data); // Log fetched data
      productOverview.innerHTML = `
        <div class="brødkrumme"> 
          <p><a href="index.html">Home</a> > <a href="index.html">${data.category}</a> > <a href="brands.html">${data.brandname}</a> > ${data.productdisplayname}</p>
        </div>
        <div class="product_overview">
          <div>
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="${data.productdisplayname}" />
          </div>
          <div class="purchase_box">
            <h4> ${data.productdisplayname} </h4>
            <p class="item_brand">${data.articletype} - ${data.brandname}</p>
            <p class="productPrice">${data.discount ? `<span class="originalPrice"> ${data.price} DKK</span> <span class="discountPrice">${(data.price * (1 - data.discount / 100)).toFixed(2)} DKK</span>` : `${data.price} DKK`}</p>
            <form>
              <label>
                Choose a size:
                <select name="size">
                  <option value="OS">XS</option>
                  <option value="OS">S</option>
                  <option value="OS">M</option>
                  <option value="OS">L</option>
                  <option value="OS">XL</option>
                </select>
              </label>
              <div class="add_to_basket ${data.soldout && "no_scale"}">
                <a href="" class="${data.soldout && "hidden2"}"><p>Add to basket</p></a>
                <p class="hidden2 ${data.soldout && "visible2"}">Sold Out</p>
              </div>
            </form>
            
           <div class="brand_img_bio">
            <img src="${data.brandimage}" class="brand_img hidden ${data.brandimage && "visible"}"/>
            <p class="middle hidden ${data.brandbio && "visible"}">${data.brandbio}</p>
          </div>

          <section class="product_info">
            <div>
              <h2>Product information</h2>
              <dl>
               <dt>Model name</dt>
               <dd>${data.productdisplayname}</dd>
               <dt>Category</dt>
               <dd>${data.articletype}</dd>
               <dt>Brand</dt>
               <dd>${data.brandname}</dd>
               <dt>Inventory number</dt>
               <dd>${data.id}</dd>
             </dl>
            </div>

          </section>
          </div>
        </div>
      `;
    })
    .catch((error) => {
      console.error("Error fetching product data:", error);
    });
} else {
  console.error("Product ID not found in URL");
}
