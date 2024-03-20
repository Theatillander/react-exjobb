import '../style/navbar.css';

function Navbar() {
  return (
    <nav className="nav-wrapper">
    <div className="nav-content">
      <img className="logo" src="" alt="Logo" />

      <ul>
        <li>
          <a href="#/" className="menu-item">Home</a>
        </li>
        <li>
          <a href="#/" className="menu-item">Products</a>
        </li>
        <li>
          <a href="#/" className="menu-item">Shop All</a>
        </li>
        <button className="contact-btn" onClick={() => {}}>
          Add to cart
        </button>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
