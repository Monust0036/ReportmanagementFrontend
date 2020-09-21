import React, { Component } from "react";
// import "./LeaveApplicationHRFormEdit.css";
// import { Form,Button } from "react-bootstrap";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";

class LeaveApplicationHRForm extends Component {
  state = {
    // LeaveApplicationHRData: this.props.editData["LeaveApplicationHRName"],

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

  //   onStatusDataChange(e) {
  //     this.setState({StatusData: e.target.value });
  //   }

  componentWillMount() {}

  render() {
    return (
      <div>
        <h2 id="role-form-title">
          Edit Tour Detail  Of {this.state.TeamLeaderNameData}
        </h2>

        <div id="role-form-outer-div">
          <Form
            id="form"
            onSubmit={e =>
              this.props.onLeaveApplicationHREditUpdate(this.props.editData, e)
            }
          >
            {/* <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Leave Type
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control as="select" required>
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  <option
                    value="Sick Leave"
                    selected={this.props.editData["Leavetype"] == "Sick Leave"}
                    disabled
                  >
                    Sick Leave
                  </option>
                  <option
                    value="Casual Leave"
                    selected={
                      this.props.editData["Leavetype"] == "Casual Leave"
                    }
                    disabled
                  >
                    Casual Leave
                  </option>
                  <option
                    value="Privilege Leave"
                    selected={
                      this.props.editData["Leavetype"] == "Privilege Leave"
                    }
                    disabled
                  >
                    Privilege Leave
                  </option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                FromDate
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="date"
                  required
                  disabled
                  value={this.state.FromDateData}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                ToDate
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="date"
                  required
                  disabled
                  value={this.state.ToDateData}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Reason for leave
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Reason for leave"
                  required
                  disabled
                  value={this.state.ReasonforleaveData}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Leave Status
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control as="select" required>
                  <option value="Pending" selected disabled>
                    Pending
                  </option>
                  <option
                    value="2"
                    selected={this.props.editData["Status"] == 2}
                  >
                    Approve
                  </option>
                  <option
                    value="3"
                    selected={this.props.editData["Status"] == 3}
                  >
                    Reject
                  </option>
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
       />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Team Member 
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Team Member" required
       value={this.state.TeamMemberData}
       />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Start Location 
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Tour Start Location" required
       value={this.state.TourStartLocationData}
       />
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
                  value={this.state.TourStartDateData}/>
              </Col>
    </Form.Group>
    <Form.Group as={Row}>
      <Form.Label column sm={2}>
      Destination Planned 
      </Form.Label>
      <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Destination Planned" required
       value={this.state.DestinationPlannedData}/>
      </Col>
    </Form.Group>
    <Form.Group as={Row}>
      <Form.Label column sm={2}>
      Tour Number Generate 
      </Form.Label>
      <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Tour Number Generate" required
       value={this.state.TourNoGeneratedData}
       />
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

export default LeaveApplicationHRForm;
