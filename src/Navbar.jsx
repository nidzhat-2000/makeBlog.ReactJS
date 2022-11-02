import React from 'react';
import { Link } from 'react-router-dom';
import useFetchData from './useFetchData';
import { CiBookmarkCheck } from 'react-icons/ci';
import logo from './logo.png';

function Navbar() {
  const { blogs: pages } = useFetchData('http://localhost:8000/pages');
  // console.log(pages)

  return (
    <>
      <nav>
        <div className="nav-header">
          <div className="left">
            <img src={logo} alt="" className="logo" />
            <p>
              Your blog page
              <span className="icon">
                <CiBookmarkCheck />
              </span>
            </p>
          </div>
          <div className="right">
            {pages.map((page, index) => {
              const { name, url } = page;
              return (
                <Link to={url} key={index} className="menu-comp">
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
