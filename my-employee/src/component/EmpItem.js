import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';

const EmpItem = (props) => {

    let isSelected = false;
    if(props.emp === props.selectedEmp ){
      isSelected = true;
    }

    return(
      <ListItem button selected={isSelected} onClick={() =>props.selectEmp(props.emp)}>
          {props.emp.name}
      </ListItem>
    );
}

export default EmpItem;
