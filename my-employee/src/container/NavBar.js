import React, { Component } from 'react';
import { connect } from 'react-redux'
import Divider from '@material-ui/core/Divider';
import EmpList from '../component/EmpList'
import EmpSearch from '../component/EmpSearch'
import { selectEmp, searchEmp, loadEmp } from '../actions/employeeAction'

class NavBar extends Component{



  componentDidMount(){
    const empData =
      [
        {
        id:1,
        name:'Praveen',
        salary:'1000'
      },
      {
        id:2,
        name:'Mahesh',
        salary:'2000'
      },
      {
      id:3,
      name:'Sanjay',
      salary:'3000'
      }

    ];
    this.props.loadEmp(empData);
    }

  render(){
    console.log("in EL :: ",this.props);

    return (
      <div>
      <EmpSearch searchEmp={this.props.searchEmp}/>
        <Divider />
        <EmpList searchText={this.props.searchText} empList={this.props.empList}
        selectEmp={this.props.selectEmp}/>
    </div>
    );
  }
}



const mapStateToProps = state => ({

  empList:state.empList,
  searchText:state.empSearchText,
  selectedEmp: state.selectedEmp

})

const mapDispatchToProps = dispatch => ({
  selectEmp: selectedEmp => dispatch(selectEmp(selectedEmp)),
  searchEmp: e => dispatch(searchEmp(e.target.value)),
  loadEmp: empList => dispatch(loadEmp(empList))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
