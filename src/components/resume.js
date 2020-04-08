import React, { Component } from "react";
import { Grid, Cell, Button } from "react-mdl";
import logo from "../img/dLarrivee-logo-nobackground.png";
import Education from "./education";
import Experience from "./experience";
import resume from "../img/Dylan_Larrivee_Resume.pdf";
import coverletter from "../img/SWE_Dylan_Larrivee_Cover_Letter.pdf";

class Resume extends Component {
  render() {
    return (
      <div className="resume-desktop-background">   
        <Grid>
  {/* Desktop Version */}   
               
          <Cell hidePhone hideTablet col={4}>
            <div>
          <h2 style={{paddingTop: "0px"}}>Dylan Larrivee</h2>
            <div style={{ textAlign: "left", margin: "auto", paddingTop: "0px"}}>
              
            <a href={resume} download="Dylan_Larrivee_Resume.pdf">
            <Button raised ripple colored>Download Resume</Button>
            </a>
            </div>
            &nbsp;
            &nbsp;
            &nbsp;
            <div style={{ textAlign: "left", margin: "auto", paddingTop: "0px"}}>
            <a href={coverletter}  download="Dylan_Larrivee_Cover_Letter.pdf">
            <Button raised ripple colored>Download Cover Letter</Button>
            </a>
            </div>
            
            

            <h4>Software Developer</h4>
            <hr
              style={{
                borderTop: "3px solid #282c34",
                width: "50%",
                padding: "0px 10px 0px"
              }}
            />
            <p>
              {" "}
              I am a high-performance software developer and marketing technologist. In my professional career, developing custom solutions for marketer’s needs has allowed me to work with many types of technologies within the marketing technology industry. I am solutions-driven, have a strong passion for technology and am always looking for opportunities to supplement my learning through personal projects and multiple online learning resources that I am continuously engaging in. {" "}
            </p>
            <hr
              style={{
                borderTop: "3px solid #282c34",
                width: "50%",
                padding: "0px 10px 0px"
              }}
            />
            <h5>Address</h5>
            <p>12132 SE 10th ST Bellevue, WA 98005</p>
            <h5>Phone</h5>
            <p>425.890.7785</p>
            <h5>Email</h5>
            <p>dylanlarrivee@gmail.com</p>
            <h5>Web</h5>
            <p>https://dylanlarrivee.github.io/portfolio/</p>
            <h1>&nbsp;</h1>
            <h1>&nbsp;</h1>
            <h5>&nbsp;</h5>
            <h5>&nbsp;</h5>
            <h6>&nbsp;</h6>
            <h2>&nbsp;</h2>
            </div>
          </Cell>
 {/* Mobile Version */}  
 <div style={{paddingBottom:"10px"}}>    
 <Cell hideDesktop className="resume-left-col" col={12}>
            {/* 
            <div style={{ textAlign: "center" }}>
            <a href={resume} download="Dylan_Larrivee_Resume.pdf">
            <Button raised ripple colored>Download Resume PDF</Button>
            </a>
            </div>
            &nbsp;
            &nbsp;
            &nbsp;
            <div style={{ textAlign: "center" }}>
            <a href={coverletter} download="Dylan_Larrivee_Cover_Letter.pdf">
            <Button raised ripple colored>Download Cover Letter PDF</Button>
            </a>
            </div>
            */}   
            <h2 style={{ paddingTop: "5px" }}>Dylan Larrivee</h2>

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
            <p>12132 SE 10th ST Bellevue, WA 98005</p>
            <h5>Phone</h5>
            <p>425.890.7785</p>
            <h5>Email</h5>
            <p>dylanlarrivee@gmail.com</p>
            <h5>Web</h5>
            <p>https://dylanlarrivee.github.io/portfolio/</p>

          </Cell>
          </div>  

          <Cell className="resume-right-col" col={8}>
          <h2>Experience</h2>
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
              jobDescription5="•	Write custom Javascript code for clients to use on tagging sites such as Google Tag Manager.
              "
            />
            <Experience 
              startYear={'April 2017'}
              endYear={'Auguest 2018'}
              jobName="Senior Campaign Specialist, Lister Digital"
              jobDescription1="•	The US technical lead for 3 accounts simultaneously and coordinated efforts between onshore and offshore efforts."
              jobDescription2="•	 Designed data model solutions and provided best practices recommendations based on clients' marketing strategies and requirements."
              jobDescription3="•	 Develop and debug JSON/XML payloads for SOAP and REST API triggered email campaigns and custom events."
              jobDescription4="•	 Develop, coordinate, test and launch HTML / CSS email campaigns using the Oracle Marketing platform."
            />
            <Experience 
              startYear={'February 2015'}
              endYear={'March 2017'}
              jobName="Expert Services Associate, Oracle"
              jobDescription1="•	Scoped, built and designed brand new event-triggered campaigns for clients on time, on budget and error-free using the Oracle Responsys Interact marketing platform for Fortune 500 retail companies.
              "
              jobDescription2="•	Consult clients on technical and complex projects while also improving efficiency in business requirements and processes. 
              "
              jobDescription3="•	Demonstrate excellent time management being in charge of multiple projects at once and allocating time based on customer needs and project deadlines.
              "
            />
             
             
            <h2>Education</h2>
            <Education
              startYear={20011}
              endYear={2013}
              schoolName="University of Washington Bothell"
              schoolDescription="BA in Business Administration. Finance and International Business"
            />
            <Education
              startYear={2007}
              endYear={2009}
              schoolName="Bellevue College"
              schoolDescription="Associate in Business"
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
