import React from 'react';
import Request from 'superagent';

class ApiEater extends React.Component{
    constructor(){
        super();
        this.state = {};
    }
    componentWillMount(){
        var url="http://localhost:3000/api/getBasic";
        Request.get(url).then(result =>{
          //console.log(result);
            var json = JSON.parse(result.text);
            //console.log(json);
            this.setState({data:json});
            //console.log(this.state.data[0]);
        })
    }
    componentDidMount(){
        //console.log("has mounted");
    }
    render(){
        if(this.state.data){
            var logo={
                height:'20px',
                width:'20px'
            };
            return (
                <div>
                <h5>{this.state.data[0].FirstName} {this.state.data[0].LastName}&nbsp;&nbsp;<img style={logo} src="images/download.png"/></h5>
                    </div>
            )
        }
        else{
            return <p>data could not load</p>
        }
    };
}
export default ApiEater;