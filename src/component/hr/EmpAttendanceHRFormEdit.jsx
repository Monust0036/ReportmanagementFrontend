import React, { Component } from "react";
// import "./LeaveApplicationHRFormEdit.css";
// import { Form,Button } from "react-bootstrap";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";

class LeaveApplicationHRForm extends Component {
  state = {
    
        
        DateData: this.props.editData["Date"].slice(0, 10),
        InTimeData:this.props.editData["InTime"],
        OutTimeData: this.props.editData["OutTime"],
        LocationData: this.props.editData["Location"],
        
  };
 

  componentWillMount() {}

  render() {
    return (
      <div>
        <h2 id="role-form-title">
          Edit Timing of  {this.state.DateData}
        </h2>

        <div id="role-form-outer-div">
          <Form
            id="form"
            onSubmit={e =>
              this.props.onLeaveApplicationHREditUpdate(this.props.editData, e)
            }
          >

    
  <Form.Group as={Row}>
        <Form.Label column sm={2}>
              Date
              </Form.Label>
              <Col sm={10} className="form-input">
        <Form.Control
                  type="date"
                  required
                  value={this.state.DateData}/>
        </Col>
    </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    In Time
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="IN Time" required
       value={this.state.InTimeData}
       />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Out Timing
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="OutTime" required
       value={this.state.OutTimeData}
       />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Location
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Location" required
       value={this.state.LocationData}
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
