import fs from "node:fs/promises";

import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

// CORS

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow all domains
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  next();
});

app.get("/initialOrders", async (req, res) => {
  try{
  const Orderfile = await fs.readFile("./data/Order.json");

  const MealsData = JSON.parse(Orderfile);

  res.status(200).json({ meals:MealsData });
}
catch(error){
  res.status(400).json({error:error.message});
}
});

app.get("/allmeals", async (req, res) => {
  try{
  const fileContent = await fs.readFile("./data/AvailableMeals.json");

  const MealsData = JSON.parse(fileContent);

  res.status(200).json({ meals:MealsData });
}
catch(error){
  res.status(400).json({error:error.message});
}
})
app.put("/initialOrders", async (req, res) => {
  
  const meals = req.body.meals;
  await fs.writeFile("./data/Order.json", JSON.stringify(meals));
  res.status(200).json({ message: "Cart updated" });
});
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  res.status(404).json({ message: "404 - Not Found" });
});



app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
