import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import EmpItems from './components/EmpItems/Emp'
import AddItems from './components/AddItems/Add'
class  App extends Component {
  state ={
    items : [
      {id:1, name:'Hamza',age:22},
      {id:2, name:'Mohammed',age:23},
      {id:3, name:'Ahmed',age:24}
    ]
  }
  DeleteItem = (id)=> {
    let items = this.state.items.filter(item =>{
      return item.id !==id
    })
    this.setState ({items})
  }
  addI = (item) => {
    item.id = Math.random();
    let items = this.state.items
    items.push(item);
    this.setState({items})
  }
  render (){
  return (
    <div className="App containar">
     <Helmet>
       <title>
       Employees List

       </title>
     </Helmet>

    <div>
    <h1 className ="text-center">  Employees List </h1>

    <EmpItems items= {this.state.items} DeleteItem = {this.DeleteItem}/>
    <AddItems addI= {this.addI}/>

      </div> 
    </div>
  );
  }
}

export default App;
