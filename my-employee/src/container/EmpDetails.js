import React, { Component} from 'react';
import { connect } from 'react-redux'

class EmpDetails extends Component {
  render(){
      let selection = this.props.selectedEmp.id !== undefined ? true : false;
      if(selection){
    return(
            <ul>
              <label>Id: </label>
               {this.props.selectedEmp.id}
             <br/>
               <label>Name: </label>
             {this.props.selectedEmp.name}
           <br/>
            <label>Salary: </label>
               {this.props.selectedEmp.salary}
            </ul>
        );
      }
      else {
        return (
          <h3>Select any Emp</h3>
          );
      }
  }
}

const mapStateToProps = state => ({
  selectedEmp: state.selectedEmp
})


export default connect(
  mapStateToProps
)(EmpDetails)
