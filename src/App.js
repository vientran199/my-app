import './App.scss';
import { Suspense, lazy, useState, useEffect } from 'react'
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'
import NotFound from './components/NotFound';
import MainPage from './features/Photo/pages/MainPage';
import AddEditPage from './features/Photo/pages/AddEditPage';
import Header from './components/Header';
import productApi from 'api/productApi';
const Photo = lazy(() => import('./features/Photo'))

function App() {
  const [productList,setProductList] = useState([])

  useEffect(()=>{
    const fetchProductList = async()=>{
      try {
        const params = {
          _page: 1,
          _limit: 10
        };
        const response = await productApi.getAll(params)
        console.log(response)
    
      } catch (error) {
        console.log(error)
      }
    }
    fetchProductList()
  },[])
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path='/' element={<Navigate to='/photos' />}></Route>
            <Route path='/photos' >
              <Route path='' element={<MainPage />} />
              <Route path='add' element={<AddEditPage/>} />
              <Route path=':photoId' element={<AddEditPage/>} />
            </Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
