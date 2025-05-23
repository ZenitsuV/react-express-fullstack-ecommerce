import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import "./ViewProducts.css";
import Header from '../layout/section/Header';
import NavigationPath from '../layout/UI/NavigationPath';
import Footer from '../layout/section/Footer';
import {Icon} from '../common/Utilities';
import useFetch from '../../hooks/useFetch';



const ViewSubCategories = () => {
 const { data, loading, error } = useFetch('category.json');
 const [categories, setCategories] = useState([]);
 const [selectSort, setSelectSort] = useState(""); 


  useEffect(() => {
    setCategories(data);
  },[data])


  const handleSortDropdown = (e) => {
    setSelectSort(e.target.value);
  }

 let content = [];

  {categories?.forEach((category, idx) => {
   
    if(category.subCategory.length > 0) {
        category.subCategory.map((sub,index) => {
             
            let editData = {
                    isEdit: true,
                    categoryId:`${category.id}`,
                    subCategory:sub,
                    index: idx,
                }

            content.push(  
                <tr className="pro-gl-content" key={index + 1}>
                    <td><span>{index + 1}</span></td>         
                    <td><span>{category.name}</span></td>
                    <td><span>{sub}</span></td>
                    <td>
                        <span className="tbl-btn">
                            <button className="btn-2" title="Edit" style={{padding: "0px 10px 0px 10px", height: "45px"}} >
                                <Link to='/EditSubCategory' state={editData}><Icon name="edit" style={{padding: "0px", background: "transparent", color: "#ffffff", fontSize: "25px"}} /></Link> 
                            </button>
        
                            <button
                                className="btn-1" title="Delete" style={{padding: "0px 10px 0px 10px", height: "45px"}} >
                                <Icon name="delete" style={{padding: "0px", background: "transparent", color: "#ffffff", fontSize: "25px"}} />
                        </button>
                        </span>
                    </td>
                </tr> 
                );
        })
    } else {
      <tr>
        <td>No data available</td>
      </tr>
    }

  })}  


    return (
        <>
         <Header/>
         <NavigationPath/>
         <section className='wishlist-section pd-tb-40'>
            <div className='container' style={{flexDirection:"column"}}>             
                <div className='row'>                 
                 <div className='content-wrapper'>
                    <div className="dashboard-card">
                        <div className="card-header">
                            <button
                                className=""
                                type="submit"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    backgroundColor: "rgb(92, 175, 144)",
                                    lineHeight: "10px",
                                    padding: "10px",
                                    borderRadius: "4px",
                                    color: "whitesmoke"}}
                            >
                             <Link to="/NewSubCategory">Add</Link>
                            </button>
                            <h5>All Categories</h5>
                                  <div style={{display:"flex", gap:"15px"}}>
                                      <div className='select-inner' style={{border: "1px solid #eee",height:"35px"}}>
                                            <input 
                                                type="text" 
                                                name="filter-search" 
                                                id="filter_search"  
                                                className='form-control'
                                                style={{lineHeight:0, padding:"5px",height:"35px"}} 
                                                placeholder='Search...'
                                            />              
                                        </div>

                                       <div className='select-inner' style={{border: "1px solid #eee",height:"35px"}}>
                                            <select name="sort-select" id="sort-select" onChange={handleSortDropdown}>
                                                    <option value="" disabled="" >Category</option>
                                                    <option value="1">Fruits</option>
                                                    <option value="2">Vegetables</option>                                          
                                            </select>
                                            <Icon name="keyboard_arrow_down" />
                                        </div>     
                                  </div>
                                  
                        </div>
                        <div className="card-body">
                            <div className="card-table">
                               {loading && <div>Loading....</div>}
                               {error && <div>{error}</div>}
                                {
                                    !loading && 
                                    <table className="table table">
                                    <thead>
                                    <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Sub Category</th>
                                        <th scope="col">Actions</th>  
                                    </tr>
                                    </thead>
                                    <tbody className="wish-empt" style={{textAlign: "center"}}>
                                      {content}
                                    </tbody>
                                </table>
                                }
                           
                            </div>
                        </div>
                        </div>
                       
                    </div>
                </div>
            </div>
         </section>
         <Footer/>
        </>
    )
}

export default ViewSubCategories;