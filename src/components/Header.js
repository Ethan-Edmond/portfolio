import React from 'react';

import './Header.scss';

function Header() {
  return (
    <header className='hero-area' id='main-hero'>
      <div className='content-wrapper'>
        <h1>Hello, I'm <em>Ethan Edmond</em>.</h1>
        <h2 className='bread-tagline'>I'm a</h2>
	<h2 className='meat-tagline'>web developer/software engineer/problem solver</h2>
	<h2 className='bread-tagline'>who loves finding beautiful solutions</h2>
      </div>
    </header>
  );
}

export default Header;
