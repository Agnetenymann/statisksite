console.log("siden vises");

const listContainer = document.querySelector(".brands_list_container");
fetch(`https://kea-alt-del.dk/t7/api/brands/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(brands) {
  console.log(brands);
  let markup = "";
  brands.forEach((brand) => {
    markup += `
      <a href="productlist.html?brand=${brand.brandname}" class="category_list_container_items"> ${brand.brandname} </a>
    `;
  });
  console.log(markup);
  listContainer.innerHTML = markup;
}
