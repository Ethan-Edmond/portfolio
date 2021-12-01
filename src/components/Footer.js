import React from 'react';

import './Footer.scss';
function Footer() {
  return (
    <footer>
      <div className='content-wrapper'>
	<h2>My contact info</h2>
	<div id='contact'>
	  <ul>
            <li>
	      <a href='mailto:eedmond@uccs.edu'>
		eedmond@uccs.edu
	      </a>
	    </li>
            <li>
	      <a href='https://github.com/Ethan-Edmond' target='_blank'>
		GitHub
	      </a>
	    </li>
            <li>
	      <a href='https://linkedin.com/in/ethan-edmond' target='_blank'>
		LinkedIn
	      </a>
	    </li>	
	  </ul>
	</div>
      </div>
      <div id='copyright'>Copyright 2021 | Ethan Edmond 2021</div>
    </footer>
  );
}

export default Footer;
