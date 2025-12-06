import requests from "./httpServices";

const ProductServices = {
  getShowingProducts: async () => {
    return requests.get("/products/show");
  },
  getShowingStoreProducts: async ({
    category = "",
    title = "",
    slug = "",
    variantSlug = "",
  }) => {
    return requests.get(
      `/products/store?category=${category}&title=${title}&slug=${slug}&variantSlug=${variantSlug}`
    );
  },
  getProductsByTag: async (tag) => {
    return requests.get(`/products/tag?tag=${tag}`);
  },
  getDiscountedProducts: async () => {
    return requests.get("/products/discount");
  },

  getProductBySlug: async (slug) => {
    return requests.get(`/products/${slug}`);
  },
};

export default ProductServices;
