import img from '@/assets/heroImage/innerbanner.jpg'
import cycle from '@/assets/cycle/bike.png'
import cycle1 from '@/assets/cycle/bike2.png'
import cycle2 from '@/assets/cycle/cycle1.png'
import cycle3 from '@/assets/cycle/cycle2.png'
import cycle4 from '@/assets/cycle/cycle3.png'
import about from '@/assets/cycle/new.png'
const About = () => {
  return (
    <div className="min-h-screen pt-2">

      {/* Hero Section */}
      <div className="relative">
        <img
          src={img}
          alt="Cycling Adventure"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">About Cycle_Labs</h2>
        </div>
      </div>

      <div className='container mx-auto p-4'>
        {/* About Section */}

        <section className=" bg-white rounded-xl shadow-md mt-8 flex flex-col md:flex-row items-center">
          <div className="md:ml-6 mt-4 md:mt-0">
            <h3 className="text-2xl font-semibold text-gray-800">Who We Are</h3>
            <p className="text-gray-700 text-lg mt-2">
              Cycle_Labs is dedicated to providing high-quality bicycles and professional services for all types of riders.
              Whether you are a daily commuter, a mountain biker, or just someone who enjoys casual rides, we have the perfect bike for you.
            </p>
          </div>
          <img
            src={about}
            alt="Bicycle Workshop"
            className="w-full md:w-1/2 rounded-lg"
          />
        </section>

        {/* Our Story Section */}
        <section className="bg-white rounded-xl shadow-md mt-8 flex flex-col md:flex-row items-center">
          <img
            src={cycle}
            alt="Bicycle Workshop"
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="md:ml-6 mt-4 md:mt-0">
            <h3 className="text-2xl font-semibold text-gray-800">Our Story</h3>
            <p className="text-gray-700 text-lg mt-2">
              Founded by passionate cyclists, Cycle_Labs started as a small shop with a big dream: to make cycling accessible for everyone.
              Today, we serve countless happy customers with our top-quality bicycles, expert repairs, and outstanding customer service.
            </p>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="bg-white rounded-xl p-6 mt-8">
          <h3 className="text-2xl font-semibold text-gray-800">Our Services</h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-12 grid-cols-1 gap-4 mt-4">
            {/* Service 1 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <img
                src={cycle1}
                alt="Bicycle Sales"
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="text-xl font-semibold mt-3">Bicycle Sales</h4>
              <p className="text-gray-700 mt-2">Find the perfect bicycle for any purpose—city riding, mountain trails, and beyond.</p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <img
                src={cycle3}
                alt="Bicycle Repair"
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="text-xl font-semibold mt-3">Bicycle Repairs</h4>
              <p className="text-gray-700 mt-2">Professional repair and maintenance to keep your ride smooth and safe.</p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <img
                src={cycle4}
                alt="Accessories"
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="text-xl font-semibold mt-3">Accessories</h4>
              <p className="text-gray-700 mt-2">Helmets, locks, lights, and more—everything you need for a great ride.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <img
                src={cycle2}
                alt="Accessories"
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="text-xl font-semibold mt-3">Accessories</h4>
              <p className="text-gray-700 mt-2">Helmets, locks, lights, and more—everything you need for a great ride.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
