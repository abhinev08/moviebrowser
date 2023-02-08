import './App.css';
import Navbar from './components/Navbar';
import {useState, useEffect} from 'react';
// import Home from './components/SearchView';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import MovieV from './components/MovieV';
import {Route, Routes } from 'react-router-dom';


function App() {
const [searchResults , setSearchresults] = useState([]);
const [searchText , setSearchText ] = useState('') ;

useEffect(()=> {
      if(searchText) {
    console.log(searchText,"is the search text");
fetch(`https://api.themoviedb.org/3/search/movie?
api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`)     
 .then(response =>response.json())
 .then (data => {
  console.log(data.results);
    setSearchresults(data.results);
 })
}

}, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText}  setSearchText={setSearchText}/>
      <Routes>
        {/* <Route path="/" exact element={<Home />}> */}
        {/* </Route> */}
      <Route path="/about" element={<AboutView /> }/>
        <Route path="/search" 
        element={<SearchView keyword={searchText} searchResults={searchResults}/>} />
        <Route path="/movies/:id" element={<MovieV /> } />

        

    </Routes>
    </div>
  );
}

export default App;
