import { useEffect } from "react";
import Home from "./scenes/home/Home";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import CheckOut from "./scenes/checkout/CheckOut";
import Confirmation from "./scenes/checkout/Confirmation";
import NavBar from "./scenes/global/NavBar";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return null;
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <NavBar />
       <ScrollToTop />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="item/:itemId" element={<ItemDetails />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="checkout/success" element={<Confirmation />} />

       </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
