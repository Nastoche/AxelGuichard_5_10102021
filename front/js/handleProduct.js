export const handleAddProduct = (data) => {
  const color = document.getElementById("colors").value;
  const productQty = document.getElementById("quantity").value;
  let savedProduct = JSON.parse(localStorage.getItem("product"));
  const pageProductId = data._id;

  // Création de l'objet pour le produit sélectionné
  let productObj = {
    productId: pageProductId,
    productColor: color,
    productQty: productQty,
  };

  // Si aucune couleur n'est choisie OU que la quantité est nulle alors ne rien faire
  if (color == "" || productQty == "0") {
    return;
  }

  // Si le local storage contient des produits, alors trouver l'index du produit sélectionné
  // afin d'y injecter la quantité uniquement si la couleur choisie est identique

  if (savedProduct) {
    const indexId = savedProduct.findIndex(
      (product) =>
        product.productId === pageProductId && product.productColor === color
    );

    if (indexId === -1) {
      // Ajouter la quantité uniquement à l'objet existant
      // savedProduct[indexId].productQty = xxxx;
    } else {
      // push l'objet entier dans le tableau
      // savedProduct.push(xxx);
    }
    //   if (indexId !== indexColor) {
    //     savedProduct.push(productObj);
    //     localStorage.setItem("product", JSON.stringify(savedProduct));
    //     alert("Article ajouté au panier");
    //     location.href = "http://127.0.0.1:5501/front/html/cart.html";
    //   } else {
    //     savedProduct.push(productObj);
    //     localStorage.setItem("product", JSON.stringify(savedProduct));
    //     alert("Article ajouté au panier");
    //     location.href = "http://127.0.0.1:5501/front/html/cart.html";
    //   }
    // } else {
    //   savedProduct = [];
    //   savedProduct.push(productObj);
    //   localStorage.setItem("product", JSON.stringify(savedProduct));
    //   alert("Article ajouté au panier");
    //   location.href = "http://127.0.0.1:5501/front/html/cart.html";
    // }

    // if (savedProduct == null) {
    //   savedProduct = [];
    // savedProduct.push(productObj);
    // localStorage.setItem("product", JSON.stringify(savedProduct));
    // alert("Article ajouté au panier");
    // location.href = "http://127.0.0.1:5501/front/html/cart.html";
  }
};
