import './App.css';
import Main from "./main/main"
import {
  BrowserRouter,
Routes,  Route,
} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>} />
      {/* <Route path="list" element={<Expenses />} /> */}
      {/* <Route path="detals" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
