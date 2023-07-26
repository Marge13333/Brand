import Header from "../main/header/header";
import Breadcrumb from "./Breadcrumb/Breadcrumb"
import MainListView from "./mainListView/mainListView"
import Newslatter from '../main/newsletter/newsletter'
import Footer from "../main/footer/footer"
import ListViewHeader from './listViewHeader/listViewHeader'
import "./listview.css"


const ListView = () =>{
    return(
        <div>
            <div className="mobile-version-listview-header">
            <ListViewHeader/>
           </div>
           <div className="delate-header">
             <Header/>
             <Breadcrumb/>
           </div>
           <MainListView/>
           <div className="mobile-version-listview">
           <Newslatter/>
           <Footer/>
           </div>
           

        </div>
    )
}
export default ListView 