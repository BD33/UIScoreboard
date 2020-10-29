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
              this.setState({ groups : response.data.standings});
            })
           .catch((error)=>{
             console.log(error)
           })

    }

    printSchedule(){

      console.log(this.state.groups);
      
    }
    

  

    render() {
        return (
        <div>
            <h1>Champions League 2020</h1>
            <div class="container">
                {this.printSchedule()}
             </div>
        </div>
        )
    }
}

export default Home;