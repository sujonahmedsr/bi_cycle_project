import Hero from "./Hero";
import NewsLetter from "./NewsLetter";
import Promise from "./Promise";
import WhyShop from "./WhyShop";

const Home = () => {
  return (
    <div className="space-y-10">
      <Hero />
      <WhyShop />
      <NewsLetter />
      <Promise />
    </div>
  );
};

export default Home;