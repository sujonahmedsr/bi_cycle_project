import { Link } from "react-router-dom";

const NewsLetter = () => {
    return (
        <div className="md:h-[50vh] w-full bg-[url('/newLetter.png')] bg-fixed bg-cover bg-center">
            <div className="h-full flex flex-col nd:space-y-5 space-y-3 items-center justify-center text-white bg-black bg-opacity-50 px-5 py-10">
                <h1 className="text-2xl font-bold">RIDE NOW, PAY LATER</h1>
                <p>✨ Start the New Year out right with a new bike! Our flexible financing lets you bring home the perfect ride without waiting.</p>
                <Link to={'/shop'}>
                    <button className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 duration-300">Learn More...</button>
                </Link>
            </div>
        </div>
    );
};

export default NewsLetter;