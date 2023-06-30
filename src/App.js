import React, { useEffect, useState } from 'react'
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Login';
import { useStateValue } from './StateProvider';

<meta name="referrer" content="no-referrer"/>


function App() {
  const [{user},dispatch] = useStateValue();

  return (


    <div className="app">
      {!user ? (
        <>
        <Login/>
        </>
      ) : (
      <div className='app__body'>
        <Router>
            {/* <Sidebar/> */}
          <Routes>
            <Route path='/rooms/:roomId' element={<Chat/>}/>
            <Route path="/" element={<Sidebar/>}>
            </Route>
          </Routes>
        </Router>
      </div>
      )}
      <div className='credit'>
      <a href='https://www.linkedin.com/in/harshsharmalpu'><h3>Created by Harsh Sharma 💗</h3></a>
      </div>
    </div>
  );
}

export default App;
