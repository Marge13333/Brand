import './App.css';
import Main from "./main/main"
import ListView from './listview/listview';
import {
  BrowserRouter,
Routes,  Route,
} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="List" element={<ListView/>}/>
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
