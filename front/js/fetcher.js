export const fetchAllProducts = async () => {
  try {
    const url = `http://localhost:3000/api/products`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (err) {
    console.log(`Erreur : ` + err);
    console.log(`Veuillez démarrer le serveur`);
    return null;
  }
};

export const fetchProductById = async (urlId) => {
  try {
    // Récupération de l'ID dans l'URL pour récupérer les informations de l'article plus tard
    const url = `http://localhost:3000/api/products/${urlId}`;
    const response = await fetch(url);
    const sofaId = await response.json();
    return sofaId;
  } catch (err) {
    console.log(`Erreur : ` + err);
    return null;
  }
};

export const fetchProductByIdCart = async (id) => {
  try {
    // Récupération de l'ID dans l'URL pour récupérer les informations de l'article plus tard
    const url = `http://localhost:3000/api/products/${id}`;
    const response = await fetch(url);
    const sofaId = await response.json();
    return sofaId;
  } catch (err) {
    console.log(`Erreur : ` + err);
    return null;
  }
};
