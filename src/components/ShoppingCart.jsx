import React, { useState } from "react";
import BillInfomation from "./shoping_cart/BillInfomation";
import ProductList from "./shoping_cart/ProductList";
import "./shopping.css";

function ShoppingCart() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Sản phẩm 1",
      image:
        "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      price: 300000,
      count: 1,
      size: "M",
    },
    {
      id: 2,
      name: "Sản phẩm 2",
      image:
        "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      price: 400000,
      count: 1,
      size: "L",
    },
    {
      id: 3,
      name: "Sản phẩm 3",
      image:
        "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      price: 500000,
      count: 1,
      size: "XL",
    },
  ]);

  // Tăng số lượng sản phẩm
  const handleAdd = (id) => {
    const newProducts = products.map((p) => {
      if (p.id === id) {
        return { ...p, count: p.count + 1 };
      }
      return p;
    });
    setProducts(newProducts);
  };

  // Giảm số lượng sản phẩm
  const handleSub = (id) => {
    const newProducts = products.map((p) => {
      if (p.id === id) {
        if (p.count === 1) {
          alert("Số lượng sản phẩm phải lớn hơn 1");
          return p;
        }
        return { ...p, count: p.count - 1 };
      }
      return p;
    });
    setProducts(newProducts);
  };

  // Xóa sản phẩm khỏi cart
  const handleRemove = (id) => {
    let isWant = window.confirm("Bạn có muốn xóa sản phẩm này không");
    if (isWant) {
      const newProducts = [...products];
      setProducts(newProducts.filter(x => x.id != id));
    }
  };

  // Tính giá tiền
  const subtotal = products.reduce((a, b) => a + b.price * b.count, 0);
  return (
    <>
      <div className="shopping-cart-container mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mb-4">
                <h2>Shopping Cart</h2>
              </div>
            </div>
          </div>

          {products.length === 0 && (
            <p className="fst-italic message">
              Không có sản phẩm trong giỏ hàng
            </p>
          )}
          <div className="row shopping-cart">
            <ProductList
              products={products}
              handleAdd={handleAdd}
              handleRemove={handleRemove}
              handleSub={handleSub}
            />
            <BillInfomation subtotal={subtotal} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
