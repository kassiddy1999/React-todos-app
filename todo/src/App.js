import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
    <Navbar />
    <switch>
    <Route exact path = '/' component = { Home } />
    <Route path = '/about' component = { About } />
    <Route path = '/contact' component = { Contact } />
    <Route path = '/:post_id' component = { Post } />
    </switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
