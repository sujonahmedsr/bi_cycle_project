import icon1 from '../assets/icons/1.png'
import icon2 from '../assets/icons/2.png'
import icon3 from '../assets/icons/3.png'
import icon4 from '../assets/icons/4.png'
import icon5 from '../assets/icons/5.png'
import icon6 from '../assets/icons/6.png'
const Promise = () => {
    return (
        <div className='flex flex-wrap items-center md:justify-evenly gap-5 bg-blue-50 p-5 text-sm'>
            <div className='flex gap-2'>
                <img src={icon1} alt="icons" width={30} />
                <p>Price Match Guarantee</p>
            </div>
            <div className='flex gap-2'>
                <img src={icon2} alt="icons" width={30} />
                <p>30 Day Satisfaction</p>
            </div>
            <div className='flex gap-2'>
                <img src={icon3} alt="icons" width={30} />
                <p>Widest Product Range</p>
            </div>
            <div className='flex gap-2'>
                <img src={icon4} alt="icons" width={30} />
                <p>World Class Bike Fitting</p>
            </div>
            <div className='flex gap-2'>
                <img src={icon5} alt="icons" width={30} />
                <p>Unbeatable Bike Finance</p>
            </div>
            <div className='flex gap-2'>
                <img src={icon6} alt="icons" width={30} />
                <p>Best Trade-In Prices</p>
            </div>
        </div>
    );
};

export default Promise;