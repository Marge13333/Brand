import './BlockRecommend.css'
const BlockRecommend = () =>{
    return(
        <section className='Block-Recommend'>
          <div className='Block-Recommend-wrapper'>
          <h4 className='Block-Recommend-title'>Related products</h4>
            <div className='Block-Recommend-box-wrapper'>
                <div className='Block-Recommend-box'>
                  <img className="Block-Recommend-img" src={require('./BlockRecommend-img/img (2).svg').default} alt="main-img" />
                  <p className='Block-Recommend-box-title'>Xiaomi Redmi 8 Original </p>
                  <p className='Block-Recommend-box-price'>$32.00-$40.00</p>
                </div>
                <div className='Block-Recommend-box'>
                  <img className="Block-Recommend-img" src={require('./BlockRecommend-img/img (3).svg').default} alt="main-img" />
                  <p className='Block-Recommend-box-title'>Xiaomi Redmi 8 Original </p>
                  <p className='Block-Recommend-box-price'>$32.00-$40.00</p>
                </div>
                <div className='Block-Recommend-box'>
                  <img className="Block-Recommend-img" src={require('./BlockRecommend-img/img (4).svg').default} alt="main-img" />
                  <p className='Block-Recommend-box-title'>Xiaomi Redmi 8 Original </p>
                  <p className='Block-Recommend-box-price'>$32.00-$40.00</p>
                </div>
                <div className='Block-Recommend-box'>
                  <img className="Block-Recommend-img" src={require('./BlockRecommend-img/img (5).svg').default} alt="main-img" />
                  <p className='Block-Recommend-box-title'>Xiaomi Redmi 8 Original </p>
                  <p className='Block-Recommend-box-price'>$32.00-$40.00</p>
                </div>
                <div className='Block-Recommend-box'>
                  <img className="Block-Recommend-img" src={require('./BlockRecommend-img/img (6).svg').default} alt="main-img" />
                  <p className='Block-Recommend-box-title'>Xiaomi Redmi 8 Original </p>
                  <p className='Block-Recommend-box-price'>$32.00-$40.00</p>
                </div>
                <div className='Block-Recommend-box'>
                  <img className="Block-Recommend-img" src={require('./BlockRecommend-img/img (7).svg').default} alt="main-img" />
                  <p className='Block-Recommend-box-title'>Xiaomi Redmi 8 Original </p>
                  <p className='Block-Recommend-box-price'>$32.00-$40.00</p>
                </div>
            </div>
          </div>
        </section>
    )
}
export default BlockRecommend ;