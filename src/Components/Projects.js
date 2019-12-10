import React, {Component} from "react"
import {Tabs, Tab,Grid,Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu,IconButton } from "react-mdl"

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state= {activeTab:0};
  }

  toggleCategories(){
    if(this.state.activeTab===0){
      return(
        <div className="projects-grid">
      {/*project1*/}
    <Card shadow={5} style={{width: '450px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover'}}>Name of Project</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>GitHub</Button>
        <Button colored>Live demo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
{/*project2*/}
<Card shadow={5} style={{width: '450px', margin: 'auto'}}>
<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover'}}>Name of Project</CardTitle>
<CardText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Mauris sagittis pellentesque lacus eleifend lacinia...
</CardText>
<CardActions border>
    <Button colored>GitHub</Button>
    <Button colored>Live demo</Button>
</CardActions>
<CardMenu style={{color: '#fff'}}>
    <IconButton name="share" />
</CardMenu>
</Card>
{/*project3*/}
<Card shadow={5} style={{width: '450px', margin: 'auto'}}>
<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover'}}>Name of Project</CardTitle>
<CardText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Mauris sagittis pellentesque lacus eleifend lacinia...
</CardText>
<CardActions border>
    <Button colored>GitHub</Button>
    <Button colored>Live demo</Button>
</CardActions>
<CardMenu style={{color: '#fff'}}>
    <IconButton name="share" />
</CardMenu>
</Card>
</div>
      )
    }else if(this.state.activeTab===1){
      return(
        <div><h1>MVC</h1></div>
          )
    }else if(this.state.activeTab===2){
      return(
        <div><h1>Bootstrap</h1></div>
          )
    }else if(this.state.activeTab===3){
      return(
        <div><h1>Other Projects</h1></div>
          )
    }
    
  }


  render() {
    return ( 
      <div className="category-tabs" >

        <h1 > Projects </h1> 
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>MVC5</Tab>
                    <Tab>Bootstrap</Tab>
                    <Tab>Others</Tab>        
        </Tabs>
        
        <Grid >
          <Cell col={12}>
          <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
        
       
      </div>
    )
  }
}

export default Projects;