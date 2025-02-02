let productId = 1526;
let productOverview = document.querySelector(".product_overview");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productOverview.innerHTML = `
    <div>
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="puma rygsæk" />
        </div>
        <div class="purchase_box">
          <h4> ${data.productdisplayname} </h4>
          <p class="item_brand">${data.articletype} - ${data.brandname}</p>
          <p class="price">DKK ${data.price}.-</p>
          <form>
            <label>
              Choose a size:
              <select name="size">
                <option value="OS">Onesize</option>
            
              </select>
            </label>
            <div><button>Add to basket</button></div>
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
              <dt>Intentory number</dt>
              <dd>${data.id}</dd>
            </dl>
          </section>
        </div>
    `;
  });
