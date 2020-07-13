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
import damp from "../img/damp.png";
import portfolio from "../img/portfolio-website.png";
import pythonlogo from "../img/python-logo.png";
import dynamicPreferenceCenter from "../img/dynamic-preference-center.png"
import mnvDynamicPreferenceCenter from "../img/MNV_Pref_Center.png"
import curbsideCustomer from "../img/curbsideCustomer.png"
import curbsideStore from "../img/curbsideStore.png"


{/*  hspace: "45"  - padding space for the images if needed */}

class Projects extends Component {
  render() {
    return (
      <div style={{ width: "80%", margin: "auto" }}>
        <Grid className="projects-grid">
          <Cell col={12} tablet={12} phone={12}>
            <div className="banner-text">
              <h1>Projects</h1>
            </div>
          </Cell>
        </Grid>
        {/* Row 1 Start*/}
        {/* Desktop version */}
        <Grid>
          <Cell hidePhone hideTablet col={4} tablet={12} phone={12}>
            <div style={{ align: "middle" }}>
              <Card
                shadow={5}
                style={{
                  width: "90%",
                  height: "100%",
                  margin: "auto",
                  align: "middle"
                }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff"
                  }}
                >
                  <img
                    src={programstopper}
                    width="100%"
                    height="70%"
                  />
                </CardTitle>
                <CardText>
                  <div className="project-card-text">
                    <p>Responsys API Program Stopper </p>
                    Web app that allows users to stop a running program in their
                    Oracle Responsys account without the need to log in to the
                    platform. Check it out below with username DemoUser999 and password 1234.
                    <h5>Technologies used:</h5>
                    Node.js, PostgreSQl, JavaScript, Vue.js and Responsys API
                  </div>
                </CardText>
                <CardActions border>
                  <a
                    href="https://github.com/dylanlarrivee/RIProgramStopper_Pub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Github Code</Button>
                  </a>
                  <a
                    href="https://secret-oasis-02597.herokuapp.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>View Live</Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </Cell>
          <Cell hidePhone hideTablet col={4} tablet={12} phone={12}>
            <div style={{ align: "middle" }}>
              <Card
                shadow={5}
                style={{
                  width: "90%",
                  height: "100%",
                  margin: "auto"
                }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff"
                  }}
                >
                  <img src={curbsideCustomer} width="100%" height="100%"/>
                </CardTitle>
                <CardText>
                  <div className="project-card-text">
                    <p>Curbside Notification - Customer</p>
                    The customer facing form for the curbside pickup app that allows customers to notify a store that they are ready to pick up their items from a marketing email or SMS notification.
                    <h5>Technologies used:</h5>
                    HTML, CSS, JavaScript, Vue.js
                  </div>
                </CardText>
                <CardActions border>
                  <a
                    href="https://github.com/dylanlarrivee/curbside-client-demo-email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Github code</Button>
                  </a>
                  <a
                    href="https://bit.ly/3iYlP0t"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>View Live</Button>
                  </a>
                </CardActions>
              </Card>
          
            </div>
          </Cell>       
          
          <Cell hidePhone hideTablet col={4} tablet={12} phone={12}>
            <div style={{ align: "middle" }}>
              <Card
                shadow={5}
                style={{ width: "90%", height: "650", margin: "auto" }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff"
                  }}
                >
                  <img src={curbsideStore} width="100%" height="68%" />
                </CardTitle>
                <CardText>
                  <div className="project-card-text">
                    <p> Curbside Notification - Store</p>
                    Web app that is used by store clerks to be notified when a customer has arrived at their store for a curbside pickup. Allows store clerks to see notifications in near real time to provide a better experience for their customers.
 Try it out below with username DemoUser999 and password 1234. Be sure to submit orders with the Curbside Notification - Customer app so you can simulate customers submitting orders and see them in real time.                    <h5>Technologies used:</h5>
                    HTML, CSS, JavaScript, React.js, MongoDb, Node.js, RESTful API and hosted on AWS (Route 53, Elastic Beanstalk, DocumentDB)
                  </div>
                </CardText>
                <CardActions border>
                <a
                    href="mailto:dylanlarrivee@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Contact for Demo</Button>
                  </a>
                  <a
                    href="https://curbside-demo.shawscottapps.com/signin"
                  >
                    <Button colored>View Live</Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </Cell>
        </Grid>

        

        {/* Mobile version */}
        <Grid>
          <Cell hideDesktop col={4} tablet={12} phone={12}>
            <div style={{ align: "middle" }}>
              <Card
                shadow={5}
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "auto",
                  align: "middle"
                }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff"
                  }}
                >
                  <img src={programstopper} width="100%" height="100%" />
                </CardTitle>
                <CardText>
                  <div className="project-card-text">
                    <p>Responsys API Program Stopper </p>
                    Web app that allows users to stop a running program in their
                    Oracle Responsys account without the need to log in to the
                    platform. Check it out below with username DemoUser999 and password 1234.
                    <h5>Technologies used:</h5>
                    Node.js, PostgreSQl, JavaScript, Vue.js and Responsys API
                  </div>
                </CardText>
                <CardActions border>
                  <a
                    href="https://github.com/dylanlarrivee/RIProgramStopper_Pub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Github Code</Button>
                  </a>
                  <a
                    href="https://secret-oasis-02597.herokuapp.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>View Live</Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </Cell>
          <Cell hideDesktop col={4} tablet={12} phone={12}>
            <div style={{ align: "middle" }}>
              <Card
                shadow={5}
                style={{ width: "100%", height: "100%", margin: "auto" }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff"
                  }}
                >
                   <img src={curbsideCustomer} width="100%" height="100%"/>
                </CardTitle>
                <CardText>
                  <div className="project-card-text">
                    <p>Curbside Notification - Customer</p>
                    The customer facing form for the curbside pickup app that allows customers to notify a store that they are ready to pick up their items from a marketing email or SMS notification.
                    <h5>Technologies used:</h5>
                    HTML, CSS, JavaScript, Vue.js
                  </div>
                </CardText>
                <CardActions border>
                <a
                    href="https://github.com/dylanlarrivee/curbside-client-demo-email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Github code</Button>
                  </a>
                  <a
                    href="https://bit.ly/3iYlP0t"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>View Live</Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </Cell>
         

          <Cell hideDesktop col={4} tablet={12} phone={12}>
            <div style={{ align: "middle" }}>
              <Card
                shadow={5}
                style={{ width: "100%", height: "100%", margin: "auto" }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff"
                  }}
                >
                <img src={curbsideStore} width="100%" height="68%" />
                </CardTitle>
                <CardText>
                  <div className="project-card-text">
                    <p> Curbside Notification - Store</p>
                    Web app that is used by store clerks to be notified when a customer has arrived at their store for a curbside pickup. Allows store clerks to see notifications in near real time to provide a better experience for their customers. Try it out below with username DemoUser999 and password 1234. Be sure to submit orders with the Curbside Notification - Customer app so you can simulate customers submitting orders and see them in real time.
                    <h5>Technologies used:</h5>
                    HTML, CSS, JavaScript, React.js, MongoDb, Node.js, RESTful API and hosted on AWS (Route 53, Elastic Beanstalk, DocumentDB)
                  </div>
                </CardText>
                <CardActions border>
                <a
                    href="mailto:dylanlarrivee@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Contact for Demo</Button>
                  </a>
                  <a
                    href="https://curbside-demo.shawscottapps.com/signin"
                  >
                    <Button colored>View Live</Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </Cell>
        </Grid>
{/*  Row 2 start  */}
        <Grid>
          <Cell hidePhone hideTablet col={4} tablet={12} phone={12}>
            <div style={{ align: "middle" }}>
              <Card
                shadow={5}
                style={{
                  width: "90%",
                  height: "100%",
                  margin: "auto",
                  align: "middle"
                }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff"
                  }}
                >
                  <img
                    src={mnvDynamicPreferenceCenter}
                    width="100%"
                    height="70%"
                  />
                </CardTitle>
                <CardText>
                  <div className="project-card-text">
                    <p>Unsubscribe and Preferences Pages</p>
                    Dynamic form built out to capture email preferences and unsubscribe customer data for use in the Selligent Marketing Cloud platform.
                    <h5>Technologies used:</h5>
                    HTML, CSS, Javascript, Selligent Marketing Cloud
                  </div>
                </CardText>
                <CardActions border>
                  <a
                    href="https://github.com/dylanlarrivee/dynamic-preference-center-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Github Code</Button>
                  </a>
                  <a
                    href="https://rb.gy/tjzvho"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>View Live</Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </Cell>
          <Cell hidePhone hideTablet col={4} tablet={12} phone={12}>
            <div style={{ align: "middle" }}>
              <Card
                shadow={5}
                style={{
                  width: "90%",
                  height: "100%",
                  margin: "auto"
                }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff"
                  }}
                >
                  <img src={dynamicPreferenceCenter} width="100%" height="100%"/>
                </CardTitle>
                <CardText>
                  <div className="project-card-text">
                    <p> Dynamic Preference Center</p>
                    Multiple dynamic preference center forms built to be used within the Oracle Responsys Marketing Platform.
                    <h5>Technologies used:</h5>
                    HTML, CSS, JavaScript, Vue.js
                  </div>
                </CardText>
                <CardActions border>
                <a
                    href="https://github.com/dylanlarrivee/dynamic-preference-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Github Code</Button>
                  </a>
                  <a
                    href="https://emails.flyfrontier.com/pub/sf/ResponseForm?_ri_=X0Gzc2X%3DYQpglLjHJlTQGnmAzgwDFfDvJUlgUyrP2we3C6zfWwsTFifEviTRVXMtX%3DYQpglLjHJlTQGr4yKb2lvUNgIpdXSMCHtkJC6zfWwsTFifEviTR&_ei_=EiDSWPJ40JoNmqwUk3SjzE8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>View Live</Button>
                  </a>
                </CardActions>
              </Card>
          
            </div>
          </Cell>       
          
          <Cell hidePhone hideTablet col={4} tablet={12} phone={12}>
            <div style={{ align: "middle" }}>
              <Card
                shadow={5}
                style={{ width: "90%", height: "650", margin: "auto" }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff"
                  }}
                >
                  <img src={portfolio} width="100%" height="68%" />
                </CardTitle>
                <CardText>
                  <div className="project-card-text">
                    <p> Personal Portfolio Website</p>
                    Responsive website I built to showcase some of the projects I have built out for fun.
                    <h5>Technologies used:</h5>
                    JavaScript, React, React-MDL and hosted on Github pages
                  </div>
                </CardText>
                <CardActions border>
                <a
                    href="https://github.com/dylanlarrivee/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Github Code</Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </Cell>
        </Grid>

        

        {/* Mobile version */}
        <Grid>
          <Cell hideDesktop col={4} tablet={12} phone={12}>
            <div style={{ align: "middle" }}>
              <Card
                shadow={5}
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "auto",
                  align: "middle"
                }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff"
                  }}
                >
                  <img src={mnvDynamicPreferenceCenter} width="100%" height="100%" />
                </CardTitle>
                <CardText>
                  <div className="project-card-text">
                    <p>Unsubscribe and Preferences Pages</p>
                    Dynamic form built out to capture email preferences and unsubscribe customer data for use in the Selligent Marketing Cloud platform.
                    <h5>Technologies used:</h5>
                    HTML, CSS, Javascript, Selligent Marketing Cloud
                  </div>
                </CardText>
                <CardActions border>
                  <a
                    href="https://github.com/dylanlarrivee/dynamic-preference-center-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Github Code</Button>
                  </a>
                  <a
                    href="https://rb.gy/tjzvho"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>View Live</Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </Cell>
          <Cell hideDesktop col={4} tablet={12} phone={12}>
            <div style={{ align: "middle" }}>
              <Card
                shadow={5}
                style={{ width: "100%", height: "100%", margin: "auto" }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff"
                  }}
                >
                  <img src={dynamicPreferenceCenter} width="100%" height="100%" />
                </CardTitle>
                <CardText>
                  <div className="project-card-text">
                    <p> Dynamic Preference Center</p>
                    Multiple dynamic preference center forms built to be used within the Oracle Responsys Marketing Platform.
                    <h5>Technologies used:</h5>
                    HTML, CSS, JavaScript, Vue.js
                  </div>
                </CardText>
                <CardActions border>
                <a
                    href="https://github.com/dylanlarrivee/dynamic-preference-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Github Code</Button>
                  </a>
                  <a
                    href="https://emails.flyfrontier.com/pub/sf/ResponseForm?_ri_=X0Gzc2X%3DYQpglLjHJlTQGnmAzgwDFfDvJUlgUyrP2we3C6zfWwsTFifEviTRVXMtX%3DYQpglLjHJlTQGr4yKb2lvUNgIpdXSMCHtkJC6zfWwsTFifEviTR&_ei_=EiDSWPJ40JoNmqwUk3SjzE8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>View Live</Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </Cell>
         

          <Cell hideDesktop col={4} tablet={12} phone={12}>
            <div style={{ align: "middle" }}>
              <Card
                shadow={5}
                style={{ width: "100%", height: "100%", margin: "auto" }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff"
                  }}
                >
                  <img src={portfolio} width="100%" height="100%" />
                </CardTitle>
                <CardText>
                  <div className="project-card-text">
                    <p> Personal Portfolio Website</p>
                    Responsive website I built to showcase some of the projects I have built out for fun.
                    <h5>Technologies used:</h5>
                    JavaScript, React, React-MDL and hosted on Github pages
                  </div>
                </CardText>
                <CardActions border>
                <a
                    href="https://github.com/dylanlarrivee/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Github Code</Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </Cell>
        </Grid>
        
{/*  Third row of projects in the grid  */}
        <Grid>
          <Cell hidePhone hideTablet col={4} tablet={12} phone={12}>
            <div style={{ align: "middle" }}>
              <Card
                shadow={5}
                style={{
                  width: "90%",
                  height: "100%",
                  margin: "auto",
                  align: "middle"
                }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff"
                  }}
                >
                  <img
                    src={pythonlogo}
                    width="100%"
                    height="100%"
                  />
                </CardTitle>
                <CardText>
                  <div className="project-card-text">
                    <p>Responsys Campaign Details Getter</p>
                    Python script to gram Responsys campaign details, format and push them into S3 bucket in json file.
                    <h5>Technologies used:</h5>
                    Python, AWS, Oracle Responsys API
                  </div>
                </CardText>
                <CardActions border>
                  <a
                    href="https://github.com/dylanlarrivee/responsysCampaignGetter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Github Code</Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </Cell>

          <Cell hidePhone hideTablet col={4} tablet={12} phone={12}>
            <div style={{ align: "middle" }}>
              <Card
                shadow={5}
                style={{
                  width: "90%",
                  height: "100%",
                  margin: "auto"
                }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff"
                  }}
                >
                  <img src={damp} width="100%" height="70%" hspace="0" />
                </CardTitle>
                <CardText>
                  <div className="project-card-text">
                    <p> Node Media Server: DAMP</p>A client and server app that
                    allows users to stream media from their home computer from
                    anywhere with internet access through a secure sign in
                    portal. Also allows the uses of streaming legal torrents
                    from magnet URIs.
                    <h5>Technologies used:</h5>
                    Node.js, Express, PostgreSQl, JavaScript, Vue.js, AWS
                  </div>
                </CardText>
                <CardActions border>
                <a
                    href="https://github.com/dylanlarrivee/mediaServerClientApp_Pub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Client App Github Code</Button>
                  </a><a
                    href="https://github.com/dylanlarrivee/mediaServer_pub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Server App Github Code</Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </Cell>


          <Cell hidePhone hideTablet col={4} tablet={12} phone={12}>
            <div style={{ align: "middle" }}>
              {/*
              <Card
                shadow={5}
                style={{ width: "90%", height: "100%", margin: "auto" }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff"
                  }}
                >
                  <img src={portfolio} width="300px" height="350px" />
                </CardTitle>
                <CardText>
                  <div className="project-card-text">
                    <p> Personal Portfolio Website</p>
                    Responsive website I built to showcase some of the projects I have built out for fun.
                    <h5>Technologies used:</h5>
                    React-MDL
                  </div>
                </CardText>
                <CardActions border>
                <a
                    href="https://github.com/dylanlarrivee/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Github Code</Button>
                  </a>
                </CardActions>
              </Card>
            */}
            </div>
          </Cell>
        </Grid>

        {/* Mobile version */}
        <Grid>
          <Cell hideDesktop col={4} tablet={12} phone={12}>
            <div style={{ align: "middle" }}>
              <Card
                shadow={5}
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "auto",
                  align: "middle"
                }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff"
                  }}
                >
                  <img src={pythonlogo} width="100%" height="100%" />
                </CardTitle>
                <CardText>
                  <div className="project-card-text">
                    <p>Responsys Campaign Details Getter</p>
                    Python script to gram Responsys campaign details, format and push them into S3 bucket in json file.
                    <h5>Technologies used:</h5>
                    Python, AWS, Oracle Responsys API
                  </div>
                </CardText>
                <CardActions border>
                <a
                    href="https://github.com/dylanlarrivee/responsysCampaignGetter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Github Code</Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </Cell>

          <Cell hideDesktop col={4} tablet={12} phone={12}>
            <div style={{ align: "middle" }}>
              <Card
                shadow={5}
                style={{ width: "100%", height: "100%", margin: "auto" }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff"
                  }}
                >
                  <img src={damp} width="100%" height="100%" />
                </CardTitle>
                <CardText>
                  <div className="project-card-text">
                    <p> Node Media Server: DAMP</p>A client and server app that
                    allows users to stream media from their home computer from
                    anywhere with internet access through a secure sign in
                    portal. Also allows the uses of streaming legal torrents
                    from magnet URIs.
                    <h5>Technologies used:</h5>
                    Node.js, Express, PostgreSQl, JavaScript, Vue.js, AWS
                  </div>
                </CardText>
                <CardActions border>
                <a
                    href="https://github.com/dylanlarrivee/mediaServerClientApp_Pub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Client App Github Code</Button>
                  </a><a
                    href="https://github.com/dylanlarrivee/mediaServer_pub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Server App Github Code</Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </Cell>

          <Cell hideDesktop col={4} tablet={12} phone={12}>
            <div style={{ align: "middle" }}>
              {/* 
              <Card
                shadow={5}
                style={{ width: "100%", height: "100%", margin: "auto" }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff"
                  }}
                >
                  <img src={portfolio} width="250" height="300" />
                </CardTitle>
                <CardText>
                  <div className="project-card-text">
                    <p> Personal Portfolio Website</p>
                    Responsive website I built to showcase some of the projects I have built out for fun.
                    <h5>Technologies used:</h5>
                    React-MDL
                  </div>
                </CardText>
                <CardActions border>
                <a
                    href="https://github.com/dylanlarrivee/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Github Code</Button>
                  </a>
                </CardActions>
              </Card>
              */}
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
