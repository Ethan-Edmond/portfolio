import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './Footer.scss';

function ContactLink(props) {
  return (
    <a href={props.href}>
      <FontAwesomeIcon icon={props.icon} className='fontawesome-icon'/>
      <span className='contact-text'>
	{props.text}
      </span>
    </a>
  )
}

const linkProps = [
  {
    href: 'mailto:eedmond@uccs.edu',
    icon: faPaperPlane,
    text: 'eedmond@uccs.edu'
  },
  {
    href: 'https://github.com/Ethan-Edmond',
    icon: faGithub,
    text: 'GitHub'
  },
  {
    href: 'https://linkedin.com/in/ethan-edmond',
    icon: faLinkedin,
    text: 'LinkedIn'
  }
];

function Footer() {
  return (
    <footer>
      <div className='content-wrapper'>
	<h2>My contact info</h2>
	<ul id='contact'>
	  { linkProps.map(propObj => {
	    return (
	      <li>
		<ContactLink {...propObj}/>
	      </li>
	    );
	  })}
	</ul>
      </div>
    </footer>
  );
}

export default Footer;
