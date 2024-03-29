import React, {Component} from "react"
import {ProgressBar,Grid, Cell } from "react-mdl"

class Skills extends Component{
    render(){
        return(
            <Grid>
                <Cell  col={12}>
                <div style={{dispay:'flex'}}>
                    {this.props.skill} <ProgressBar style={{margin:'auto', width:'75%'}} 
                    progress={this.props.progress}/>
                </div>
                </Cell>
            </Grid>
        )
    }
}

export default Skills