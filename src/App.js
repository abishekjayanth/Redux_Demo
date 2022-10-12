import { Route, Routes } from "react-router-dom";
import {ProductDetail, ProductList} from './pages'

function App() {
  return (
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/product_Detail/:productId" element={<ProductDetail/>}/>
      </Routes>
  );
}

export default App;
