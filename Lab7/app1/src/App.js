import {useState, useEffect} from 'react'; 
import './App.css'; 
import APIKey from './config'; 
import Movie from './components/Movie'; 
import Search from './components/Search';
 
const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key='; 
const SearchURL = 'https://api.themoviedb.org/3/search/movie?api_key=';


 
function App() { 
  const [movieResults, setMovieResults] = useState([]); 
  const [searchTerm,setSearchTerm]=useState('')
  //const testArray = ['age',2,true,"aa"]; 
 
  useEffect( ()=> { 
      fetch(APIURL + APIKey) 
      .then( (resp) => resp.json() ) 
      .then( (data) => {
      console.log(data.results);
      setMovieResults(data.results);
    }
      ) 
  } 
  ,[]) 

 
 
  const handleOnChange=(e) =>{
    console.log(e.target.value)
    setSearchTerm(e.target.value)
  }
  return ( 
 
    <>
    <header>
     <Search/>

    </header>
    <div className='movie-container'> 
    {movieResults.map( (element) => (<Movie key={element.id} {...element}/>) 
     
    )} 
    </div> 
    </>
  ); 
} 
 
export default App;