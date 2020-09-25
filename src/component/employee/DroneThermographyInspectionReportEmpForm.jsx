import React, { Component } from "react";
import "./LeaveApplicationEmpForm.css";
import { Form,Button,Col,Row } from "react-bootstrap";
import axios from "axios";

class LeaveApplicationEmpForm extends Component {
  state = {
    selectedFile: null
  };
  componentWillMount()  {
     
  }

  fileSelectedHandler = event => {
    console.log(event.target.files[0]);
  }

  fileUploadHandler = () => {
    axios.post('')
  }
  render() {
    return (
      <div>
        
        <h2 id="role-form-title">Drone Thermography Inspection</h2>
 <div id="role-form-outer-div"><Form id="form" enctype="multipart/form-data" onSubmit={this.props.onLeaveApplicationEmpSubmit} >
  

 
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
        Date
    </Form.Label>
    <Col sm={10} className="form-input">
        <Form.Control type="date" required />
    </Col>
 </Form.Group>
 <Form.Group as={Row}>
    <Form.Label column sm={2}>
     OA Number
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="OA Number" required />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
     State
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="State" required />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
     customer Name 
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Customer Name " required />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Site Name
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Site Name" required
       />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Reported By
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Reported By" required
       />
    </Col>
  </Form.Group>
  {/* <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Module Make
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder=" Module Make" required
       />
    </Col>
  </Form.Group> */}
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    File Attachment
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="file" onChange={this.fileSelectedHandler}  multiple/>
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
