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
    
    //   {
    //     headerName: "TourNumber",
    //     field: "TourNoGenerated",
    //     sortable: true,
    //     // width: 150,
    //     // filter: true ,
    //   },
      
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
        headerName: "AcceptanceValue",
        field: "AcceptanceValue",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "NoOfOk",
        field: "NoOfOk",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "NoOfNotOk",
        field: "NoOfNotOk",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "NoOfRepairable",
        field: "NoOfRepairable",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "NoOfNonRepairable",
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
      
      
      
    //   {
    //     headerName: "Voc File Attachement",
    //     field: "file",
    //     cellRendererFramework: this.renderDownloadFile.bind(this)
    //     // sortable: true,
    //     // width: 150,
    //     // filter: true ,
    //   },
      {
        headerName: "Generate Pdf",
        field: "download",
        cellRendererFramework: this.renderDownloadFile.bind(this)
        
        // sortable: true,
        // width: 150,
        // filter: true ,
      },
      // {
      //   headerName: "Status",
      //   field: "Status",
      //   sortable: true,
      //   // width: 150,
      //   // filter: true ,
      // },


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
        process.env.REACT_APP_API_URL+ "/api/ir-test-emp/" +
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
        this.leaveApplicationEmpObj.irTest.map(data => {
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
            Commissioning: data["Commissioning"],
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
        console.log("not undefined",data.data)
        this.setState({irReportData:data.data})
      }
    }
    
  }
  onLeaveApplicationEmpDelete = (e1, e2) => {
    console.log(e1, e2);
    if (window.confirm("Are you sure to delete this record? ") == true) {
      axios
        .delete(
          process.env.REACT_APP_API_URL+ "/api/ir-test-emp/" + e1 + "/" + e2, {
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

  console.log("",params);
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
        <h2 id="role-title">IR Test Reports</h2>

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
                <MDBCol md="4" >
                <img src={JsrLogo} alt="" style={{width:"75%"}}/>
                  </MDBCol>
                  <MDBCol md="4" >
                  <h3 style={{fontSize:"25px", fontWeight:"600",color:"#212529"}}>IR Test Report</h3>
                  </MDBCol>
                <MDBCol md="4" >
                  <div style={{color:"black"}}>
                    <p style={{marginBottom:"5px"}}>Report Date: 13/10/2020</p>
                    <p>Report No: XXXXXXX88</p>
                  </div>
                </MDBCol>
              </MDBRow>
              <br />
          <MDBRow>
            <MDBTable responsive>
      
              <MDBTableBody>
                <h3 style={{fontSize:"18px", fontWeight:"600"}}>Report Details-</h3>
              <tr>
                <td><p style={{fontWeight:"600", color:"brown"}}>OA Number</p></td>
                <td><p>{this.state.irReportData.OANumber}</p></td>
                <td><p style={{fontWeight:"600", color:"brown"}}>Date</p></td>
                <td><p>{this.state.irReportData.Date}</p></td>
              </tr>
                <tr>
                  <td><p style={{fontWeight:"600", color:"brown"}}>State</p></td>
                  <td><p>{this.state.irReportData.State}</p></td>
                  <td><p style={{fontWeight:"600", color:"brown"}}>Report created by</p></td>
                  <td><p>{this.state.irReportData.ReportedBy}</p></td>
                </tr>
                <tr>
                  <td><p style={{fontWeight:"600", color:"brown"}}>Site Name</p></td>
                  <td><p>{this.state.irReportData.SiteName}</p></td>
                  <td><p style={{fontWeight:"600", color:"brown"}}>JSR’s Customer</p></td>
                  <td><p>{this.state.irReportData.CustomerName}</p></td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBRow>


            <MDBRow>
            <MDBTable responsive>
            <h3 style={{fontSize:"18px", fontWeight:"600"}}>Basic Site Details-1 </h3>
              <MDBTableBody>
                
              <tr>
                <td><p style={{fontWeight:"600", color:"brown"}}>Site Owner Client</p></td>
                <td><p>{this.state.irReportData.SiteOwnerClient}</p></td>
                <td><p style={{fontWeight:"600", color:"brown"}}>Commissioning MM/YY</p></td>
                <td><p>{this.state.irReportData.Commissioning}</p></td>
              </tr>
                <tr>
                  <td><p style={{fontWeight:"600", color:"brown"}}>MW Capacity AC</p></td>
                  <td><p>{this.state.irReportData.MWCapacityAC}</p></td>
                  <td><p style={{fontWeight:"600", color:"brown"}}>MW Capacity DC</p></td>
                  <td><p>{this.state.irReportData.MWCapacityDC}</p></td>
                </tr>
              </MDBTableBody>
            </MDBTable>
            </MDBRow>
            <MDBRow>
            <MDBTable responsive>
              <h3 style={{fontSize:"18px", fontWeight:"600"}}>Basic Site Details-2 </h3>
              <MDBTableBody>
                
              <tr>
                <td><p style={{fontWeight:"600", color:"brown",backgroundColor:"grey"}}>Module Make</p></td>
                <td><p style={{fontWeight:"600", color:"brown"}}>Installed capacity MW</p></td>
                <td><p style={{fontWeight:"600", color:"brown"}}>Ground mounted/roof/terrace</p></td>
                <td>Ground</td>

              </tr>
                <tr>
                  <td><p>{this.state.irReportData.ModuleMake1}</p></td>
                  <td><p>{this.state.irReportData.InstalledCapacityMW1}</p></td>
                  <td><p style={{fontWeight:"600", color:"brown"}}>Installation angle</p></td>
                  <td><p>{this.state.irReportData.InstallationAngle}</p></td>
                </tr>
                <tr>
                  <td><p>{this.state.irReportData.ModuleMake2}</p></td>
                  <td><p>{this.state.irReportData.InstalledCapacityMW2}</p></td>
                  <td><p style={{fontWeight:"600", color:"brown"}}>Orientation</p></td>
                  <td><p>{this.state.irReportData.Orientation}</p></td>
                </tr>
                <tr>
                  <td><p >...</p></td>
                  <td><p>...</p></td>
                  <td><p style={{fontWeight:"600", color:"brown"}}>Modules in 1 column</p></td>
                  <td><p>{this.state.irReportData.ModulesIn1Column}</p></td>
                </tr>
                <tr>
                  <td><p >...</p></td>
                  <td><p>...</p></td>
                  <td><p style={{fontWeight:"600", color:"brown"}}>Modules in 1 string</p></td>
                  <td><td><p>{this.state.irReportData.ModulesIn1String}</p></td></td>
                </tr>
                <tr>
                  <td><p >....</p></td>
                  <td><p>...</p></td>
                  <td><p style={{fontWeight:"600", color:"brown"}}>Tracker/seasonal tilt</p></td>
                  <td><td><p>{this.state.irReportData.Tracker}</p></td></td>
                </tr>
              </MDBTableBody>
            </MDBTable>
            </MDBRow>
              <MDBRow>
               
              </MDBRow>

            <MDBRow>
            <MDBTable responsive>
      
              <MDBTableBody>
                <h3 style={{fontSize:"18px", fontWeight:"600"}}>Inspection Results -</h3>
              <tr>
                <td><p style={{fontWeight:"600", color:"brown"}}>Acceptance value in Mega Ohm</p></td>
                <td><p>{this.state.irReportData.AcceptanceValue}</p></td>
                <td><p style={{fontWeight:"600", color:"brown"}}>No. of Repairable</p></td>
                <td><p>{this.state.irReportData.NoOfRepairable}</p></td>
              </tr>
                <tr>
                  <td><p style={{fontWeight:"600", color:"brown"}}>No of OK</p></td>
                  <td><p>{this.state.irReportData.NoOfOk}</p></td>
                  <td><p style={{fontWeight:"600", color:"brown"}}>No of Non Repairable</p></td>
                  <td><p>{this.state.irReportData.NoOfNonRepairable}</p></td>
                </tr>
                <tr>
                  <td><p style={{fontWeight:"600", color:"brown"}}>No of Not OK</p></td>
                  <td><p>{this.state.irReportData.NoOfNotOk}</p></td>
                  <td><p></p></td>
                  <td></td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBRow>
          <MDBRow>
            <MDBTable responsive>

            <h3 style={{fontSize:"18px", fontWeight:"600"}}> Observations- </h3>
              <MDBTableBody>
              <tr>
                <td><p style={{fontWeight:"600", color:"brown"}}>Sr No</p></td>
                <td><p style={{fontWeight:"600", color:"brown"}}>Observations / Deficiency details</p></td>
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
                <br></br>
                <tr>
                <td><p style={{fontWeight:"600", color:"brown"}}>Inspection done by</p></td>
                <td><p>{this.state.irReportData.InspectionDoneBy}</p></td>
              </tr>
              <tr>
                <td><p style={{fontWeight:"600", color:"brown"}}>Inspection results reviewed by</p></td>
                <td><p>{this.state.irReportData.InspectionReviewedBy}</p></td>
              </tr>
              <tr>
                <td><p style={{fontWeight:"600", color:"brown"}}>Checking together with (customer/site representative)</p></td>
                <td><p>{this.state.irReportData.CheckingTogether}</p></td>
              </tr>
              <tr>
                <td><p style={{fontWeight:"600", color:"brown"}}>Site SiteRepresentative</p></td>
                <td><p>{this.state.irReportData.SiteRepresentative}</p></td>
              </tr>

                </MDBTableBody>
            </MDBTable>
            
          </MDBRow>
          <MDBRow>
                <MDBCol md="6" >
                <div style={{color:"black",border:"1px solid black",padding:"10px 0 0 20px"}}>
                    <p style={{marginBottom:"5px"}}>Format No: JSR/SI</p>
                    <p>Rev Date and No: 00</p>
                  </div>
                
                </MDBCol>
                
                <MDBCol md="6" >
                  <div style={{color:"black",border:"1px solid black",padding:"10px 0 0 20px"}}>
                    <p style={{marginBottom:"5px"}}>Compiled By: Sanket Thakkar</p>
                    <p>Compiled date: 21st Jan, 2020</p>
                  </div>
                </MDBCol>
              </MDBRow>
              
              
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