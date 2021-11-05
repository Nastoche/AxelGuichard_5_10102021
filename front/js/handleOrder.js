import { fetchPostOrder } from "./fetcher.js";

let savedProduct = JSON.parse(localStorage.getItem("product"));
console.log(savedProduct);
export const order = () => {
  const orderBtn = document.getElementById("order");
  const regexName =
    /^(?=.{1,50}$)[a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+(?:['-_.\s][a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+)*$/i;
  const regexLocation =
    /^[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\s,. '-]{3,}$/;
  const regexEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;

  orderBtn.addEventListener("click", (e) => {
    // Prépare l'obj contact pour la requête POST
    let contact = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      address: document.getElementById("address").value,
      city: document.getElementById("city").value,
      email: document.getElementById("email").value,
    };
    // on valide que le formulaire soit correctement rempli
    if (
      (regexEmail.test(contact.email) == true) &
      (regexName.test(contact.firstName) == true) &
      (regexName.test(contact.lastName) == true) &
      (regexLocation.test(contact.city) == true) &
      (regexLocation.test(contact.address) == true)
    ) {
      e.preventDefault();
      let products = [];
      for (let listId of savedProduct) {
        products.push(listId.productId);
      }
      console.log(products);
      console.log(contact);
      alert("Commande effectuée avec succès ! Merci pour la moula");
      fetchPostOrder(contact, products);
    } else {
      alert("Tous les champs d'informations doivent être correctement remplis");
    }
  });
};
