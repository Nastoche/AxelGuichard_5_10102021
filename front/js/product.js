// Récupération de l'ID dans l'URL pour récupérer les informations de l'article plus tard

function sofaId() {
  const urlClient = window.location.href;
  return urlClient.substring(urlClient.lastIndexOf("=") + 1);
}

console.log(sofaId());

// Appel de l'API avec l'ID du produit pour récupérer les informations de ce dernier

const apiCall = async function api() {
  try {
    const url = `http://localhost:3000/api/products/${sofaId()}`;
    const response = await fetch(url);
    const data = await response.json();

    //   Variables créées pour créer des éléments HTML dynamiques

    const img = document.createElement("img");
    const itemImg = document.getElementsByClassName("item__img");

    //   Récupération des données de l'API

    img.src = data.imageUrl;
    img.alt = data.altTxt;

    // -- Destination des éléments

    itemImg[0].appendChild(img);
    document.getElementById("title").innerText = data.name;
    document.getElementById("price").innerText = data.price + " ";
    document.getElementById("description").innerText = data.description;

    // Boucle forEach pour ajouter toutes les couleurs en option du select en HTML

    data.colors.forEach(function (color) {
      const option = document.createElement("option");
      const select = document.getElementById("colors");

      // Récupération des données de l'API

      option.value = color;
      option.innerText = color;

      // Ajout de l'option à la sélection (select en HTML)

      select.appendChild(option);
    });
  } catch (err) {
    console.log(`Erreur : ` + err);
    return false;
  }
};

apiCall();
