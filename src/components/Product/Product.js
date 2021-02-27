import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { img, name, category, seller, price } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="#"></img>
      </div>
      <div>
        <h4>{name}</h4>
        <hr />
        <h5> Category: {category}</h5>
        <h5>Company: {seller}</h5>
        <hr />
        <h4> product price: {price}$</h4>

        <button
          className="btn"
          onClick={() => props.handelProduct(props.product)}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          add to cart{" "}
        </button>
      </div>
    </div>
  );
};

export default Product;
