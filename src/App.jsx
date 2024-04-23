import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './component/Products'
import Cart from './component/Cart'

function App() {
  const[price,setPrice]=useState(0)
  const[cart,setCart]=useState([
    {id: 1, name: "Amit",Age:26, visible:true },
    {id: 2, name: "Mohit", Age:24, visible:true},
    {id: 3, name: "Aryan",Age:30, visible:true},
    {id: 4, name: "Shivam",Age:20, visible:true},
    {id: 5, name: "Kamran",Age:23, visible:true},
    ])
  
  
 
  return (
    <>
     <div className='flex  items-center gap-20 px-40'>
        <Products Products={cart} setCart={setCart} />
        <Cart  cart={cart} setCart={setCart} />
     </div>
    </>
  )
}

export default App
