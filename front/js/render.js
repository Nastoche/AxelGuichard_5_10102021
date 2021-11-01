import { fetchProductById } from "./fetcher.js";

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

// export const renderCartProduct = (productInCart) => {
//   let savedProduct = JSON.parse(localStorage.getItem("product"));
//   if (savedProduct !== null) {
//     const article = document.createElement("article");
//     const div = document.createElement("div");
//     const img = document.createElement("img");
//     const h2 = document.createElement("h2");
//     const p = document.createElement("p");

//     // -- Ajout de classes aux éléments créés dynamiquement
//     article.classList.add("cart__item");

//     // Récupération des données API pour les sources

//     console.log("Produits dans le panier :");
//     console.log(savedProduct);

//     // test de parse etc
//     const productName = localStorage.getItem(
//       "product",
//       JSON.parse(savedProduct.productName)
//     );
//   } else {
//     console.log("Panier vide");
//   }
// };

// CART RENDER PAGE -------------------------------

export const renderCartPage = async () => {
  let savedProduct = JSON.parse(localStorage.getItem("product"));
  if (!savedProduct) {
    const emptyCart = document.querySelector("h1");
    emptyCart.innerHTML = emptyCart.innerText + " est vide.";
  } else {
    const allProductsPrice = [];
    savedProduct.forEach((productItem, i) => {
      let productId = productItem.productId;
      let productColor = productItem.productColor;
      let productQty = productItem.productQty;

      const data = fetchProductById(productId); // promesse en cours
      allProductsPrice.push(data);
      // console.log(data);

      // Déclaration des constantes HTML
      const cartItems = document.getElementById("cart__items");
      const article = document.createElement("article");
      const divImg = document.createElement("div");
      const divContent = document.createElement("div");
      const divContentInfo = document.createElement("div");
      const divSettings = document.createElement("div");
      const divSettingsQty = document.createElement("div");
      const divSettingsDelete = document.createElement("div");
      const img = document.createElement("img");
      const h2 = document.createElement("h2");
      let pPrice = document.createElement("p");
      const pColor = document.createElement("p");
      let pQty = document.createElement("p");
      const pDel = document.createElement("p");
      const inputQty = document.createElement("input");

      //   Récupération données API
      data.then((priceData) => {
        console.log("priceData", priceData);
        // priceData === await fetchProductById => on a attendu => promesse résolue
        const productPrice = priceData.price;
        const totalProductPrice = productPrice * productQty;

        img.src = priceData.imageUrl;
        img.alt = priceData.altTxt;
        pPrice.innerText = totalProductPrice + " €";
        pColor.innerText = productColor;
        pQty.innerText = productQty;
        pDel.innerText = "Supprimer";
        h2.innerText = priceData.name;

        //   Mise en page
        cartItems.appendChild(article);
        article.appendChild(divImg);
        divImg.appendChild(img);
        article.appendChild(divContent);
        divContent.appendChild(divContentInfo);
        divContent.appendChild(divSettings);
        divSettings.appendChild(divSettingsQty);
        divSettingsQty.appendChild(pQty);
        divSettingsQty.appendChild(inputQty);
        divSettings.appendChild(divSettingsDelete);
        divSettingsDelete.appendChild(pDel);
        divContentInfo.appendChild(h2);
        divContentInfo.appendChild(pPrice);
        divContentInfo.appendChild(pColor);

        //  Ajout de classes aux éléments créés dynamiquement
        article.classList.add("cart__item");
        divImg.classList.add("cart__item__img");
        divContent.classList.add("cart__item__content");
        divContentInfo.classList.add("cart__item__content__titlePrice");
        divSettings.classList.add("cart__item__content__settings");
        divSettingsQty.classList.add("cart__item__content__settings__quantity");
        divSettingsDelete.classList.add(
          "cart__item__content__settings__delete"
        );
        pDel.classList.add("deleteItem");
        inputQty.classList.add("inputQty");

        //   Attributs
        article.setAttribute(`data-id`, `${productId}`);
        inputQty.setAttribute("type", "number");
        inputQty.setAttribute("name", "itemQuantity");
        inputQty.setAttribute("min", "1");
        inputQty.setAttribute("max", "100");
        inputQty.setAttribute("value", `${productQty}`);

        let newInputQty = inputQty;
        // Changer dynamiquement la quantité produit sur la page panier
        newInputQty.addEventListener("input", function () {
          pQty.innerText = this.value;
          pPrice.innerText = productPrice * this.value + " €";
          productItem.productQty = this.value;
          console.log(savedProduct);
          localStorage.setItem("product", JSON.stringify(savedProduct));
          setTimeout(function () {
            document.location.reload(true);
          }, 500);
        });

        // Suppression d'un produit du panier (et donc du local storage)
        pDel.addEventListener("click", () => {
          savedProduct.splice(i, 1);
          localStorage.setItem("product", JSON.stringify(savedProduct));
          alert("Produit supprimé du panier");
          document.location.reload(true);
        });
      });
    });
    console.log("MERDE ON ATTEND ENCORE API", allProductsPrice);

    // Récupération du prix total de façon sécurisée en appelant l'API pour récupérer
    // les prix et les multiplier par les quantités demandées par le client
    function totalPriceRender(total) {
      const totalPrice = document.getElementById("totalPrice");
      totalPrice.innerText = total;
    }
    Promise.all(allProductsPrice).then((allProductsResolved) => {
      let total = 0;
      const savedProduct = JSON.parse(localStorage.getItem("product"));
      // localStorage
      allProductsResolved.forEach((product) => {
        // ==> productId, price, img
        const elementFound = savedProduct.find(
          (element) => element.productId === product._id
        );
        // productID = 2345 ===> savedProduct ???
        // savedProduct : localStorage
        // = [{productId: 1}, {productId: 2}, {productId: 3}];
        // {} => "product"
        total = total + product.price * elementFound.productQty;
      });
      console.log("SUPER TOUT EST RESOLU", allProductsResolved);
      totalPriceRender(total);
    });
  }
};

// Implémentation du numéro de commande ainsi que du montant total final
export const renderConfirmPage = () => {
  const orderIdSpan = document.getElementById("orderId");
  const storedPrice = JSON.parse(localStorage.getItem("totalPrice"));

  orderIdSpan.innerHTML = `<br>D'un montant total de ${storedPrice}€`;
};
