import React from 'react'
import List from '@material-ui/core/List'
import EmpItem from './EmpItem'


const EmpList = (props) => {

  console.log("in EL :: ",props);
  let employeeList = [];
  if(props.searchText.length > 0){
    props.empList.forEach((value, index) =>{
      if(value.name.search(new RegExp(props.searchText, "i")) > -1){
        employeeList.push(value);
      }
    });

  }else{
    employeeList = props.empList;
  }
  let rows = [];
  if(employeeList.length > 0){
    rows = employeeList.map((emp) => <EmpItem emp={emp} key={emp.id}
    selectEmp={props.selectEmp}
     selectedEmp={props.selectedEmp} />
     );
  }

  return (
    <div>
    <List component="nav">
      {rows}
    </List>
  </div>
  );
}

export default EmpList;
