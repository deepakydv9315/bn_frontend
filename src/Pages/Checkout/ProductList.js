import React, { useState } from 'react';
import './ProductList.scss';
import { useSelector, useDispatch } from "react-redux";

const ProductList = () => {
  const products = [
    {
      id: 1,
      flavour: 'choco',
      name: 'Product 1',
      price: '₹10.99',
      weight: '2kg',
      image: require("../../Assets/Images/main1.png"),
    },
    {
      id: 2,
      flavour: 'choco',
      name: 'Product 2',
      price: '₹19.99',
      weight: '2kg',
      image: require("../../Assets/Images/main2.png"),
    },
    {
      id: 3,
      flavour: 'choco',
      name: 'Product 3',
      price: '₹29.99',
      weight: '2kg',
      image: require("../../Assets/Images/main1.png"),
    },
  ];

  return (

    <div className="product-list">
      <h2>Product List</h2>
      <ul >
        {products.map((product) => (
          <li key={product.id} className="product-item" style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <p>{product.flavour}</p>
                <h3>{product.name}</h3>
                <div style={{ display: "flex" }}>
                  <p>{product.price}</p><p>({product.weight})</p>
                </div>
              </div>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
