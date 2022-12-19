import "./App.css";
import { useCart } from "./cart-context";

function App() {
  const { state, dispatch } = useCart();
  const finalPrice = state.cart.reduce(
    (acc, currVal) => acc + Number(currVal.price) * Number(currVal.qty),
    0
  );

  const totalQty = state.cart.reduce((acc, val) => acc + val.qty, 0);
  return (
    <div className="App">
      {state.cart.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.imgSrc} />
            <h1>{item.name}</h1>
            <h4>Color:{item.color}</h4>
            {item.size ? (
              <h4>Size- {item.size}</h4>
            ) : (
              <h4>Material- {item.material}</h4>
            )}
            <p>{item.rating}</p>
            <p>{item.reviews} Reviews</p>
            <button
              onClick={() => dispatch({ type: "DEC_QTY", payload: item.id })}
            >
              -
            </button>
            <p>{item.qty}</p>
            <button
              onClick={() => dispatch({ type: "INC_QTY", payload: item.id })}
            >
              +
            </button>
            <h3>{item.price * item.qty}</h3>
          </div>
        );
      })}
      <h1>Total Quantity {totalQty}</h1>
      <h1>Total Price {finalPrice}</h1>
    </div>
  );
}

export default App;
