let productId = 1527;
let productOverview = document.querySelector(".product_overview");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    console.log("Product data:", data); // Log fetched data
    productOverview.innerHTML = `
    <div>
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="${data.productdisplayname}" />
        </div>
        <div class="purchase_box">
          <h4> ${data.productdisplayname} </h4>
          <p class="item_brand">${data.articletype} - ${data.brandname}</p>
          <p class="price"><span>Prev.</span>DKK ${data.price}.-</p>
            <div class="on_sale_label ${data.discount && "is_on_sale_label"}">
              <p>-${data.discount}%</p>
            </div>

          <form>
            <label>
              Choose a size:
              <select name="size">
                <option value="OS">Onesize</option>
              </select>
            </label>
            <div><button type="button">Add to basket</button></div>
          </form>

          <section class="product_info">
            <h2>Product information</h2>
            <dl>
              <dt>Model name</dt>
              <dd>${data.productdisplayname}</dd>
              <dt>Season</dt>
              <dd>${data.season}</dd>
              <dt>Category</dt>
              <dd>${data.articletype}</dd>
              <dt>Brand</dt>
              <dd>${data.brandname}</dd>
              <dt>Inventory number</dt>
              <dd>${data.id}</dd>
            </dl>
          </section>
        </div>
    `;
  });

// let productId = 1526;
// let productOverview = document.querySelector(".product_overview");

// fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
//   .then((response) => response.json())
//   .then((data) => {
//     productOverview.innerHTML = `
//     <div>
//           <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="puma rygsæk" />
//         </div>
//         <div class="purchase_box">
//           <h4> ${data.productdisplayname} </h4>
//           <p class="item_brand">${data.articletype} - ${data.brandname}</p>
//           <p class="price">DKK ${data.price}.-</p>
//           <form>
//             <label>
//               Choose a size:
//               <select name="size">
//                 <option value="OS">Onesize</option>

//               </select>
//             </label>
//             <div><button>Add to basket</button></div>
//           </form>

//           <section class="product_info">
//             <h2>Product information</h2>
//             <dl>
//               <dt>Model name</dt>
//               <dd>${data.productdisplayname}</dd>
//               <dt>Season</dt>
//               <dd>${data.season}</dd>
//               <dt>Category</dt>
//               <dd>${data.articletype}</dd>
//               <dt>Brand</dt>
//               <dd>${data.brandname}</dd>
//               <dt>Intentory number</dt>
//               <dd>${data.id}</dd>
//             </dl>
//           </section>
//         </div>
//     `;
//   });
