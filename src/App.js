import "./App.css";
import { useCart } from "./cart-context";

function App() {
  const { state, dispatch } = useCart();
  const finalPrice = state.cart.reduce(
    (acc, currVal) => acc + Number(currVal.price) * Number(currVal.qty),
    0
  );

  const finalTotal = finalPrice + 78.0;
  const totalQty = state.cart.reduce((acc, val) => acc + val.qty, 0);
  return (
    <div className="App">
      {state.cart.map((item) => {
        return (
          <div key={item.id}>
            <div className="card">
              <img src={item.imgSrc} alt={item.name}></img>
              <div className="details">
                <h1>{item.name}</h1>
                <h4>Color:{item.color}</h4>
                {item.size ? (
                  <h4>Size- {item.size}</h4>
                ) : (
                  <h4>Material- {item.material}</h4>
                )}
                <p>
                  <span className="rating">
                    {item.rating}
                    <i className="fa-duotone fa-star-half-stroke"></i>
                  </span>{" "}
                  {item.reviews} Reviews
                </p>
              </div>
              <button
                className="btn"
                onClick={() => dispatch({ type: "DEC_QTY", payload: item.id })}
              >
                -
              </button>
              <p className="qty">{item.qty}</p>
              <button
                className="btn"
                onClick={() => dispatch({ type: "INC_QTY", payload: item.id })}
              >
                +
              </button>
              <h3 className="price">
                ₹ {Math.round(item.price * item.qty, 3)}
              </h3>
            </div>
          </div>
        );
      })}
      <div className="total">
        <h1 className="total-qty">Total Qty {totalQty}</h1>
        <div className="subtotal">
          <h1>SubTotal Price {Math.round(finalPrice)}</h1>
          <h1>GST - 78.00</h1>
          <h1 className="final-total">Total : {Math.round(finalTotal)}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
