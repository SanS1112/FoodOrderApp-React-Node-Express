//import{useState,} from "react";
import { useContext } from "react";
import { UpdateContext } from "./UpdateContext";

export default function Mealss({ dish}) {
  const set= useContext(UpdateContext);
  //console.log(dish);
  //const[Clicked, setClicked]= useState(false);

  /*function click()
    {
        setClicked(!Clicked);
        dia.current.showModal();

    }*/
  return (
    <div key={dish.id} id="box">
      <img src={`http://localhost:3000${dish.image}`} alt={dish.description} />
      <h3>{dish.name}</h3>
      <br />
      <br />
      <p>{dish.description}</p>
      <br />
      <br />
      <p>₹{dish.price}</p>
      <br />
      <br />
      <button onClick={()=>set(dish)}>Add Item</button>
    </div>
  );
}
