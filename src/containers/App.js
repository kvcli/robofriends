import React, {Component} from 'react';
import CardList from '../components/CardList';
 import SearchBox from '../components/SearchBox';
 import Scroll from '../components/Scroll';

import './App.css';

class App extends Component {
    constructor (){
        super() 
        this.state = {
            robots:[],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) 
        .then(users => this.setState({  robots: users}))
        
        
    }

    onsearchChange = (event) => {
       this.setState({searchfield: event.target.value})
       
        
    }

    render (){
        const { robots, searchfield } = this.state;
        const filterdRobots = robots.filter (robot => {
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
        })

        return !robots.length ? 
         <h1 className='tc'>Loading....</h1> :
          (
                <div className='tc'>
                  <h1 className='f1'>RoboFriends</h1>
                  <SearchBox searchChange = {this.onsearchChange} />
                  <Scroll>
                    <CardList robots = {filterdRobots} /> 
                  </Scroll>
                  
                 </div>
            );
        
       
    }
   
}

export default App;