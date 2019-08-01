import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Examples from './components/Examples';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <div className="App">

 <Navbar />
<Home />
<Examples />
<Contact />
    </div>
  );
}

export default App;
