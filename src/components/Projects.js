import React from "react";

function Projects() {
  return (
    <div className="project">
      <div id="work">
        <div class="title">Work</div>
      </div>
      <div class="flexyconts">
        <div class="horiseon">
          <a href="https://ryanlopez12.github.io/ucd/">
            <img
              src="assets/horiseon.jpg"
              height="800px"
              width="900px"
              alt="man leaning over table speaking with team"
            />
          </a>
        </div>
        <div class="robot">
          <a href="https://ryanlopez12.github.io/robot-gladiators/">
            <img
              src="assets/robotsg.png"
              height="300px"
              width="400px"
              alt="robot gladiators text"
            />
          </a>
        </div>
        <div class="run">
          <a href="https://ryanlopez12.github.io/run-buddy/">
            <img
              src="assets/runbuddy.png"
              height="300px"
              width="400px"
              alt="run buddy website"
            />
          </a>
        </div>
        <div class="consolethis">
          <a href="https://trane7.github.io/Console-This/">
            <img
              src="assets/Untitled-23.png"
              height="300px"
              width="400px"
              alt="console this logo"
            />
          </a>
        </div>
        <div class="quickquackquiz">
          <a href="https://quick-quack-quiz.herokuapp.com/">
            <img
              src="assets/quickquack.png"
              height="300px"
              width="400px"
              alt="Quick quack quiz landing page"
            />
          </a>
        </div>
        <div class="plenty">
          <a href="https://plenty-in-the-pantry.herokuapp.com/">
            <img
              src="assets/plenty.jpg"
              height="300px"
              width="400px"
              alt="plenty app landing page"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
