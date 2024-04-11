import React from 'react'
import { Link } from 'react-router-dom'

const ProductsUI = ({ currentRecords }) => {
    return (
        <div>
            <div className='product-body'>
                {
                    currentRecords.map(product => {
                        return <div key={product.id}>
                            <Link to={`/${product.product_name}`} >
                                <div className='each-product'>
                                    <img src={product.product_img[0]} alt={product.product_name} />
                                    <p>{product.product_name}</p>
                                    <p>Rs.{(product.product_price).toLocaleString()} PKR</p>
                                </div>
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ProductsUI
