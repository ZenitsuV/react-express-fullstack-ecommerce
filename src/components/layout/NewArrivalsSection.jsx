import React, {useState} from 'react';
import './NewArrivalsSection.css';
import Products from '../product/Products';

const NewArrivalsSection = () => {
    const [category, setCategory] = useState("ALL");
    return (
        <>
       <section className='products-section'>
        <div className='container' style={{flexDirection:'column'}}>
          <div className='products-list-section'>
            <div className='section-head-wrapper'>
                <div className='section-head-title'>
                  <h2>New <span style={{color:'#8118d5'}}>Arrivals</span></h2>
                  <p>Shop online for new arrivals and get free shipping!.</p>
                </div>   
              <div className='tab-list-wrapper'>
                <ul className='tab-list' style={{display:'flex', flexDirection:'row',gap:'10px'}}>
                  <li className='tab-list-item'><a className={`${category === "ALL" ? 'active' : ''}`} onClick={(e) => setCategory(e.target.innerText)}>ALL</a></li>
                  <li className='tab-list-item'><a className={`${category === "FRUITS" ? 'active' : ''}`} onClick={(e) => setCategory(e.target.innerText)}>FRUITS</a></li>
                  <li className='tab-list-item'><a className={`${category === "VEGETABLES" ? 'active' : ''}`} onClick={(e) => setCategory(e.target.innerText)}>VEGETABLES</a></li>
                  <li className='tab-list-item'><a className={`${category === "SNACKS" ? 'active' : ''}`} onClick={(e) => setCategory(e.target.innerText)}>SNACKS</a></li>
                </ul>
             </div>           
            </div>
           
          <div className='products-list-wrapper'>
            <Products isSwiperNeeded={false} category={category} />
          </div>
          </div>        
        </div>
      </section>
        </>
    )
}

export default NewArrivalsSection;