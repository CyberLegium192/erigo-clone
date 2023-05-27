import './cardCategory.css';
import {Link} from 'react-router-dom';
const CardCategory = () => {
  return (
    <>
      <div className='container-category-card'>
        <div className='card-category-box'>
          <Link to='' >
            <img src='https://cdn.shopify.com/s/files/1/0607/2841/0296/files/t-shirt_v2.jpg?v=1677828089'/>
            <h3>T-Shirt</h3>
          </Link>
        </div>
        <div className='card-category-box'>
          <Link to='' >
            <img src='https://cdn.shopify.com/s/files/1/0607/2841/0296/files/outer_v2.jpg?v=1677828101'/>
            <h3>outher</h3>
          </Link>
        </div>
        <div className='card-category-box'>
          <Link to='' >
            <img src='https://cdn.shopify.com/s/files/1/0607/2841/0296/files/shirt_v2.jpg?v=1677828300'/>
            <h3>shirt</h3>
          </Link>
        </div>
        <div className='card-category-box'>
          <Link to='' >
            <img src='https://cdn.shopify.com/s/files/1/0607/2841/0296/files/pants_v2.jpg?v=1677828323'/>
            <h3>pants</h3>
          </Link>
        </div>
        <div className='card-category-box'>
          <Link to='' >
            <img src='https://cdn.shopify.com/s/files/1/0607/2841/0296/files/acc_v2.jpg?v=1677828336'/>
            <h3>accessories</h3>
          </Link>
        </div>
        <div className='card-category-box'>
          <Link to='' >
            <img src='https://cdn.shopify.com/s/files/1/0607/2841/0296/files/footwear_v2.jpg?v=1677828352'/>
            <h3>footwear</h3>
          </Link>
        </div>
      </div>
      
      <Link to='' className='boxBest'>
        <div className='best_seller_box'>
          <img src='https://cdn.shopify.com/s/files/1/0607/2841/0296/files/Parfume_1024x1024_crop_center.jpg?v=1677639514'
          />
        </div>
      </Link>
      <Link to='' className='boxBest'>
        <div className='best_seller_box'>
          <img src='https://cdn.shopify.com/s/files/1/0607/2841/0296/files/Shanghai_1024x1024_crop_center.jpg?v=1677639687'
          />
        </div>
      </Link>
      
    </>  
    
  )
}

export default CardCategory