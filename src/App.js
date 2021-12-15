import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FlexCSS from './components/test1/FlexCSS.jsx';
import GridCSS from './components/test1/GridCSS.jsx';
import Checkbox from './components/test2/Checkbox.jsx';
import CRUD from './components/test3/CRUD.jsx';
import Home from './components/home/Home.jsx';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/test1/css1" element={<FlexCSS />}/>
            <Route path="/test1/css2" element={<GridCSS />}/>
            <Route path="/test2/checkbox" element={<Checkbox />}/>
            <Route path="/test3/crud" element={<CRUD />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
