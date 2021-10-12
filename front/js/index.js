// Création de la fonction asynchrone pour appeler l'api
const apiCall = async function api() {
  try {
    const url = `http://localhost:3000/api/products`;
    const urlProduct = `./product.html?id=`;
    const response = await fetch(url);
    const data = await response.json();

    // Utilisation d'une boucle forEach pour sélectionner les éléments de l'API

    data.forEach(function (sofa) {
      //   Variables créées pour créer des éléments HTML dynamiques
      let a = document.createElement("a");
      let article = document.createElement("article");
      let img = document.createElement("img");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");

      // -- Ajout de classes aux éléments créés dynamiquement
      article.classList.add("card__article");
      a.classList.add("card");
      h3.classList.add("productName");
      p.classList.add("productDescription");

      //   Récupérations des données de l'API
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
    });
  } catch (err) {
    console.log(`Erreur : ` + err);
    console.log(`Veuillez démarrer le serveur`);
    return false;
  }
};

apiCall();
