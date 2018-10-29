
const empList = (state=[], action) =>{
  switch(action.type){
    case 'LOAD_EMP':
      return [...state, ...action.empData];

    default:
    return state;
  }

};

export default empList;
