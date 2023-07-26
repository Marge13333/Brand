import ProductList from "./productList/productList";
import SideBar from "./sideBar/sideBar"
import "./mainlistview.css"
const MainListView = () =>{
    return(
        <div style={{display:"flex",gap:18}}>
            <div className="sidebar-mobile">
            <SideBar/>
            </div>
           <ProductList/>
        </div>
    )
}
export default MainListView     