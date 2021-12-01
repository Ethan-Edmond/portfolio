import React from 'react';

import { projectRepos, projectSites } from '../data.js';

function ProjectRepo({title, ghLink, description}) {
  return (
    <>
      <div className='project-divider'></div>
      <div className='project'>
        <h3>
          <a href={ghLink} target='_blank' rel='noreferrer'>{title}</a>
        </h3>
        <div className='project-content'>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

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
                inelegant solutions are beautiful to me. For example,
                Fubini's theorem in multidimensional calculus. How do
                you integrate over a multidimensional surface? You do
                it literally. See what I mean about inelegant and
                beautiful? Or for example, one of Tom Tarpey's (my CS
                instructor at Bloom Tech) solutions to a mathy
                CodeSignal question. He found that the expected input
                range was small enough to keep a hash table of all the
                possible inputs and outputs, then he referenced that
                table for answers in a closure. I thought "Gross, but
                also beautiful". There's a host of similar things in
                art and design. For example, I once was working on a
                simple website that would randomly generate good
                2-color schemes. My first solution was to break a
                randomly generated RGB value into it's R, G and B
                component vectors, then do a bunch of complicated
                vector math. I was dissatisfied with the readability
                of the text, then it hit me like household AC. White
                minus an RGB value looks good with that value and is
                readable as long as our value (lol, is it a pun? or
                are they just similar things?) is bright enough or
                dark enough. Looking back I could have just used HSL
                colors, but I still like my solution. I sometimes get
                asked whether I like front-end or back-end more. To
                me, art and math, design and engineering or front-end
                and back-end are all the same thing. Finding beautiful
                things. I have too many things that I enjoy to list
                here, like swimming and drawing and math and reading
                sappy fiction and watching really bad movies with
                friends. I really just enjoy being alive! My technical
                skills include HTML, CSS, JavaScript, responsive and
                accessible web design, Python, React, Redux, Node,
                NPM, Scala, Git, the command line, image manipulation
                with Photoshop or Gimp, component libraries like
                MaterialUI or Ant Design, unit and integration testing
                libraries like Jest and RTL and Supertest, end to end
                testing tools like Cypress, deploying with services
                like Netlify and Vercel, CS fundamentals, reading the
                docs, and the ability to learn any tech stack and have
                fun doing it. *Inhales* My soft skills include
                self-motivation, getting help when I need it, owning
                my work from start to finish, leading from the front,
                leading on the sideline, listening to people vent,
                telling people to chill out because it's going to be
                ok, chilling out because it's going to be ok, helping
                people debug without being rude, shipping over
                perfection, detail orientation, a growth mindset and
                being positive. I'm currently working on speaking up
                more, explaining things and asking the right
                questions.
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
