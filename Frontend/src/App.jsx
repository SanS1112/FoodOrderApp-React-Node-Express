import { useState, useRef, useEffect } from "react";
import Head from "../Components/Head.jsx";
import "./App.css";
import AvbDishes from "../Components/AvbDishes.jsx";
import Cart from "../Components/Cart.jsx";
import CheckoutCart from "../Components/CheckoutCart.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const opencheckout=useRef(null);
  const open = useRef(null);

function Check_out(){
opencheckout.current.showModal();
}

  function OpenCart() {
    open.current.showModal();
  }

  function ChangeCart(e){
    const NewCart=[...cart]
   const NewCart1= NewCart.map(item=>{if(item.name===e.target.name){return {...item, quantity:e.target.value}}else return {...item}});
   setCart([...NewCart1])
   
  }

useEffect(() => {
  async function fetchInitialCart() {
    console.log("App's Effect has begun executing");
 const response = await fetch("http://localhost:3000/initialOrders");
    const resData = await response.json();
    console.log("App's Effect has completed");
    if(resData.meals.length!== 0){
      setCart([...resData.meals]);
    }
  }
  const init = fetchInitialCart();
}, []);


  async function UpdateCart(item) {
    const n = cart.find((e) => e.id === item.id);
    if (n) {
    } else {
      const meals = [...cart, item];
      
      const response = await fetch("http://localhost:3000/initialOrders", {
        method: "PUT",
        body: JSON.stringify({ meals }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      const resData = await response.json();

      if (!response.ok) {
        throw new Error("Failed to update user data.");
      }
      setCart([...meals]);
      return resData.message;
    }
  }      
//setCart((prevItem) => [...prevItem, item]);
     

    
      
async function RemoveItem(item){
  const meals = cart.filter((e=> e.id!==item.id));
const response = await fetch("http://localhost:3000/initialOrders", {
  method: "PUT",
  body: JSON.stringify({ meals }),
  headers: {
    "Content-Type": "application/json",
  },
});

const resData = await response.json();

if (!response.ok) {
  throw new Error("Failed to update user data.");
}
setCart([...meals]);
return resData.message;
         
  //setCart([...meals]);
}

  return (
    <>
      <CheckoutCart cart={cart} ref={opencheckout}/>
      <Cart c={cart} ref={open} Change={ChangeCart} removeItem={RemoveItem} checkout={Check_out} />
      <Head open={OpenCart} Cart={cart.length} />
      <AvbDishes update={UpdateCart} />
    </>
  );
}

export default App;
