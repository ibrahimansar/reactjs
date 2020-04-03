import React, {Component} from 'react';
import classes from './App.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
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
    let btnClass = '';

    if(this.state.showPersons){
     persons=
      (
      <div>
        {this.state.persons.map( (person, index) => {
          return <ErrorBoundary key={person.id}>
          <Person 
          click = {() => this.deletePersonHandler(index)}
          Name= {person.Name}
          age= {person.age} 
          changed ={(event)=> this.nameChangedHandler(event, person.id)} />
          </ErrorBoundary>
        })}      
      </div>
      );

      btnClass = classes.Red;
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
     <button onClick ={this.togglePersonHandler} className={btnClass}>Toggle person
     </button>
     {persons}
     </div>
   );
  }
}  
  export default App;
