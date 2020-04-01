import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component{
  state = {
    persons: [
      {id:'1', Name:'Ansari',  age:21},
      {id:'2',Name:'Misbahi', age:20},
      {id:'3', Name:'Fasla', age:20}
    ],
    showPerson : false
  }

 nameChangedHandler=(event, id)=>{

  const personIndex =this.state.persons.findIndex(p =>{
    return p.id === id;

  });
  
  const person= {...this.state.persons[personIndex]};

  person.Name =event.target.value;

  const persons =[...this.state.persons];
   persons[personIndex]= person;

  this.setState( {persons: persons });
 }

 switchNameHandler = (NewName) => {
    this.setState( {
      persons: [
        {Name: NewName, age:21},
        {Name:'Misbahi', age:20},
        {Name:'Fasla', age:20}
      ]
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
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
        {this.state.persons.map( (person, index) => {
          return <Person 
          click = {() => this.deletePersonHandler(index)}
          Name= {person.Name}
          age= {person.age} 
          key={person.id}
          changed ={(event)=> this.nameChangedHandler(event, person.id)} />
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
