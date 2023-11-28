import BannerSlider from '../bannerSlider/BannerSlider';
import ProductList from '../productList/ProductList';

const Home = () => {
  return (
    <div className="content-page">
      <BannerSlider />
      <ProductList />
    </div>
  );
};

export default Home;
