import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Headline from "./components/Headline";
import Food from "./components/Food"
import Category from "./components/Category"
function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Hero></Hero>
      <Headline></Headline>
      <Food></Food>
      <Category></Category>

    </div>
  );
}

export default App;
