import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incAction } from './redux/action';

export default function App() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();


    return (
        <div className="d-flex flex-direction-row w-25" style={{margin: '50px auto'}}>
            <input type="button" value="-" className="btn btn-primary fw-bold m-1" onClick={() => {
                dispatch({type: 'DECREMENT'})
            }} />
            <input type="text" name="count" id="" className="form-control text-center" onChange={() => { return null }} value={ state.count}/>
            <input type="button" value="+" className="btn btn-primary fw-bold m-1" onClick={ () => {
                dispatch(incAction())
            }} />
            
            
            {/* <input type="button" value="AddToCart" className="btn btn-primary fw-bold m-1" onClick={() => {
                dispatch({
                  type: "ADDTOCART",
                  payload: { name: "MacbookPro", price: 2000 },
                });
            }} /> */}
            
        </div>
    )
}
