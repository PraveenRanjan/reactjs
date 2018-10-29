import { combineReducers } from 'redux'
import empList from './empList'
import empSearchText from './empSearchText'
import selectedEmp from './selectedEmp'

export default combineReducers({
  selectedEmp: selectedEmp,
  empSearchText: empSearchText,
  empList: empList
});
