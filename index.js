import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

app.use(express.static("public"));
app.use("/dist", express.static("dist"));

app.get("/", (req, res) => {
 res.render("index.ejs");
});

app.post("/drink", async (req, res) => {
 try{
   const result = await axios.get(API_URL);
   const drink = result.data.drinks[0];
   // Create an array of ingredients and measures (strIngredient1/strMeasure1 to strIngredient15/strMeasure15)
   const ingredientsWithMeasures = [];

   // Loop through the ingredient and measure properties
   for (let i = 1; i <= 15; i++) {
     const ingredientKey = `strIngredient${i}`;
     const measureKey = `strMeasure${i}`;
     if (drink[ingredientKey] && drink[measureKey]) {
       ingredientsWithMeasures.push({
         ingredient: drink[ingredientKey],
         measure: drink[measureKey],
       });
     }
   }
   console.log(drink);
   res.render("index.ejs", {
     drink: drink.strDrink,
     instructions: drink.strInstructions,
     image: drink.strDrinkThumb,
     ingredientsWithMeasures: ingredientsWithMeasures,
   });
 } catch (error) {
  console.log(error);
  res.render("index.ejs", { error: error.message });
 }
});

app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
})