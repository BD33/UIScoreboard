import React, { Component } from 'react'

 class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            groups: [1,2,3,4],
        };
   
    }

    componentDidMount() {
       const axios = require("axios");
       axios({
           "method":"GET",
           "url":"http://api.football-data.org/v2/competitions/CL/standings",
           "headers":{
           "X-Auth-Token":"d355be5809fa4a358179dc0384288e4a",
           },
           })
           .then((response)=>{
             console.log(response)
              this.setState({ groups : response.data.standings});
            })
           .catch((error)=>{
             console.log(error)
           })

    }

    printSchedule(){

    console.log(this.state.groups);
    
     var groups  = this.state.groups.map((group) =>
       group.type === "TOTAL" ?
         <div class="col-md-6">
            <div class="card p-4 m-4">   
              <h3  class="card-title">{group.group.replace('_'," ")}</h3>
              <table>
                <th>Position</th>
                <th></th>
                <th>Team</th>
                <th><nobr>Points</nobr></th>
                <th>GP</th>
                <th>GF</th>
                <th>GA</th>

              { 
                  group.table.map((table) => 
                  <tr>
                    <td class="card-text "> { table.position + ". "} </td>
                    <td class="card-text"><img src={table.team.crestUrl} width="40" height="20" /></td>
                    <td class="card-text">  { table.team.name} </td> 
                    <td class="card-text p-3"> { table.points} </td>   
                    <td class="card-text p-3"> { table.playedGames} </td>   
                    <td class="card-text p-3"> { table.goalsFor} </td>   
                    <td class="card-text p-3"> { table.goalsAgainst} </td>   


                  </tr>  
                  )        
                }
            </table>
            </div>
          </div>
       : ""
      );

      return (
        <div class="row"> { groups }</div>
      )
      
    }
    

    render() {
        return (
        <div>
            <h2 class="text-light display-4 ">Champions League 2020 Standings</h2>
            <div class="container">
                {this.printSchedule()}
             </div>
        </div>
        )
    }
}

export default Home;