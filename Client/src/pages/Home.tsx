import LatestProducts from "@/components/Home/LatestProducts";
import Hero from "../components/Home/Hero";
import NewsLetter from "../components/Home/NewsLetter";
import Promise from "../components/Home/Promise";
import WhyShop from "../components/Home/WhyShop";

const Home = () => {
  return (
    <div className="space-y-10">
      <Hero />
      <LatestProducts />
      <WhyShop />
      <NewsLetter />
      <Promise />
    </div>
  );
};

export default Home;