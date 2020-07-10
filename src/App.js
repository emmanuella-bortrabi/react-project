import React from 'react';
import './App.css';
import  UserItem from './component/ella'


    class App extends React.Component{

      constructor(props){
        super(props)
        this.state ={
          name:"",

          email:"",

          users:[]

        }
      }
       handleInputChange =(e) =>{
         const name = e.target.name;
         const value = e.target.value
         this.setState({
           [name]: value
         });
       }

       handleSubmit =(e) => {
        e.preventDefault();
         const user =this.state
         let newUser={name:user.name,email:user.email}
         this.setState({users:[...user.users,newUser]})


         this.clear();
       }

        clear =() =>{
          this.setState({
          name:"",
          email:""
          })
        }
        render() {
          const change =this.handleInputChange;
          const users =this.state.users;
          return(
            <div className="App">
              <div className="particulars">
                <form onSubmit={this.handleSubmit}>
                  <input
                  type="text"
                  name="name"
                  placeholder="name"
                  value={this.state.name}
                  onChange={change}/>
                  <br/>
                   <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={change}/>
                  <br/>
<input className="" type="submit"/>
                </form>
              </div>

              <div className="list-of-users">
                <h3 className="text">list of users</h3>
                {
                  users.map((user,i) => <UserItem key={i} {...user}/>)
                }
              </div>
            </div>
          )

        }

    
  }
    
  

export default App;
