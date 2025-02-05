import "./App.css";

import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import { useState } from "react";
import CartView from "./components/CartView";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        {/* <button onClick={createDocument}>Crear documento</button>
        <button onClick={exportProductsToDb}>Exportar base de datos</button> */}
        
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Accesories for 2025" />}
          />
          <Route
            path="/category/:catid"
            element={<ItemListContainer greeting="Search by category" />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView/>}/>
        </Routes>
        <footer>
          <small>Created by Estefania A - 2025</small>
        </footer>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
