import './cartIntro.css'

const CartIntro = () =>{
    return(
        <section className='Cart-intro'>
            <div className='cart'>
                <h1 className='my-cart'>My cart (3)</h1>
                <div className='cart-wrapper'>
                  <div className='box-items-wrapper'>
                    <div className='cart-items-box'>
                    <div className='cart-items-details'>
                      <img className='cart-items-details-img' src={require('./cartIntro-img/img-group.svg').default} alt="dropdown" />
                      <div className='cart-items-details-details'>
                        <p className='cart-items-details-title'>T-shirts with multiple colors, for men and lady</p>
                        <p className='cart-items-details-mini-detail'>Size: medium, Color: blue,  Material: Plastic</p>
                        <p className='cart-items-details-mini-detail'>Seller: Artel Market</p>
                        <div className='cart-items-details-btns'>
                            <button className='cart-remove'>Remove</button>
                            <button className='Save-for-later'>Save for later</button>
                        </div>
                      </div>
                    </div>
                    <div className='cart-items-prices'>
                        <p className='cart-items-price'>$78.99</p>
                        <div className='cart-items-pcs'>
                            <p className='cart-items-pcs-title'>Qty: 9</p>
                            <img className='cart-items-pcs-img' src={require('./cartIntro-img/expand_less.svg').default} alt="dropdown" />
                        </div>
                    </div>
                    </div>
                    <div className='cart-items-box'>
                    <div className='cart-items-details'>
                      <img className='cart-items-details-img' src={require('./cartIntro-img/img-group (1).svg').default} alt="dropdown" />
                      <div className='cart-items-details-details'>
                        <p className='cart-items-details-title'>T-shirts with multiple colors, for men and lady</p>
                        <p className='cart-items-details-mini-detail'>Size: medium, Color: blue, Material:</p>
                        <p className='cart-items-details-mini-detail'>Plastic Seller: Best factory LLC</p>
                        <div className='cart-items-details-btns'>
                            <button className='cart-remove'>Remove</button>
                            <button className='Save-for-later'>Save for later</button>
                        </div>
                      </div>
                    </div>
                    <div className='cart-items-prices'>
                        <p className='cart-items-price'>$39.00</p>
                        <div className='cart-items-pcs'>
                            <p className='cart-items-pcs-title'>Qty: 3</p>
                            <img className='cart-items-pcs-img' src={require('./cartIntro-img/expand_less.svg').default} alt="dropdown" />
                        </div>
                    </div>
                    </div>
                    <div className='cart-items-box'>
                    <div className='cart-items-details'>
                      <img className='cart-items-details-img' src={require('./cartIntro-img/img-group (2).svg').default} alt="dropdown" />
                      <div className='cart-items-details-details'>
                        <p className='cart-items-details-title'>T-shirts with multiple colors, for men and lady</p>
                        <p className='cart-items-details-mini-detail'>Size: medium, Color: blue, Material:</p>
                        <p className='cart-items-details-mini-detail'>Plastic Seller: Artel Market</p>
                        <div className='cart-items-details-btns'>
                            <button className='cart-remove'>Remove</button>
                            <button className='Save-for-later'>Save for later</button>
                        </div>
                      </div>
                    </div>
                    <div className='cart-items-prices'>
                        <p className='cart-items-price'>$170.50</p>
                        <div className='cart-items-pcs'>
                            <p className='cart-items-pcs-title'>Qty: 1</p>
                            <img className='cart-items-pcs-img' src={require('./cartIntro-img/expand_less.svg').default} alt="dropdown" />
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className='cart-btns'>
                        <div className='back-to-shop-btn'>
                          <img className='back-to-shop-btn-img' src={require('./cartIntro-img/arrow_back.svg').default} alt="dropdown" />
                          <p className='Back-to-shop'>Back to shop</p>
                        </div>
                        <button className='remove-all'>Remove all</button>
                    </div>
                </div>
                <div className='Customer-support'>
                    <div className='Customer-support-box'>
                       <img className='Customer-support-img' src={require('./cartIntro-img/🔹Icon Color.svg').default} alt="dropdown" />
                       <div className='Customer-support-texts'>
                        <p className='Customer-support-text-one'>Secure payment</p>
                        <p className='Customer-support-text-two'>Have you ever finally just </p>
                       </div>
                    </div>
                    <div className='Customer-support-box'>
                       <img className='Customer-support-img' src={require('./cartIntro-img/🔹Icon Color (1).svg').default} alt="dropdown" />
                       <div className='Customer-support-texts'>
                        <p className='Customer-support-text-one'>Customer support</p>
                        <p className='Customer-support-text-two'>Have you ever finally just </p>
                       </div>
                    </div>
                    <div className='Customer-support-box'>
                       <img className='Customer-support-img' src={require('./cartIntro-img/🔹 Icon Color.svg').default} alt="dropdown" />
                       <div className='Customer-support-texts'>
                        <p className='Customer-support-text-one'>Free delivery</p>
                        <p className='Customer-support-text-two'>Have you ever finally just</p>
                       </div>
                    </div>
                </div>
              
            </div>
            <div className='Asida-summary'>
                <div className='Asida-summary-header'>
                  <div className='Asida-summary-header-wrapper'>
                    <p className='Asida-summary-header-title'>Have a coupon?</p>
                    <div className='Asida-summary-header-inputs'>
                      <input className='Asida-summary-header-input' type="text" placeholder="Add coupon"  /> 
                      <button className='Asida-summary-header-apple'>Apply</button>
                   </div>
                    </div>
                    <div className='Asida-summary-intro'>
                        <div className='wrapper'>
                        <div className='Asida-summary-intro-wrapper'>
                            <div className='Asida-summary-intro-texts'>
                                <p className='Asida-summary-text'>Subtotal:</p>
                                <p className='Asida-summary-text'>Discount:</p>
                                <p className='Asida-summary-text'>Tax:</p>
                            </div>
                            <div className='Asida-summary-intro-prices'>
                                <p className='Asida-summary-prices-one'>$1403.97</p>
                                <p className='Asida-summary-prices-two'>- $60.00</p>
                                <p className='Asida-summary-prices-3'>+ $14.00</p>
                            </div>
                        </div>
                        <div className='Asida-summary-line'></div>
                        <div className='Asida-summary-main-price'>
                            <p className='Total:'>Total:</p>
                            <p className='Total-price'>$1357.97</p>
                        </div>
                        <div className='idk'>
                        <button className='checkout'>Checkout</button>
                        </div>
                        <div className='payment-type'>
                          <img className='payment-type-img' src={require('./cartIntro-img/payment.svg').default} alt="dropdown" />
                          <img className='payment-type-img' src={require('./cartIntro-img/payment2.svg').default} alt="dropdown" />
                          <img className='payment-type-img' src={require('./cartIntro-img/payment3.svg').default} alt="dropdown" />
                          <img className='payment-type-img' src={require('./cartIntro-img/payment4.svg').default} alt="dropdown" />
                          <img className='payment-type-img' src={require('./cartIntro-img/payment5.svg').default} alt="dropdown" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default CartIntro;