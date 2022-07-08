import React from "react";
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import data from './data'

function App() {

  const cards = data.map(item => {
    return (
      <Card
        id={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="app">
      <Header />
      {cards}
      <Footer />
    </div>
  );
}

export default App;
