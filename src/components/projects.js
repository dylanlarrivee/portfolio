import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  CardMenu,
  Button,
  IconButton,
  Grid,
  Cell
} from "react-mdl";
import programstopper from "../img/ri-program-stopper.png";

class Projects extends Component {
  render() {
    return (
      <div style={{ width: "70%", margin: "auto" }}>
        <Grid className="projects-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h1>Projects</h1>
            </div>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={4} tablet={5}>
            <Card
              shadow={5}
              style={{ width: "350px", height: "550px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#fff"
                }}
              ><img src={programstopper} width="250" height="300"/></CardTitle>
              <CardText>
                <div className="project-card-text">
                  <p>Responsys API Program Stopper </p>
                  Web app that allows users to stop a running program in their
                  Oracle Responsys account without the need to log in to the
                  platform. Built using Node.js, PostgreSQl, JavaScript and
                  utilizes the Responsys API functionality.
                </div>
              </CardText>
              <CardActions border>
                <Button colored>Github Code</Button>
              </CardActions>
            </Card>
          </Cell>

          <Cell col={4} tablet={5}>
            <Card
              shadow={5}
              style={{ width: "350px", height: "390px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#fff",
                  background:
                    "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC"
                }}
              ></CardTitle>
              <CardText>
                <div className="project-card-text">
                  <p> Node Media Server: Client App</p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
                  convallis.
                </div>
              </CardText>
              <CardActions border>
                <Button colored>Github Code</Button>
              </CardActions>
            </Card>
          </Cell>

          <Cell col={4} tablet={5}>
            <Card
              shadow={5}
              style={{ width: "350px", height: "390px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#fff",
                  background:
                    "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC"
                }}
              ></CardTitle>
              <CardText>
                <div className="project-card-text">
                  <p> Node Media Server: Server App</p>
                  Web app that allows users to stop a running program in their
                  Oracle Responsys account without the need to log in to the
                  platform. Built using Node.js, PostgreSQl, JavaScript and
                  utilizes the Responsys API functionality.
                </div>
              </CardText>
              <CardActions border>
                <Button colored>Github Code</Button>
              </CardActions>
            </Card>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
