import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LayoutUtils from './utils/LayoutUtils';
import DetailProduct from './pages/DetailProduct';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutUtils />}>
          <Route index element={<HomePage />}></Route>
          <Route path='detail-product' element={< DetailProduct />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
