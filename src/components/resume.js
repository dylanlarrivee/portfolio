import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import logo from "../img/dLarrivee-logo.png";
import Education from "./education";
import Experience from "./experience";

class Resume extends Component {
  render() {
    return (
      <div >
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={logo} />
            </div>
            <h2 style={{ paddingTop: "1em" }}>Dylan Larrivee</h2>

            <h4>Software Engineer</h4>
            <hr
              style={{
                borderTop: "3px solid #282c34",
                width: "50%",
                padding: "0px 10px 0px"
              }}
            />
            <p>
              {" "}
              I am a highly motivated software engineer who is looking to move
              out of my current technical consulting role and into a full-time
              developer position. In my professional career, developing custom
              solutions for marketer’s needs has allowed me to work with many
              types of technologies within the martech industry. I have a strong
              passion for technology and am always looking for opportunities to
              supplement my learning through personal projects and multiple
              online learning resources that I am continuously engaging in.{" "}
            </p>
            <hr
              style={{
                borderTop: "3px solid #282c34",
                width: "50%",
                padding: "0px 10px 0px"
              }}
            />
            <h5>Address</h5>
            <p>12132 se 10th st Bellevue, Wa 98005</p>
            <h5>Phone</h5>
            <p>425.890.7785</p>
            <h5>Email</h5>
            <p>dylanlarrivee@gmail.com</p>
            <h5>Web</h5>
            <p>www.4</p>
            <h1>&nbsp;</h1>
            <h1>&nbsp;</h1>
            <h2>&nbsp;</h2>
            <h2>&nbsp;</h2>
            <h4>&nbsp;</h4>



          </Cell>
          <Cell className="resume-right-col" col={8}>
          <h2>Experience</h2>
            <Experience 
              startYear={'February 2015'}
              endYear={'March 2017'}
              jobName="Expert Services Associate, Oracle"
              jobDescription1="•	Scoped, built and designed brand new event-triggered campaigns for clients on time, on budget and error-free using the Oracle Responsys Interact marketing platform.
              "
              jobDescription2="•	Consult clients on technical and complex projects while also improving efficiency in business requirements and processes. 
              "
            />
             <Experience 
              startYear={'April 2017'}
              endYear={'Auguest 2018'}
              jobName="Senior Campaign Specialist, Lister Digital"
              jobDescription1="•	The US technical lead for 3 accounts simultaneously and coordinated efforts between onshore and offshore efforts."
              jobDescription2="•	 Designed data model solutions and provided best practices recommendations based on clients' marketing strategies and requirements.
              "
            
            />
             <Experience 
              startYear={'August 2018'}
              endYear={'Present'}
              jobName="Technical Services Consultant, Shaw / Scott"
              jobDescription1="•	Build and maintain multiple web applications using Vue.js, Node.js, JavaScript, PostgreSQL and multiple AWS offerings such as S3, EC2, ECS, ELB, RDS, CloudWatch and Route 53.
              "
              jobDescription2="•	Manage the technical delivery of ESP onboarding, data integrations, and migration elements of a marketing cloud implementation
              "
              jobDescription3="•	Provide hands-on, expert-level technical assistance to the client and internal services team
              •	Architect and implement highly dynamic and customized preference center forms for multiple clients using JavaScript and Vue.js framework.
              "
              jobDescription4="•	Architect and implement highly dynamic and customized preference center forms for multiple clients using JavaScript and Vue.js framework.
              "
            />
            <h2>Education</h2>
            <Education
              startYear={2007}
              endYear={2009}
              schoolName="Bellevue College"
              schoolDescription="Associate in Business"
            />
            <Education
              startYear={20011}
              endYear={2013}
              schoolName="University of Washington Bothell"
              schoolDescription="BA in Business Administration. Finance and International Business"
            />
            <hr
              style={{
                borderTop: "3px solid #282c34",
                width: "50%",
                padding: "0px 10px 0px"
              }}
            />

          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
