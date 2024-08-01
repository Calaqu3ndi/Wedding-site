import Home from './components/Home';
import WishListPage from './pages/WishListPage';
import Gallery from './components/Gallery';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="navbar-collapse">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <Link className="nav-link" to="/"><div className="navbar-label">Home</div></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/wishlist"><div className="navbar-label">Wish List</div></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gallery"><div className="navbar-label">Gallery</div></Link>
                </li>
              </ul>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wishlist" element={<WishListPage />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
