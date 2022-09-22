import './App.css';
import React from 'react';
import  ReactDOM  from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AvengerList from '../Components/AvengersList';
import { useParams } from 'react-router-dom';
import App from './App';
import AvengerList from '../Components/AvengersList';
import Home from '../Components/Home';

// function Home(props) {
//   return <h3>This Is Home</h3>
// }

function Avenger({ hero }) {
  
  const params = useParams();

  const heros = hero.find(item = item.id === Number(params.hero));

  return (
   <div className='character-card'>
    <header className='App-Header'>
       <h2>Hey Youz Guyz...gender-inclusive</h2>
       <h2>{heros.name}</h2>
       <p>{heros.nickname}</p>
       <p>{heros.description}</p>
       <img src={heros.thumbnail} alt="random avengers img" />
    </header>
   </div>
  );
}

function App() {
  return (
    <div className="App">
          <Route exact path='/avengers/:hero'>
              <Avenger key={hero.id} hero={hero} />
          </Route>
          <Route exact path='/avengers/'>
              <AvengerList hero={hero} />
          </Route>
          <Route exact path='/' component={Home} />
    </div>
  );
}

export default App;
