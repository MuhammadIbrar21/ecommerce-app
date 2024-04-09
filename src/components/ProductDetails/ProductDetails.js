import { useParams } from 'react-router-dom'
import './ProductDetails.css'
import Products from '../../Products';
import SummerTeesProducts from '../../SummerTeesProducts';
import { useContext, useState } from 'react';
import { CartContext } from '../Context/cartContext';
import {toast} from 'react-toastify';

const ProductDetails = () => {

    const { addToCart } = useContext(CartContext);

    const [quantity, setQuantity] = useState(1);

    let sizes = document.querySelectorAll('.size');

    const setSelected = () => {
        sizes.forEach(size => {
            size.addEventListener('click', () => {
                removeActiveClass()
                size.classList.add('selected')
            })
        })

        function removeActiveClass() {
            sizes.forEach(size => {
                size.classList.remove('selected')
            })
        }
    }


    // let decre = document.getElementById('decre');

    // useEffect(()=> {
    //     if (quantity === 0) {
    //         decre.disabled = true;
    //         decre.style.cursor = 'not-allowed'
    //     } else {
    //         decre.disabled = false;
    //         decre.style.cursor = 'pointer'
    //     }
    // }, [])

    const { productName } = useParams();

    const thisProduct = SummerTeesProducts.find(product => product.product_name === productName) || Products.find(product => product.product_name === productName)

    return (
        <div>
            <div className='productInfo'>
                <div className='productImages'>
                    {
                        thisProduct.product_img.map(src => {
                            return <div className='showCase' style={{ backgroundImage: `url(${src})` }}></div>
                        })
                    }
                </div>
                <div className='productDetails'>
                    <p>Rosh Gallery</p>
                    <h1>{thisProduct.product_name}</h1>
                    <div className='price-section'>
                        <div className='actual-price'>Rs.{((thisProduct.product_price).toLocaleString())}.00 PKR</div>
                        <div className='discount-price'>Rs.{((thisProduct.product_price) - (thisProduct.discount)).toLocaleString()}.00 PKR</div>
                        <div className='tag'>Sale</div>
                    </div>
                    <p>Size</p>
                    <div className='sizes'>
                        <div onClick={setSelected} className='size'>small</div>
                        <div onClick={setSelected} className='size'>medium</div>
                        <div onClick={setSelected} className='size'>large</div>
                        <div onClick={setSelected} className='size'>extra large</div>
                    </div>
                    <p>Quantity</p>
                    <div className='quantity'>
                        <button id='decre' onClick={() => setQuantity(quantity - 1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" /></svg>
                        </button>
                        <h3>{quantity}</h3>
                        <button onClick={() => setQuantity(quantity + 1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
                        </button>
                    </div>
                    <button id='addToCart' onClick={()=>{
                        addToCart(thisProduct)
                        toast.success('Product added into Cart');
                    }}>Add to cart</button>
                    <button id='buyItNow'>Buy it now</button>
                </div>
            </div>
        </div >
    )
}

export default ProductDetails
