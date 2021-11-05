const cartOrderForm = document.querySelector(".cart__order__form");

console.log(cartOrderForm.firstName);

// Ecouter la modification du prénom
cartOrderForm.firstName.addEventListener("input", function () {
  validFirstName(this);
});

// Regex Prénom
const validFirstName = (inputFirstName) => {
  const firstNameRegex = new RegExp(
    /^(?=.{1,50}$)[a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+(?:['-_.\s][a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+)*$/i
  );
  // /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i  === Aucun accent pris en charge
  let testFirstName = firstNameRegex.test(inputFirstName.value);
  console.log(testFirstName);
};

// Ecouter la modification du nom
cartOrderForm.lastName.addEventListener("input", function () {
  validLastName(this);
});
// Regex Nom de Famille
const validLastName = (inputLastName) => {
  let lastNameRegex = new RegExp(
    /^(?=.{1,50}$)[a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+(?:['-_.\s][a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+)*$/i
  );
  let testLastName = lastNameRegex.test(inputLastName.value);
  console.log(testLastName);
};

// Ecouter la modification de l'adresse
cartOrderForm.address.addEventListener("input", function () {
  validAddress(this);
});
const validAddress = (inputAddress) => {
  const addressRegex = new RegExp(
    /^[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\s,. '-]{3,}$/
  );
  let testAddress = addressRegex.test(inputAddress.value);
  console.log(testAddress);
};

// Ecouter la modification de la ville
cartOrderForm.city.addEventListener("input", function () {
  validCity(this);
});
const validCity = (inputCity) => {
  const cityRegex = new RegExp(
    /^[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\s,. '-]{3,}$/
  );
  let testCity = cityRegex.test(inputCity.value);
  console.log(testCity);
};

// Ecouter la modification de l'email
cartOrderForm.email.addEventListener("input", function () {
  validEmail(this);
});

// Regex email
const validEmail = (inputEmail) => {
  let emailRegex = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );
  let testEmail = emailRegex.test(inputEmail.value);
};
