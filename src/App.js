import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movielist/movielist';
import Moviedetail from './pages/moviedetail/movie';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element = {<Home />}></Route>
          <Route path='movie/:id' element = {<Moviedetail/>}></Route>
          <Route path='movies/:type' element = {<MovieList/>}></Route>
          <Route path='/*' element = {<h1>ERROR PAGE</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
