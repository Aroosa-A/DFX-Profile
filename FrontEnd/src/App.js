import './App.css';
import Footer from '../src/components/Footer.jsx';
import Header from '../src/components/Header.jsx'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/HomePage/HomePage.jsx';
import ProfilePage from './components/ProfilePage/ProfilePage.jsx';

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import FullProfile from './component/FullProfile';


function App() {

  /*
    const [profileData, setProfileData] = useState([]);
  
  
    useEffect(() => {
      getData();
  
    }, []);
  
  
    const getData = async () => {
      try {
        const res = await axios.get('http://localhost:3000/info');
        setProfileData(res.data.data);
        console.log(res.data.data);
      }
      catch (e) {
        console.log(e);
      }
    }
    */


  return (
    <Router>
      <Header />
      <Routes>
        <>
          <Route path='/' element={<Homepage />} />
          <Route path='/profilepage' element={<ProfilePage />} />
        </>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
