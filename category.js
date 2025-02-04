const listContainer = document.querySelector("main");
fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  // ?limit=100
  .then((response) => response.json())
  .then(showProductList);

function showProductList(data) {
  const markup = data
    .map(
      (product) => `
<a href="productlist.html" class="category_list_container_items">§{product.category}</a>
      `
    )
    .join("");
  listContainer.innerHTML = markup;
}
