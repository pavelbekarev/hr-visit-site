import React from 'react';
import logo from './logo.svg';
import './App.css';
import { StartPage } from './pages/StartPage';
import { AboutMe } from './pages/AboutMe';

function App() {
  return (
    <>
      {/* // <header className='headerMenu_header'>
      //   <section>
      //     <div className="container">
      //       <StartPage />
      //     </div>
      //   </section>
      // </header> */}
      
      <StartPage />
      <AboutMe />
    </>
    
  );
}

export default App;
