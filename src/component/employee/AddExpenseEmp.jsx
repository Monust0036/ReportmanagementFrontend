import React, { Component } from "react";
import "./LeaveApplicationEmp.css";
import axios from "axios";
import LeaveApplicationEmpTable from "./AddExpenseEmpTable.jsx";
import LeaveApplicationEmpForm from "./AddExpenseEmpForm.jsx";
import LeaveApplicationEmpFormEdit from "./AddExpenseEmpFormEdit.jsx";
class LeaveApplicationEmp extends Component {
  state = {
    table: true,
    editForm: false,
    editData: {},

  };

  render() {
    return (
      <React.Fragment>
        {/* <h1>iiiiiiiiiinnnnnnnnnnnnnn{
          JSON.stringify(this.props.data)}</h1> */}

        {this.state.table ? (
          this.state.editForm ? (
            <LeaveApplicationEmpFormEdit
              onLeaveApplicationEmpEditUpdate={this.handleLeaveApplicationEmpEditUpdate}
              onFormEditClose={this.handleEditFormClose}
              editData={this.state.editData}
            />
          ) : (
              <LeaveApplicationEmpTable
                onAddLeaveApplicationEmp={this.handleAddLeaveApplicationEmp}
                onEditLeaveApplicationEmp={this.handleEditLeaveApplicationEmp}
                data={this.props.data}
              />
            )
        ) : (
            <LeaveApplicationEmpForm
              onLeaveApplicationEmpSubmit={this.handleLeaveApplicationEmpSubmit}
              onFormClose={this.handleFormClose}
              onGenderChange={this.handleAddFormGenderChange}
            />
          )}
      </React.Fragment>
    );
  }
  handleLeaveApplicationEmpSubmit = event => {
    event.preventDefault();
    console.log("id", event.target[0].value, event.target[1].value);
    this.setState({ table: true });

    let body = {

      //  CompanyName: event.target[0].value,
      //  Designation:  event.target[1].value,
      //  FromDate:  event.target[2].value,
      //  ToDate:  event.target[3].value,

      AddExpenseDate: event.target[0].value,
      TicketFare:event.target[1].value,
      LocalConvenyance: event.target[2].value,
      HotelExpense: event.target[3].value,
      FoodExpense: event.target[4].value,
      MiscExpense: event.target[5].value,
      TransferToAnotherMember: event.target[6].value,
      Remark: event.target[7].value,
    //   Status: event.target[4].value,
    };
    axios
      .post(process.env.REACT_APP_API_URL+ "/api/add-expense-emp/" + this.props.data["_id"], body, {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(res => {
        this.setState({ table: false });
        this.setState({ table: true });
      })
      .catch(err => {
        console.log(err);
      });
  };
  handleAddLeaveApplicationEmp = () => {
    console.log("clicked1");
    this.setState({ table: false });
  };
  handleEditLeaveApplicationEmp = e => {
    console.log(e);
    console.log("clicked6");
    this.setState({ editForm: true });
    this.setState({ editData: e });
    this.setState({ editFormGender: e["Gender"] })
  };
  handleFormClose = () => {
    console.log("clicked1");
    this.setState({ table: true });
  };
  handleEditFormClose = () => {
    console.log("clicked5");
    this.setState({ editForm: false });
  };
  // handleFormClose = () => {
  //   console.log("clicked1");
  //   this.setState({ table: true });
  // };
  handleLeaveApplicationEmpEditUpdate = (info, newInfo) => {
    newInfo.preventDefault();
    console.log("zero data", newInfo.target[0].value);
    let body = {
    //   TeamLeaderName: newInfo.target[0].value,
    //   TeamMember: newInfo.target[1].value,
    //   TourStartLocation: newInfo.target[2].value,
    //   TourStartDate: newInfo.target[3].value,
    //   DestinationPlanned: newInfo.target[4].value,
    //   TourNoGenerated: newInfo.target[5].value,

      AddExpenseDate: newInfo.target[0].value,
      TicketFare:newInfo.target[1].value,
      LocalConvenyance: newInfo.target[2].value,
      HotelExpense: newInfo.target[3].value,
      FoodExpense: newInfo.target[4].value,
      MiscExpense: newInfo.target[5].value,
      TransferToAnotherMember: newInfo.target[6].value,
      Remark: newInfo.target[7].value,

      
    };
    console.log("update", body);
    axios
      .put(
        process.env.REACT_APP_API_URL+ "/api/add-expense-emp/" + info["_id"],
        body, {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      }
      )
      .then(res => {
        this.setState({ table: false });
        this.setState({ table: true });
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({ editForm: false });
  };

}

export default LeaveApplicationEmp;
