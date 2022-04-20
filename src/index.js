import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import GridView from './routes/gridView';
import TilesView from './routes/tilesView';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path='gridView' element={<GridView />} />
      <Route path='tilesView' element={<TilesView />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
// to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
