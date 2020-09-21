import React, { Component } from "react";
// import "./LeaveApplicationEmpFormEdit.css";
// import { Form,Button } from "react-bootstrap";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";

class LeaveApplicationEmpForm extends Component {
  state = {
    // LeaveApplicationEmpData: this.props.editData["LeaveApplicationEmpName"],

    // LeavetypeData: this.props.editData["Leavetype"],
    TeamLeaderNameData: this.props.editData["TeamLeaderName"],
    TeamMemberData: this.props.editData["TeamMember"],
    TourStartLocationData: this.props.editData["TourStartLocation"],
    TourStartDateData: this.props.editData["TourStartDate"].slice(0, 10),
    // ToDateData: this.props.editData["ToDate"].slice(0, 10),
    DestinationPlannedData: this.props.editData["DestinationPlanned"],
    TourNoGeneratedData: this.props.editData["TourNoGenerated"],
    // StatusData: this.props.editData["Status"],

    // value={this.state.CompanyNameData}
    // onChange={value => this.onCompanyNameDataChange(value)}
  };
//   onLeavetypeDataChange(e) {
//     this.setState({ CLeavetypeData: e.target.value });
//   }

  onTeamLeaderNameDataChange(e) {
  this.setState({ TeamLeaderNameData: e.target.value });
  }
  onTeamMemberDataChange(e) {
    this.setState({ TeamMemberData: e.target.value });
    }
  onTourStartLocationDataChange(e) {
      this.setState({ TourStartLocationData: e.target.value });
      }
    
  onTourStartDateDataChange(e) {
    this.setState({ TourStartDateData: e.target.value });
  }
  onDestinationPlannedDataChange(e) {
    this.setState({ DestinationPlannedData: e.target.value });
  }
  onTourNoGeneratedDataChange(e) {
    this.setState({ TourNoGeneratedData: e.target.value });
  }
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
        <h2 id="role-form-title">Edit Tour Details</h2>

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
    Team Leader Name 
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Team Leader Name" required
       value={this.state.TeamLeaderNameData}
       onChange={value => this.onTeamLeaderNameDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Team Member 
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Team Member" required
       value={this.state.TeamMemberData}
       onChange={value => this.onTeamMemberDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Start Location 
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Tour Start Location" required
       value={this.state.TourStartLocationData}
       onChange={value => this.onTourStartLocationDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
              <Form.Label column sm={2}>
              TourStartDate
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="date"
                  required
                  value={this.state.TourStartDateData}
                  onChange={value => this.onTourStartDateDataChange(value)}
                />
              </Col>
    </Form.Group>
    <Form.Group as={Row}>
      <Form.Label column sm={2}>
      Destination Planned 
      </Form.Label>
      <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Destination Planned" required
       value={this.state.DestinationPlannedData}
       onChange={value => this.onDestinationPlannedDataChange(value)}/>
      </Col>
    </Form.Group>
    <Form.Group as={Row}>
      <Form.Label column sm={2}>
      Tour Number Generate 
      </Form.Label>
      <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Tour Number Generate" required
       value={this.state.TourNoGeneratedData}
       onChange={value => this.onTourNoGeneratedDataChange(value)}/>
      </Col>
    </Form.Group>
            
            
            
            
            {/* <Form.Group as={Row}>
              <Form.Label column sm={2}>
              ToDate
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="date"
                  required
                  value={this.state.ToDateData}
                  onChange={value => this.onToDateDataChange(value)}
                />
              </Col>
            </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Reason for leave
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Reason for leave" required
       value={this.state.ReasonforleaveData}
       onChange={value => this.onReasonforleaveDataChange(value)}/>
    </Col>
  </Form.Group>
   
  <Form.Group as={Row} >
    <Form.Label column sm={2}>
    Leave Status
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
