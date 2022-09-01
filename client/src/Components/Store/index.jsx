import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { getProducts } from "../../redux/productsActions";
import Cards from "./Cards";
import Cart from "./Cart";
import "./index.css";
=======
import { getProducts } from "../../redux/actions/productsActions";
>>>>>>> develop

function Store() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <div className="store-component">
          <div className="clients-tabs">Clients</div>
          <div className="store-container">
            <div className="cart-container">
            
              <Cart products={products} />
            </div>
            <div className="products-container">
              <div className="search-product">
                BUSCADOR
              </div>
              <div className="category-buttons">
                CATEGORIAS
              </div>
              <div className="cards-container">
                <Cards products={products} />
              </div>
            </div>
          </div>
        </div>
        <div className="navbar">NAVBAR</div>
      </div>
    </>
  );
}

export default Store;
