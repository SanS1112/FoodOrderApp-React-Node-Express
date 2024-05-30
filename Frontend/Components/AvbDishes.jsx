import { useState, useEffect } from "react";
import Mealss from "./Mealss.jsx";
import { UpdateContext } from "./UpdateContext.jsx";

export default function AvbDishes({update}) {
  const [isFetching, setisFetching] = useState(true);
  const[Meals, setMeals] = useState([]);

useEffect(()=>{
  async function fetchMeals(){
console.log("AvbDishes Components Effect has begun executing");
const response = await fetch("http://localhost:3000/allmeals");
const resData = await response.json();
console.log("AvbDishes Effect has completed");
if (!response.ok) {
  throw new Error("Failed to fetch places");
}

setMeals(resData.meals);
setisFetching(false); 

}
fetchMeals();
}, [])
  
  return (
    <UpdateContext.Provider value={update}>
      {isFetching && <p>Fetching Data...</p>}
      {!isFetching && (
        <div id="container">
          {Meals.map((meal) => (
            <Mealss key={meal.id} dish={meal} />
          ))}
        </div>
      )}
    </UpdateContext.Provider>
  );
}
