import './App.css';
import Main from "./main/main"
import ListView from './listview/listview';
import Detail from './detail/detail';
import Cart from './cart/cart';
import {
  BrowserRouter,
Routes,  Route,
} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route  exact path="/" element={<Main/>} />
      <Route exact path="List" element={<ListView/>}/>
      <Route exact  path="Detail" element={<Detail/>}/>
      <Route exact  path="Cart" element={<Cart/>}/>
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
