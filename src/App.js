import './App.css';
import Navbar from './components/Navbar';
import {useState, useEffect} from 'react';
import Home from './components/SearchView';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {

const [searchResults , setSearchresults] = useState([]);
const [searchText , setSearchText ] = useState('') ;

  return (
    <div>
      <Navbar searchText={searchText}  setSearchText={setSearchText}/>
      <Routes>
        <Route path="/" exact element={<Home />}>
        </Route>
      <Route path="/about" element={<AboutView /> }/>
        <Route path="/search" 
        element={<SearchView keyword={searchText} searchResults={searchResults}/>}>
          
          </Route>
    {/* <Home /> */}
    {/* <AboutView /> */}
    </Routes>
    </div>
  );
}

export default App;
