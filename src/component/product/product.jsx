import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import './product.css'
// import dataProduct from '../../asset/productObject/productList.jsx';
import axios from 'axios'
  // console.log(dataProduct)

const Product = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://646bae327d3c1cae4ce42607.mockapi.io/Erigo')
      .then(resp => {
        return resp.json()
      })
      .then(data1 => {
        setData(data1)
        console.log(data1)
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };
  
  return (
    <>
    <div className="image-hero">
        <img
          src="https://cdn.shopify.com/s/files/1/0607/2841/0296/files/Mobile_Banner_FA_2x-100.jpg?v=1684732104"
          alt="new"
        />
      </div>
    <h2 className='newArrivals'>New Arrival</h2>
    <div className='container-product'>
      {data.map(user => (
        <div className='card-box'>
          <div className='image-card'>
            <img src={user.Poster}/>
          </div>
          <div className='content-product'>
            <p>{user.Title}</p>
            <span className='diskon line'>Rp {user.DiskonPrice}</span>
            <span className='diskon'>Rp 69.000</span>
          </div>
          <div className='diskon-logo'>
            <span> --75%</span>
          </div>
        </div>
        ))}
      </div>
      
        
        
    </>  
  )
}

            // <span className='soldout'>SOLD OUT</span>

export default Product