import React, { Component } from 'react'
import { env } from 'process'
import MichiganState from './TeamLogos/MSU.png';
import Illinois from './TeamLogos/Illinois.png';
import Indiana from './TeamLogos/Indiana.png';
import Maryland from './TeamLogos/Maryland.png';
import Michigan from './TeamLogos/Michigan.png';
import PennState from './TeamLogos/PennState.png';
import Nebraska from './TeamLogos/NebraskaLog.png';
import OhioState from './TeamLogos/OhioState.png';
import { MDBAnimation } from "mdbreact";



// with import




 class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            Schedule: [1,2,3,4],
        };
   
    }

    componentDidMount() {
        fetch("https://api.collegefootballdata.com/games?year=2020&seasonType=regular&team=Ohio%20State")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result)
            this.setState({Schedule: result})
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    printSchedule(){
        var result = this.state.Schedule
        const listItems = result.map((week) =>

        <div class="col-sm">
            <div class="card p-5 m-5">
             <img src={week.home_team} />
               <nobr><h2 class="card-title">{week.home_team  + " vs " + week.away_team}</h2></nobr> 
                <p class="card-text"> {week.home_points != null ? "Score : " + week.home_points + " - " + week.away_points :  week.start_date != null ? "Date of Game: " + (week.start_date).substring(5,10) : "" }</p> 
                <p class="card-text"> {week.venue!= null ? week.venue : ""}</p> 

                </div>
        </div>
        );
        console.log(result);
        return(
         <div class="row">{listItems}</div>
        );
    }
    

  

    render() {
        return (
        <div>
            <h1>Ohio State Football Schedule:</h1>

                <img src={OhioState} />

            <div class="container">
                {this.printSchedule()}
             </div>
        </div>
        )
    }
}

export default Home;