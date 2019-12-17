import React from "react"
import {Grid, Cell} from "react-mdl"
 
function HomePage(props) {
  return (
    <div style={{width: '100%', margin: 'auto'}}>
    <Grid className="home-grid">
    <Cell col={12}>
    <img src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" alt="Avatar" className="avatar-img"/>
   <div className="banner-text"><h1>Web/Software Developer</h1>
    <hr/>
    <p>Html | CSS | JavaScript | React | Angular | C# | .Net</p>
    <div className="social-link">
      <a href="https://www.linkedin.com/in/mehdi-hellal/" rel="noopener noreferrer" target="_blank">
       <i className="fa fa-linkedin" aria-hidden="true"></i>
      </a>
      <a href="https://github.com/MehdiHellal" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-github" aria-hidden="true"></i>
      </a>
      <a href="https://twitter.com/mehdyhellal" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-twitter" aria-hidden="true"></i>
      </a>
    </div>
   </div>
   <h1>Welcome</h1>
   
    </Cell>
    </Grid>
     
    </div>
  )
}
 
export default HomePage;