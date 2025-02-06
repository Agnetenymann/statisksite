const listContainer = document.querySelector(".grid_1-1-1-1");
const getUrl = window.location.search;
const getSearch = new URLSearchParams(getUrl);
const category = getSearch.get("category");
const brand = getSearch.get("brand");
const season = getSearch.get("season");

let apiUrl = "https://kea-alt-del.dk/t7/api/products?limit=150";

if (category) {
  apiUrl += `&category=${category}`;
}

if (brand) {
  apiUrl += `&brandname=${brand}`;
}

if (season) {
  apiUrl += `&season=${season}`;
}

fetch(apiUrl)
  .then((response) => response.json())
  .then(showProductList)
  .catch((error) => console.error("Error fetching data:", error));

function showProductList(data) {
  const markup = data
    .map(
      (product) => `
        <article class="product_card">
          <a href="product.html?productId=${product.id}">
            <div class="container">
              <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
              <div class="sold_out ${product.soldout ? "sold_out_true" : ""}">SOLD OUT</div>
            </div>
            <div class="info_box"> 
              <h3>${product.productdisplayname}</h3>
              <p class="item_brand">${product.articletype} - ${product.brandname}</p>
              <p class="productPrice2">${product.discount ? `<span class="originalPrice2"> DKK ${product.price} </span> <span class="discountPrice2">${(product.price * (1 - product.discount / 100)).toFixed(2)} DKK</span>` : `${product.price} DKK`}</p>
              <div class="on_sale ${product.discount ? "is_on_sale" : ""}">
                <p class="procent_text">-${product.discount}%</p>
              </div>
              <p class="readmore">Shop Now</p>
            </div>
          </a>
        </article>
      `
    )
    .join("");
  listContainer.innerHTML = markup;
}
