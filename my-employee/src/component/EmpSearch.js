import React from 'react'
import TextField from '@material-ui/core/TextField'



const EmpSearch = (props) => {
  return (
    <div>
      <TextField
        id="standard-search"
        label="Search"
        type="search"

        margin="normal"
        onChange={props.searchEmp}
      />

    </div>
  );
};

export default EmpSearch;
