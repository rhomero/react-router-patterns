import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DogList from './DogList';
import NavBar from './Nav';


function App({dogs}) {
  
  return (
    <>
    <NavBar dogs={dogs}/>
    <Switch>
      <Route exact path="/dogs" >
        <DogList /> // what props will this need?
      </Route>
      <Route path="/dogs/:name" element={<Dog/>}>
        <DogDetails /> // what props will this need?
      </Route>
      <Redirect to="/dogs" />
    </Switch>
    </>
  );
}


App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
