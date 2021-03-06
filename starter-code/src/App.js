import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Home'
import { Route } from 'react-router-dom';
import BeerList from './Pages/BeerList';
import RandomBeer from './Pages/RandomBeer';
import NewBeer from './Pages/NewBeer';
import BeerDetail from './Pages/BeerDetail';
import NewBeerWithoutImage from './Pages/NewBeerWithoutImage';
import UpdateBeer from './Pages/UpdateBeer';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
import Logout from './Components/Logout';
import Login from './Pages/Login';

class App extends Component {
  render() {
    return (
      <div>
          {/* Define all routes here */}
          <Route exact path="/" component={Home} />
          <Route exact path="/allBeers" component={BeerList} />
          <Route exact path="/random-beer" component = {RandomBeer}/>
          <Route exact path="/newBeer" component = {NewBeer} />
          <Route exact path="/beer-detail/:id" component={BeerDetail} />
          <Route exact path="/new-beer-without-image" component={NewBeerWithoutImage} />
          <Route exact path="/update-beer/:id" component={UpdateBeer} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
      </div>
      
    );
  }
}

export default App;
