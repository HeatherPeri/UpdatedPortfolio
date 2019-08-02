import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Examples from './components/Examples';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";

import './App.css';

function App() {
  return (
    <div className="App">

 {/* <Navbar />
<Home /> */}
{/* <Examples />
<Contact /> */}
<Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/Examples" component={Examples} />
          <Route exact path="/Contact" component={Contact} />
\        </Wrapper>
      </div>
    </Router>

    </div>
  );
}

export default App;
