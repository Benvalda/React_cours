import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import News from './page/News';
import NewsDetails from './page/NewsDetails';
import Faq from './page/Faq';
import Contact from './page/Contact';
import Nav from './component/Nav';
import NotFound from './page/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css"
import Missions from './component/Missions';
import Valeurs from './component/Valeurs';
import Chiffres from './component/Chiffres';
import Login from './page/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          {/* <Route path='/login' element={<Login/>} /> */}
          <Route path='/about' element={<About/>}>
            <Route path='nos-missions' element={<Missions/>}/>
            <Route path='nos-valeurs' element={<Valeurs/>}/>
            <Route path='nos-chiffres' element={<Chiffres/>}/>
          </Route>
          <Route path='/news' element={<News/>} />
          <Route path='/news/:slug' element={<NewsDetails/>} />
          <Route path='/faq' element={<Faq/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
