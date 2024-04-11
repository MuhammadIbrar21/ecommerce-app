import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import TrackSuits from './components/TrackSuits/TrackSuits';
import Stocking from './components/Stocking/Stocking';
import CropTshirt from './components/CropTshirts/CropTshirts'
import TurtleNeck from './components/TurtleNeck/TurtleNeck';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Women from './components/Women/Women';
import Cart from './components/Cart/Cart';
import ProductDetails from './components/ProductDetails/ProductDetails';
import AllProducts from './components/AllProducts/AllProducts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="body">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:productName' element={<ProductDetails />} />
            <Route path='/all' element={<AllProducts />} />
            <Route path='/women' element={<Women />} />
            <Route path='/tracksuit' element={<TrackSuits />} />
            <Route path='/stocking' element={<Stocking />} />
            <Route path='/croptshirts' element={<CropTshirt />} />
            <Route path='/turtleneck' element={<TurtleNeck />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
