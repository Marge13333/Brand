import "./aliBaba.css"

const AlibabaItems = () =>{
    return(
        <section className="alibaba-items">
            <div className="alibaba-items-wrapper">
                <h3 className="alibaba-items-save-for-later">Saved for later</h3>
                <div className="alibaba-items-box-wrapper">
                    <div className="alibaba-items-box">
                      <img className='alibaba-items-svg' src={require('./alibaba-img/img (8).svg').default} alt="logo" />
                      <p className="alibaba-items-price">99.50$</p>
                      <p className="alibaba-items-ptext">GoPro HERO6 4K Action Camera - Black</p>
                      <div className="alibaba-items-btn">
                       <img className='alibaba-item-svg' src={require('./alibaba-img/miauu.svg').default} alt="logo" />
                       <p className="move-tocart-alibaba">Move to cart</p>
                      </div>
                    </div>
                    <div className="alibaba-items-box">
                      <img className='alibaba-items-svg' src={require('./alibaba-img/img (9).svg').default} alt="logo" />
                      <p className="alibaba-items-price">99.50$</p>
                      <p className="alibaba-items-ptext">GoPro HERO6 4K Action Camera - Black</p>
                      <div className="alibaba-items-btn">
                       <img className='alibaba-item-svg' src={require('./alibaba-img/miauu.svg').default} alt="logo" />
                       <p className="move-tocart-alibaba">Move to cart</p>
                      </div>
                    </div>
                    <div className="alibaba-items-box">
                      <img className='alibaba-items-svg' src={require('./alibaba-img/img (10).svg').default} alt="logo" />
                      <p className="alibaba-items-price">99.50$</p>
                      <p className="alibaba-items-ptext">GoPro HERO6 4K Action Camera - Black</p>
                      <div className="alibaba-items-btn">
                       <img className='alibaba-item-svg' src={require('./alibaba-img/miauu.svg').default} alt="logo" />
                       <p className="move-tocart-alibaba">Move to cart</p>
                      </div>
                    </div>
                    <div className="alibaba-items-box">
                      <img className='alibaba-items-svg' src={require('./alibaba-img/img (11).svg').default} alt="logo" />
                      <p className="alibaba-items-price">99.50$</p>
                      <p className="alibaba-items-ptext">GoPro HERO6 4K Action Camera - Black</p>
                      <div className="alibaba-items-btn">
                       <img className='alibaba-item-svg' src={require('./alibaba-img/miauu.svg').default} alt="logo" />
                       <p className="move-tocart-alibaba">Move to cart</p>
                      </div>
                    </div>

                </div>
            </div>

        </section>
    )
}
export default AlibabaItems;