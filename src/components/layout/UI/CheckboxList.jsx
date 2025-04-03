import React from 'react';
import './CheckboxList.css';
import {Icon} from '../../common/Utilities';


const CheckboxList = ({data, selectedItems, setSelectedItems}) => { 

    // push data names into array
    const checkboxItems = []; 
    for(let items in data) {  
        checkboxItems.push(data[items].name);
    }

   
    const handleCheckboxChange = (e) => {
        const { value, checked} = e.target;
        checked ?
            setSelectedItems([...selectedItems, value]) :
            setSelectedItems(selectedItems.filter((item) => item !== value));
    }

    return (
        <>
             <div className='info-list' style={{display: 'block'}}>
                <ul>
                    {checkboxItems.map((item, index) => (
                    <li key={index}>
                        <div className="info-list-item">    
                            {selectedItems.includes(item) ? <span className='checked'><Icon name="check"/></span> : <span className='non-checked'></span> }                                                                                     
                            <input className="checkbox" type="checkbox" name={item} value={item} checked={selectedItems.includes(item)} onChange={handleCheckboxChange} />
                            <a href="#"><span>{item}</span></a>                                                                                                                             
                        </div> 
                    </li>     
                    ))}
                </ul>
            </div>
        </>
    )
}

export default CheckboxList;