import React , {useState} from 'react';

const ProductQtyForm = () => {
    const [qtyCounter, setQtyCounter] = useState(1);

    const increment = () => {
      setQtyCounter((c) => {
          if(c >= 5) {
             return c; 
          } else {
              return c + 1;
          }
      });
    };
  
    const decrement = () => {
      setQtyCounter((c) => {
        if (c * 1 > 1) {
          return c * 1 - 1;
        } else {
          return c;
        }
      });
    };
  
    const inputChangeHandler = (e) => {
      const value = e.target.value;
      setQtyCounter(parseInt(value));
    };
  
    return (
        <>
          <div className='qty-plus-minus'>
            <div onClick={decrement} style={{margin: "0px 0px 0px 10px", cursor: "pointer"}}>-</div>
            <input readOnly="" className="qty-input" type="text" value={qtyCounter}  min="1" max="5" step="1" name="gi-qtybtn"  onChange={inputChangeHandler}></input>
            <div onClick={increment} style={{margin: "0px 10px 0px 0px", cursor: "pointer"}}>+</div>
        </div>  
        </>
    );
}


export default ProductQtyForm;