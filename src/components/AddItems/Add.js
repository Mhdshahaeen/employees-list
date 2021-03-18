import React , {Component} from 'react'
class AddItems extends Component {
    state = {
        name:'',
        age: ''
    }
    handelChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handelSubmit = (e) => {
        e.preventDefault();
        if(e.target.name.value===''){
            return false
          
        } else{
            this.props.addI(this.state)
            this.setState({
                name:'',
                age:''
            })
        }
    }
    render(){
        return (
            <div>
                  <form onSubmit ={this.handelSubmit}>
                <input type ="text" id ="name" placeholder ="Enter your Name" onChange ={this.handelChange} value={this.state.name}/>
                <input type ="number" id ="age" placeholder ="Enter your Age" onChange ={this.handelChange} value={this.state.age}/>
                <input type = "submit" value = "Add"/>
            </form>
            </div>
        )
    }
}
export default AddItems