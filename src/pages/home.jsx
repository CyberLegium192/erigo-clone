import Navbar from "../component/navbar/navbar.jsx";
import BestSellerBox from "../component/bestSellerBox/bestSeller.jsx";
import Product from "../component/product/product.jsx";
import CardCategory from "../component/category-card/cardCategory.jsx";
import Carousel from "../component/caouselProduct/carouselProduct.jsx";
import Footer from "../component/footer/footer.jsx";
import ProductListComponent from '../asset/productObject/productList.jsx';

const Home = () => {
  return (
    <>
      <Navbar />
      <Product />
      <Carousel />
      <BestSellerBox />
      <CardCategory />
      <Footer />
    </>  
  )
}
export default Home;