import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component{
  state = {
    persons: [
      {Name:'Ansari', age:21},
      {Name:'Misbahi', age:20},
      {Name:'Fasla', age:20}
    ],
    showPerson : false
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

  NamechangedHandler = (event) => {
    this.setState( {
      persons: [
        {Name: 'Ansari', age:21},
        {Name: event.target.value, age:20},
        {Name:'Fasla', age:20}
      ]
    });
  }

  togglePersonHandler =() =>{
  const doesShow = this.state.showPerson;  this.setState({showPerson: !doesShow});
  }
   render(){
   
    const style= {
      backgroundColor : 'white',
      padding : '8px',
      font : 'inherit',
      border: '1px solid blue',
      cursor: 'pointer'
    };

    let persons= null;

    if(this.state.showPerson){
     persons=
      (
      <div>
        {this.state.persons.map( person => {
          return <Person 
          Name= {person.Name}
          Age= {person.age} />
        })}      
      </div>
      );
    }
     
   return (
     <div className="App">
     <h1> hi, Nafly kaka </h1>
     <p>it works</p>
     <button 
     style={style}
     onClick ={this.togglePersonHandler}>Toggle person</button>
     {persons}
     </div>
   );
   //return React.createElement('div',{className:'App'},React.createElement('h1',null,'hello'));
  }
}  
  export default App;
