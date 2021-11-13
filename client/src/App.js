import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import { getActivities, getCountries } from './redux/actions/index';
import LandingPage from './views/LandingPage/LandingPage';
import Home from './views/Home/Home';
import CreateActivity from './views/CreateActivity/CreateActivity';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/addActivity' element={<CreateActivity/>} />
      </Routes>
    </div>
    
  );
}

export default App;
