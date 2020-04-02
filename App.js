import React, {Component} from 'react';
import classes from './App.css';

import Person from './Person/Person';

class App extends Component{
  state = {
    persons: [
      {id:'1', Name:'Ansari',  age:21},
      {id:'2',Name:'Misbahi', age:20},
      {id:'3', Name:'Fasla', age:20}
    ],
    showPersons : false
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

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonHandler =() =>{
  const doesShow = this.state.showPersons;  this.setState({showPersons: !doesShow});
  }

   render(){

    let persons= null;

    if(this.state.showPersons){
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
      // style.backgroundColor ='red';
      // style[':hover']= {backgroundColor: 'salmon',
      // color: 'black'}
    }
     
    const AssignedClasses =[];

    if(this.state.persons.length <= 2){
      AssignedClasses.push(classes.red);
    }
    if(this.state.persons.length <=1){
      AssignedClasses.push(classes.bold);
    }

   return (
     <div className={classes.App}>
     <h1> hi, Nafly kaka </h1>
     <p className={AssignedClasses.join(' ')} >it works</p>
     <button onClick ={this.togglePersonHandler} alt={this.state.showPersons}>Toggle person
     </button>
     {persons}
     </div>
   );
   //return React.createElement('div',{className:'App'},React.createElement('h1',null,'hello'));
  }
}  
  export default App;
