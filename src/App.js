
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Detail'
function App() {
  return (<div className='container mt-3 mb-3'>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>}/> 
     <Route path='/user/:id' element={<Details/>}/> 
     </Routes>

    </BrowserRouter>
    </div>  );
}


export default App;
