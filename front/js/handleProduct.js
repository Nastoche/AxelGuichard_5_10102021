const pushToCart = (savedProduct, productObj) => {
  savedProduct.unshift(productObj);
  localStorage.setItem("product", JSON.stringify(savedProduct));
  alert("Article ajouté au panier");
  location.href = "http://127.0.0.1:5502/front/html/cart.html";
};

export const handleAddProduct = (data) => {
  const colorInput = document.getElementById("colors").value;
  const productInputQty = document.getElementById("quantity").value;
  let savedProduct = JSON.parse(localStorage.getItem("product"));
  const pageProductId = data._id;
  console.log(savedProduct);

  // Création de l'objet pour le produit sélectionné
  let productObj = {
    productId: pageProductId,
    productColor: colorInput,
    productQty: Number(productInputQty),
  };

  // Si aucune couleur n'est choisie OU que la quantité est nulle alors ne rien faire
  if (colorInput == "" || productInputQty == "0") {
    return;
  }

  // Si le local storage contient des produits, alors trouver l'index du produit sélectionné
  // afin d'y injecter la quantité uniquement si la couleur choisie est identique

  if (savedProduct) {
    const indexId = savedProduct.find(
      (element) => element.productId === pageProductId
    );
    const indexColor = savedProduct.find(
      (element) => element.productColor === colorInput
    );
    const index = indexId && indexColor;

    if (index) {
      const numberProductInputQty = Number(productInputQty);
      index.productQty = Number(index.productQty) + numberProductInputQty;
      localStorage.setItem("product", JSON.stringify(savedProduct));
      alert("Article ajouté au panier");
      location.href = "http://127.0.0.1:5502/front/html/cart.html";
    } else {
      pushToCart(savedProduct, productObj);
    }
  } else {
    savedProduct = [];
    pushToCart(savedProduct, productObj);
  }
};
