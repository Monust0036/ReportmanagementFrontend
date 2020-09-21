import React, { Component } from "react";
import "./LeaveApplicationEmpForm.css";
import { Form,Button,Col,Row } from "react-bootstrap";
import axios from "axios";

class LeaveApplicationEmpForm extends Component {
  state = {
  };
  componentWillMount()  {
     
  }
  render() {
    return (
      <div>
        
        <h2 id="role-form-title">Add Tour Details</h2>
 <div id="role-form-outer-div"><Form id="form" onSubmit={this.props.onLeaveApplicationEmpSubmit}>
  

 
  
 <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Team Leader Name
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Team Leader Name" required/>
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Team Members
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Team member Name" required/>
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Tour Start Location
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Tour Start Location" required/>
    </Col>
  </Form.Group>


  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Tour Start Date
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="date" required/>
    </Col>
  </Form.Group>
  
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Destination Planned
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Destination Planned" required/>
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Tour Number Generated
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Tour Number Generated" required/>
    </Col>
  </Form.Group>
   
  {/* <Form.Group as={Row} >
    <Form.Label column sm={2}>
    Leave Status
    </Form.Label>
    <Col sm={10} className="form-input">
    <Form.Control as="select"  required>
    <option value="1" selected>Pending</option>
          </Form.Control>
    </Col>
    </Form.Group> */}
 
  

  <Form.Group as={Row} id="form-submit-button">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Submit</Button>
    </Col>
  </Form.Group>
  <Form.Group as={Row} id="form-cancel-button">
    <Col sm={{ span: 10, offset: 2 }} id="form-cancel-button-inner">
      <Button type="reset" onClick={this.props.onFormClose}>cancel</Button>
    </Col>
  </Form.Group>
</Form></div>
      </div>
    );
  }
}

export default LeaveApplicationEmpForm;
