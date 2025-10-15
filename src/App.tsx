import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <main className="flex-shrink-0">
        <Home />
        <ProductList />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

