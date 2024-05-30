import { forwardRef, useState } from "react";

const Cart = forwardRef(({ c, Change, removeItem, checkout }, ref) => {
  return (
    <dialog id="Modal" ref={ref}>
      <h2>Your Cart</h2>
      <br />
      <ul>
        {c.map((item) => {
          return (
            <>
              <li key={item.id}>{item.name}</li>
              <input
                type="number"
                value={item.quantity ? item.quantity : 0}
                name={item.name}
                placeholder="Select Quantity"
                onChange={Change}
              />
              <button onClick={() => removeItem(item)}> Remove</button>
              <hr /> <br />
            </>
          );
        })}
      </ul>
      <br />
      <form method="dialog">
        <button>Close</button>
        <button onClick={()=>checkout()}>Close & Checkout</button>
      </form>
    </dialog>
  );
});
export default Cart;
