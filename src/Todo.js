import React from 'react'

import { List,ListItem,ListItemText } from '@material-ui/core';


function Todo(props) {
    
    return (
        <List>
        <ListItem alignItems="flex-start">
        <ListItemText
          primary={props.text}
          secondary='By Mridul Jain'
        />
      </ListItem>
      </List>
    )
}

export default Todo