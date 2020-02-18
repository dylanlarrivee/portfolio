import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "80%", margin: "auto" }}>
        <Grid className="demo-grid-1">

          <Cell col={12} >
            <div className="banner-text">
              <h1>Dylan Larrivee</h1>
              <h2>Software Engineer</h2>
              <h2>Seattle, WA</h2>
              <h3>
                JavaScript | NodeJS | PostgreSQL | Python | Freemarker | SQL |
                AWS | VueJS | React | Git
              </h3>

              <div className="social-links">
                <a
                  href="http://www.linkedin.com/in/dylanlarrivee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <h1>&nbsp;</h1>
                <a
                  href="https://github.com/dylanlarrivee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>

        </Grid>
        
      </div>
    );
  }
}

export default Landing;
