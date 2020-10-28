import React, { Component } from "react";
import "./LeaveApplicationEmpTable.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faEdit, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { RingLoader } from "react-spinners";
import { css } from "@emotion/core";
import { Button } from "react-bootstrap";
import { AgGridReact } from "ag-grid-react";
import { saveAs } from 'file-saver';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, 
  MDBTableBody,MDBTable,MDBCol, MDBRow, MDBCard,MDBTableHead } from 'mdbreact';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import JsrLogo from "../../img/JSRLogo.png";
import Piechart from "../../img/piechart.png";
import { param } from "react-dom-factories";




const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 45px;
  border-color: red;
`;

class LeaveApplicationEmpTable extends Component {
  state = {
    leaveApplicationEmpData: [],
    loading: true,
    modal16: false,
    irReportData:{},
    // 

    columnDefs: [

        {
            headerName: "Date",
            field: "Date",
            sortable: true,
            type: ["dateColumn"],
            filter: "agDateColumnFilter",
            // width: 150,
            // filter: true ,
          },
          {
            headerName: "OA Number",
            field: "OANumber",
            sortable: true,
            // width: 150,
            // filter: true ,
          },
      
      {
        headerName: "State",
        field: "State",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "CustomerName",
        field: "CustomerName",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "SiteName",
        field: "SiteName",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "ReportedBy",
        field: "ReportedBy",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "SiteOwnerClient",
        field: "SiteOwnerClient",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "Commissioning",
        field: "Commissioning",
        sortable: true,
        type: ["dateColumn"],
        // width: 150,
        // filter: true ,
      },
      
      {
        headerName: "MWCapacityAC",
        field: "MWCapacityAC",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "MWCapacityDC",
        field: "MWCapacityDC",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "ModuleMake1",
        field: "ModuleMake1",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "ModuleMake2",
        field: "ModuleMake2",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "InstalledCapacityMW1",
        field: "InstalledCapacityMW1",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "InstalledCapacityMW2",
        field: "InstalledCapacityMW2",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "GroundMounted",
        field: "GroundMounted",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "InstallationAngle",
        field: "InstallationAngle",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "Orientation",
        field: "Orientation",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "ModulesIn1Column",
        field: "ModulesIn1Column",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "ModulesIn1String",
        field: "ModulesIn1String",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "Tracker",
        field: "Tracker",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "Total Panel checked",
        field: "AcceptanceValue",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "Class A",
        field: "NoOfOk",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "Class B",
        field: "NoOfNotOk",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "Class C",
        field: "NoOfRepairable",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "Class D",
        field: "NoOfNonRepairable",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "Observation1",
        field: "Observation1",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "Observation2",
        field: "Observation2",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "Observation3",
        field: "Observation3",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "Observation4",
        field: "Observation4",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "InspectionDoneBy",
        field: "InspectionDoneBy",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "InspectionReviewedBy",
        field: "InspectionReviewedBy",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "CheckingTogether",
        field: "CheckingTogether",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "SiteRepresentative",
        field: "SiteRepresentative",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "ModuleSerialNo",
        field: "ModuleSerialNo",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "TableNo",
        field: "TableNo",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "LocationNoModule",
        field: "LocationNoModule",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "side",
        field: "side",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "SeverityDefects1",
        field: "SeverityDefects1",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "SeverityDefects2",
        field: "SeverityDefects2",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "SeverityDefects3",
        field: "SeverityDefects3",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "SeverityDefects4",
        field: "SeverityDefects4",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "SeverityDefects5",
        field: "SeverityDefects5",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "ImageSeverityScore",
        field: "ImageSeverityScore",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "ModuleClass",
        field: "ModuleClass",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "Generate Pdf",
        field: "download",
        cellRendererFramework: this.renderDownloadFile.bind(this)
        
        // sortable: true,
        // width: 150,
        // filter: true ,
      },
    
    {
        headerName: "",
        field: "edit",
        filter: false,
        width: 30,
        cellRendererFramework: this.renderEditButton.bind(this)
      },
      {
        headerName: "",
        field: "delete",
        filter: false,
        width: 30,
        cellRendererFramework: this.renderButton.bind(this)
      }
    ],
    rowData: [],

    defaultColDef: {
      resizable: true,
      width: 235,
      filter: "agTextColumnFilter"
      // filter: true ,
    },
    getRowHeight: function (params) {
      return 35;
    }

  };

  leaveApplicationEmpObj = [];
  rowDataT = [];
  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }


  loadLeaveApplicationEmpData = () => {
    axios
      .get(
        process.env.REACT_APP_API_URL+ "/api/el-inspection-report-emp/" +
        this.props.data["_id"], {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      }
      )
      .then(response => {
        this.leaveApplicationEmpObj = response.data;
        // console.log("response----->>>>>>>>>>>>>>>", response.data);
        this.setState({ leaveApplicationEmpData: response.data });
        this.setState({ loading: false });
        this.rowDataT = [];
        // let data=this.educationObj.education["0"];
        this.leaveApplicationEmpObj.elInspectionReport.map(data => {
          let temp = {
            data,
            Date: data["Date"].slice(0, 10),
            // TourNoGenerated:data["TourNoGenerated"],
            OANumber: data["OANumber"],
            State: data["State"],
            CustomerName: data["CustomerName"],
            SiteName: data["SiteName"],
            ReportedBy: data["ReportedBy"],
            SiteOwnerClient: data["SiteOwnerClient"],
            Commissioning: data["Commissioning"].slice(0, 10),
            MWCapacityAC: data["MWCapacityAC"],
            MWCapacityDC: data["MWCapacityDC"],
            ModuleMake1: data["ModuleMake1"],
            ModuleMake2: data["ModuleMake2"],
            InstalledCapacityMW1: data["InstalledCapacityMW1"],
            InstalledCapacityMW2: data["InstalledCapacityMW2"],
            GroundMounted: data["GroundMounted"],
            InstallationAngle: data["InstallationAngle"],
            Orientation: data["Orientation"],
            ModulesIn1Column: data["ModulesIn1Column"],
            ModulesIn1String: data["ModulesIn1String"],
            Tracker: data["Tracker"],
            // inspection result
            AcceptanceValue:data["AcceptanceValue"],
            NoOfOk:data["NoOfOk"],
            NoOfNotOk:data["NoOfNotOk"],
            NoOfRepairable:data["NoOfRepairable"],
            NoOfNonRepairable:data["NoOfNonRepairable"],
            // observation form 
            Observation1:data["Observation1"],
            Observation2:data["Observation2"],
            Observation3:data["Observation3"],
            Observation4:data["Observation4"],
            InspectionDoneBy:data["InspectionDoneBy"],
            InspectionReviewedBy:data["InspectionReviewedBy"],
            CheckingTogether:data["CheckingTogether"],
            SiteRepresentative:data["SiteRepresentative"],
            ModuleSerialNo:data["ModuleSerialNo"],
            TableNo: data["TableNo"],
            LocationNoModule:data["LocationNoModule"],
            side:data["side"],
          // Module SeverityMatrix
            SeverityDefects1:data["SeverityDefects1"],
            SeverityDefects2:data["SeverityDefects2"],
            SeverityDefects3:data["SeverityDefects3"],
            SeverityDefects4:data["SeverityDefects4"],
            SeverityDefects5:data["SeverityDefects5"],
            ImageSeverityScore:data["ImageSeverityScore"],
            ModuleClass:data["ModuleClass"],

            

            // ToDate: data["ToDate"].slice(0, 10),
            // Reasonforleave: data["Reasonforleave"],
            // Status: this.status(data["Status"]),

          };

          this.rowDataT.push(temp);
        });
        this.setState({ rowData: this.rowDataT });
      })
      .catch(error => {
        console.log(error);
      });
  };
  getSingleirReportData = (data) =>{
    console.log(")))))))))))))))))))))))))))))",data)
    // this.setState({irReportData:data.data})
    if(typeof data.data != 'undefined'){
      console.log("not undefined")
      if(Object.keys(data.data).length != 0){
        console.log("kuchh to nya he",data)
        this.setState({irReportData:data.data})
      }
    }
    
  }
  onLeaveApplicationEmpDelete = (e1, e2) => {
    console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",e1, e2);
    if (window.confirm("Are you sure to delete this record? ") == true) {
      axios
        .delete(
          process.env.REACT_APP_API_URL+ "/api/el-inspection-report-emp/" + e1 + "/" + e2, {
          headers: {
            authorization: localStorage.getItem("token") || ""
          }
        }
        )
        .then(res => {
          this.componentDidMount();
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  // onLeaveApplicationEmpDelete = (e1, e2) => {
  //   console.log(e1, e2);
  //   if (window.confirm("Are you sure to delete this record? ") == true) {
  //     axios
  //       .delete(
  //         process.env.REACT_APP_API_URL+ "/api/ir-test-emp/" + e1 + "/" + e2, {
  //         headers: {
  //           authorization: localStorage.getItem("token") || ""
  //         }
  //       }
  //       )
  //       .then(res => {
  //         this.componentDidMount();
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }
  // };



  componentDidMount() {
    this.loadLeaveApplicationEmpData();
  }

  renderButton(params) {
    // console.log(params);
    return (
      <FontAwesomeIcon
        icon={faTrash}
        onClick={() =>
          this.onLeaveApplicationEmpDelete(this.props.data["_id"], params.data.data["_id"])
        }
      />
    );
  }
  renderEditButton(params) {
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",params);
    return (
      <FontAwesomeIcon
        icon={faEdit}
        onClick={() => this.onEdit(params.data.data)}
      />
    );
}
renderDownloadFile(params) {

  console.log(">>>>>>>>>>>>>>>>.1111",params);
  this.getSingleirReportData(params)
  
  return (
    <FontAwesomeIcon
      icon={faFileAlt}
      onClick={this.toggle(16)} />
  );
}

  status = s => {
    if (s == 1) {
      return "Pending";
    }
    if (s == 2) {
      return "Approved";
    }
    if (s == 3) {
      return "Rejected";
    }
  };
  onEdit = data => {
    if (data["Status"] != 1) {
      this.props.onEditLeaveApplicationEmp(data);
    } else {
      window.alert(
        "You can not edit application after it approved or rejected"
      );
    }
  };
  // onCreateAndDownloadPdf = () =>{
  //   axios.post('/create-pdf', this.state)
  // }

  render() {
    // console.log(this.state.irReportData)
    return (
      <div id="table-outer-div-scroll">
        <h2 id="role-title">EL Inspection Report</h2>

        <Button
          variant="primary"
          id="add-button"
          onClick={this.props.onAddLeaveApplicationEmp}
        >
          <FontAwesomeIcon icon={faPlus} id="plus-icon" />
          Add
        </Button>
        <MDBContainer>
        {/* <MDBBtn onClick={this.toggle(16)}>MDBModal</MDBBtn> */}
        
        <div>
        <MDBModal isOpen={this.state.modal16} toggle={this.toggle(16)} size="lg">
          <MDBModalHeader toggle={this.toggle(16)}></MDBModalHeader>
          <MDBModalBody>
        {
        Object.keys(this.state.irReportData).length != 0 ? 
        <MDBContainer fluid className="text-white">
              <MDBRow>
                <MDBCol md="4" style={{border:"1px solid black"}}>
                <img src={JsrLogo} alt="" style={{width:"75%"}}/>
                  </MDBCol>
                  <MDBCol md="4" style={{border:"1px solid black",display:"flex",alignItems:"center"}} >
                  <h3 style={{fontSize:"20px", fontWeight:"600",color:"#212529"}}>EL Inspection Report</h3>
                  </MDBCol>
                <MDBCol md="4" style={{border:"1px solid black"}} >
                  <div style={{color:"black"}}>
                    <p style={{marginBottom:"5px"}}>Report Date: 13/10/2020</p>
                    <p>Report No: XXXXXXX88</p>
                  </div>
                </MDBCol>
              </MDBRow>
              <br />
          <MDBRow>
          <h3 style={{fontSize:"18px", fontWeight:"600",color:"black"}}>Report Details-</h3>
          </MDBRow>
          <MDBRow>
            <MDBTable bordered responsive>
      
              <MDBTableBody>
                
              <tr>
                <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>OA Number</p></td>
                <td><p style={{fontWeight:"600"}}>{this.state.irReportData.OANumber}</p></td>
                <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>Date</p></td>
                <td><p style={{fontWeight:"600"}}>{this.state.irReportData.Date}</p></td>
              </tr>
                <tr>
                  <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}} ><p style={{fontWeight:"600",}}>State</p></td>
                  <td><p style={{fontWeight:"600"}}>{this.state.irReportData.State}</p></td>
                  <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}} ><p style={{fontWeight:"600",}}>Report created by</p></td>
                  <td><p style={{fontWeight:"600"}}>{this.state.irReportData.ReportedBy}</p></td>
                </tr>
                <tr>
                  <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}} ><p style={{fontWeight:"600",}}>Site Name</p></td>
                  <td><p style={{fontWeight:"600"}}>{this.state.irReportData.SiteName}</p></td>
                  <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}} ><p style={{fontWeight:"600"}}>JSR’s Customer</p></td>
                  <td><p style={{fontWeight:"600"}}>{this.state.irReportData.CustomerName}</p></td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBRow>


            <MDBRow>
              <h3 style={{fontSize:"18px", fontWeight:"600",color:"black"}}>Basic Site Details-1 </h3>
            </MDBRow>
            <MDBRow>  
            <MDBTable bordered responsive>
            
              <MDBTableBody>
                
              <tr>
                <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}} ><p style={{fontWeight:"600",}}>Site Owner Client</p></td>
                <td><p>{this.state.irReportData.SiteOwnerClient}</p></td>
                <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}} ><p style={{fontWeight:"600",}}>Commissioning MM/YY</p></td>
                <td><p>{this.state.irReportData.Commissioning}</p></td>
              </tr>
                <tr>
                  <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>MW Capacity AC</p></td>
                  <td><p>{this.state.irReportData.MWCapacityAC}</p></td>
                  <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>MW Capacity DC</p></td>
                  <td><p>{this.state.irReportData.MWCapacityDC}</p></td>
                </tr>
              </MDBTableBody>
            </MDBTable>
            </MDBRow>

            <MDBRow>
            <h3 style={{fontSize:"18px", fontWeight:"600",color:"black"}}>Basic Site Details-2 </h3>
            </MDBRow>
            <MDBRow>
              <MDBTable bordered responsive>
              
              <MDBTableBody>
                
              <tr>
                <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>Module Make</p></td>
                <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>Installed capacity MW</p></td>
                <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>Ground mounted/roof/terrace</p></td>
                <td><p>{this.state.irReportData.GroundMounted}</p></td>

              </tr>
                <tr>
                  <td><p>{this.state.irReportData.ModuleMake1}</p></td>
                  <td><p>{this.state.irReportData.InstalledCapacityMW1}</p></td>
                  <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>Installation angle</p></td>
                  <td><p>{this.state.irReportData.InstallationAngle}</p></td>
                </tr>
                <tr>
                  <td><p>{this.state.irReportData.ModuleMake2}</p></td>
                  <td><p>{this.state.irReportData.InstalledCapacityMW2}</p></td>
                  <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>Orientation</p></td>
                  <td><p>{this.state.irReportData.Orientation}</p></td>
                </tr>
                <tr>
                  <td><p ></p></td>
                  <td><p></p></td>
                  <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>Modules in 1 column</p></td>
                  <td><p>{this.state.irReportData.ModulesIn1Column}</p></td>
                </tr>
                <tr>
                  <td><p ></p></td>
                  <td><p></p></td>
                  <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>Modules in 1 string</p></td>
                  <td><p>{this.state.irReportData.ModulesIn1String}</p></td>
                </tr>
                <tr>
                  <td><p ></p></td>
                  <td><p></p></td>
                  <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>Tracker/seasonal tilt</p></td>
                  <td><p>{this.state.irReportData.Tracker}</p></td>
                </tr>
              </MDBTableBody>
            </MDBTable>
            </MDBRow>
              <MDBRow>
                  <h3 style={{fontSize:"18px", fontWeight:"600",color:"black"}}>Inspection Results -</h3>
              </MDBRow>

            <MDBRow>
            
              <MDBCol size="6" style={{border:"1px solid black",padding:"0",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <img src={Piechart} alt="" style={{width:"50%"}}/>
            
              </MDBCol>
              <MDBCol size="6" style={{padding:"0"}}>
                <MDBTable bordered responsive>
      
                  <MDBTableBody>
        
                    <tr>
                        <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>Total Pannel checked</p></td>
                        <td><p>{this.state.irReportData.AcceptanceValue}</p></td>
                      </tr>
                    <tr>
                      <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>Class A</p></td>
                    <td><p>{this.state.irReportData.NoOfRepairable}</p></td>
         
                      </tr>
                      <tr>
                        <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>Class B</p></td>
                        <td><p>{this.state.irReportData.NoOfOk}</p></td>
                      </tr>
                      <tr>
                        <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>Class C</p></td>
                                    <td><p>{this.state.irReportData.NoOfNonRepairable}</p></td>
                      </tr>
                      <tr>
                      <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>Class D</p></td>
                        <td><p>{this.state.irReportData.NoOfNotOk}</p></td>
                      </tr>
                      <tr>
                      <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>Class E</p></td>
                        <td><p></p></td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>
              </MDBCol>
            
          </MDBRow>
          <MDBRow>
            <br></br>
              <h3 style={{fontSize:"18px", fontWeight:"600",color:"black"}}> Observations- </h3>
          </MDBRow>
          <MDBRow>
            <MDBTable bordered responsive>
              <MDBTableBody>
              <tr>
                <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600", color:"black"}}>Sr No</p></td>
                <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600", color:"black"}}>Observations / Deficiency details</p></td>
              </tr>
                <tr>
                  <td><p>1</p></td>
                  <td><p>{this.state.irReportData.Observation1}</p></td>
                </tr>
                <tr>
                  <td><p>2</p></td>
                  <td><p>{this.state.irReportData.Observation2}</p></td>
                </tr>
                <tr>
                  <td><p>3</p></td>
                  <td><p>{this.state.irReportData.Observation3}</p></td>
                </tr>
                <tr>
                  <td><p>4</p></td>
                  <td><p>{this.state.irReportData.Observation4}</p></td>
                </tr>
                </MDBTableBody>
            </MDBTable>
            
          </MDBRow>
          {/* <MDBRow>
            <MDBTable bordered responsive>
      
              <MDBTableBody>
              <tr>
                <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>ModuleSerialNo</p></td>
                <td><p>{this.state.irReportData.ModuleSerialNo}</p></td>
                <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>TableNo</p></td>
                <td><p>{this.state.irReportData.TableNo}</p></td>
              </tr>
                <tr>
                  <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>LocationNoModule</p></td>
                  <td><p>{this.state.irReportData.LocationNoModule}</p></td>
                  <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>side</p></td>
                  <td><p>{this.state.irReportData.side}</p></td>
                </tr>
                <tr>
                <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>SeverityDefects1</p></td>
                <td><p>{this.state.irReportData.SeverityDefects1}</p></td>
                <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>SeverityDefects3</p></td>
                <td><p>{this.state.irReportData.SeverityDefects3}</p></td>
                <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>SeverityDefects5</p></td>
                <td><p>{this.state.irReportData.SeverityDefects5}</p></td>
                <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>ModuleClass</p></td>
                <td><p>{this.state.irReportData.ModuleClass}</p></td>
              </tr>
                <tr>
                  <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>SeverityDefects2</p></td>
                  <td><p>{this.state.irReportData.SeverityDefects2}</p></td>
                  <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>SeverityDefects4</p></td>
                  <td><p>{this.state.irReportData.SeverityDefects4}</p></td>
                  <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600",}}>ImageSeverityScore</p></td>
                <td><p>{this.state.irReportData.TableNo}</p></td>
                </tr>
                
              </MDBTableBody>
            </MDBTable>
          </MDBRow> */}
          <MDBRow>
            <MDBCol size="6" style={{border:"1px solid black",color:"black"}}>
                <p style={{marginBottom:"2px"}}>ModuleSerialNo:-  {this.state.irReportData.ModuleSerialNo}</p>
                <p style={{marginBottom:"2px"}}>TableNo:- {this.state.irReportData.TableNo}</p>
                <p style={{marginBottom:"2px"}}>Location no of module from positive side:- {this.state.irReportData.LocationNoModule}</p>

                <MDBTable bordered responsive>
                  <MDBTableBody>
                    <tr>
                      <td>Severity</td>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>No of defects</td>
                      <td>{this.state.irReportData.SeverityDefects1}</td>
                      <td>{this.state.irReportData.SeverityDefects2}</td>
                      <td>{this.state.irReportData.SeverityDefects3}</td>
                      <td>{this.state.irReportData.SeverityDefects4}</td>
                      <td>{this.state.irReportData.SeverityDefects5}</td>
                    </tr>
                   
                  </MDBTableBody>
                </MDBTable>
                <MDBTable bordered responsive >
                  <MDBTableBody>
                  <tr>
                      <td>Image Severity Score</td>
                      <td>{this.state.irReportData.TableNo}</td>
                      <td>Module Class</td>
                      <td>{this.state.irReportData.ModuleClass}</td>

                    </tr>

                  </MDBTableBody>
                </MDBTable> 
              </MDBCol>
              <MDBCol size="6" style={{border:"1px solid black",color:"black"}}>
                <p style={{marginBottom:"2px"}}>ModuleSerialNo:-  {this.state.irReportData.ModuleSerialNo}</p>
                <p style={{marginBottom:"2px"}}>TableNo:- {this.state.irReportData.TableNo}</p>
                <p style={{marginBottom:"2px"}}>Location no of module from positive side:- {this.state.irReportData.LocationNoModule}</p>

                <MDBTable bordered responsive>
                  <MDBTableBody>
                    <tr>
                      <td>Severity</td>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>No of defects</td>
                      <td>{this.state.irReportData.SeverityDefects1}</td>
                      <td>{this.state.irReportData.SeverityDefects2}</td>
                      <td>{this.state.irReportData.SeverityDefects3}</td>
                      <td>{this.state.irReportData.SeverityDefects4}</td>
                      <td>{this.state.irReportData.SeverityDefects5}</td>
                    </tr>
                   
                  </MDBTableBody>
                </MDBTable>
                <MDBTable bordered responsive >
                  <MDBTableBody>
                  <tr>
                      <td>Image Severity Score</td>
                      <td>{this.state.irReportData.TableNo}</td>
                      <td>Module Class</td>
                      <td>{this.state.irReportData.ModuleClass}</td>

                    </tr>

                  </MDBTableBody>
                </MDBTable> 
              </MDBCol>
          </MDBRow>
          <br></br>
          <MDBRow>  
            <MDBTable bordered responsive>
            
              <MDBTableBody>
              <tr>
                <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600", color:"black"}}>Inspection done by</p></td>
                <td><p>{this.state.irReportData.InspectionDoneBy}</p></td>
              </tr>
              <tr>
                <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600", color:"black"}}>Inspection results reviewed by</p></td>
                <td><p>{this.state.irReportData.InspectionReviewedBy}</p></td>
              </tr>
              <tr>
                <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600", color:"black"}}>Checking together with (customer/site representative)</p></td>
                <td><p>{this.state.irReportData.CheckingTogether}</p></td>
              </tr>
              <tr>
                <td style={{backgroundColor:"rgb(188 185 202 / 91%)"}}><p style={{fontWeight:"600", color:"black"}}>Site SiteRepresentative</p></td>
                <td><p>{this.state.irReportData.SiteRepresentative}</p></td>
              </tr>

              
              </MDBTableBody>
            </MDBTable>
            </MDBRow>

          <MDBRow>  
            <MDBTable bordered responsive>
            
              <MDBTableBody>
                
              <tr>
                <td><p >Format No: JSR/SI</p></td>
                <td><p>Compiled By: Sanket Thakkar</p></td>
                
              </tr>
                <tr>
                  <td><p >Rev Date and No: 00</p></td>
                  <td><p>Compiled date: 21st Jan, 2020</p></td>
                </tr>
              </MDBTableBody>
            </MDBTable>
            </MDBRow>
          {/*  */}
              
              
            </MDBContainer>
            :<h1>Loader</h1>
            }
          </MDBModalBody>
         
        </MDBModal>
      
    </div>
      </MDBContainer>

        <div id="clear-both" />


        {!this.state.loading ? (
          <div
            id="table-div"
            className="ag-theme-balham"
          //   style={
          //     {
          //     height: "500px",
          //     width: "100%"
          //   }
          // }
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              defaultColDef={this.state.defaultColDef}
              columnTypes={this.state.columnTypes}
              rowData={this.state.rowData}
              // floatingFilter={true}
              onGridReady={this.onGridReady}
              pagination={true}
              paginationPageSize={10}
              getRowHeight={this.state.getRowHeight}
            />
          </div>
        ) : (
            <div id="loading-bar">
              <RingLoader
                css={override}
                sizeUnit={"px"}
                size={50}
                color={"#0000ff"}
                loading={true}
              />
            </div>
          )}



      </div>
    );
  }
}

export default LeaveApplicationEmpTable;