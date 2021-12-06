import React from 'react';

import { projectRepos, projectSites } from '../data.js';

function Project({title, ghLink, imgURL, description, altText}) {
  return (
    <>
      <div className='project-divider'></div>
      <div className='project'>
        <h3>
          <a href={ghLink} target='_blank' rel='noreferrer'>{title}</a>
        </h3>
	{ imgURL && altText && (
	  <div className='project-image'>
            <a href={ghLink} target='_blank' rel='noreferrer'>
              <img src={imgURL} alt={altText}/>
            </a>
          </div>
	)
	}
        <div className='project-content'>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

function Main() {
  return (
    <main>
      <section id='portfolio'>
        <div className="content-wrapper">
          <h2>
            Some of My Project Repos
          </h2>
          { projectRepos.map(repo => <Project {...repo} />)}
        </div>
        <div className="content-wrapper">
          <h2>
            Some of My Project Sites
          </h2>
          { projectSites.map(site => <Project {...site} />)}
        </div>
      </section>
      <section id='about'>
        <div className='content-wrapper'>
          <h2>A Little About Me</h2>
          <div id='about-content'>
            <div id='about-text'>
              <h3>I want to be your developer/engineer/designer</h3>
              <p>
                I love beautiful solutions. I can't really say what is
                beautiful, but I think it's like the idea of
                "elegance" in mathematics, although sometimes
                inelegant solutions are beautiful to me. I sometimes
                get asked whether I like front-end or back-end
                more. To me, art and math, design and engineering or
                front-end and back-end are all the same thing. Finding
                beautiful things. I have too many things that I enjoy
                to list here, like swimming and drawing and math and
                reading sappy fiction and watching really bad movies
                with friends. I really just enjoy being alive!
              </p>
	      <h3>
	        <a href='./assets/Resume.pdf' target='_blank'>
	          My Resume
	        </a>
	      </h3>
            </div>
            <img src='./assets/head3-comp.png' alt='My beautiful face'/>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
