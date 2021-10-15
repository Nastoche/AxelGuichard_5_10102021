import { fetchProductById } from "./fetcher.js";
import { renderProductDetail } from "./render.js";

const renderProductPage = async () => {
  const data = await fetchProductById();
  console.log(data);
  renderProductDetail(data);
};

renderProductPage();
