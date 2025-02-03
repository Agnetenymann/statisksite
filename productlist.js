const category = "Apparel";

const listContainer = document.querySelector("main");
fetch(`https://kea-alt-del.dk/t7/api/products/`)
  // ?limit=100
  .then((response) => response.json())
  .then(showProductList);

function showProductList(data) {
  const markup = data
    .map(
      (product) => `
            <article class="product-normal product">
          <a href="product.html">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="sort rygsæk" />
            <h3>${product.productdisplayname}</h3>
            <p class="item_brand">${product.articletype} - ${product.brandname}</p>
            <p class="price"><span>Prev.</span> DKK ${product.price}.-</p>
            <div class="discount">
              <p>Now DKK 857.-</p>
              <p>-34%</p>
            </div>
            <a href="product.html">Shop Now</a>
          </a>
        </article>
        `
    )
    .join("");
  listContainer.innerHTML = markup;
}
