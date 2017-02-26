import React from 'react';
import ReactDOM from 'react-dom';
import Request from 'superagent';
import _ from 'lodash';

class App extends React.Component {
	
    constructor(){
        super();
        this.state = {};
    }
    
    componentWillMount(){
        this.search();
    }
    
    search(query = "bane"){
        var url = 'http://jbvapi.eggsdesign.tech/rails/1?type=bane&_format=json&descendants=direct&excludeSelf=true';
        
        Request.get(url).then((data) => {
            var arr = _.filter(data.body.data.rails, function(o) {
                return _.includes(o.title, query);
            });
            
            this.setState({
                rails: arr,
                total: arr
            });
        });
        console.log(query); //Test input(query) in console
    }
    
    updateSearch(e){
        this.search(this.refs.query.value);
    }
    
    render(){
        var rails = _.map(this.state.rails, (rail) => {
            return <li key={rail.id}>{rail.title}</li>; 
        });
        
        return (
            <div>
                <h1>Norges jernbanenett</h1>
                <input ref="query" onChange={ (e) => { this.updateSearch(); }} type="text"/>

                <ul>{rails}</ul>
            </div>
        )
	}
}

ReactDOM.render(
    <App />, document.getElementById('app') //Send App to index.html
);