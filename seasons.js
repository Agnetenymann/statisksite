console.log("siden vises");

const listContainer = document.querySelector(".seasons_list_container");
fetch(`https://kea-alt-del.dk/t7/api/seasons/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(seasons) {
  console.log(seasons);
  let markup = "";
  seasons.forEach((season) => {
    markup += `
      <a href="productlist.html?season=${season.season}" class="category_list_container_items pulse"> ${season.season} </a>
    `;
  });
  console.log(markup);
  listContainer.innerHTML = markup;
}
