import React, { Suspense, lazy } from 'react'
import { Route, Routes,Link,NavLink, useNavigate, Outlet } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import New from './components/New/New'
import Contact from './components/Contact/COntact'
import './App.css'
import Product from './components/Product/Product'
import NotFound from './components/NotFound/NotFound'
import Category from './components/Category/Category'
import CategoryDetail from './components/CategoryDetail/CategoryDetail'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
export default function App() {
  const cc = useNavigate()
  const  handleClick=()=>{
      cc("/")
  }
  // const Lazy = lazy(()=> import('./components/About/About'))

  const Lazy = lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("./components/About/About")), 1000000);
    });
  });
  return (
   <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>      
          <NavLink to="/about">About</NavLink>
        </li>
        
        <li>
          <NavLink to="/news">New</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    
    
    <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/about' element={<Suspense fallback={<div data-glitch="Loading..." className='glitch '></div>}><Lazy></Lazy> </Suspense>}> 

        </Route>

        <Route path='/news'element={<New></New>}> </Route>
        <Route path='/contact' element={<Contact></Contact>}> </Route>
        <Route path='/product/productId' element={<Product></Product>}></Route> 
        <Route path='/category' element={<Category></Category>}>
            <Route path=':categoryId' element={<CategoryDetail></CategoryDetail>}></Route>
        </Route> 
        <Route path='*' element={<NotFound></NotFound>}></Route> 
        
    </Routes> <br /><br /><br />

    <button onClick={handleClick}>come back</button>
    


   </>
  )
}
