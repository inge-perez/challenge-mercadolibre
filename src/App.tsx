import './App.scss';
import Header from './shared/Header';
import { Route, Routes } from 'react-router-dom';
import rutas from './route-config';
import Home from './pages/home/Home';
import SiteItems from './pages/listResultsItems/SiteResultsItems';
import SiteDetailItems from './pages/itemDetail/SiteDetailItem';

function App() {
  return (
    <div className='container'>
      <Header />
      {/* <Routes>
        {rutas.map(ruta => <Route key={ruta.path} path={ruta.path} element={<ruta.componente />} ></Route>)}
      </Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="items" element={<SiteItems />}></Route>
        <Route path="items/:itemId" element={<SiteDetailItems />}></Route>
      </Routes>
    </div>

  );
}

export default App;
