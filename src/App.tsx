import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DonePage from "./pages/DonePage";
import TaskListPage from "./pages/TaskListPage";
import RevokePage from "./pages/RevokePage";
import AboutPage from "./pages/AboutPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Navbar: React.FC = () => {
  const location = useLocation(); // Correct usage within a Router

  const getLinkClass = (path: string) => {
    return location.pathname === path ? 'nav-link active-nav-link' : 'nav-link text-light';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark p-4">
      <button
        className="custom-toggler navbar-toggler bg-light"
        type="button"
        aria-controls="navbarNav"
        aria-expanded={false}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto w-100 d-flex justify-content-around">
          <li className="nav-item">
            <Link className={getLinkClass('/')} to="/">Main Page</Link>
          </li>
          <li className="nav-item">
            <Link className={getLinkClass('/done')} to="/done">Done Page</Link>
          </li>
          <li className="nav-item">
            <Link className={getLinkClass('/tasklist')} to="/tasklist">Task List Page</Link>
          </li>
          <li className="nav-item">
            <Link className={getLinkClass('/revoke')} to="/revoke">Revoke Page</Link>
          </li>
          <li className="nav-item">
            <Link className={getLinkClass('/about')} to="/about">About Page</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar component now inside Router */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/done" element={<DonePage />} />
        <Route path="/tasklist" element={<TaskListPage />} />
        <Route path="/revoke" element={<RevokePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
