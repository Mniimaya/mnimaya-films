import React from "react";
import './scss/style.scss';
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import CategorySlider from "./components/CategorySlider/CategorySlider";




function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <CategorySlider title="Новинки кино" />
      <CategorySlider title="Топ 10" />
    </div>
  );
}

export default App;
