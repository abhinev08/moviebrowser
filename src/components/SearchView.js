import React  from 'react';
import Hero from './Hero';


const SearchView = ({keyword ,searchResults}) => {
  const title = `You are searching for ${keyword,searchResults}`
  console.log(searchResults , "are the search results")
    return(
      <>
      <Hero text= {title} />
  
      </>
    )
  }
  export default SearchView;
