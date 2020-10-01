import React, { Component } from "react";
import "./DashboardEmployee.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import { Redirect } from "react-router-dom";
import NavBar from "../NavBar.jsx";
import PersonalInfo from "./PersonalInfo.jsx";
import Education from "./Education.jsx";
import FamilyInfo from "./FamilyInfo.jsx";
import WorkExperience from "./WorkExperience.jsx";
import LeaveApplicationEmp from "./LeaveApplicationEmp.jsx";
import NotFound404 from "../NotFound404.jsx";
import Attendance from "./Attendance.jsx"
import TourDetail from "./TourDetail.jsx"
import AddExpense from "./AddExpenseEmp.jsx"
import JBChangeVocEmp from "./JBChangeVocEmp.jsx"
import IrTestEmp from "./IrTestEmp.jsx"
import VisualInspectionReportEmp from "./VisualInspectionReport.jsx"
import ElInspectionReportEmp from "./ElInspectionReportEmp.jsx"
import ManualThermographyReportEmp from "./ManualThermographyReportEmp.jsx"
import DroneThermographyInspectionReportEmp from "./DroneThermographyInspectionReportEmp.jsx" 
import IVCurveAnalysisEmp from "./IVCurveAnalysis.jsx"
import FactoryInspectionReportEmp from "./FactoryInspectionReport.jsx"
import PreDispatchInspectionEmp from "./PreDispatchInspection.jsx"





import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
 faUser,
faFileAlt,
faUniversity,
faBriefcase,
faMale,
} from "@fortawesome/free-solid-svg-icons";



class DashboardHR extends Component {
  state = {
    redirect: true,
    checked: true 
  };
  handleChange=(checked)=> {
    console.log("switch");
    // var sidebarV = this.refs.sidebar;
    // var sidebarV = React.findDOMNode( this.refs.sidebar);
    // sidebarV.style.disply="none";
    
    if(this.state.checked==true){ 
       // document.getElementById("sidebar").setAttribute("style", "display:none")
      document.getElementById("sidebar").setAttribute("class", "display-none");
    }
    // document.getElementById("sidebar").setAttribute("style", "display:block");
    else{document.getElementById("sidebar").setAttribute("class", "display-block");}   
    this.setState({ checked });
  }

  render() {
    
    return (
      <Router>
        {/* <Redirect to='/login'  /> */}

        <div id="outer-main-div">
          <div id="outer-nav">
            {/* <NavBar loginInfo={this.props.data} /> */}
            <NavBar
              loginInfo={this.props.data}
              checked={this.state.checked}
              handleChange={this.handleChange}
              onLogout={this.props.onLogout}
            />
          </div>

          <div id="main-non-nav">
            <div id="sidebar">
              <div id="sidebar-top-content" />
              <div id="main-title" className="main-title-employee">
                <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
                Employee
              </div>
              <ul className="navbar-ul">
                <li>
                  <Link
                    to={
                      "/employee/" +
                      this.props.data["_id"] +
                      "/personal-info"
                    }
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      className="sidebar-icon"
                    />
                    Personal Information
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      "/employee/" + this.props.data["_id"] + "/education"
                    }
                  >
                    <FontAwesomeIcon
                      icon={faUniversity}
                      className="sidebar-icon"
                    />
                    Education
                  </Link>
                </li>
                <li>
                  <Link to={
                      "/employee/" + this.props.data["_id"] + "/family-info"
                    }>
                    <FontAwesomeIcon
                      icon={faMale}
                      className="sidebar-icon"
                    />
                    Dependents
                  </Link>
                </li>
                <li>
                  <Link to={
                      "/employee/" + this.props.data["_id"] + "/work-experience"
                    }>
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="sidebar-icon"
                    />
                    WorkExp
                  </Link>
                </li>
                <li>
                  <Link to={
                      "/employee/" + this.props.data["_id"] + "/leave-application-emp"
                    }>
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      className="sidebar-icon"
                    />
                    Leave Application
                  </Link>
                </li>
                <li>
                  <Link to={
                      "/employee/" + this.props.data["_id"] + "/tour-detail"
                    }>
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      className="sidebar-icon"
                    />
                    Tour Detail
                  </Link>
                </li>
                <li>
                  <Link to={
                      "/employee/" + this.props.data["_id"] + "/add-expense"
                    }>
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      className="sidebar-icon"
                    />
                    Add/view Expense
                  </Link>
                </li>
                <li>
                  <Link to={
                      "/employee/" + this.props.data["_id"] + "/JB-Change-VoC"
                    }>
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      className="sidebar-icon"
                    />
                    JB Change VoC
                  </Link>
                </li>
                
                <li>
                  <Link to={
                      "/employee/" + this.props.data["_id"] + "/visual-inspection-report"
                    }>
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      className="sidebar-icon"
                    />
                    Visual Inspection
                  </Link>
                </li>

                <li>
                  <Link to={
                      "/employee/" + this.props.data["_id"] + "/el-inspection-report"
                    }>
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      className="sidebar-icon"
                    />
                    EL Inspection
                  </Link>
                </li>
                <li>
                  <Link to={
                      "/employee/" + this.props.data["_id"] + "/IR-Test"
                    }>
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      className="sidebar-icon"
                    />
                    IR Test
                  </Link>
                </li>
                
                <li>
                  <Link to={
                      "/employee/" + this.props.data["_id"] + "/manual-thermography-report"
                    }>
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      className="sidebar-icon"
                    />
                    Manual Thermography
                  </Link>
                </li>
                <li>
                  <Link to={
                      "/employee/" + this.props.data["_id"] + "/drone-thermography-inspection-report"
                    }>
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      className="sidebar-icon"
                    />
                    Drone Thermography 
                  </Link>
                </li>
                <li>
                  <Link to={
                      "/employee/" + this.props.data["_id"] + "/iv-curve-analysis"
                    }>
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      className="sidebar-icon"
                    />
                    IV-Curve Analysis
                  </Link>
                </li>
                <li>
                  <Link to={
                      "/employee/" + this.props.data["_id"] + "/factory-inspection"
                    }>
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      className="sidebar-icon"
                    />
                    Factory Inspection 
                  </Link>
                </li>
                <li>
                  <Link to={
                      "/employee/" + this.props.data["_id"] + "/pre-dispatch-inspection"
                    }>
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      className="sidebar-icon"
                    />
                    PreDispatch Inspection 
                  </Link>
                </li>
                <li>
                <Link to={
                      "/employee/" + this.props.data["_id"] + "/attendance"
                    }>
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      className="sidebar-icon"
                    />
                    Attendance Login
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div id="sidebar-top-content" /> */}
            <div id="main-area">
              <div id="sidebar-top-content" />
              {/* //table */}
              {/* <RoleHR/> */}
              <Switch>
                {/* <Route
                  path="/employee/:id/personal-info"
                  exact
                  component={PersonalInfoF}
                /> */}
                <Route
                  exact
                  path="/employee/:id/personal-info"
                  render={props => <PersonalInfo data={this.props.data} back={false}/>}
                />
                
                <Route
                  exact
                  path="/employee/:id/education"
                  render={props => <Education data={this.props.data} back={false}/>}
                />
                <Route
                  exact
                  path="/employee/:id/family-info"
                  render={props => <FamilyInfo data={this.props.data} back={false}/>}
                />
                <Route
                  exact
                  path="/employee/:id/work-experience"
                  render={props => <WorkExperience data={this.props.data} back={false}/>}
                />
                <Route
                  exact
                  path="/employee/:id/leave-application-emp"
                  render={props => <LeaveApplicationEmp data={this.props.data} />}
                />
                <Route
                  exact
                  path="/employee/:id/tour-detail"
                  render={props => <TourDetail data={this.props.data} />}
              
                />
                <Route
                  exact
                  path="/employee/:id/add-expense"
                  render={props => <AddExpense data={this.props.data} />}
              
                />
                <Route
                  exact
                  path="/employee/:id/JB-Change-VoC"
                  render={props => <JBChangeVocEmp data={this.props.data} />}
              
                />
                <Route
                  exact
                  path="/employee/:id/IR-Test"
                  render={props => < IrTestEmp data={this.props.data}/>}
              
                />
                <Route
                  exact
                  path="/employee/:id/visual-inspection-report"
                  render={props => < VisualInspectionReportEmp data={this.props.data}/>}
              
                />
                
                <Route
                  exact
                  path="/employee/:id/el-inspection-report"
                  render={props => < ElInspectionReportEmp data={this.props.data}/>}
              
                />
                <Route
                  exact
                  path="/employee/:id/manual-thermography-report"
                  render={props => < ManualThermographyReportEmp data={this.props.data}/>}
              
                />
                <Route
                  exact
                  path="/employee/:id/drone-thermography-inspection-report"
                  render={props => < DroneThermographyInspectionReportEmp data={this.props.data}/>}
              
                />
                <Route
                  exact
                  path="/employee/:id/iv-curve-analysis"
                  render={props => < IVCurveAnalysisEmp data={this.props.data}/>}
              
                />
                <Route
                  exact
                  path="/employee/:id/factory-inspection"
                  render={props => < FactoryInspectionReportEmp data={this.props.data}/>}
              
                />
                <Route
                  exact
                  path="/employee/:id/pre-dispatch-inspection"
                  render={props => < PreDispatchInspectionEmp data={this.props.data}/>}
              
                />
                <Route
                  exact
                  path="/employee/:id/attendance"
                  render={props => <Attendance data={this.props.data} />}
                />
                
               
                {/* <Route
                  exact
                  path="/employee"
                  render={() => (
                    <Redirect
                      to={
                        "/employee/" +
                        this.props.data["_id"] +
                        "/personal-info"
                      }
                    />
                  )}
                /> */}
                <Route
                  render={
                    () => <NotFound404/>
                    // <Redirect to={"/employee/"+ this.props.data["_id"]+"/personal-info"} />
                  }
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default DashboardHR;
