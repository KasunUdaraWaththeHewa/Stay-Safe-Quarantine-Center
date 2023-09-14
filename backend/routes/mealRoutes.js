const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const mealController = require("../controllers/mealController");

router.use(requireAuth);

router.route("/add").post(mealController.addMeal);

router.route("/get/:mealID").get(mealController.getMealByMealID);

router.route("/update/:mealID").put(mealController.updateMealByMealID);

router.route("/delete/:mealID").delete(mealController.deleteMealByMealID);

router.route("/").get(mealController.getAllMeals);

module.exports = router;
