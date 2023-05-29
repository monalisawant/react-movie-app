
import './App.css';
import Home from './components/Home';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import SingleMovie from './components/SingleMovie';
import Error from './components/Error';



function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='movie/:id' element={<SingleMovie/>}></Route>
      <Route path='*' element={<Error/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
