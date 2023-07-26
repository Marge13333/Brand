import "../sideBar/sideBar.css"
const SideBar = () =>{
    return(
        <section className="sidebar">
            <div className='sidebarLine'></div>
            <div className="sidebar-category">
                <div className="sidebar-category-name">
                    <h4 className="sidebar-category-title">Category</h4>
                    <img src={require('./sidebarImg/expand_less.svg').default} alt="dropUp" />
                </div>
                <div className='sidebar-category-list'>
                    <p className='sidebar-category-text'>Mobile accessory</p>
                    <p className='sidebar-category-text'>Electronics</p>
                    <p className='sidebar-category-text'>Smartphones</p>
                    <p className='sidebar-category-text'>Modern tech</p>
                </div>
                <p className='seeAll'>See all</p>
            </div>
            <div className='sidebarLine' style={{marginTop:20}}></div>
            <div className='sidebar-brands'>
                <div className="sidebar-category-name">
                    <h4 className="sidebar-category-title">Brands</h4>
                    <img src={require('./sidebarImg/expand_less.svg').default} alt="dropUp" />
                </div>
                <div className='sidebar-brands-list'>
                    <div className='sidebar-brand-chackbox-box'>
                        <input className="sidebar-chkc" id='samsung' name='samsung' type="checkbox"></input>
                        <label for="samsung">Samsung</label>
                    </div>
                    <div className='sidebar-brand-chackbox-box'>
                        <input  className="sidebar-chkc" id='Apple' name='samsung' type="checkbox"></input>
                        <label for="Apple">Apple</label>
                    </div>
                    <div className='sidebar-brand-chackbox-box'>
                        <input className="sidebar-chkc" id='Huawei' name='samsung' type="checkbox"></input>
                        <label for="Huawei">Huawei</label>
                    </div>
                    <div className='sidebar-brand-chackbox-box'>
                        <input className="sidebar-chkc" id='Pocco' name='samsung' type="checkbox"></input>
                        <label for="Pocco">Pocco</label>
                    </div>
                    <div className='sidebar-brand-chackbox-box'>
                        <input className="sidebar-chkc" id='Lenovo' name='samsung' type="checkbox"></input>
                        <label for="Lenovo">Lenovo</label>
                    </div>
                    <p className='seeAll'>See all</p>

                </div>
            <div className='sidebarLine' style={{marginTop:28}} ></div>
            <div className='sidebar-features'>
                <div className="sidebar-category-name">
                    <h4 className="sidebar-category-title">Features</h4>
                    <img src={require('./sidebarImg/expand_less.svg').default} alt="dropUp" />
                </div>
                <div className='sidebar-features-list'>
                    <div className='sidebar-brand-chackbox-box'>
                        <input className="sidebar-chkc" id='Metallic' name='samsung' type="checkbox"></input>
                        <label for="Metallic">Metallic</label>
                    </div>
                    <div className='sidebar-brand-chackbox-box'>
                        <input className="sidebar-chkc" id='Plastic-cover' name='samsung' type="checkbox"></input>
                        <label for="Plastic-cover">Plastic cover</label>
                    </div>
                    <div className='sidebar-brand-chackbox-box'>
                        <input className="sidebar-chkc" id='8GB-Ram' name='samsung' type="checkbox"></input>
                        <label for="8GB-Ram">Lenovo</label>
                    </div>
                    <div className='sidebar-brand-chackbox-box'>
                        <input className="sidebar-chkc" id='Super-power' name='samsung' type="checkbox"></input>
                        <label for="Super-power">Super power</label>
                    </div>
                    <div className='sidebar-brand-chackbox-box'>
                        <input className="sidebar-chkc" id='Large-Memory' name='samsung' type="checkbox"></input>
                        <label  for="Large-Memory">Large Memory</label>
                    </div>
                </div>
                <p className='seeAll'>See all</p>
            </div>
            <div className='sidebarLine'style={{marginTop:28}}></div>

            <div className='sidebar-price' >
                <div className="sidebar-category-name">
                    <h4 className="sidebar-category-title">Price range</h4>
                    <img src={require('./sidebarImg/expand_less.svg').default} alt="dropUp" />
                </div>
                <input className='sideba-range' type='range'></input>
                <div className='apple-min-max'>
                    <div className='min-price'>
                        <p className='price-value'>Min</p>
                        <input className='min-input' placeholder='0' type='number'/>
                    </div>
                    <div className='max-price'>
                        <p className='price-value'>Max</p>
                        <input className='min-input' placeholder='999999' type='number'/>
                    </div>
                </div>
                <button className='price-apply'>Apply</button>
            </div>
            <div className='sidebarLine'style={{marginTop:20}}></div>

            <div className='conditions'>
                <div className="sidebar-category-name">
                    <h4 className="sidebar-category-title">Conditions</h4>
                    <img src={require('./sidebarImg/expand_less.svg').default} alt="dropUp" />
                </div>
                <div className="sidebar-checkbox-brand">
                  <div className='sidebar-brand-chackbox-box'>
                        <input id='Any' className='other-checkbox' name='samsung' type="checkbox"></input>
                        <label for="Any">Any</label>
                    </div>
                    <div className='sidebar-brand-chackbox-box'>
                        <input id='Refurbished' className='other-checkbox' name='samsung' type="checkbox"></input>
                        <label for="Refurbished">Refurbished</label>
                    </div>
                    <div className='sidebar-brand-chackbox-box'>
                        <input id='Brand-new' className='other-checkbox' name='samsung' type="checkbox"></input>
                        <label for="Brand-new">Brand new</label>
                    </div>
                    <div className='sidebar-brand-chackbox-box'>
                        <input id='Old-items' className='other-checkbox' name='samsung' type="checkbox"></input>
                        <label for="Old-items">Old items</label>
                    </div>
                </div>
            </div>
            <div className='sidebarLine' style={{marginTop:28}}></div>
                 <div className="sidebar-category-name">
                    <h4 className="sidebar-category-title">Ratings</h4>
                    <img src={require('./sidebarImg/expand_less.svg').default} alt="dropUp" />
                </div>
                <div className='rating-list'>
                    <div className='sidebar-brand-chackbox-box'>
                        <input id='5' className='-other-checkbox' name='samsung' type="checkbox"></input>
                        <label for="5"><img src={require('./sidebarImg/5.svg').default} alt="stars" /></label>
                    </div>
                    <div className='sidebar-brand-chackbox-box'>
                        <input id='4' className='-other-checkbox' name='samsung' type="checkbox"></input>
                        <label for="4"><img src={require('./sidebarImg/4.svg').default} alt="stars" /></label>
                    </div>
                    <div className='sidebar-brand-chackbox-box'>
                        <input id='3' className='-other-checkbox' name='samsung' type="checkbox"></input>
                        <label for="3"><img src={require('./sidebarImg/3.svg').default} alt="stars" /></label>
                    </div>
                    <div className='sidebar-brand-chackbox-box'>
                        <input id='2' className='-other-checkbox' name='samsung' type="checkbox"></input>
                        <label for="2"><img src={require('./sidebarImg/2.svg').default} alt="stars" /></label>
                    </div>
                </div>
         
            </div>
        </section>
    )
}
export default SideBar ;