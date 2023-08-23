const router =require("express").Router();
let staff= require("../models/meal");

router.route("/add").post((req,res)=>{
    const mealID=req.body.mealID;
    const mealName=req.body.mealName;
    const mealDescription=req.body.mealDescription;
    const nutritionalInformation=req.body.nutritionalInformation;
    const dietaryRestrictions=req.body.dietaryRestrictions;
    const mealType=req.body.mealType;
    const portionSize=req.body.portionSize;

    const newMeal= new meal({
        mealID,
        mealName,
        mealDescription,
        nutritionalInformation,
        dietaryRestrictions,
        mealType,
        portionSize
    })

    newMeal.save().then(()=>{
        res.json("Meal Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/get/:mealID").get(async (req, res) => {
  let mealID = req.params.mealID;
  const meal = await meal.findOne({ mealID })
    .then((meal) => {
      if (!meal) {
        return res.status(404).json({ error: "Meal not found" });
      }
      res.status(200).json({ status: "Meal fetched", meal })
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ status: "Error with fetching Meal", error: err.message });
    });
});

  
router.route("/update/:mealID").put(async (req, res) => {
  let mealID = req.params.mealID;
  const {
        mealName,
        mealDescription,
        nutritionalInformation,
        dietaryRestrictions,
        mealType,
        portionSize
  } = req.body;

  const updateMeal = {
    mealName,
    mealDescription,
    nutritionalInformation,
    dietaryRestrictions,
    mealType,
    portionSize
  };

  try {
    const updatedMeal = await meal.findOneAndUpdate(
        { mealID: mealID },      
        updateMeal,
      { new: true }
    );

    if (updatedMeal) {
      res.status(200).send({ status: "Meal updated", data: updatedMeal });
    } else {
      res.status(404).send({ status: "Meal not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error with updating data", error: err.message });
  }
});




router.route("/delete/:mealID").delete(async (req, res) => {
  let mealID = req.params.mealID;

  try {
    const deletedMeal = await meal.findOneAndDelete({ mealID });
    if (!deletedMeal) {
      return res.status(404).json({ error: "Meal not found" });
    }
    res.status(200).json({ status: "Meal's data deleted", staff: deletedMeal });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: "Error with deleting meal", error: err.message });
  }
});


  router.route("/").get((req, res) => {
    package.find()
      .then((meal) => {
        res.json(meal);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
      });
  });
  

module.exports=router;