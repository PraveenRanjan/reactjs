export const selectEmp = (emp) => ({
  type: 'SELECT_EMP',
   emp

});

export const searchEmp = (searchText) => ({
  type: 'SEARCH_EMP',
  searchText
});

export const loadEmp=(empData) => ({
  type:'LOAD_EMP',
  empData
});
