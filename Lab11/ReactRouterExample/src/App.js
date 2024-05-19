import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {ProductList, Contact, Admin, ProductDetail, NotFound, Home} from './pages'
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';



function App() {

  const isAdmin =  true;

  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product/" element={<ProductList/>}></Route>
        <Route path="/product/:id" element={<ProductDetail/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/admin" element={isAdmin ? <Admin /> : <Navigate to="/" />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>

      <Footer/>  
    </div>
    </BrowserRouter>
  );
}

export default App;
