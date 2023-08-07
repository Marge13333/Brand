import Header from "../main/header/header";
import Breadcrumb from "../listview/Breadcrumb/Breadcrumb"
import IntroDetail from "./intro-detail/introDetail";
import Footer from "../main/footer/footer"
import BlockDetail from "./Block-detail/Block-detail";
import BlockRecommend from "./Block-recommend/BlockRecommend"
import Banner from './Banner/Banner'
import "./detail.css"


const Detail = () =>{
    return(
        <div>
            <Header/>
            <div className="detail-header-none">
            
           <Breadcrumb/>
            </div>
           <IntroDetail/>
           <div className="detail-header-none">
           <BlockDetail/>
            </div>
           <BlockRecommend/>
           <div className="detail-header-none">
           <Banner/>
           <Footer/>
            </div>
          
        </div>
    )
}
export default Detail 