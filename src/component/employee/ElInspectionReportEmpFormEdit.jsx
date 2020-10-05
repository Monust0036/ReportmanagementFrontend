import React, { Component } from "react";
// import "./LeaveApplicationEmpFormEdit.css";
// import { Form,Button } from "react-bootstrap";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";

class LeaveApplicationEmpForm extends Component {
  state = {
    // LeaveApplicationEmpData: this.props.editData["LeaveApplicationEmpName"],

    // LeavetypeData: this.props.editData["Leavetype"],
    // TourNoGeneratedData: this.props.editData["TourNoGenerated"],
    // StatusData: this.props.editData["Status"],
        DateData: this.props.editData["Date"].slice(0, 10),
        OANumberData:this.props.editData["OANumber"],
        StateData: this.props.editData["State"],
        CustomerNameData: this.props.editData["CustomerName"],
        SiteNameData: this.props.editData["SiteName"],
        ReportedByData: this.props.editData["ReportedBy"],
        SiteOwnerClientData: this.props.editData["SiteOwnerClient"],
        CommissioningData: this.props.editData["Commissioning"],
        MWCapacityACData: this.props.editData["MWCapacityAC"],
        MWCapacityDCData: this.props.editData["MWCapacityDC"],
        ModuleMake1Data: this.props.editData["ModuleMake1"],
        ModuleMake2Data: this.props.editData["ModuleMake2"],
        InstalledCapacityMW1Data: this.props.editData["InstalledCapacityMW1"],
        InstalledCapacityMW2Data: this.props.editData["InstalledCapacityMW2"],
        GroundMountedData: this.props.editData["GroundMounted"],
        InstallationAngleData: this.props.editData["InstallationAngle"],
        OrientationData: this.props.editData["Orientation"],
        ModulesIn1ColumnData: this.props.editData["ModulesIn1Column"],
        ModulesIn1StringData: this.props.editData["ModulesIn1String"],
        TrackerData: this.props.editData["Tracker"],

        
    // StatusData: this.props.editData["Status"],

    // value={this.state.CompanyNameData}
    // onChange={value => this.onCompanyNameDataChange(value)}
  };
//   onLeavetypeDataChange(e) {
//     this.setState({ CLeavetypeData: e.target.value });
//   }

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
  onSiteOwnerClientDataChange(e){
    this.setState({ SiteOwnerClientData: e.target.value });
  }
  onCommissioningDataChange(e){
    this.setState({CommissioningData: e.target.value });
  }
  onMWCapacityACDataChange(e){
    this.setState({ MWCapacityACData: e.target.value });

  }
  onMWCapacityDCDataChange(e){
    this.setState({ MWCapacityDCData: e.target.value });
  }

  onModuleMake1DataChange(e){
    this.setState({ ModuleMake1Data: e.target.value })
  }
  onModuleMake2DataChange(e){
    this.setState({ ModuleMake2Data: e.target.value })
  }

  onInstalledCapacityMW1DataChange(e){
    this.setState({ InstalledCapacityMW1Data: e.target.value })
  }

  onInstalledCapacityMW2DataChange(e){
    this.setState({ InstalledCapacityMW2Data: e.target.value })
  }
  onGroundMountedDataChange(e){
    this.setState({ GroundMountedData: e.target.value})
  }
  onInstallationAngleDataChange(e){
    this.setState({ InstallationAngleData: e.target.value })
  }
  onOrientationDataChange(e){
    this.setState({ OrientationData: e.target.value })
  }
  onModulesIn1ColumnDataChange(e){
    this.setState({ ModulesIn1ColumnData: e.target.value })
  }
  onModulesIn1StringDataChange(e){
    this.setState({ ModulesIn1StringData: e.target.value })
  }
  onTrackerDataChange(e){
    this.setState({ TrackerData: e.target.value })
  }
  // onModuleMakeDataChange(e) {
  //           this.setState({ ModuleMakeData: e.target.value });
  //       }
//   onRemarkDataChange(e) {
//                 this.setState({ RemarkData: e.target.value });
//         }




    
//   onTourStartDateDataChange(e) {
//     this.setState({ TourStartDateData: e.target.value });
//   }
//   onDestinationPlannedDataChange(e) {
//     this.setState({ DestinationPlannedData: e.target.value });
//   }
//   onTourNoGeneratedDataChange(e) {
//     this.setState({ TourNoGeneratedData: e.target.value });
//   }
  // onToDateDataChange(e) {
  //   this.setState({ ToDateData: e.target.value });
  // }
  
//   onStatusDataChange(e) {
//     this.setState({StatusData: e.target.value });
//   }

  componentWillMount() {
  }

  render() {
    return (
      <div>
        <h2 id="role-form-title">El Inspection Report Edit</h2>

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
      <Form.Control type="Text" placeholder="Site Owner Client" required
       value={this.state.SiteOwnerClientData}
       onChange={value => this.onSiteOwnerClientDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Commissioning
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="date"  placeholder="Commissioning" required
      value={this.state.CommissioningData}
      onChange={value => this.onCommissioningDataChange(value)} />
    </Col>
  </Form.Group>
  
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     MW Capacity AC
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder=" MWCapacityAC " required
      value={this.state.MWCapacityACData}
      onChange={value => this.onMWCapacityACDataChange(value)} />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     MW Capacity DC
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder=" MWCapacityDC " required
      value={this.state.MWCapacityDCData}
      onChange={value => this.onMWCapacityDCDataChange(value)} />
    </Col>
  </Form.Group>
  
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Module Make1 
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder=" Module Make1 " required
      value={this.state.ModuleMake1Data}
      onChange={value => this.onModuleMake1DataChange(value)} />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Module Make2
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder=" Module Make2 " required
      value={this.state.ModuleMake2Data}
      onChange={value => this.onModuleMake2DataChange(value)} />
    </Col>
  </Form.Group>
  

  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Installed Capacity MW1 
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder=" InstalledCapacity MW1 " required
      value={this.state.InstalledCapacityMW1Data}
      onChange={value => this.onInstalledCapacityMW1DataChange(value)} />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Installed Capacity MW2
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Installed Capacity MW2" required
      value={this.state.InstalledCapacityMW2Data}
      onChange={value => this.onInstalledCapacityMW2DataChange(value)} />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Installation Angle 
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder=" Installation Angle" required
      value={this.state.InstallationAngleData}
      onChange={value => this.onInstallationAngleDataChange(value)} />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Orientation
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Orientation" required
      value={this.state.OrientationData}
      onChange={value => this.onOrientationDataChange(value)} />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Modules In 1 Column
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Modules In 1 Column" required
      value={this.state.ModulesIn1ColumnData}
      onChange={value => this.onModulesIn1ColumnDataChange(value)} />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Modules In 1 String
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Modules In 1 String" required
      value={this.state.ModulesIn1StringData}
      onChange={value => this.onModulesIn1StringDataChange(value)} />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Tracker
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder=" Tracker" required
      value={this.state.TrackerData}
      onChange={value => this.onTrackerDataChange(value)} />
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
