import React from 'react'
import Data from './Data'
import './style.css';

function Buttons({menuItems, filterItems, setItems}) {
  return (
    <div className='d-flex justify-content-center'>
        {
            menuItems.map(val => (
                <button 
                className='btn-dark text-white p-1 px-2 mx-5 btn fw-bold mb-2'
                onClick = {()=> filterItems(val)}>
                    {val}
                </button>
        ))}

        <button 
            className='btn-dark text-white p-1 px-2 mx-5 btn fw-bold'
        onClick = {()=> setItems(Data)}>
        All
        </button>
    </div>
  );
}

export default Buttons;