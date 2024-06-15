import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const token = localStorage.getItem('teacherLogin')
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Learn Online</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto" >
            <li className="nav-item">
              <Link to={'/'} className="nav-link active" aria-current="page" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to={'/all-courses'} className="nav-link" >Course</Link>
            </li>
            <li className="nav-item">
              <Link to={'/propular-teacher'} className="nav-link" >Teacher</Link>
            </li>
            <li className="nav-item">
              <Link to={'/about'} className="nav-link active" >about</Link>

            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                User
              </a>
              <div class="dropdown-menu  bg-dark" aria-labelledby="navbarDropdown">

                <Link to={'/user-registation'} className="nav-link active" >User Registation</Link>
                <Link to={'/user-login'} className="nav-link active" >User Login</Link>
                <div class="dropdown-divider"></div>
                <Link to={'/user-dashboard'} className="nav-link active " >Dashboard</Link>
                <Link to={'/about'} className="nav-link active" >Logout</Link>
              </div>
            </li>


            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Teacher
              </a>
              <div class="dropdown-menu  bg-dark" aria-labelledby="navbarDropdown">
                {token ?
                  <>
                    <Link to={'/teacher-registation'} className="nav-link active" >Teacher Registation</Link>
                    <Link to={'/teacher-login'} className="nav-link active" >Teacher Login</Link>
                    <div class="dropdown-divider"></div>
                  </>
                  :
                  <>
                    <div class="dropdown-divider"></div>
                    <Link to={'/teacher-dashboard'} className="nav-link active " >Dashboard</Link>
                    <Link to={'/teacher-logout'} className="nav-link active" >Logout</Link>
                  </>}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;