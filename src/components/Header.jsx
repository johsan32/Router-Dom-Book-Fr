import { Link } from "react-router-dom";


const Header = () => {

  return (
    <nav className="navbar navbar-expand-lg border-bottom">
      <div className="container">
        <Link className="navbar-brand fs-4" to="/">
        <img src="https://www.svgrepo.com/show/382165/book-shelf-books-education-learning-school-study.svg" style={{width:"60px", height:"60px"}} alt="" />
        Book Friendly
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-1 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <Link className="btn btn-outline-success" type="submit" to="/undefined" state={"429"}>Search</Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;