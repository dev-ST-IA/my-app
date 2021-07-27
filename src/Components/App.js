import React from 'react'
import MainContent from './MainContent'
import Header from './Header'
import Footer from './Footer'
import '../index.css';
import TimeOfDay from './TimeOfDay';
import todoData from '../todoData';
import Loader from './Loader';
import Logger from './Logger';


class App extends React.Component{
  constructor(){
    super()
    this.state={
      todoData:[],
      isLoaded:false,
      isLogged:false,
      fetchData:{},
      fetchLoad:false,
      inputFirst:'',
      inputSecond:'',
      isFriendly:false,
      gender:'',
      favColor:"blue"
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleClick=this.handleClick.bind(this)
    this.handleChangeInput=this.handleChangeInput.bind(this)
  }

  handleChange(id){
    this.setState(prevState=>{
      const newArr = prevState.todoData.map(elem=>{
        if(elem.id===id){
          elem.completed=!elem.completed
        }
          return elem
      })
      return {todoData:newArr}
    })
    
  }
  handleChangeInput(event){
    const {name,value,type,checked}= event.target
    type==="checkbox"? this.setState({[name]:checked}):this.setState({[name]: value})
  }
  componentDidMount(){
    this.setState({
      fetchLoad:true
    })
    setTimeout(()=>{
      this.setState({
        todoData:todoData,isLoaded:true
      })
    },1500)
    fetch(`https://swapi.dev/api/starships/9/`)
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        fetchData:data,fetchLoad:false
      })
    })
  }
  handleClick(){
    this.setState(prevState=>{
      return {isLogged: !prevState.isLogged}
    })
  }
//Formik for forms
  render(){
  const todos = this.state.todoData.map(elem => <MainContent key={elem.id} todo={elem} handleChangeProp={this.handleChange} status={this.state.isLoaded}/>)
  const fetchText = this.state.fetchLoad? "Loading...":this.state.fetchData.name
  return(
      <div>
          <Header/>
          <TimeOfDay/>
          <form>
          <h3 style={{textAlign:'center'}}>{fetchText}</h3>
          <div>
          <input style={{display:'block',margin:'auto'}} name="inputFirst" value={this.state.inputFirst} type='text' onChange={this.handleChangeInput}/>
          <input style={{display:'block',margin:'auto'}} name="inputSecond" value={this.state.inputSecond} type='text' onChange={this.handleChangeInput}/>
          <h2 style={{textAlign:'center'}}>{this.state.inputFirst} {this.state.inputSecond}</h2>
          </div>
          <div style={{display:'flex',justifyContent:'center',margin:'auto'}} >
            <label ><input name='isFriendly'
                           type="checkbox"
                           checked={this.state.isFriendly} 
                           onChange={this.handleChangeInput}/>
                            Is Friendly? </label>
          </div>
          <br/>
          <div style={{display:'flex',alignItems:'center',margin:'auto',flexDirection: 'column'}} >
        <label >
          <input name='gender'
          type="radio" value="male" checked={this.state.gender==="male"} onChange={this.handleChangeInput} />
          Male 
          </label>
        <label >
          <input name='gender' type="radio" value="female" checked={this.state.gender==="female"} onChange={this.handleChangeInput} />
          Female 
          </label>            
          </div>
          <br/>
          <div style={{display:'flex',justifyContent:'center',margin:'auto'}} >
            <label>Favourite Color: </label>
            <select value={this.state.favColor} 
            onChange={this.handleChangeInput}
            name="favColor">
              <option value="blue">Blue</option>
              <option value="Red">Red</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="pink">Pink</option>
            </select>
          </div>
          </form>
          <div id="todolist">
            {(!this.state.isLoaded && <Loader/>)||(this.state.isLoaded && todos)}
            <Logger handleClick={this.handleClick} isLogged={this.state.isLogged}/>
          </div>
          <Footer/>
      </div >
    )
}
}
export default App