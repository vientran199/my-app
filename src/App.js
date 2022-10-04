import './App.css';
import {Suspense} from 'react'
import {Route,Routes,Navigate } from 'react-router-dom'

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Navigate exact from='/' to="/photos"/>
            <Route path='/photos' />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
