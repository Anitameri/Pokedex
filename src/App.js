import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Searchbar from './components/Searchbar';


function App() {
  return (
   <div>
    <NavBar />
    <div className="App">
     <Searchbar />
    </div>
   </div>
  );
}

export default App;

