import './Home.css'
import NewArrivals from '../NewArrivals/NewArrivals'
import SummerTees from '../SummerTees/SummerTees'
import Collections from '../Collections/Collections'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      <div className='banner'>
        <div className='left-banner'></div>
        <div className='right-banner'></div>
        <div className='top-surface'>
          <div className='top-surface-inner'>
            <h1>Browse our latest products</h1>
            <Link to='/all'><button>Shop all</button></Link>
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
