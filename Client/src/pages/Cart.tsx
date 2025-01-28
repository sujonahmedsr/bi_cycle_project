import emptyCart from '@/assets/icons/emptycart.png'
const Cart = () => {
    const cart = false
    return (
        <div className="container mx-auto p-4">
            <h1 className='text-2xl font-semibold'>My Cart</h1>
            {
                cart ?
                    <div>
                        <h1>You have 1 cart</h1>
                    </div>
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