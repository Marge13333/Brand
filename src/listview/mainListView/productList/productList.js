import "./productlist.css"
const ProductList = () =>{
    return(
        <section className="Main-Product-List">
            <div className="main-product-list-header">
                <div className="main-product-list-header-wrapper">
                    <div className="items-value">
                        <p className="items-value-number">12,911 items in</p>
                        <p className="items-value-number-bold">Mobile accessery</p>
                    </div>
                    <div className="items-header-navigation">
                     <div className='items-header-check'>
                        <input  className="items-header-checkbox" id='verif' name='samsung' type="checkbox"></input>
                        <label style={{marginTop:-2}} for="verif">Verifed only</label>
                         </div>
                         <div className="featured">
                            <p className="featured-text">Featured</p>
                            <img src={require('./product-list-img/expand_more.svg').default} alt="dropUp" />
                         </div>
                         <div className="grid-or-list-wrap">
                           <img className="grid-or-list" src={require('./product-list-img/gridview.svg').default} alt="dropUp" />
                           <img className="grid-or-list" src={require('./product-list-img/listview.svg').default} alt="dropUp" />
                         </div>
                    </div>
                </div>
            </div>
            <div className="search-product-list">
                <div className="search-product-list-box">
                    <div className="search-product-list-box-wrapper">
                       <img className="product-img-list" src={require('./product-list-img/1.svg').default} alt="dropUp" />
                       <div className="product-all-detal">
                        <h2 className="list-product-title">Canon Cmera EOS 2000, Black 10x zoom</h2>
                        <div className="product-list-price">
                            <h4 className="product-price-text">$998.00</h4>
                            <img className="product-price-img" src={require('./product-list-img/Text.svg').default} alt="dropUp" />
                        </div>
                        <div className="rating-line">
                            <img className="product-rating-stars" src={require('./product-list-img/rating.svg').default} alt="dropUp" />
                            <h5 className="rating-number">7.5</h5>
                            <img className="dot" src={require('./product-list-img/Dot.svg').default} alt="dot" />
                            <p className="orders-number">154 orders</p>
                            <img className="dot" src={require('./product-list-img/Dot.svg').default} alt="dot" />
                            <p className="free-shipping">Free Shipping</p>
                        </div>
                        <p id="del-shiping" className="free-shipping">Free Shipping</p>

                        <div className="product-mini-detals">
                            <p className="lorem-product">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmotempor incididunt ut labore et dolore magna aliqua</p>
                            <p className="view-det">View detals</p>
                        </div>
                       </div>
                       <img className="product-fav-icon" src={require('./product-list-img/favorite_border.svg').default} alt="dot" />
                    </div>
                    
                </div>
                <div className="search-product-list-box">
                    <div className="search-product-list-box-wrapper">
                       <img className="product-img-list" src={require('./product-list-img/2svg.svg').default} alt="dropUp" />
                       <div className="product-all-detal">
                        <h2 className="list-product-title">GoPro HERO6 4K Action Camera - Black</h2>
                        <div className="product-list-price">
                            <h4 className="product-price-text">$998.00</h4>
                        </div>
                        <div className="rating-line">
                            <img className="product-rating-stars" src={require('./product-list-img/rating.svg').default} alt="dropUp" />
                            <h5 className="rating-number">7.5</h5>
                            <img className="dot" src={require('./product-list-img/Dot.svg').default} alt="dot" />
                            <p className="orders-number">154 orders</p>
                            <img className="dot" src={require('./product-list-img/Dot.svg').default} alt="dot" />
                            <p className="free-shipping">Free Shipping</p>
                        </div>
                        <p id="del-shiping" className="free-shipping">Free Shipping</p>

                        <div className="product-mini-detals">
                            <p className="lorem-product">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmotempor incididunt ut labore et dolore magna aliqua</p>
                            <p className="view-det">View detals</p>
                        </div>
                       </div>
                       <img className="product-fav-icon" src={require('./product-list-img/favorite_border.svg').default} alt="dot" />
                    </div>
                    
                </div>
                <div className="search-product-list-box">
                    <div className="search-product-list-box-wrapper">
                       <img className="product-img-list" src={require('./product-list-img/3svg.svg').default} alt="dropUp" />
                       <div className="product-all-detal">
                        <h2 className="list-product-title">GoPro HERO6 4K Action Camera - Black</h2>
                        <div className="product-list-price">
                            <h4 className="product-price-text">$998.00</h4>
                        </div>
                        <div className="rating-line">
                            <img className="product-rating-stars" src={require('./product-list-img/rating.svg').default} alt="dropUp" />
                            <h5 className="rating-number">7.5</h5>
                            <img className="dot" src={require('./product-list-img/Dot.svg').default} alt="dot" />
                            <p className="orders-number">154 orders</p>
                            <img className="dot" src={require('./product-list-img/Dot.svg').default} alt="dot" />
                            <p className="free-shipping">Free Shipping</p>
                        </div>
                        <p id="del-shiping" className="free-shipping">Free Shipping</p>

                        <div className="product-mini-detals">
                            <p className="lorem-product">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmotempor incididunt ut labore et dolore magna aliqua</p>
                            <p className="view-det">View detals</p>
                        </div>
                       </div>
                       <img className="product-fav-icon" src={require('./product-list-img/favorite_border.svg').default} alt="dot" />
                    </div>
                    
                </div>
                <div className="search-product-list-box">
                    <div className="search-product-list-box-wrapper">
                       <img className="product-img-list" src={require('./product-list-img/real 4.svg').default} alt="dropUp" />
                       <div className="product-all-detal">
                        <h2 className="list-product-title">GoPro HERO6 4K Action Camera - Black</h2>
                        <div className="product-list-price">
                            <h4 className="product-price-text">$998.00</h4>
                        </div>
                        <div className="rating-line">
                            <img className="product-rating-stars" src={require('./product-list-img/rating.svg').default} alt="dropUp" />
                            <h5 className="rating-number">7.5</h5>
                            <img className="dot" src={require('./product-list-img/Dot.svg').default} alt="dot" />
                            <p className="orders-number">154 orders</p>
                            <img className="dot" src={require('./product-list-img/Dot.svg').default} alt="dot" />
                            <p className="free-shipping">Free Shipping</p>
                        </div>
                        <p id="del-shiping" className="free-shipping">Free Shipping</p>

                        <div className="product-mini-detals">
                            <p className="lorem-product">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmotempor incididunt ut labore et dolore magna aliqua</p>
                            <p className="view-det">View detals</p>
                        </div>
                       </div>
                       <img className="product-fav-icon" src={require('./product-list-img/favorite_border.svg').default} alt="dot" />
                    </div>
                    
                </div>
                <div className="search-product-list-box">
                    <div className="search-product-list-box-wrapper">
                       <img className="product-img-list" src={require('./product-list-img/4svg.svg').default} alt="dropUp" />
                       <div className="product-all-detal">
                        <h2 className="list-product-title">GoPro HERO6 4K Action Camera - Black</h2>
                        <div className="product-list-price">
                            <h4 className="product-price-text">$998.00</h4>
                            <img className="product-price-img" src={require('./product-list-img/Text.svg').default} alt="dropUp" />
                        </div>
                        <div className="rating-line">
                            <img className="product-rating-stars" src={require('./product-list-img/rating.svg').default} alt="dropUp" />
                            <h5 className="rating-number">7.5</h5>
                            <img className="dot" src={require('./product-list-img/Dot.svg').default} alt="dot" />
                            <p className="orders-number">154 orders</p>
                            <img className="dot" src={require('./product-list-img/Dot.svg').default} alt="dot" />
                            <p className="free-shipping">Free Shipping</p>
                        </div>
                        <p id="del-shiping" className="free-shipping">Free Shipping</p>

                        <div className="product-mini-detals">
                            <p className="lorem-product">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmotempor incididunt ut labore et dolore magna aliqua</p>
                            <p className="view-det">View detals</p>
                        </div>
                       </div>
                       <img className="product-fav-icon" src={require('./product-list-img/favorite_border.svg').default} alt="dot" />
                    </div>
                    
                </div>
                <div id="del-box" className="search-product-list-box">
                    <div className="search-product-list-box-wrapper">
                       <img className="product-img-list" src={require('./product-list-img/5sbf.svg').default} alt="dropUp" />
                       <div className="product-all-detal">
                        <h2 className="list-product-title">GoPro HERO6 4K Action Camera - Black</h2>
                        <div className="product-list-price">
                            <h4 className="product-price-text">$998.00</h4>
                        </div>
                        <div className="rating-line">
                            <img className="product-rating-stars" src={require('./product-list-img/rating.svg').default} alt="dropUp" />
                            <h5 className="rating-number">7.5</h5>
                            <img className="dot" src={require('./product-list-img/Dot.svg').default} alt="dot" />
                            <p className="orders-number">154 orders</p>
                            <img className="dot" src={require('./product-list-img/Dot.svg').default} alt="dot" />
                            <p className="free-shipping">Free Shipping</p>
                        </div>
                        <p id="del-shiping" className="free-shipping">Free Shipping</p>

                        <div className="product-mini-detals">
                            <p className="lorem-product">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmotempor incididunt ut labore et dolore magna aliqua</p>
                            <p className="view-det">View detals</p>
                        </div>
                       </div>
                       <img className="product-fav-icon" src={require('./product-list-img/favorite_border.svg').default} alt="dot" />
                    </div>
                    
                </div>
                
            </div>
            <div className="mobile-version-also-like">
                <h4 className="also-like-title">
                  You may also like 
                </h4>
                <div className="mobile-version-also-like-wrapper">
                    <div className="mobile-version-also-like-box">
                       <img className="also-like" src={require('./product-list-img/Group 1014.svg').default} alt="dot" />
                       <div  className="alos-like-detals">
                        <p className="also-like-priice">$10.30</p>
                        <p className="also-like-mini-detals">Solid Backpack blue jeans large size</p>
                       </div>
                  </div>
                  <div className="mobile-version-also-like-box">
                       <img className="also-like" src={require('./product-list-img/hgfdgfdghgdfffgggggggggggggg.svg').default} alt="dot" />
                       <div  className="alos-like-detals">
                        <p className="also-like-priice">$10.30</p>
                        <p className="also-like-mini-detals">Solid Backpack blue jeans large size</p>
                       </div>
                  </div>
                  <div className="mobile-version-also-like-box">
                       <img className="also-like" src={require('./product-list-img/fgfg.svg').default} alt="dot" />
                       <div  className="alos-like-detals">
                        <p className="also-like-priice">$10.30</p>
                        <p className="also-like-mini-detals">Solid Backpack blue jeans large size</p>
                       </div>
                  </div>
                </div>
            </div>

        </section>
    )
}
export default ProductList ;