
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assetes/banner_mens.png'
import women_banner from './Components/Assetes/banner_women.png'
import kids_banner from './Components/Assetes/banner_kids.png'

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'></ShopCategory>}></Route>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category='women'></ShopCategory>}></Route>
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category='kid'></ShopCategory>}></Route>

          <Route path='/product' element={<Product></Product>}>
            <Route path=':productId' element={<Product></Product>}></Route>
          </Route>

          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/login' element={<LoginSignUp></LoginSignUp>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>

    </div >
  );
}

export default App;
