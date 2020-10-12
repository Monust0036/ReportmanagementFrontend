import React, { Component } from "react";
import "./LeaveApplicationEmp.css";
import axios from "axios";
import LeaveApplicationEmpTable from "./ElInspectionReportEmpTable.jsx";
import LeaveApplicationEmpForm from "./ElInspectionReportEmpForm.jsx";
import LeaveApplicationEmpFormEdit from "./ElInspectionReportEmpFormEdit.jsx";
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
    console.log("id>>>>>>>>>>>>>>>>>>>>>>.", event.target[0].value,event.target[1].value);
    this.setState({ table: true });

    let body = {


      Date: event.target[0].value,
      OANumber:event.target[1].value,
      State: event.target[2].value,
      CustomerName: event.target[3].value,
      SiteName: event.target[4].value,
      ReportedBy: event.target[5].value,
      SiteOwnerClient:event.target[6].value,
      Commissioning:event.target[7].value,
      MWCapacityAC:event.target[8].value,
      MWCapacityDC:event.target[9].value,
      // ModuleMake1:event.target[10].value,
      // ModuleMake2:event.target[11].value,
      // InstalledCapacityMW1:event.target[12].value,
      // InstalledCapacityMW2:event.target[13].value,
      // GroundMounted:event.target[14].value,
      // InstallationAngle:event.target[15].value,
      // Orientation:event.target[16].value,
      // ModulesIn1Column:event.target[17].value,
      // ModulesIn1String: event.target[18].value,
      // Tracker:event.target[19].value,
      //   Status: event.target[4].value,
    };
    
    axios
      .post(process.env.REACT_APP_API_URL+ "/api/el-inspection-report-emp/" + this.props.data["_id"], body, {
        headers: {
          "content-type": "multipart/form-data",
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
    // this.setState({ editFormGender: e["Gender"] })
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
      SiteOwnerClient:newInfo.target[6].value,
      Commissioning:newInfo.target[7].value,
      MWCapacityAC:newInfo.target[8].value,
      MWCapacityDC:newInfo.target[9].value,
      // ModuleMake1:newInfo.target[10].value,
      // ModuleMake2:newInfo.target[11].value,
      // InstalledCapacityMW1:newInfo.target[12].value,
      // InstalledCapacityMW2:newInfo.target[13].value,
      // GroundMounted:newInfo.target[14].value,
      // InstallationAngle:newInfo.target[15].value,
      // Orientation:newInfo.target[16].value,
      // ModulesIn1Column:newInfo.target[17].value,
      // ModulesIn1String:newInfo.target[18].value,
      // Tracker:newInfo.target[19].value

    
     };
    console.log("update>>>>>>>>>>>>>>>>>", body);
    axios
      .put(
        process.env.REACT_APP_API_URL+ "/api/el-inspection-report-emp/" + info["_id"], body, {
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
