import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./data";
import { useState, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Checkout from "./components/Checkout";

function Home({onAdd,onRemove,cartItems,products}) {
  return (
    <Fragment>
      <Main products={products} onAdd={onAdd}></Main>
      <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Basket>
    </Fragment>
  );
}

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Router>
        <Header countCartItems={cartItems.length}></Header>
        <div className="row">
          <Routes>
            <Route path="/checkout" element={<Checkout 
              products={products}
              cartItems={cartItems}
              complete={true}
            />} 
            />
            <Route path="/" element={<Home 
              onAdd={onAdd}
              onRemove={onRemove}
              products={products}
              cartItems={cartItems}
            />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
