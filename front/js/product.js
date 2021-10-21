import { fetchProductById } from "./fetcher.js";
import { renderProductDetail } from "./render.js";

const addBtn = document.getElementById("addToCart");

const renderProductPage = async () => {
  const data = await fetchProductById();
  // console.log(data);
  renderProductDetail(data);

  // J'écoute le click sur le bouton 'Ajouter au panier'
  addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const color = document.getElementById("colors").value;
    const productQty = document.getElementById("quantity").value;
    const price = document.getElementById("price").innerText;
    let savedProduct = JSON.parse(localStorage.getItem("product"));

    // Fonction d'ajout d'un objet produit au local storage
    const addToLocalStorage = () => {
      savedProduct.push(productObj);
      localStorage.setItem("product", JSON.stringify(savedProduct));
      alert("Article ajouté au panier");
    };

    // Création de l'objet pour le produit sélectionné
    let productObj = {
      productId: data._id,
      productName: data.name,
      productColor: color,
      productPrice: price * productQty,
      productQty: productQty,
    };

    // Si aucune couleur n'est choisie OU que la quantité est nulle alors ne rien faire
    if (color == "" || productQty == "0") {
      return null;
    }

    if (savedProduct) {
      // Si le local storage n'est pas vide
      addToLocalStorage();
      console.log(savedProduct);
    } else {
      // Si le local storage est vide, créer un tableau et envoyer les données de chaque objet
      savedProduct = [];
      addToLocalStorage();
      console.log(savedProduct);
    }
  });
};
renderProductPage();
