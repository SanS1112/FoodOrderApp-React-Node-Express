import{forwardRef} from "react";
const CheckoutCart=forwardRef(({cart},ref)=>{
 
var totalcost=0;
for(let i=0; i<cart.length; i++){
    if(cart[i].quantity){
        totalcost= totalcost + (cart[i].price * cart[i].quantity);
    }else{

    }
}


    return (
      <dialog id="Modal" ref={ref}>
        <h2>Checkout Cart</h2>
        <br />
        <ul>
          {cart.map((item) => {
            return (
              <>
                <li key={item.id}>
                  <p>{item.name}</p>
                  <p>
                    Particulars :{item.quantity}*₹{item.price}
                  </p>
                  <p>Cost :{item.quantity * item.price}</p>
                </li>
                <hr /> <br />
              </>
            );
          })}
          
        </ul>
        <br />
<h2>Total Payable: {totalcost}</h2>
<hr />
<br />
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    );
});
export default CheckoutCart;