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
        // ModuleMakeData: this.props.editData["ModuleMake"],
        // RemarkData: this.props.editData["Remark"],
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
        <h2 id="role-form-title">Drone Thermography Inspection Detail</h2>

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
