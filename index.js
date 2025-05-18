import express from "express";
import bodyParser from "body-parser";
import fs from 'fs';

const app = express();
const port = 3000;

//Step 1: Run the solution.js file without looking at the code.
//Step 2: You can go to the recipe.json file to see the full structure of the recipeJSON below.
const recipeJSON = JSON.parse(fs.readFileSync("./recipe.json", "utf-8"))


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/recipe", (req, res) => {
  console.log(req.body)
  let recipe
  switch(req.body.choice){
    case("chicken"):
      recipe = recipeJSON[0]
      break;
    case("beef"):
      recipe = recipeJSON[1]
      break;
    case("fish"):
      recipe = recipeJSON[2]
      break;
  }
  res.render("index.ejs", {recipe: recipe})
  console.log(req.body)
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
