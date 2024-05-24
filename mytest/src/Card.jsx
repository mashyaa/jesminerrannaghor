import React from 'react';
import './style.css';

function Card({ item }) {
  return (
    <div className='page-container'> {/* Add a class or use an existing class for the outer container */}
      <div className='container'>
        <div className='row justify-content-center card-container'>
          {item.map((val) => (
            <div key={val.id} className='col-lg-3 col-md-4 col-sm-6 my-3'>
              <div className='card'>
                <div className='card-img-top text-center'>
                  <img src={val.img} alt={val.title} />
                </div>
                <div className='card-body'>
                  <div className='card-title'>{val.title} -- {val.price}</div>
                  <div className='card-text'>{val.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
