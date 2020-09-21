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
        
        <h2 id="role-form-title">Add/View Expense Details</h2>
 <div id="role-form-outer-div"><Form id="form" onSubmit={this.props.onLeaveApplicationEmpSubmit}>
  

 
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
        Expense Date
    </Form.Label>
    <Col sm={10} className="form-input">
        <Form.Control type="date" required />
    </Col>
 </Form.Group>
 <Form.Group as={Row}>
    <Form.Label column sm={2}>
     Ticket Fare
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="TicketFare" required />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
     Local Convenyance 
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="LocalConvenyance" required />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
     Hotel Expense
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Hotel Expense" required />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Food Expense
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Food Expense" required
       />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Misc. Expense
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Misc. Expense" required
       />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    TransferToAnotherTeamMember
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="TarnsferToAnotherTeamMember" required
       />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Remark
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Remark" required
       />
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
