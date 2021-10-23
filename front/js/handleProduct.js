export const handleAddProduct = (data) => {
  const color = document.getElementById("colors").value;
  const productQty = document.getElementById("quantity").value;
  const price = document.getElementById("price").innerText;

  let savedProduct = JSON.parse(localStorage.getItem("product"));

  // Création de l'objet pour le produit sélectionné
  let productObj = {
    productId: data._id,
    productColor: color,
    productQty: productQty,
  };

  // Si aucune couleur n'est choisie OU que la quantité est nulle alors ne rien faire
  if (color == "" || productQty == "0") {
    return;
  }

  if (savedProduct) {
    // Si le local storage n'est pas vide
    savedProduct.push(productObj);
    localStorage.setItem("product", JSON.stringify(savedProduct));
    alert("Article ajouté au panier");
    console.log(savedProduct);
  } else {
    // Si le local storage est vide, créer un tableau et envoyer les données de chaque objet
    savedProduct = [];

    savedProduct.push(productObj);
    localStorage.setItem("product", JSON.stringify(savedProduct));
    alert("Article ajouté au panier");
    console.log(savedProduct);
  }
};
