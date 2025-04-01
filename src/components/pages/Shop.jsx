import React, {useState} from 'react';
import './Shop.css';
import Header from '../layout/Header';
import NavigationPath from '../layout/NavigationPath';
import Footer from '../layout/Footer';
import {Icon, accordianHandler} from '../common/Utilities';
import Products from '../product/Products';
import category from '/public/category';
import CheckboxList from '../common/CheckboxList';

const Shop = () => {
    const[selectedItems, setSelectedItems] = useState([]);   
    const[selectSort, setSelectSort] = useState(""); 

    let categoryItems = selectedItems.length > 0 ? selectedItems : null;

    const handleAccordian = (e) => {     
        accordianHandler(e);
    }

    const handleSortDropdown = (e) => {
        setSelectSort(e.target.value);
    }

    return (
        <>
        <Header/>
        <NavigationPath/>
         <section className='shop-section pd-tb-40'>
            <div className='container'>
                <div className='shop-wrapper'>
                    <div className='shop-left-side'>
                        <div className='left-side-wrapper'>
                            {/* accordian 1 */}
                            <button className="accordion active" onClick={(e) => handleAccordian(e)}>Category<Icon name="keyboard_arrow_down" /></button>                             
                            <div className="panel">
                              <CheckboxList data={category} selectedItems={selectedItems} setSelectedItems={setSelectedItems}/>
                            </div>                                              
                         </div>
                       </div>
                        <div className='shop-right-side'>
                            <div className='shop-pro-top'>
                                <div className='pro-top-sort'>
                                    <div className='select-inner'>
                                      <select name="sort-select" id="sort-select" onChange={handleSortDropdown}>
                                            <option value="" disabled="" >Sort by</option>
                                            <option value="1">Name, A to Z</option>
                                            <option value="2">Name, Z to A</option>
                                            <option value="3">Price, low to high</option>
                                            <option value="4">Price, high to low</option>
                                      </select>
                                      <Icon name="keyboard_arrow_down" />
                                    </div>
                                </div>
                            </div>
                            <div className='shop-pro-content'>
                                <div className='shop-pro-content-inner'>
                                <Products isSwiperNeeded={false} category={categoryItems} count="10" filterBy={selectSort} isShopPage={true} />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
         </section>
         <Footer/>
        </>
    );
}

export default Shop;