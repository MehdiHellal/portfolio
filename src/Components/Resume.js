import React, {Component} from "react"
import {Tabs, Tab,Grid,Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu,IconButton } from "react-mdl"
import Education from './Education'
import Experience from './experience'
import Skills from './skills'

class Resume extends Component {
  render(){
    return (
      <div>
        <h1>Resume</h1>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign:'center'}}>
              <img src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" alt="avatar"
              height="200px"/>
              </div>
              <h2 style={{paddingTop:"2em"}}>Mahdi Hellal</h2>
              <h4 style={{color:"grey"}}>Programmer</h4>
              <hr style={{borderTop:"3px solid #833fb2", width:"50%"}}/>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <hr style={{borderTop:"3px solid #833fb2", width:"50%"}}/>
              <h5>Address</h5>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
              <h5>Phone</h5>
              <p>
              000-000-000
              </p>
              <h5>Email</h5>
              <p>
              My email address
              </p>
              <h5>Website</h5>
              <p>
              Website address
              </p>
              <hr style={{borderTop:"3px solid #833fb2", width:"50%"}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
          <h2>Education</h2>
            <Education
            startYear={2004}
            endYear={2009}
            schoolName="School name"
            schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Education
            startYear={2004}
            endYear={2009}
            schoolName="School name"
            schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <hr style={{borderTop:"3px solid #e22947"}}/>
            <h2>Experience</h2>
          <Experience
           startYear={2004}
           endYear={2009}
           jobName="Job name"
           jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Experience
           startYear={2004}
           endYear={2009}
           jobName="Job name"
           jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <hr style={{borderTop:"3px solid #e22947"}}/>

          <Skills
          skill="javascript"
          progress={100}
          />
          <Skills
          skill="C#"
          progress={90}
          />
          <Skills
          skill="Skill 3"
          progress={80}
          />
          <Skills
          skill="Skill 4"
          progress={60}
          />
          </Cell>
        </Grid>
      </div>
    )
  }
 
}
 
export default Resume;