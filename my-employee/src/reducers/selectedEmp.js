const selectedEmp = (state = {}, action) => {
  switch(action.type){
    case 'SELECT_EMP':
      return action.emp;
    default:
      return state
  }
};

export default selectedEmp;
