export const calculateTotalCart = (allProductsPrice) => {
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
    console.log("Promesses résolues :", allProductsResolved);
    totalPriceRender(total);
  });
};
