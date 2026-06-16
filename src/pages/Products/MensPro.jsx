import React, { useEffect, useState } from "react";
import "../../style/mensPro.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const MensPro = () => {
  const dispatch = useDispatch();

  const [mensProdata, setMensProdata] = useState([]);

  const URL = "http://localhost:3002/products";

  const CartURL = "http://localhost:3003/cartItems";

  const getdata = () => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setMensProdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const AddToCart = (item) => {
    dispatch(addToCart(item));

    axios
      .post(CartURL, item)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <section className="mensPro">
      {mensProdata.map((x) => {
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
                  AddToCart(x);
                }}
              >
                {" "}
                add to cart
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default MensPro;
