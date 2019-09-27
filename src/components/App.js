import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
//COMPONENTS
import Header from './Header';
import Footer from './Footer';
//CONTAINERS
class App extends Component {
    render() {
        return (
          <BrowserRouter>
          <Header />
          <div> 
          <Switch>
              <Route exact path="/" Component={Home} />

          </Switch>
          </div>
          <Footer />
          </BrowserRouter>
        )
    }
}

export default App;