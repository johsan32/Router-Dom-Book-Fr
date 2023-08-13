import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './pages/Products'
import MainPage from './pages/MainPage'
import Header from './components/Header'
import CardDetail from './pages/CardDetail'
import Undefined from './pages/Undefined'



function App() {


  return (
    <>
      <div >
        <header className='container'>
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <div>
            <h2>React Router Dom Project</h2>
          </div>
          <div>
            <h6>Vite + React</h6>
          </div>
        </header>
      </div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:productId' element={<CardDetail />}/>
          <Route path="*" element={<Undefined />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
