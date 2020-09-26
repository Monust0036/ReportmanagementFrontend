import React, { Component } from "react";
import "./LeaveApplicationHR.css";
import axios from "axios";
import LeaveApplicationHRTable from "./VisualInspectionReportHRTable.jsx";
// import LeaveApplicationHRForm from "./LeaveApplicationHRForm.jsx";
import LeaveApplicationHRFormEdit from "./VisualInspectionReportHRFormEdit.jsx";
class LeaveApplicationHR extends Component {
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
              <LeaveApplicationHRFormEdit
                onLeaveApplicationHREditUpdate={this.handleLeaveApplicationHREditUpdate}
                onFormEditClose={this.handleEditFormClose}
                editData={this.state.editData}
              />
            ) : (
                <LeaveApplicationHRTable
                  onAddLeaveApplicationHR={this.handleAddLeaveApplicationHR}
                  onEditLeaveApplicationHR={this.handleEditLeaveApplicationHR}
                  data={this.props.data}
                />
              )
          ) : (
              <div></div>
              //   <LeaveApplicationHRForm
              //     onLeaveApplicationHRSubmit={this.handleLeaveApplicationHRSubmit}
              //     onFormClose={this.handleFormClose}
              //     onGenderChange={this.handleAddFormGenderChange}
              //   />
            )}
        </React.Fragment>
      );
    }
    handleLeaveApplicationHRSubmit = event => {
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
        // ModuleMake: event.target[6].value,
        
  
        // Leavetype: event.target[0].value,
        // FromDate: event.target[1].value,
        // ToDate: event.target[2].value,
        // Reasonforleave: event.target[3].value,
        // Status: event.target[4].value,
      };
      axios
        .post(process.env.REACT_APP_API_URL+ "/api/visual-inspection-report-hr/" + this.props.data["_id"], body, {
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
    handleAddLeaveApplicationHR = () => {
      console.log("clicked1");
      this.setState({ table: false });
    };
    handleEditLeaveApplicationHR = e => {
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
    handleLeaveApplicationHREditUpdate = (info, newInfo) => {
      newInfo.preventDefault();
      console.log("zero data", newInfo.target[0].value);
      let body = {
        FoodExpense: newInfo.target[4].value,
      };
      console.log("update", body);
      axios
        .put(
          process.env.REACT_APP_API_URL+ "/api/visual-inspection-report-hr/" + info["_id"],
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
  
  export default LeaveApplicationHR;
  