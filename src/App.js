import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <div className="main-content">
        <MovieRow title="Trending Now" category="trending" />
        <MovieRow title="Top Rated" category="toprated" />
        <MovieRow title="Action Movies" category="action" />
        <MovieRow title="Horror Movies" category="horror" />
        <MovieRow title="Romance Movies" category="romance" />
        <MovieRow title="Documentaries" category="documentaries" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
