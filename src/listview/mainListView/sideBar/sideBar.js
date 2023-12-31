import { useState } from "react";
import "../sideBar/sideBar.css"
const SideBar = () =>{

    const [sidebarSeeallCategorys,setSidebarSeeallCategorys] = useState('Block')
    const [arrowRotoCategorys,setArrowRotoCategorys] = useState('')
    const [openCategorys,setOpenCategorys] = useState(true)
    const [SeeAllCategorys,setSeeAllCategorys] = useState(false)

    const [sidebarSeeallBarnd,setSidebarSeeallBarnd] = useState('Block')
    const [arrowRotoBarnd,setArrowRotoBarnd] = useState('')
    const [openBarnd,setOpenBarnd] = useState(true)
    const [SeeAllBarnd,setSeeAllBarnd] = useState(false)

    const [sidebarSeeallFeatures,setSidebarSeeallFeatures] = useState('Block')
    const [arrowRotoFeatures,setArrowRotoFeatures] = useState('')
    const [openFeatures,setOpenFeatures] = useState(true)
    const [SeeAllFeatures,setSeeAllFeatures] = useState(false)

    const [arrowRotoConditions,setArrowRotoConditions] = useState('')
    const [openConditions,setOpenConditions] = useState(true)
    const [SeeAllConditions,setSeeAllConditions] = useState(false)

    const [arrowRotoRatings,setArrowRotoRatings] = useState('')
    const [openRatings,setOpenRatings] = useState(true)
    const [SeeAllRatings,setSeeAllRatings] = useState(false)


    function handleCloseConditions (){
        if(openConditions){
            setArrowRotoConditions("180")
        }else{
            setSeeAllConditions(false)
            setArrowRotoConditions("0")
        }
        setOpenConditions(!openConditions)
     }
    function handleCloseRatings (){
        if(openRatings){
            setArrowRotoRatings("180")
        }else{
            setSeeAllRatings(false)
            setArrowRotoRatings("0")
        }
        setOpenRatings(!openRatings)
     }
    function handleSeeAllFeatures (){
        setSeeAllFeatures(!SeeAllFeatures)
        if(SeeAllFeatures){
            setSidebarSeeallFeatures("block")
        }else{
            setSidebarSeeallFeatures("none")
        }
     }
     function handleCloseFeatures (){
        if(openFeatures){
            setArrowRotoFeatures("180")
            setSidebarSeeallFeatures("none")
        }else{
            setSeeAllFeatures(false)
            setArrowRotoFeatures("0")
            setSidebarSeeallFeatures("block")
        }
        setOpenFeatures(!openFeatures)
     }
    function handleSeeAllBarnd (){
        setSeeAllBarnd(!SeeAllBarnd)
        if(SeeAllBarnd){
            setSidebarSeeallBarnd("block")
        }else{
            setSidebarSeeallBarnd("none")
        }
     }
     function handleCloseBarnd (){
        if(openBarnd){
            setArrowRotoBarnd("180")
            setSidebarSeeallBarnd("none")
        }else{
            setSeeAllBarnd(false)
            setArrowRotoBarnd("0")
            setSidebarSeeallBarnd("block")
        }
        setOpenBarnd(!openBarnd)
     }

 function handleSeeAllCategorys (){
    setSeeAllCategorys(!SeeAllCategorys)
    if(SeeAllCategorys){
        setSidebarSeeallCategorys("block")
    }else{
        setSidebarSeeallCategorys("none")
    }
 }
 function handleCloseCategorys (){
    if(openCategorys){
        setArrowRotoCategorys("180")
        setSidebarSeeallCategorys("none")
    }else{
        setSeeAllCategorys(false)
        setArrowRotoCategorys("0")
        setSidebarSeeallCategorys("block")
    }
    setOpenCategorys(!openCategorys)
 }





    return(
        <section className="sidebar">
            <div className='sidebarLine'></div>
            <div className="sidebar-category">
                <div className="sidebar-category-name">
                    <h4  className="sidebar-category-title">Category</h4>
                    <img onClick={handleCloseCategorys} style={{transform: `rotate(${arrowRotoCategorys}deg) scale(1.2)`,cursor:"pointer"}}   src={require('./sidebarImg/expand_less.svg').default} alt="dropUp" />
                </div>
                <div className='sidebar-category-list'>
                    
                  {
                    openCategorys && (
                        <div style={{display:"flex",flexDirection:'column',gap:15}}>
                            <p className='sidebar-category-text'>Mobile accessory</p>
                            <p className='sidebar-category-text'>Electronics</p>
                            <p className='sidebar-category-text'>Smartphones</p>
                            <p className='sidebar-category-text'>Modern tech</p>
                           <p  className='sidebar-category-text'>Automobiles</p>

                           {
                            SeeAllCategorys &&(
                                <div  style={{display:"flex",flexDirection:'column',gap:15}}>
                                      <p  className='sidebar-category-text'>Home interiors</p>
                           <p  className='sidebar-category-text'>Tools, equipments</p>
                           <p className='sidebar-category-text'>Animal and pets</p>
                           <p  className='sidebar-category-text'>Machinery tools</p>
                           <p  className='sidebar-category-text'>Sports and outdoor</p>
                           <p  className='sidebar-category-text'>Modern tech</p>
                                </div>
                            )
                           }
                           <p onClick={handleSeeAllCategorys}  style={{display:`${sidebarSeeallCategorys}`}}  className='seeAll'>See all</p>
                        </div>
                    )
                  }
                    
                </div>
            </div>
            <div className='sidebarLine' style={{marginTop:20}}></div>
            <div className='sidebar-brands'>
                <div className="sidebar-category-name">
                    <h4 className="sidebar-category-title">Brands</h4>
                    <img onClick={handleCloseBarnd} style={{transform: `rotate(${arrowRotoBarnd}deg) scale(1.2)`,cursor:"pointer"}}  src={require('./sidebarImg/expand_less.svg').default} alt="dropUp" />
                </div>
                {
                    openBarnd &&(
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
                    {
                        SeeAllBarnd && (
                             <div  style={{display:"flex",flexDirection:'column',gap:15}}>
                                <div className='sidebar-brand-chackbox-box'>
                                    <input className="sidebar-chkc" id='Lenovo' name='samsung' type="checkbox"></input>
                                   <label for="Lenovo">Xiaomi</label>
                                 </div>
                                 <div className='sidebar-brand-chackbox-box'>
                                    <input className="sidebar-chkc" id='Lenovo' name='samsung' type="checkbox"></input>
                                   <label for="Lenovo">OPPA</label>
                                 </div>
                                 <div className='sidebar-brand-chackbox-box'>
                                    <input className="sidebar-chkc" id='Lenovo' name='samsung' type="checkbox"></input>
                                   <label for="Lenovo">Vivo</label>
                                 </div>
                                 <div className='sidebar-brand-chackbox-box'>
                                    <input className="sidebar-chkc" id='Lenovo' name='samsung' type="checkbox"></input>
                                   <label for="Lenovo">Motorola</label>
                                 </div>
                               </div>
                        )
                    }
                    <p onClick={handleSeeAllBarnd}  style={{display:`${sidebarSeeallBarnd}`}} className='seeAll'>See all</p>
                </div>

                    )
                }
                
            <div className='sidebarLine' style={{marginTop:28}} ></div>
            <div className='sidebar-features'>
                <div className="sidebar-category-name">
                    <h4 className="sidebar-category-title">Features</h4>
                    <img onClick={handleCloseFeatures} style={{transform: `rotate(${arrowRotoFeatures}deg) scale(1.2)`,cursor:"pointer"}} src={require('./sidebarImg/expand_less.svg').default} alt="dropUp" />
                </div>
                {
                    openFeatures &&(
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
                        <label for="8GB-Ram">8GB-Ram</label>
                    </div>
                    <div className='sidebar-brand-chackbox-box'>
                        <input className="sidebar-chkc" id='Super-power' name='samsung' type="checkbox"></input>
                        <label for="Super-power">Super power</label>
                    </div>
                    <div className='sidebar-brand-chackbox-box'>
                        <input className="sidebar-chkc" id='Large-Memory' name='samsung' type="checkbox"></input>
                        <label  for="Large-Memory">Large Memory</label>
                    </div>
                    {
                        SeeAllFeatures &&(
                            <div style={{display:"flex",flexDirection:'column',gap:15}}>
                                 <div className='sidebar-brand-chackbox-box'>
                        <input className="sidebar-chkc" id='Large-Memory' name='samsung' type="checkbox"></input>
                        <label  for="Large-Memory">Metallic</label>
                    </div> 
                    <div className='sidebar-brand-chackbox-box'>
                        <input className="sidebar-chkc" id='Large-Memory' name='samsung' type="checkbox"></input>
                        <label  for="Large-Memory">Large Memory</label>
                    </div>
                    <div className='sidebar-brand-chackbox-box'>
                        <input className="sidebar-chkc" id='Large-Memory' name='samsung' type="checkbox"></input>
                        <label  for="Large-Memory">Super powery</label>
                    </div>
                    <div className='sidebar-brand-chackbox-box'>
                        <input className="sidebar-chkc" id='Large-Memory' name='samsung' type="checkbox"></input>
                        <label  for="Large-Memory">Plastic cover</label>
                    </div>

                            </div>
                        )
                    }
                    <p onClick={handleSeeAllFeatures}  style={{display:`${sidebarSeeallFeatures}`}}  className='seeAll'>See all</p>
                </div>

                    )
                }
                
                
            </div>
            <div className='sidebarLine'style={{marginTop:28}}></div>

            <div className='sidebar-price' >
                <div className="sidebar-category-name">
                    <h4 className="sidebar-category-title">Price range</h4>
                    <img src={require('./sidebarImg/expand_less.svg').default} alt="dropUp" />
                </div>
                <div>
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
                
            </div>
            <div className='sidebarLine'style={{marginTop:20}}></div>

            <div className='conditions'>
                <div className="sidebar-category-name">
                    <h4 className="sidebar-category-title">Conditions</h4>
                    <img onClick={handleCloseConditions} style={{transform: `rotate(${arrowRotoConditions}deg) scale(1.2)`,cursor:"pointer"}}  src={require('./sidebarImg/expand_less.svg').default} alt="dropUp" />
                </div>
                {
                    openConditions &&(
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

                    )
                }
               
            </div>
            <div className='sidebarLine' style={{marginTop:28}}></div>
                 <div className="sidebar-category-name">
                    <h4 className="sidebar-category-title">Ratings</h4>
                    <img onClick={handleCloseRatings} style={{transform: `rotate(${arrowRotoRatings}deg) scale(1.2)`,cursor:"pointer"}} src={require('./sidebarImg/expand_less.svg').default} alt="dropUp" />
                </div>
                {
                    openRatings &&(
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

                    )
                }
                
         
            </div>
        </section>
    )
}
export default SideBar ;