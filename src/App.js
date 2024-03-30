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
    "product_name": "Black Abiento 39 Crop Tshirt",
    "product_price": 1499,
    "discount": 300,
    "product_img": ['abiento-black1.jpg', 'blackAbeinto4.jpg']
  }, {
    "id": 2,
    "product_name": "White Abiento 39 Crop Tshirt",
    "product_price": 1499,
    "discount": 300,
    "product_img": ['white-abiento1.jpg', 'white-abiento-2.jpg']
  }, {
    "id": 3,
    "product_name": "Brooklyn Crop Tshirt - WF",
    "product_price": 1499,
    "discount": 300,
    "product_img": ['brooklyn1.jpg', 'brooklyn2.jpg']
  }, {
    "id": 4,
    "product_name": "Neon Crop Tshirt",
    "product_price": 2299,
    "discount": 400,
    "product_img": ['NEON2.jpg', 'Neon-tracksuit.jpg']
  },]

  let summerTeesProducts = [{
    "id": 1,
    "product_name": "Coffee Tshirt - Brown",
    "product_price": 1199,
    "discount": 200,
    "product_img": ['coffee-chocolate-brown.jpg', 'blackAbeinto4.jpg']
  }, {
    "id": 2,
    "product_name": "Be Yourself Tshirt - Navy Blue",
    "product_price": 1199,
    "discount": 200,
    "product_img": ['be-yourself.jpg', 'white-abiento-2.jpg']
  }, {
    "id": 3,
    "product_name": "Be Kind Hearts Tshirt - Beige",
    "product_price": 1199,
    "discount": 200,
    "product_img": ['be-kinds.jpg', 'brooklyn2.jpg']
  }, {
    "id": 4,
    "product_name": "Be Real Not Perfect Tshirt - Black",
    "product_price": 1199,
    "discount": 200,
    "product_img": ['be-real.jpg', 'Neon-tracksuit.jpg']
  },]

  let collections = [{
    "id": 1,
    "product_name": "Stockings",
    "product_img": 'leggging2.jpg'
  }, {
    "id": 2,
    "product_name": "Turtle Neck",
    "product_img": 'black.jpg'
  }, {
    "id": 3,
    "product_name": "Bottoms",
    "product_img": 'grey-sweatpants.jpg'
  },]



  return (
    <div className="body">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home products={allProducts} summerTeesProducts={summerTeesProducts} collections={collections} />} />
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
