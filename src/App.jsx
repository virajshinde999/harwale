import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>
        <Hero />
        <Products />
        <HowItWorks />
      </main>

      <Footer />

    </div>
  );
}

export default App;