import React, { Component } from "react";
// import "./LeaveApplicationEmpFormEdit.css";
// import { Form,Button } from "react-bootstrap";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";

class LeaveApplicationEmpForm extends Component {
  state = {
   
        DateData: this.props.editData["Date"].slice(0, 10),
        OANumberData:this.props.editData["OANumber"],
        StateData: this.props.editData["State"],
        CustomerNameData: this.props.editData["CustomerName"],
        SiteNameData: this.props.editData["SiteName"],
        ReportedByData: this.props.editData["ReportedBy"],
        SiteOwnerClientData:this.props.editData["SiteOwnerClient"],
        CommissioningData:this.props.editData["Commissioning"].slice(0, 10),
        MWCapacityACData:this.props.editData["MWCapacityAC"],
        MWCapacityDCData:this.props.editData["MWCapacityDC"],
        ModuleMake1Data:this.props.editData["ModuleMake1"],
        ModuleMake2Data:this.props.editData["ModuleMake2"],
        InstalledCapacityMW1Data:this.props.editData["InstalledCapacityMW1"],
        InstalledCapacityMW2Data:this.props.editData["InstalledCapacityMW2"],
        GroundMountedData:this.props.editData["GroundMounted"],
        InstallationAngleData:this.props.editData["InstallationAngle"],
        OrientationData:this.props.editData["Orientation"],
        ModulesIn1ColumnData:this.props.editData["ModulesIn1Column"],
        ModulesIn1StringData:this.props.editData["ModulesIn1String"],
        TrackerData:this.props.editData["Tracker"],
      // inspection result
        InspectionCompletedData:this.props.editData["InspectionCompleted"],
        InstrumentSerialNoData:this.props.editData["InstrumentSerialNo"],
        InspectionInstrumentData:this.props.editData["InspectionInstrument"],
         CalibrationvalidityData:this.props.editData[" Calibrationvalidity"],
        // NoOfNonRepairableData:this.props.editData["NoOfNonRepairable"],
      // observation form 
        Observation1Data:this.props.editData["Observation1"],
        Observation2Data:this.props.editData["Observation2"],
        Observation3Data:this.props.editData["Observation3"],
        Observation4Data:this.props.editData["Observation4"],
        InspectionDoneByData:this.props.editData["InspectionDoneBy"],
        InspectionReviewedByData:this.props.editData["InspectionReviewedBy"],
        CheckingTogetherData:this.props.editData["CheckingTogether"],
        SiteRepresentativeData:this.props.editData["SiteRepresentative"],
        // StatusData: this.props.editData["Status"],
        

    
  };

  // onStatusDataChange(e) {
  //   this.setState({StatusData: e.target.value });
  // }


  onDateDataChange(e) {
  this.setState({ DateData: e.target.value });
  }
  onOANumberDataChange(e) {
    this.setState({ OANumberData: e.target.value });
    }
  onStateDataChange(e) {
      this.setState({ StateData: e.target.value });
      }
  onCustomerNameDataChange(e) {
        this.setState({ CustomerNameData: e.target.value });
        }
  onSiteNameDataChange(e) {
        this.setState({ SiteNameData: e.target.value });
        }
  onReportedByDataChange(e) {
        this.setState({ ReportedByData: e.target.value });
        }
  onSiteOwnerClientDataChange(e) {
            this.setState({ SiteOwnerClientData: e.target.value });
        }
  onCommissioningDataChange(e) {
                this.setState({ CommissioningData: e.target.value });
        }
  onMWCapacityACDataChange(e) {
    this.setState({ MWCapacityACData: e.target.value });
}
  onMWCapacityDCDataChange(e) {
          this.setState({ MWCapacityDCData: e.target.value });
  }
  onModuleMake1DataChange(e) {
          this.setState({ ModuleMake1Data: e.target.value });
  }
  onModuleMake2DataChange(e) {
          this.setState({ ModuleMake2Data: e.target.value });
  }
  onInstalledCapacityMW1DataChange(e) {
          this.setState({ InstalledCapacityMW1Data: e.target.value });
  }
  onInstalledCapacityMW2DataChange(e) {
          this.setState({ InstalledCapacityMW2Data: e.target.value });
  }
  onGroundMountedDataChange(e) {
          this.setState({ GroundMountedData: e.target.value });
  }
  onInstallationAngleDataChange(e) {
          this.setState({ InstallationAngleData: e.target.value });
  }
  onOrientationDataChange(e) {
          this.setState({ OrientationData: e.target.value });
  }
  onModulesIn1ColumnDataChange(e) {
          this.setState({ ModulesIn1ColumnData: e.target.value });
  }
  onModulesIn1StringDataChange(e) {
          this.setState({ ModulesIn1StringData: e.target.value });
  }
  onTrackerDataChange(e) {
          this.setState({ TrackerData: e.target.value });
  }
      // inspection result
  onInspectionCompletedDataChange(e) {
          this.setState({ InspectionCompletedData: e.target.value });
  }
  onInstrumentSerialNoDataChange(e) {
          this.setState({ InstrumentSerialNoData: e.target.value });
  }
  onInspectionInstrumentDataChange(e) {
          this.setState({ InspectionInstrumentData: e.target.value });
  }
  onCalibrationvalidityDataChange(e) {
          this.setState({ CalibrationvalidityData: e.target.value });
  }
  onNoOfNonRepairableDataChange(e) {
          this.setState({ NoOfNonRepairableData: e.target.value });
  }
      // observation form 
  onObservation1DataChange(e) {
          this.setState({ Observation1Data: e.target.value });
  }
  onObservation2DataChange(e) {
          this.setState({ Observation2Data: e.target.value });
  }
  onObservation3DataChange(e) {
          this.setState({ Observation3Data: e.target.value });
  }
  onObservation4DataChange(e) {
          this.setState({ Observation4Data: e.target.value });
  }
  onInspectionDoneByDataChange(e) {
          this.setState({ InspectionDoneByData: e.target.value });
  }
  onInspectionReviewedByDataChange(e) {
          this.setState({ InspectionReviewedByData: e.target.value });
  }
  onCheckingTogetherDataChange(e) {
          this.setState({ CheckingTogetherData: e.target.value });
  }
  onSiteRepresentativeDataChange(e) {
          this.setState({ SiteRepresentativeData: e.target.value });
  }



  componentWillMount() {
  }

  render() {
    return (
      <div>
        <h2 id="role-form-title">IV Curve Analysis Detail</h2>

        <div id="role-form-outer-div">
          <Form
            id="form"
            onSubmit={e =>
              this.props.onLeaveApplicationEmpEditUpdate(this.props.editData, e)
            }
          >
           {/* <Form.Group as={Row} >
    <Form.Label column sm={2}>
    Leave Type
    </Form.Label>
    <Col sm={10} className="form-input">
    <Form.Control as="select"  required>
    <option value="" disabled selected>
                    Select your option
                  </option>
    <option value="Sick Leave"  selected={this.props.editData["Leavetype"] == "Sick Leave"}>Sick Leave</option>
    <option value="Casual Leave"  selected={this.props.editData["Leavetype"] == "Casual Leave"}>Casual Leave</option>
    <option value="Privilege Leave"  selected={this.props.editData["Leavetype"] == "Privilege Leave"}>Privilege Leave</option>
          </Form.Control>
    </Col>
    </Form.Group> */}

    <Form.Group as={Row}>
        <Form.Label column sm={2}>
               Date
        </Form.Label>
        <Col sm={10} className="form-input">
         <Form.Control
                  type="date"
                  required
                  value={this.state.DateData}
                  onChange={value => this.onDateDataChange(value)}
                />
              </Col>
    </Form.Group>

  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    OA Number 
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="OA Number" required
       value={this.state.OANumberData}
       onChange={value => this.onOANumberDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
      <Form.Label column sm={2}>
      State  
      </Form.Label>
      <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="State" required
       value={this.state.StateData}
       onChange={value => this.onStateDataChange(value)}/>
      </Col>
    </Form.Group>
    
      <Form.Group as={Row}>
     <Form.Label column sm={2}>
      Customer Name 
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="CustomerName" required
       value={this.state.CustomerNameData}
       onChange={value => this.onCustomerNameDataChange(value)}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
     <Form.Label column sm={2}>
      Site Name 
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Site Name" required
       value={this.state.SiteNameData}
       onChange={value => this.onSiteNameDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
      ReportedBy 
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="ReportedBy" required
       value={this.state.ReportedByData}
       onChange={value => this.onReportedByDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Site Owner Client 
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="SiteOwnerClientData" required
       value={this.state.SiteOwnerClientData}
       onChange={value => this.onSiteOwnerClientDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Commissioning 
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="date" placeholder="CommissioningData" required
       value={this.state.SiteOwnerClientData}
       onChange={value => this.onCommissioningDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     MW Capacity AC
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="MWCapacityACData" required
       value={this.state.MWCapacityACData}
       onChange={value => this.onMWCapacityACDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     MW Capacity DC
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="MW Capacity DC" required
       value={this.state.MWCapacityDCData}
       onChange={value => this.onMWCapacityDCDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     ModuleMake1Data
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="ModuleMake1Data" required
       value={this.state.ModuleMake1Data}
       onChange={value => this.onModuleMake1DataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Module Make2 Data
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder=" ModuleMake2Data" required
       value={this.state.ModuleMake2Data}
       onChange={value => this.onModuleMake2DataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     InstalledCapacityMW1Data
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="InstalledCapacityMW1Data" required
       value={this.state.InstalledCapacityMW1Data}
       onChange={value => this.onInstalledCapacityMW1DataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     InstalledCapacityMW2Data
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="InstalledCapacityMW2Data" required
       value={this.state.SiteOwnerClientData}
       onChange={value => this.onInstalledCapacityMW2DataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     GroundMountedData
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="GroundMountedData" required
       value={this.state.GroundMountedData}
       onChange={value => this.onGroundMountedDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     InstallationAngleData
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="InstallationAngleData" required
       value={this.state.InstallationAngleData}
       onChange={value => this.onInstallationAngleDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     OrientationData
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="OrientationData" required
       value={this.state.OrientationData}
       onChange={value => this.onOrientationDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     ModulesIn1ColumnData
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="ModulesIn1ColumnData" required
       value={this.state.ModulesIn1ColumnData}
       onChange={value => this.onModulesIn1ColumnDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     ModulesIn1StringData
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="ModulesIn1StringData" required
       value={this.state.ModulesIn1StringData}
       onChange={value => this.onModulesIn1StringDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     TrackerData
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="TrackerData" required
       value={this.state.TrackerData}
       onChange={value => this.onTrackerDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     InspectionCompletedData
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="InspectionCompletedData" required
       value={this.state.InspectionCompletedData}
       onChange={value => this.onInspectionCompletedDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     InstrumentSerialNoData
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="InstrumentSerialNoData" required
       value={this.state.InstrumentSerialNoData}
       onChange={value => this.onInstrumentSerialNoDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     InspectionInstrumentData
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="InspectionInstrumentData" required
       value={this.state.InspectionInstrumentData}
       onChange={value => this.onInspectionInstrumentDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     No Of Repairable
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="No Of Repairable" required
       value={this.state.CalibrationvalidityData}
       onChange={value => this.onCalibrationvalidityDataChange(value)}/>
    </Col>
  </Form.Group>
  {/* <Form.Group as={Row}>
     <Form.Label column sm={2}>
     No Of Non Repairable
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="NoOfNonRepairableData" required
       value={this.state.NoOfNonRepairableData}
       onChange={value => this.onNoOfNonRepairableDataChange(value)}/>
    </Col>
  </Form.Group> */}
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Observation1Data
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Observation1Data" required
       value={this.state.Observation1Data}
       onChange={value => this.onObservation1DataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Observation2Data
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Observation2Data" required
       value={this.state.Observation2Data}
       onChange={value => this.onObservation2DataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Observation3Data
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Observation3Data" required
       value={this.state.Observation3Data}
       onChange={value => this.onObservation3DataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Observation4Data
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Observation4Data" required
       value={this.state.Observation4Data}
       onChange={value => this.onObservation4DataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     InspectionDoneByData
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="InspectionDoneByData" required
       value={this.state.InspectionDoneByData}
       onChange={value => this.onInspectionDoneByDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     InspectionReviewedByData
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="InspectionReviewedByData" required
       value={this.state.InspectionReviewedByData}
       onChange={value => this.onInspectionReviewedByDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     CheckingTogetherData
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="CheckingTogetherData" required
       value={this.state.CheckingTogetherData}
       onChange={value => this.onCheckingTogetherDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     SiteRepresentativeData
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="SiteRepresentativeData" required
       value={this.state.SiteRepresentativeData}
       onChange={value => this.onSiteRepresentativeDataChange(value)}/>
    </Col>
  </Form.Group>

  {/* <Form.Group as={Row}>
     <Form.Label column sm={2}>
      Remarks
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Remarks" required
       value={this.state.RemarkData}
       onChange={value => this.onRemarkDataChange(value)}/>
    </Col>
    </Form.Group> */}
    {/* <Form.Group as={Row} >
    <Form.Label column sm={2}>
    Report Status
    </Form.Label>
    <Col sm={10} className="form-input">
    <Form.Control as="select"  required>
    <option value="1" selected disabled>Pending</option>
          </Form.Control>
    </Col>
    </Form.Group> */}


    <Form.Group as={Row} id="form-submit-button">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Update</Button>
              </Col>
            </Form.Group>
            <Form.Group as={Row} id="form-cancel-button">
              <Col sm={{ span: 10, offset: 2 }} id="form-cancel-button-inner">
                <Button type="reset" onClick={this.props.onFormEditClose}>
                  cancel
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}

export default LeaveApplicationEmpForm;


// import React, { Component } from "react";
// // import "./LeaveApplicationEmpFormEdit.css";
// // import { Form,Button } from "react-bootstrap";
// import { Form, Button, Col, Row } from "react-bootstrap";
// import axios from "axios";

// class LeaveApplicationEmpForm extends Component {
//   state = {
   
//         DateData: this.props.editData["Date"].slice(0, 10),
//         OANumberData:this.props.editData["OANumber"],
//         StateData: this.props.editData["State"],
//         CustomerNameData: this.props.editData["CustomerName"],
//         SiteNameData: this.props.editData["SiteName"],
//         ReportedByData: this.props.editData["ReportedBy"],
//         SiteOwnerClientData:this.props.editData["SiteOwnerClient"],
//         CommissioningData:this.props.editData["Commissioning"].slice(0, 10),
//         MWCapacityACData:this.props.editData["MWCapacityAC"],
//         MWCapacityDCData:this.props.editData["MWCapacityDC"],
//         ModuleMake1Data:this.props.editData["ModuleMake1"],
//         ModuleMake2Data:this.props.editData["ModuleMake2"],
//         InstalledCapacityMW1Data:this.props.editData["InstalledCapacityMW1"],
//         InstalledCapacityMW2Data:this.props.editData["InstalledCapacityMW2"],
//         GroundMountedData:this.props.editData["GroundMounted"],
//         InstallationAngleData:this.props.editData["InstallationAngle"],
//         OrientationData:this.props.editData["Orientation"],
//         ModulesIn1ColumnData:this.props.editData["ModulesIn1Column"],
//         ModulesIn1StringData:this.props.editData["ModulesIn1String"],
//         TrackerData:this.props.editData["Tracker"],
//       // inspection result
//         InspectionCompletedData:this.props.editData["InspectionCompleted"],
//         InstrumentSerialNoData:this.props.editData["InstrumentSerialNo"],
//         InspectionInstrumentData:this.props.editData["InspectionInstrument"],
//         CalibrationValidityData:this.props.editData["CalibrationValidity"],
//         // NoOfNonRepairableData:this.props.editData["NoOfNonRepairable"],
//       // observation form 
//         Observation1Data:this.props.editData["Observation1"],
//         Observation2Data:this.props.editData["Observation2"],
//         Observation3Data:this.props.editData["Observation3"],
//         Observation4Data:this.props.editData["Observation4"],
//         InspectionDoneByData:this.props.editData["InspectionDoneBy"],
//         InspectionReviewedByData:this.props.editData["InspectionReviewedBy"],
//         CheckingTogetherData:this.props.editData["CheckingTogether"],
//         SiteRepresentativeData:this.props.editData["SiteRepresentative"],
//         // StatusData: this.props.editData["Status"],
        

    
//   };

//   // onStatusDataChange(e) {
//   //   this.setState({StatusData: e.target.value });
//   // }


//   onDateDataChange(e) {
//   this.setState({ DateData: e.target.value });
//   }
//   onOANumberDataChange(e) {
//     this.setState({ OANumberData: e.target.value });
//     }
//   onStateDataChange(e) {
//       this.setState({ StateData: e.target.value });
//       }
//   onCustomerNameDataChange(e) {
//         this.setState({ CustomerNameData: e.target.value });
//         }
//   onSiteNameDataChange(e) {
//         this.setState({ SiteNameData: e.target.value });
//         }
//   onReportedByDataChange(e) {
//         this.setState({ ReportedByData: e.target.value });
//         }
//   onSiteOwnerClientDataChange(e) {
//             this.setState({ SiteOwnerClientData: e.target.value });
//         }
//   onCommissioningDataChange(e) {
//                 this.setState({ CommissioningData: e.target.value });
//         }
//   onMWCapacityACDataChange(e) {
//     this.setState({ MWCapacityACData: e.target.value });
// }
//   onMWCapacityDCDataChange(e) {
//           this.setState({ MWCapacityDCData: e.target.value });
//   }
//   onModuleMake1DataChange(e) {
//           this.setState({ ModuleMake1Data: e.target.value });
//   }
//   onModuleMake2DataChange(e) {
//           this.setState({ ModuleMake2Data: e.target.value });
//   }
//   onInstalledCapacityMW1DataChange(e) {
//           this.setState({ InstalledCapacityMW1Data: e.target.value });
//   }
//   onInstalledCapacityMW2DataChange(e) {
//           this.setState({ InstalledCapacityMW2Data: e.target.value });
//   }
//   onGroundMountedDataChange(e) {
//           this.setState({ GroundMountedData: e.target.value });
//   }
//   onInstallationAngleDataChange(e) {
//           this.setState({ InstallationAngleData: e.target.value });
//   }
//   onOrientationDataChange(e) {
//           this.setState({ OrientationData: e.target.value });
//   }
//   onModulesIn1ColumnDataChange(e) {
//           this.setState({ ModulesIn1ColumnData: e.target.value });
//   }
//   onModulesIn1StringDataChange(e) {
//           this.setState({ ModulesIn1StringData: e.target.value });
//   }
//   onTrackerDataChange(e) {
//           this.setState({ TrackerData: e.target.value });
//   }
//       // inspection result
//   onInspectionCompletedDataChange(e) {
//           this.setState({ InspectionCompletedData: e.target.value });
//   }
//   onInstrumentSerialNoDataChange(e) {
//           this.setState({ InstrumentSerialNoData: e.target.value });
//   }
//   onInspectionInstrumentDataChange(e) {
//           this.setState({ InspectionInstrumentData: e.target.value });
//   }
//   onCalibrationValidityDataChange(e) {
//           this.setState({ CalibrationValidityData: e.target.value });
//   }
//   // onNoOfNonRepairableDataChange(e) {
//   //         this.setState({ NoOfNonRepairableData: e.target.value });
//   // }
//       // observation form 
//   onObservation1DataChange(e) {
//           this.setState({ Observation1Data: e.target.value });
//   }
//   onObservation2DataChange(e) {
//           this.setState({ Observation2Data: e.target.value });
//   }
//   onObservation3DataChange(e) {
//           this.setState({ Observation3Data: e.target.value });
//   }
//   onObservation4DataChange(e) {
//           this.setState({ Observation4Data: e.target.value });
//   }
//   onInspectionDoneByDataChange(e) {
//           this.setState({ InspectionDoneByData: e.target.value });
//   }
//   onInspectionReviewedByDataChange(e) {
//           this.setState({ InspectionReviewedByData: e.target.value });
//   }
//   onCheckingTogetherDataChange(e) {
//           this.setState({ CheckingTogetherData: e.target.value });
//   }
//   onSiteRepresentativeDataChange(e) {
//           this.setState({ SiteRepresentativeData: e.target.value });
//   }



//   componentWillMount() {
//   }

//   render() {
//     return (
//       <div>
//         <h2 id="role-form-title">IvCurve Analysis Report Detail</h2>

//         <div id="role-form-outer-div">
//           <Form
//             id="form"
//             onSubmit={e =>
//               this.props.onLeaveApplicationEmpEditUpdate(this.props.editData, e)
//             }
//           >
//            {/* <Form.Group as={Row} >
//     <Form.Label column sm={2}>
//     Leave Type
//     </Form.Label>
//     <Col sm={10} className="form-input">
//     <Form.Control as="select"  required>
//     <option value="" disabled selected>
//                     Select your option
//                   </option>
//     <option value="Sick Leave"  selected={this.props.editData["Leavetype"] == "Sick Leave"}>Sick Leave</option>
//     <option value="Casual Leave"  selected={this.props.editData["Leavetype"] == "Casual Leave"}>Casual Leave</option>
//     <option value="Privilege Leave"  selected={this.props.editData["Leavetype"] == "Privilege Leave"}>Privilege Leave</option>
//           </Form.Control>
//     </Col>
//     </Form.Group> */}

//     <Form.Group as={Row}>
//         <Form.Label column sm={2}>
//                Date
//         </Form.Label>
//         <Col sm={10} className="form-input">
//          <Form.Control
//                   type="date"
//                   required
//                   value={this.state.DateData}
//                   onChange={value => this.onDateDataChange(value)}
//                 />
//               </Col>
//     </Form.Group>

//   <Form.Group as={Row}>
//     <Form.Label column sm={2}>
//     OA Number 
//     </Form.Label>
//     <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="OA Number" required
//        value={this.state.OANumberData}
//        onChange={value => this.onOANumberDataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//       <Form.Label column sm={2}>
//       State  
//       </Form.Label>
//       <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="State" required
//        value={this.state.StateData}
//        onChange={value => this.onStateDataChange(value)}/>
//       </Col>
//     </Form.Group>
    
//       <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//       Customer Name 
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="CustomerName" required
//        value={this.state.CustomerNameData}
//        onChange={value => this.onCustomerNameDataChange(value)}/>
//     </Col>
//   </Form.Group>

//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//       Site Name 
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="Site Name" required
//        value={this.state.SiteNameData}
//        onChange={value => this.onSiteNameDataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//       ReportedBy 
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="ReportedBy" required
//        value={this.state.ReportedByData}
//        onChange={value => this.onReportedByDataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      Site Owner Client 
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="SiteOwnerClientData" required
//        value={this.state.SiteOwnerClientData}
//        onChange={value => this.onSiteOwnerClientDataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      Commissioning 
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="date" placeholder="CommissioningData" required
//        value={this.state.SiteOwnerClientData}
//        onChange={value => this.onCommissioningDataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      MW Capacity AC
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="MWCapacityACData" required
//        value={this.state.MWCapacityACData}
//        onChange={value => this.onMWCapacityACDataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      MW Capacity DC
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="MW Capacity DC" required
//        value={this.state.MWCapacityDCData}
//        onChange={value => this.onMWCapacityDCDataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      ModuleMake1Data
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="ModuleMake1Data" required
//        value={this.state.ModuleMake1Data}
//        onChange={value => this.onModuleMake1DataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      Module Make2 Data
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder=" ModuleMake2Data" required
//        value={this.state.ModuleMake2Data}
//        onChange={value => this.onModuleMake2DataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      InstalledCapacityMW1Data
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="InstalledCapacityMW1Data" required
//        value={this.state.InstalledCapacityMW1Data}
//        onChange={value => this.onInstalledCapacityMW1DataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      InstalledCapacityMW2Data
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="InstalledCapacityMW2Data" required
//        value={this.state.SiteOwnerClientData}
//        onChange={value => this.onInstalledCapacityMW2DataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      GroundMountedData
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="GroundMountedData" required
//        value={this.state.GroundMountedData}
//        onChange={value => this.onGroundMountedDataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      InstallationAngleData
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="InstallationAngleData" required
//        value={this.state.InstallationAngleData}
//        onChange={value => this.onInstallationAngleDataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      OrientationData
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="OrientationData" required
//        value={this.state.OrientationData}
//        onChange={value => this.onOrientationDataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      ModulesIn1ColumnData
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="ModulesIn1ColumnData" required
//        value={this.state.ModulesIn1ColumnData}
//        onChange={value => this.onModulesIn1ColumnDataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      ModulesIn1StringData
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="ModulesIn1StringData" required
//        value={this.state.ModulesIn1StringData}
//        onChange={value => this.onModulesIn1StringDataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      TrackerData
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="TrackerData" required
//        value={this.state.TrackerData}
//        onChange={value => this.onTrackerDataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      InspectionCompletedData
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="InspectionCompletedData" required
//        value={this.state.InspectionCompletedData}
//        onChange={value => this.onInspectionCompletedDataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      InstrumentSerialNoData
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="InstrumentSerialNoData" required
//        value={this.state.InstrumentSerialNoData}
//        onChange={value => this.onInstrumentSerialNoDataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      InspectionInstrumentData
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="InspectionInstrumentData" required
//        value={this.state.InspectionInstrumentData}
//        onChange={value => this.onInspectionInstrumentDataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      No Of Repairable
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="No Of Repairable" required
//        value={this.state.CalibrationValidityData}
//        onChange={value => this.onCalibrationValidityDataChange(value)}/>
//     </Col>
//   </Form.Group>
//   {/* <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      No Of Non Repairable
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="NoOfNonRepairableData" required
//        value={this.state.NoOfNonRepairableData}
//        onChange={value => this.onNoOfNonRepairableDataChange(value)}/>
//     </Col>
//   </Form.Group> */}
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      Observation1Data
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="Observation1Data" required
//        value={this.state.Observation1Data}
//        onChange={value => this.onObservation1DataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      Observation2Data
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="Observation2Data" required
//        value={this.state.Observation2Data}
//        onChange={value => this.onObservation2DataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      Observation3Data
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="Observation3Data" required
//        value={this.state.Observation3Data}
//        onChange={value => this.onObservation3DataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      Observation4Data
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="Observation4Data" required
//        value={this.state.Observation4Data}
//        onChange={value => this.onObservation4DataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      InspectionDoneByData
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="InspectionDoneByData" required
//        value={this.state.InspectionDoneByData}
//        onChange={value => this.onInspectionDoneByDataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      InspectionReviewedByData
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="InspectionReviewedByData" required
//        value={this.state.InspectionReviewedByData}
//        onChange={value => this.onInspectionReviewedByDataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      CheckingTogetherData
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="CheckingTogetherData" required
//        value={this.state.CheckingTogetherData}
//        onChange={value => this.onCheckingTogetherDataChange(value)}/>
//     </Col>
//   </Form.Group>
//   <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//      SiteRepresentativeData
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="SiteRepresentativeData" required
//        value={this.state.SiteRepresentativeData}
//        onChange={value => this.onSiteRepresentativeDataChange(value)}/>
//     </Col>
//   </Form.Group>

//   {/* <Form.Group as={Row}>
//      <Form.Label column sm={2}>
//       Remarks
//      </Form.Label>
//      <Col sm={10}  className="form-input">
//       <Form.Control type="Text" placeholder="Remarks" required
//        value={this.state.RemarkData}
//        onChange={value => this.onRemarkDataChange(value)}/>
//     </Col>
//     </Form.Group> */}
//     {/* <Form.Group as={Row} >
//     <Form.Label column sm={2}>
//     Report Status
//     </Form.Label>
//     <Col sm={10} className="form-input">
//     <Form.Control as="select"  required>
//     <option value="1" selected disabled>Pending</option>
//           </Form.Control>
//     </Col>
//     </Form.Group> */}


//     <Form.Group as={Row} id="form-submit-button">
//               <Col sm={{ span: 10, offset: 2 }}>
//                 <Button type="submit">Update</Button>
//               </Col>
//             </Form.Group>
//             <Form.Group as={Row} id="form-cancel-button">
//               <Col sm={{ span: 10, offset: 2 }} id="form-cancel-button-inner">
//                 <Button type="reset" onClick={this.props.onFormEditClose}>
//                   cancel
//                 </Button>
//               </Col>
//             </Form.Group>
//           </Form>
//         </div>
//       </div>
//     );
//   }
// }

// export default LeaveApplicationEmpForm;
