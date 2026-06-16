import React, { useState } from "react";
import "../../style/createProduct.css";
import axios from "axios";
const CreatePoduct = () => {
  const [product, setProduct] = useState({
    ProductName: "",
    ProductPrice: "",
    category: "",
    image: "",
    description: "",
  });

  let url = "http://localhost:3002/products";
  console.log(product);

  const AddProduct = (e) => {
    e.preventDefault();
    axios
      .post(url, product)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="create-product">
      <form action="" className="create-product-form" onSubmit={AddProduct}>
        <input
          type="text"
          placeholder="Product Name"
          required
          onChange={(x) => {
            setProduct({ ...product, ProductName: x.target.value });
          }}
        />

        <input
          type="text"
          placeholder="Product Price"
          required
          onChange={(x) => {
            setProduct({ ...product, ProductPrice: x.target.value });
          }}
        />

        <select
          name="category"
          id="category"
          required
          onChange={(x) => {
            setProduct({ ...product, category: x.target.value });
          }}
        >
          <option value="beauty">Beauty</option>
          <option value="genz">Genz</option>
          <option value="kids">Kids</option>
          <option value="mens">Mens</option>
          <option value="women">Women</option>
        </select>

        <input
          type="url"
          placeholder="Product Image"
          required
          onChange={(x) => {
            setProduct({ ...product, image: x.target.value });
          }}
        />

        <input
          type="text"
          placeholder="Product Description"
          required
          onChange={(x) => {
            setProduct({ ...product, description: x.target.value });
          }}
        />

        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default CreatePoduct;
