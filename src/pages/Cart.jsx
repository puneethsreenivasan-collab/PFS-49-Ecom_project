import React, { useEffect, useState } from "react";
// import "../style/Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import axios from "axios";

const Cart = () => {
  const CartURL = "http://localhost:3003/cartItems";

  const dispatch = useDispatch();

  // const Cartdata = useSelector((state) => state.cart.cartItems);
  
  const [Cartdata, setCartdata] = useState([]);

  const getCartData = () => {
    axios
      .get(CartURL)
      .then((res) => {
        console.log(res.data);
        setCartdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(() => {
    getCartData();
  }, []);


  const RemoveFromCart = (x) => {
    dispatch(removeFromCart(x.id));
  };

  console.log(Cartdata);

  return (
    <section className="mensPro">
      {Cartdata.map((x) => {
        return (
          <div key={x.id} className="MENSPRO-card">
            <div style={{ height: "50%", width: "100%" }}>
              <img src={x.image} alt="" height="100%" width="100%" />
            </div>

            <div className="MENSPRO-card--info">
              {/* NAME SHOW ONLY starting 1 full sentence words */}
              <h3>
                {x.ProductName?.trim().split(/\s+/).slice(0, 3).join(" ") ||
                  "No Name"}
              </h3>
              <i> Price:{x.ProductPrice}</i>
              <p>{x.description}</p>
              <button
                onClick={() => {
                  RemoveFromCart(x);
                }}
              >
                {" "}
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Cart;
