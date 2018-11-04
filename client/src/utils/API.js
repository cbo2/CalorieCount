import axios from "axios";

export default {
  // Gets all foods for user
  getSavedFoods: function (user) {
    return axios.get("/api/food", user);
  },
  // Gets the food with the given id
  // getFood: function (id) {
  //   return axios.get("/api/food/" + id);
  // },
  // Gets all food
  getFood: function (food) {
    return axios.get("/api/food", food);
  },
  // Deletes the food with the given id
  deleteFood: function (id) {
    return axios.delete("/api/food/" + id);
  },
  // Saves a food to the database
  createFood: function (food) {
    return axios.post("/api/food/", food);
  },
  createUser: function (user) {
    return axios.post("/api/user", user);
  },
  callImageRecognition: (image) => {
    return axios.post("/api/food/identify", { image: image })
  },
  nutritionixInstantSearch: (searchItem) => {
    return axios.post("api/food/nutritionix/instant", { searchItem: searchItem })
  },
  nutritionixBarcodeSearch: () => {
    return axios.post("api/food/nutritionix/barcode")
  },
  nutritionixNutritionSearch: () => {
    return axios.post("api/food/nutritionix/nutrition")
  },
  callScanBarcode: (image) => {
    return axios.post("/api/food/scanBarcode", { image: image })
  }
};