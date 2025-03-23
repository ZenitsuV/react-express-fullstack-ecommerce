import React, {useState} from 'react';
import './NewArrivalsSection.css';
import Products from '../product/Products';

const NewArrivalsSection = () => {
    const [category, setCategory] = useState("All");
    console.log(category);
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
                  <li className='tab-list-item'><a className={`${category === "All" ? 'active' : ''}`} onClick={(e) => setCategory(e.target.innerText)}>All</a></li>
                  <li className='tab-list-item'><a className={`${category === "Fruits" ? 'active' : ''}`} onClick={(e) => setCategory(e.target.innerText)}>Fruits</a></li>
                  <li className='tab-list-item'><a className={`${category === "Vegetables" ? 'active' : ''}`} onClick={(e) => setCategory(e.target.innerText)}>Vegetables</a></li>
                  <li className='tab-list-item'><a className={`${category === "Snacks" ? 'active' : ''}`} onClick={(e) => setCategory(e.target.innerText)}>Snacks</a></li>
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