import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './Shared/Header/Header';
import OurHospitals from './components/Hospitals/OurHospitals/OurHospitals';
import OurHotels from './components/Hotels/OurHotels/OurHotels';
import Form from './components/Form/Form';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import messageIcon from './assets/Images/message-icon.png'
import Test from './components/Test/Test';
import Login from './components/Admin/Login/login';
import Dashboard from './components/Admin/AdminPanel/dashboard';
import { useCollection } from './Hooks/useCollection';
import { useEffect } from 'react';

function App() {
  const { document } = useCollection('Users');

  useEffect(
    ()=>{
      if (document.length !== 0) localStorage.setItem('credentials', JSON.stringify(document));
    }, [document]
  );

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop></ScrollToTop>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/hospital' element={<OurHospitals />} />
          <Route path='/hotel' element={<OurHotels />} />
          <Route path='/form' element={<Form />} />
          <Route path='/test' element={<Test />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>


        <a href="https://p5jfzp15q2p.typeform.com/to/iAHQysg7" target="_blank">
          <button className='btn-shadow' id='fixedbutton'>
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg> */}

            <img src={messageIcon} className='img-fluid' alt="" />
          </button>
        </a>
      </BrowserRouter>
    </div>
  );
}

export default App;
