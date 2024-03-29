import React, {Component} from "react"
 import {Grid, Cell, List, ListItem, ListItemContent} from "react-mdl"


class Contact extends Component{
  render(){
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Mehdi Hellal</h2>
            <img
            src ="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"
            alt="avatar"
            style={{height:"250px"}}
            />
            <p style={{width: '75%', margin:'auto', paddingTop:'1em'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen
             book. It has survived not only five centuries, but also the leap into electronic 
             typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact me</h2>
            <hr/>
            <div className="contact-list">

            <List>
                <ListItem>
                  <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true" />  
                    999-999-9999          
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                    <i className="fa fa-envelope-square" aria-hidden="true" />  
                    Email Address       
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                    <i className="fa fa-linkedin-square" aria-hidden="true" />  
                    Username          
                  </ListItemContent>
                </ListItem>
               
            </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }

 }
 
export default Contact;