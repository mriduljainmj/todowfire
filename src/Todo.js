import React from 'react'
import db from './firebase';
import { List,ListItem,ListItemText } from '@material-ui/core';


function Todo(props) {
    
    return (
        <List>
        <ListItem alignItems="flex-start">
        <ListItemText
          primary={props.todo.todo}
          secondary='By Mridul Jain'
        />
      </ListItem>
      <button onClick={event=> db.collection('todos').doc(props.todo.id).delete()}>Delete Me</button>
      </List>
    )
}

export default Todo