

import {BrowserRouter as Router, Routes,Route,Navigate} from 'react-router-dom'
import Home from './pages/home/Home'
import Order from './pages/Order/Order'
import Cart from './pages/cart/Cart'
import NoPage from './pages/nopage/NoPage'
import Dashboard from './pages/admin/dashboard/Dashboard'
import MyState from './context/data/myState'
import Login from './pages/registration/Login'
import Signup from './pages/registration/Signup'
import ProductInfo from './pages/productInfo/ProductInfo'
import Allproducts from './pages/allproducts/Allproducts'

import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import AddProduct from './pages/admin/dashboard/page/AddProduct'
import UpdateProduct from './pages/admin/dashboard/page/UpdateProduct'




function App() {
  

  return (
    <MyState>
    <Router>
     <Routes>
      <Route path = '/' element ={<Home/>} />
      <Route path = '/order' element ={<ProtectedRoute><Order/></ProtectedRoute>} />
      <Route path = '/cart' element ={<ProtectedRoute><Cart/></ProtectedRoute>} />
      <Route path = '/dashboard' element = {<ProtectedRouteForAdmin><Dashboard/></ProtectedRouteForAdmin>}/>
      <Route path="/*" element={<NoPage/>} />
      <Route path = '/login' element ={<Login/>} />
      <Route path = '/signup' element ={<Signup/>} />
      <Route path = "/productinfo/:id" element ={<ProductInfo/>} />
      <Route path = '/addproduct' element ={<ProtectedRouteForAdmin><AddProduct/></ProtectedRouteForAdmin>} />
      <Route path = '/updateproduct' element ={<ProtectedRouteForAdmin><UpdateProduct/></ProtectedRouteForAdmin>} />
      <Route path="/allproducts" element={<Allproducts />} />
     </Routes>
     <ToastContainer/>
    </Router>
    </MyState>
  )
}

export default App

//user

export const ProtectedRoute = ({children})=>{
  const user = localStorage.getItem('user')
  if(user){
    return children
  }else{
    return <Navigate to = {'/login'}/>
  }
}

 const ProtectedRouteForAdmin = ({children})=>{
  const admin = JSON.parse(localStorage.getItem('user'))
  if(admin.user.email === 'example@example.com'){
    return children
  } else{
    return <Navigate to ={'/login'}/>
  }
}