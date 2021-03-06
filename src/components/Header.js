import React from 'react';

import './Header.scss';

function Header() {
  return (
    <header className='hero-area' id='main-hero'>
       <div className='content-wrapper'>
         <h1>Hello, I'm <em>Ethan Edmond</em>.</h1>
         <h2 className='bread-tagline'>I'm a
   	<span className='meat-tagline'> developer/engineer/designer </span>
   	{ /* TODO: replace meat with a little roulette/marquee thing rotating between web developer software engineer and problem solver maybe also do this where it says beautiful solutions */ }
   	who loves finding beautiful solutions</h2>
       </div>
     </header>
  );
}

export default Header;
