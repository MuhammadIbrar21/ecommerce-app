import { useContext } from 'react';
import './Cart.css'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/cartContext';
import { toast } from 'react-toastify';

const Cart = () => {

  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal, getProductTotal } = useContext(CartContext);

  let move = useNavigate();
  return (
    <div className='container'>
      {
          cartItems.length !== 0 ?
          <div className='cart-top'>
            <div className='cart-top-top'>
              <h1>Your cart</h1>
              <button onClick={() => {
              move('/')
            }}>Continue shopping</button>
            </div>
            <div className='cart-top-bottom'>
            <p>Product</p>
            <p>Quantity</p>
            <p>Total</p>
            </div>
          </div>
          : null
        }
      {
        cartItems.length === 0 ?
          <div id='cart-items'>
            <h1>Your cart is empty</h1>
            <button onClick={() => {
              move('/')
            }}>Continue shopping</button>
          </div>
          :
          cartItems.map(product => {
            return <div className='cart-product' key={product.id}>
              <div className='left-side'>
                <img src={product.product_img[0]} alt={product.product_name} />
                <div className='product-details'>
                  <h3>{product.product_name}</h3>
                  <p>Rs.{((product.product_price) - (product.discount)).toLocaleString()}.00</p>
                </div>
              </div>
              <div className='middle-part'>
                <div className='quantity'>
                  <button onClick={() => removeFromCart(product)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" /></svg>
                  </button>
                  <p>{product.quantity}</p>
                  <button onClick={() => addToCart(product)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
                  </button>
                </div>
                <button className='trash-btn' onClick={() => clearCart(product)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" /></svg>
                </button>
              </div>
              <div className='right-side'>
                <p>Rs.{getProductTotal(product).toLocaleString()}.00</p>
              </div>
            </div>
          })
        }
        {
          cartItems.length !== 0 ?
          <div className='total-price'>
            <p>Estimated total <span>Rs.{getCartTotal().toLocaleString()}.00 PKR</span></p>
            <p>Taxes, discounts and shipping calculated at checkout</p>
            <button id='check-out' onClick={()=> {
              toast.success('Products Successfully Purchased')
              clearCart();
              }}>Check out</button>
          </div>
          : null
        }
    </div>
  )
}

export default Cart
