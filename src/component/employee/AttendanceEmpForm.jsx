import React, { Component } from "react";
import "./LeaveApplicationEmpForm.css";
import { Form,Button,Col,Row } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
var FontAwesome = require('react-fontawesome');

class LeaveApplicationEmpForm extends Component {
  state = {
  };
  constructor (){
    super();

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            date: date
        };
  }
  componentWillMount()  {
     
  }
  render() {
    return (
      <div>
        
        <h2 id="role-form-title"> In timing </h2>
 <div id="role-form-outer-div"><Form id="form" onSubmit={this.props.onLeaveApplicationEmpSubmit}>
  

 

  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Date 
    </Form.Label>
    <Col sm={10}  className="form-input">
    {/* <FontAwesome name='calendar' />{this.state.date} */}
    
      <Form.Control type="calendar" value={this.state.date} /> 
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    In Time
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="InTime" required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Out Time
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="OutTime" required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Location
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Location" required/>
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
