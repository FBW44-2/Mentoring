import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import UserRegister from './components/UserRegister';

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/user/register">
                      Register
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/user/profile">
                      Profile
                    </a>
                  </li>
                  
                  <li className="nav-item">
                    <a
                      className="nav-link disabled"
                      href="/contact"
                      tabindex="-1"
                      ariaDisabled="true"
                    >
                      Contact us
                    </a>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    ariaLabel="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </header>

        {/* Body content */}
        <Switch>
          <Route path="/user/register" component={UserRegister} />
          {/* <Route path="/user/profile" component={UserProfile} />
          <Route path="/contact" component={Contact} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
