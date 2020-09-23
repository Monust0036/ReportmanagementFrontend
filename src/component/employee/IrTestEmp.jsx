import React, { Component } from "react";
import "./LeaveApplicationEmp.css";
import axios from "axios";
import LeaveApplicationEmpTable from "./IrTestEmpTable.jsx";
import LeaveApplicationEmpForm from "./IrTestEmpForm.jsx";
import LeaveApplicationEmpFormEdit from "./IrTestEmpFormEdit.jsx";
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


      Date: event.target[0].value,
      OANumber:event.target[1].value,
      State: event.target[2].value,
      CustomerName: event.target[3].value,
      SiteName: event.target[4].value,
      ReportedBy: event.target[5].value,
      ModuleMake: event.target[6].value,
      

     
    //   Status: event.target[4].value,
    };
    
    axios
      .post("http://localhost:4200/api/ir-test-emp/" + this.props.data["_id"], body, {
        headers: {
          // "content-type": "multipart/form-data",
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(res => {
        this.setState({ table: false });
        this.setState({ table: true });
        console.log("File uploaded successfully");
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

      Date: newInfo.target[0].value,
      OANumber:newInfo.target[1].value,
      State: newInfo.target[2].value,
      CustomerName: newInfo.target[3].value,
      SiteName: newInfo.target[4].value,
      ReportedBy: newInfo.target[5].value,
      ModuleMake: newInfo.target[6].value,
     };
    console.log("update", body);
    axios
      .put(
        "http://localhost:4200/api/ir-test-emp/" + info["_id"],
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
