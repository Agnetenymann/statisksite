console.log("siden vises");

const listContainer = document.querySelector(".category_list_container");
fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += `
        <a href="productlist.html?category=${product.category}" class="category_list_container_items pulse"> ${product.category} </a>
      `;
    })
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}

const markup = data;
