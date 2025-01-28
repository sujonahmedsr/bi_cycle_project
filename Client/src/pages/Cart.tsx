import emptyCart from '@/assets/icons/emptycart.png'
import AllCart from '@/components/Cart/AllCart';
const Cart = () => {
    const cart = true
    return (
        <div className="container mx-auto p-4">
            <h1 className='text-2xl font-semibold'>My Cart</h1>
            {
                cart ?
                    <AllCart />
                    :
                    <div className='grid place-items-center min-h-[60vh]'>
                        <div className='space-y-5 flex items-center flex-col'>
                            <img src={emptyCart} width={150} alt="empty" />
                            <h1 className='text-2xl font-semibold'>There is no item in your cart!</h1>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Cart;