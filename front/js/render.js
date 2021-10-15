export const renderHomeProduct = (sofa) => {
  const a = document.createElement("a");
  const article = document.createElement("article");
  const img = document.createElement("img");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const urlProduct = `./product.html?id=`;

  // -- Ajout de classes aux éléments créés dynamiquement
  article.classList.add("card__article");
  a.classList.add("card");
  h3.classList.add("productName");
  p.classList.add("productDescription");

  //   Récupération des données de l'API
  a.href = urlProduct + sofa._id;
  img.src = sofa.imageUrl;
  img.alt = sofa.altTxt;
  h3.textContent = sofa.name;
  p.textContent = sofa.description;

  // -- Destination des éléments
  document.getElementById("items").appendChild(a);
  a.appendChild(article);
  article.appendChild(img);
  article.appendChild(h3);
  article.appendChild(p);
};

//
export const renderProductDetail = (product) => {
  const img = document.createElement("img");
  //   Récupération des données de l'API

  img.src = product.imageUrl;
  img.alt = product.altTxt;

  // -- Destination des éléments
  document.getElementsByClassName("item__img")[0].appendChild(img);
  document.getElementById("title").innerText = product.name;
  document.getElementById("price").innerText = product.price + " ";
  document.getElementById("description").innerText = product.description;

  // Boucle forEach pour ajouter toutes les couleurs en option du select en HTML

  product.colors.forEach(function (color) {
    const option = document.createElement("option");
    const select = document.getElementById("colors");

    // Récupération des données de l'API

    option.value = color;
    option.innerText = color;

    // Ajout de l'option à la sélection (select en HTML)

    select.appendChild(option);
  });
};
