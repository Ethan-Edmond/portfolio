import React from 'react';

import projects from '../data.js';

function Project({title, ghLink, imgURL, description, altText}) {
  return (
    <>
      <div className='project-divider'></div>
      <div className='project'>
        <h3>
          <a href={ghLink} target='_blank' rel='noreferrer'>{title}</a>
        </h3>
        <div className='project-image'>
          <a href={ghLink} target='_blank' rel='noreferrer'>
            <img src={imgURL} alt={altText}/>
          </a>
        </div>
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
            Some of My Projects
          </h2>
          { projects.map(project => <Project {...project} />)}
        </div>
      </section>
      <section id='about'>
        <div className='content-wrapper'>
          <h2>A Little About Me</h2>
          <div id='about-content'>
            <div id='about-text'>
              <h3>I want to make your website</h3>
              <p>
                I'm a student right now, and I am interested in web development. I
                enjoy problem solving and design and would like to work applying
                these. I have too many things that I enjoy to list here, like
                swimming and drawing and math and reading sappy fiction and
                watching really bad movies with friends. I really just enjoy being
                alive! My skills include html, css, git, the command line,
                javascript and photoshop.
              </p>
              {/* {Add a resume to download here} */}
            </div>
            <img src='./assets/head3-comp.png' alt='A picture of my beautiful face'/>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
