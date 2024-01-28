import React, { useState } from "react";
import Wcard from "../../Components/Card/Card";

export default function Combo({ showCategory, productList }) {
  const [categories] = useState(showCategory);
  const [activeFilter, setActiveFilter] = useState(showCategory[0]);

  const products = productList.filter(
    (product) => product.productCategory === activeFilter
  );

  return (
    <>
      <section className="bn-sec home-product merch-product">
        <div className="home-pr-wrapper">
          <div className="spr-wrapper">
            {products.length !== 0 && <Wcard products={products}/>}
          </div>
        </div>
      </section>
    </>
  );
}
