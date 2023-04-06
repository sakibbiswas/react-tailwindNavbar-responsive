import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/nav/Navbar'
import Pricelist from './components/Pricelist/Pricelist'
import Deshboard from './components/pricecart/Deshboard/Deshboard'
import Phnbar from './components/phonbar/Phnbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-3xl bg-orange-300 text-center text-sky-950'>Wellcome to react Tailwind</h1>
      <Pricelist></Pricelist>
      <Deshboard></Deshboard>
      <Phnbar></Phnbar>


    </div>
  )
}

export default App
