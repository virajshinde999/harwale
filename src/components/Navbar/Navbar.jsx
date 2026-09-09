import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="/" className="logo">
          Harwale<span>.com</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#haar">Haar</a>
          <a href="#how-it-works">How It Works</a>
        </nav>

        <a href="#haar" className="nav-order-btn">
          Order Now
        </a>

      </div>
    </header>
  );
}

export default Navbar;