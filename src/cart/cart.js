import "./cart.css"
import CartHeader from './cartHeader/cartHeader'
import Banner from '../detail/Banner/Banner'
import Footer from '../main/footer/footer'
import CartIntro from './cartIntro/cartIntro'
import AlibabaItems from './alibabaItems/alibabaItems'
const Cart = () =>{
    return(
        <div>
         
            <CartHeader/>
         
            <CartIntro/>
           
            <AlibabaItems/>
            <Banner/>
            <Footer/>
        </div>
    )
}
export default Cart