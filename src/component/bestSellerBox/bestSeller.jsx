import './bestSeller.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const BestSellerBox = () =>{
  
  return(
  <>
    <Link to='' className='boxBest'>
      <div className='best_seller_box'>
        <img src='https://cdn.shopify.com/s/files/1/0607/2841/0296/files/SUB_BANNER_CHINO_rev_1024x1024_crop_center.jpg?v=1666173972'
        />
      </div>
    </Link>
    <Link to='' className='boxBest'>
      <div className='best_seller_box'>
        <img src='https://cdn.shopify.com/s/files/1/0607/2841/0296/files/MOBIL_BANNER_ERIGO-X_40d95125-5b42-4ab3-b16c-63655685c7d6_1024x1024_crop_center.png?v=1666175286'
        />
      </div>
    </Link>
    
    <div className='container-best-seller'>
    <div className='wrapper-best-seller'>
      <div className='box-best-seller'>
        <img src='https://cdn.shopify.com/s/files/1/0607/2841/0296/files/DSC00872_800x_crop_center.jpg?v=1666429070'/>
        <div className='content'>
          <h3>OUTERWEAR JACKET</h3>
          <p>Never go out without Outerwear from Erigo. Outerwear for everyday wear</p>
          <button type='button'>SHOP NOW</button>
        </div>
      </div>
      <div className='box-best-seller'>
        <img src='https://cdn.shopify.com/s/files/1/0607/2841/0296/files/True_basic_wear_1_800x_crop_center.jpg?v=1666429435'/>
        <div className='content'>
          <h3>TRUE BASIC WEAR</h3>
          <p>Your basic wear with true sizing, for your ultimate basic style</p>
          <button type='button'>SHOP NOW</button>
        </div>
      </div>
    </div>
    </div>
  </>
  )
}


export default BestSellerBox