import "./listViewHeader.css"

const ListViewHeader = () =>{
    return(
        <section className="listViewHeader">
            <div className="listView-header-wraper">
                <div className="header-back">
                    <img className='header-back-img' src={require('../listViewHeader/listViewHeader-img/arrow_back.svg').default} alt="dropdown" />
                    <h2 className="Mobile-accessory">Mobile accessory</h2>
                </div>
                <div className="listview-header-nav">
                   <img className='header-back-img' src={require('../listViewHeader/listViewHeader-img/idkshpn.svg').default} alt="dropdown" />
                   <img className='header-back-img' src={require('../listViewHeader/listViewHeader-img/persona.svg').default} alt="dropdown" />
                </div>
            </div>
            <div className='mobile-search-wrapper'>
               <input className='searchInput' type="text" placeholder="Search"  /> 
            </div>
            <div className='mobile-menu-list-wrapper'>
        <div className='header-mobile-list'>
            <p className='mobile-menu-list-title'>Tablesy</p>
            <p className='mobile-menu-list-title'>Phones</p>
            <p className='mobile-menu-list-title'>Ipads</p>
            <p className='mobile-menu-list-title'>Ipod</p>
            <p className='mobile-menu-list-title'>Jackeats</p>
          </div>
         </div>
         <div className="header-listr-line"></div>
         <div className="header-listview-sort">
            <div className="Newest">
                <p className="newest-ttile">Sort:Newest</p>
                <img className='header-sort-img' src={require('../listViewHeader/listViewHeader-img/sort.svg').default} alt="dropdown" />
            </div>
            <div className="header-filter">
                <p className="newest-ttile">Filter (3)</p>
                <img className='header-filter-img' src={require('../listViewHeader/listViewHeader-img/filter_alt.svg').default} alt="dropdown" />
            </div>
            <div className="grid-or-list-wrap">
                <img className="grid-or-list" src={require('./listViewHeader-img/gridview.svg').default} alt="dropUp" />
                <img className="grid-or-list" src={require('./listViewHeader-img/listview.svg').default} alt="dropUp" />
            </div>
         </div>
         <div className="header-listr-line"></div>
        <div className="sortby-brand">
           <div className="header-brand-sort-wrappe">
             <p className="header-brand-sort-title">Huawei</p>
             <img className="clear" src={require('./listViewHeader-img/clear.svg').default} alt="dropUp" />
            </div>
            <div className="header-brand-sort-wrappe">
             <p className="header-brand-sort-title">Apple</p>
             <img className="clear" src={require('./listViewHeader-img/clear.svg').default} alt="dropUp" />
            </div>
            <div className="header-brand-sort-wrappe">
             <p className="header-brand-sort-title">65GB</p>
             <img className="clear" src={require('./listViewHeader-img/clear.svg').default} alt="dropUp" />
            </div>
         </div>
        </section>
    )
}
export default ListViewHeader