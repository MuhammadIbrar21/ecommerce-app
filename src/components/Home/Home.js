import './Home.css'
import NewArrivals from '../NewArrivals/NewArrivals'
import SummerTees from '../SummerTees/SummerTees'
import Collections from '../Collections/Collections'

const Home = () => {

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
      <NewArrivals />
      <SummerTees />
      <Collections />
    </div>
  )
}

export default Home
