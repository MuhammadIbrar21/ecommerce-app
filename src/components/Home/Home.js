import './Home.css'

const Home = ({ products }) => {
  // let productList = document.querySelectorAll('.product');

  products.forEach(product => {
    product.addEventListener('mouseenter', ()=>{
      product.style.backgroundImage = `url(${product.product_img[1]})`
    })
  });

  return (
    <div>
      <div className='banner'>
        <div className='left-banner'></div>
        <div className='right-banner'></div>
        <div className='top-surface'>
          <div className='top-surface-inner'>
            <h1>Browse our latest products</h1>
            <button>Shop all</button>
          </div>
        </div>
      </div>
      <section id='new-arrivals'>
        <h1>new arrivals</h1>
        <div className='product-lists'>
          {products.map(product => {
            return <div className='product' style={{ backgroundImage: `url(${product.product_img[0]})` }}>{product.product_name}<br />Rs.{(product.product_price).toLocaleString()}</div>
          })}
        </div>
      </section>
    </div>
  )
}

export default Home
