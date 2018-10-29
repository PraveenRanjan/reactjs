const empSearchText = (state='', action) => {
  switch(action.type){
    case 'SEARCH_EMP':
      return action.searchText;
    default:
      return state;

  }

};

export default empSearchText;
