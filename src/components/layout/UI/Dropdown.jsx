import React, {useState, useEffect} from 'react';
import useFetch from '../../../hooks/useFetch';
import { Icon } from '../../common/Utilities';

const Dropdown = ({url, handleChange}) => {
  const [data, setData] = useState([]);
  const getData = useFetch(url); 

   useEffect(()=>{
    setData(getData.data);
   },[getData.data])

    return (
        <>      
            <select name="sort-select" id="sort-select" onChange={handleChange}>
                    <option value="" disabled>Category</option>
                    <option value="All">All</option>
                    {data?.map((item) =>(
                    <option value={item.id} key={item.id}>{item.name}</option>     
                    ))}                                 
            </select>
            <Icon name="keyboard_arrow_down" />
        </>
    );
}

export default Dropdown;