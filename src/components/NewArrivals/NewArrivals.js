// import { useState } from 'react'
import './NewArrivals.css'

const NewArrivals = ({ products }) => {

    // const [bgImg, setBgImg] = useState([])

    return (
        <div>
            <section id='new-arrivals'>
                <h1>new arrivals</h1>
                <div className='product-lists'>
                    {products.map(product => {
                        return <div className='product-container'>
                            <div className='product' style={{ backgroundImage: `url(${product.product_img[0]})` }}></div>
                            <div className='product-details'>
                                <div className='product-name'>{product.product_name}</div>
                                <div className='price-section'>
                                    <div className='actual-price'>Rs.{((product.product_price).toLocaleString())}.00 PKR</div>
                                    <div className='discount-price'>Rs.{((product.product_price) - (product.discount)).toLocaleString()}.00 PKR</div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <div className='new-arrivals-bottom'>
                    <div className='pagination'>
                        <div className='pages-number'>
                            <svg className='left-arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" /></svg>
                            1 / 5
                            <svg className='right-arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" /></svg>
                        </div>
                    </div>
                    <div className='new-arrivals-view-all-btn'>
                        <button>View all</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NewArrivals
