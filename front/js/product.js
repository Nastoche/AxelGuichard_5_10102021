function sofaId() {
  const urlClient = window.location.href;
  return urlClient.substring(urlClient.lastIndexOf("=") + 1);
}

console.log(sofaId());

const apiCall = async function api() {
  try {
    const url = `http://localhost:3000/api/products/${sofaId()}`;
    const response = await fetch(url);
    const data = await response.json();

    //   Variables créées pour créer des éléments HTML dynamiques

    const img = document.createElement("img");
    const itemImg = document.getElementsByClassName("item__img");

    //   Récupérations des données de l'API

    img.src = data.imageUrl;
    img.alt = data.altTxt;

    // -- Destination des éléments

    itemImg[0].appendChild(img);
    document.getElementById("title").innerText = data.name;
    document.getElementById("price").innerText = data.price + " ";
    document.getElementById("description").innerText = data.description;
    data.colors.forEach(function (color) {
      const option = document.createElement("option");
      const select = document.getElementById("colors");

      option.value = color;
      option.innerText = color;

      select.appendChild(option);
    });
  } catch (err) {
    console.log(`Erreur : ` + err);
    return false;
  }
};

apiCall();
