import './App.css';
import { defaultDogs } from './defaultDogs';
import React from 'react';

function App() {
  static defaultProps = { dogs: defaultDogs};

  const {dogs} = this.props;
  return (
    <Switch>
      <Route exact path="/dogs" >
        <DogList /> // what props will this need?
      </Route>
      <Route path="/dogs/:name" >
        <DogDetails /> // what props will this need?
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
}

export default App;
