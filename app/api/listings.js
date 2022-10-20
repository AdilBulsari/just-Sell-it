const { default: apiClient } = require("./client");
const endpoint = "/listings";

const getListings = () => apiClient.get(endpoint);

const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((img, i) => {
    data.append("images", {
      name: "image" + i,
      type: "image/jpeg",
      uri: img,
    });
  });

  if (listing.location) {
    data.append("location", JSON.stringify(listing.location));
  }

  return apiClient.post(endpoint, data, {
    onUploadProgress: (progess) =>
      onUploadProgress(progess.loaded / progess.total),
  });
};

export default {
  addListing,
  getListings,
};
