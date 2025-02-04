const listContainer = document.querySelector(".grid_1-1-1-1");
const getUrl = window.location.search;
const getSearch = new URLSearchParams(getUrl);
const category = getSearch.get("category");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}`)
  .then((response) => response.json())
  .then(showProductList);

function showProductList(data) {
  const markup = data
    .map(
      (product) => `
            <article class="product_card">
                 <a href="product.html?productId=${product.id}">
                 <div class="container">
              <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="blå t-shirt" />
              <div class="sold_out ${product.soldout && "sold_out_true"}">SOLD OUT</div>
            </div>
            <h3>${product.productdisplayname}</h3>
            <p class="item_brand">${product.articletype} - ${product.brandname}</p>
            <p class="price"> <span class="on_sale_prev ${product.discount && "on_sale_prev_true"}" >Prev.</span> DKK ${product.price}.-</p>
            <div class="on_sale ${product.discount && "is_on_sale"} ">
            <p> <span class="price_now"> Now </span> ${product.price}</p>
              <p>-${product.discount}%</p>
            </div>
            <a href="product.html">Shop Now</a>
          </a>
        </article>
        `
    )
    .join("");
  listContainer.innerHTML = markup;
}
