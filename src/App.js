import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './component/Main';
import Navebar from './component/Navbar';
import Welcome from './component/Welcome';
import Search from './component/Search';
import Details from './component/Details';


function App() {
  return (
    <Routes>
      {/* <Route path='/' element={<Welcome/>}/> */}
      <Route path='/' element={<Main/>}/>
      <Route path='/main' element={<Main/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/details' element={<Details/>}/>

    </Routes>
  );
}

export default App;
