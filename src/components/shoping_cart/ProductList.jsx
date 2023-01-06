import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ products, handleAdd, handleRemove, handleSub }) {
  return (
    <div className="col-md-8">
      <div className="product-list">
        {products.length > 0 &&
          products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              handleAdd={handleAdd}
              handleRemove={handleRemove}
              handleSub={handleSub}
            />
          ))}
      </div>
    </div>
  );
}

export default ProductList;
