import './App.css';
import Todo from './Todo'
import { Button,FormControl,Input,InputLabel } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import db from './firebase';
import firebase from 'firebase'

function App() {
  const [todos,setTodo] = useState(["abc"])//short term memory using useState
  const [inp,setInp] = useState('');
  const add = (event)=>{
    event.preventDefault();  //to stop the page from refreshing
    db.collection('todos').add({
      todo:inp,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodo([...todos,inp])   //... this is spreader and we are appeding the value at the end of the inp variable
    setInp('')
  }
    const remain = (event)=>{   //to maintain the value in the input field
    setInp(event.target.value)
  }
  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setTodo(snapshot.docs.map(doc=>({id:doc.id ,todo:doc.data().todo})))
    })
  }, []);
  
  return (
    
    <div className="App">
     

      <h1>Hello World</h1>
      <form>
      <FormControl> 
      <InputLabel>Enter a Todo</InputLabel>
      <Input type='text' value = {inp} onChange={remain} class ='my' />
      </FormControl>
      <Button  disabled ={!inp} type ='submit' variant="contained" color="primary" onClick={add}> Add</Button> {/*disabled is used so that no one can input a empty string*/}
      </form>
      <ul class="mylist">
        {todos.map(todo =>(
          <Todo todo = {todo}/>
        ))}
      </ul>
      

    </div>
  );
}

export default App;