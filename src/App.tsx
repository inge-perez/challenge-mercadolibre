import './App.scss';
import Header from './shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import * as React from "react";

const SiteResultsItems = React.lazy(() => import("./pages/listResultsItems/SiteResultsItems"));
const SiteDetailItem = React.lazy(() => import("./pages/itemDetail/SiteDetailItem"));


function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route
          path="items"
          element={
            <React.Suspense fallback={<>...</>}>
              <SiteResultsItems />
            </React.Suspense>
          }
        />
        <Route
          path="items/:itemId"
          element={
            <React.Suspense fallback={<>...</>}>
              <SiteDetailItem />
            </React.Suspense>
          }
        />
      </Routes>
    </div>

  );
}

export default App;
