import './introDetail.css'

const IntroDetail = () =>{
    return(
        <section className='Intro-Detail'>
          <div className='intro-detail-wrapper'>
          <div className='intro-detail-img-wrapper'>
               <img className="intro-detail-main-img" src={require('./intro-detail-img/Group 1004.svg').default} alt="main-img" />
               <div className='detail-intro-miini-img-wrapper'>
                 <img className="intro-detail-mini-img" src={require('./intro-detail-img/Image.svg').default} alt="main-img" />
                 <img className="intro-detail-mini-img" src={require('./intro-detail-img/Image (1).svg').default} alt="main-img" />
                 <img className="intro-detail-mini-img" src={require('./intro-detail-img/Image (2).svg').default} alt="main-img" />
                 <img className="intro-detail-mini-img" src={require('./intro-detail-img/Image (3).svg').default} alt="main-img" />
                 <img className="intro-detail-mini-img" src={require('./intro-detail-img/Image (4).svg').default} alt="main-img" />
                 <img className="intro-detail-mini-img" src={require('./intro-detail-img/Image (5).svg').default} alt="main-img" />
               </div>
            </div>
            <div className='intro-details-details'>
                <div className='inStock'>
                  <img className="intro-detail-chech" src={require('./intro-detail-img/check.svg').default} alt="main-img" />
                  <p className='instock-para'>In stock</p>
                </div>
                <h2 className='intro-details-title'>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h2>
                <div className='intro-detail-ratings'>
                  <img className="rating-img" src={require('./intro-detail-img/rating.svg').default} alt="main-img" />
                  <p className='rating-para'>9.3</p>
                  <img className="dot" src={require('./intro-detail-img/Dot.svg').default} alt="main-img" />
                  <img className="dot" src={require('./intro-detail-img/message.svg').default} alt="main-img" />
                  <p className='reviews'>32 reviews</p>
                  <img className="dot" src={require('./intro-detail-img/Dot.svg').default} alt="main-img" />
                  <img className="dot" src={require('./intro-detail-img/shopping_basket.svg').default} alt="main-img" />
                  <p className='reviews'>154 sold</p>
                </div>
                <div className='rating-details-prices-wrapper'>
                    <div className='rating-details-prices-box'>
                        <h4 className='s0-100-pcs-price'>$98.00</h4>
                        <p className='s0-100-pcs'>50-100 pcs</p>
                    </div>
                    <img className="vertical-line" src={require('./intro-detail-img/Line 71.svg').default} alt="main-img" />
                    <div className='rating-details-prices-box'>
                        <h4 className='s00-pcs-price'>$90.00</h4>
                        <p className='s0-100-pcs'>100-700 pcs</p>
                    </div>
                    <img className="vertical-line" src={require('./intro-detail-img/Line 71.svg').default} alt="main-img" />
                    <div className='rating-details-prices-box'>
                        <h4 className='s00-pcs-price'>$78.00</h4>
                        <p className='s0-100-pcs'>700+ pcs</p>
                    </div>
                </div>
                <div className='intro-details-small-wrapper'>
                  <div className='intro-details-name'>
                    <p className='prct-name'>Price:</p>
                    <div style={{marginTop:28}} className='hor-line'></div>
                    <p className='prct-name'>Type:</p>
                    <p className='prct-name'>Material:</p>
                    <p className='prct-name'>Design:</p>
                    <div  style={{marginTop:142}} className='hor-line'></div>
                    <p className='prct-name'>Customization: </p>
                    <p className='prct-name'>Protection:</p>
                    <p className='prct-name'>Warranty:</p>
                    <div style={{marginTop:280}} className='hor-line'></div>
                  </div>

                   <div className='intro-details-text'>
                      <p className='prct-text'>Negotiable</p>
                      <p className='prct-text'>Classic shoes</p>
                      <p className='prct-text'>Plastic material</p>
                      <p className='prct-text'>Modern nice</p>
                      <p className='prct-text'>Customized logo and </p>
                      <p className='prct-text'>Refund Policy</p>
                      <p className='prct-text'>2 years full warranty</p>
                    </div>
                   
                </div>
            </div>
            <div className='seller-info'>
                <div className='seller-info-box'>
                  <div className='seller-info-box-wrapper'>
                  <div className='seller-profil'>
                      <img className="seller-profil-img" src={require('./intro-detail-img/img.svg').default} alt="main-img" />
                      <div className='saller-name'>
                        <p className='saller-name-text'>Supplier</p>
                        <p className='saller-name-text'>Guanjoi Trading LLC</p>
                      </div>
        
                    </div>
                    <div className='hor-line-2'></div>
                    <div className='saller-info-details'>
                       <div className='saller-info-icons'>
                          <img className="seller-profil-img" src={require('./intro-detail-img/icon.svg').default} alt="main-img" />
                          <img className="seller-profil-img" src={require('./intro-detail-img/verified_user.svg').default} alt="main-img" />
                          <img className="seller-profil-img" src={require('./intro-detail-img/language.svg').default} alt="main-img" />
                       </div>
                       <div className='saller-info-icons-text'>
                        <p className='saller-info-text'>Germany, Berlin</p>
                        <p className='saller-info-text'>Verified Seller</p>
                        <p className='saller-info-text'>Worldwide shipping</p>
                       </div>
                    </div>
                    <div className='saller-info-btns'>
                        <button className='saller-info-inquiry-btn'>Send inquiry</button>
                        <button className='saller-info-profil-btn'>Seller’s profile</button>
                    </div>

                  </div>
                </div>
                <div className='save-for-later'>
                  <img className="seller-profil-fav" src={require('./intro-detail-img/favorite_border.svg').default} alt="main-img" />
                  <p className='save-for-later-text'>Save for later</p>
                </div>
            </div>

          </div>
        </section>
    )
}
export default IntroDetail