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

function App() {

  let allProducts = [{
    "id": 1,
    "product_name": "Belinda",
    "product_price": 3993,
    "product_img": ['abiento-black1.jpg', 'blackAbeinto4.jpg']
  }, {
    "id": 2,
    "product_name": "Sada",
    "product_price": 2032,
    "product_img": ['white-abiento1.jpg', 'white-abiento-2.jpg']
  }, {
    "id": 3,
    "product_name": "Wynn",
    "product_price": 7092,
    "product_img": ['brooklyn1.jpg', 'brooklyn2.jpg']
  }, {
    "id": 4,
    "product_name": "Norman",
    "product_price": 3803,
    "product_img": ['NEON2.jpg', 'Neon-tracksuit.jpg']
  },]

  return (
    <div className="body">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home products={allProducts} />} />
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
      </BrowserRouter>
    </div>
  );
}

export default App;
