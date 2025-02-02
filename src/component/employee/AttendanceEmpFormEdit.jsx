import React, { Component } from "react";
// import "./LeaveApplicationEmpFormEdit.css";
// import { Form,Button } from "react-bootstrap";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";

class LeaveApplicationEmpForm extends Component {
  state = {
    // LeaveApplicationEmpData: this.props.editData["LeaveApplicationEmpName"],

    // LeavetypeData: this.props.editData["Leavetype"],
    DateData: this.props.editData["Date"].slice(0, 10),
    InTimeData: this.props.editData["InTime"].slice(0, 10),
    OutTimeData: this.props.editData["OutTime"].slice(0, 10),
    LocationData: this.props.editData["Location"],
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
  onInTimeDataChange(e) {
    this.setState({ InTimeData: e.target.value });
  }
  onOutTimeDataChange(e) {
    this.setState({ OutTimeData: e.target.value });
  }
  onLocationDataChange(e) {
    this.setState({ LocationData: e.target.value });
  }
//   onStatusDataChange(e) {
//     this.setState({StatusData: e.target.value });
//   }

  componentWillMount() {
  }

  render() {
    return (
      <div>
        <h2 id="role-form-title">Edit Login Details</h2>

        <div id="role-form-outer-div">
          <Form
            id="form"
            onSubmit={e =>
              this.props.onLeaveApplicationEmpEditUpdate(this.props.editData, e)
            }
          >
           {/* <Form.Group as={Row} >
    <Form.Label column sm={2}>
    Todays's Timing
    </Form.Label>
    <Col sm={10} className="form-input">
    <Form.Control as="select"  required>
    <option value="" disabled selected>
                    Select your option
                  </option>
    <option value="Sick Leave"  selected={this.props.editData["Leavetype"] == "Sick Leave"}>IN</option>
    <option value="Casual Leave"  selected={this.props.editData["Leavetype"] == "Casual Leave"}>OUT</option>
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
                  InTime
                </Form.Label>
                <Col sm={10}  className="form-input">
                <Form.Control type="Text" placeholder="InTime" required
                    value={this.state.InTimeData}
                    onChange={value => this.onInTimeDataChange(value)}/>
                  </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  OutTime
                </Form.Label>
                <Col sm={10}  className="form-input">
                <Form.Control type="Text" placeholder="OutTime" required
                    value={this.state.OutTimeData}
                    onChange={value => this.onOutTimeDataChange(value)}/>
                  </Col>
            </Form.Group>

  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Location
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Location" required
       value={this.state.LocationData}
       onChange={value => this.onLocationDataChange(value)}/>
    </Col>
  </Form.Group>
   
  {/* <Form.Group as={Row} >
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
