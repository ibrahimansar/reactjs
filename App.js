import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
    persons: [
      {Name:'Ansari', age:21},
      {Name:'Misbahi', age:20},
      {Name:'Fasla', age:20}
    ],
  };

 switchNameHandler = (NewName) => {
    this.setState( {
      persons: [
        {Name: NewName, age:21},
        {Name:'Misbahi', age:20},
        {Name:'Fasla', age:20}
      ]
    });
  }


   render(){
   return (
     <div className="App">
     <h1> hi, Nafly kaka </h1>
     <p>it works</p>
     <button onClick ={this.switchNameHandler.bind(this, 'Ibrahim Ansari')}>Switch Name</button>

     <Person 
     Name= {this.state.persons[0].Name}
     age = {this.state.persons[0].age}
     click= {this.switchNameHandler.bind(this, ' Mohamed Ibrahim Ansari')}/>

     <Person
      Name={this.state.persons[1].Name}
      age = {this.state.persons[1].age}/>

     <Person
      Name={this.state.persons[2].Name}
      age = {this.state.persons[2].age}
      > she is engaged </Person>
     </div>
   );
   //return React.createElement('div',{className:'App'},React.createElement('h1',null,'hello'));
  }
}  
  export default App;
