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
        
        <h2 id="role-form-title" >EL Inspection Report</h2>
 <div id="role-form-outer-div"><Form id="form" enctype="multipart/form-data" onSubmit={this.props.onLeaveApplicationEmpSubmit} >
  

 <h4 id="role-form-title" style={{textAlign:"center" }}>Report Details</h4>
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
      JSR's Customer
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
    Report Created By
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Reported By" required
       />
    </Col>
  </Form.Group>
  <h4 id="role-form-title" style={{textAlign:"center" }}>Basic Site Details 1</h4>

  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Site Owner Client
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Site Owner Client" required
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Commissioning
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="date"  placeholder="Commissioning" required
      />
    </Col>
  </Form.Group>
  
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     MW Capacity AC
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder=" MWCapacityAC " required
       />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     MW Capacity DC
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder=" MWCapacityDC " required
       />
    </Col>
  </Form.Group>
  <h4 id="role-form-title" style={{textAlign:"center" }}>Basic Site Details 2</h4>

  
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Module Make1 
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder=" Module Make1 " required
     />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Module Make2
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder=" Module Make2 " required
       />
    </Col>
  </Form.Group>
  

  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Installed Capacity MW1 
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder=" InstalledCapacity MW1 " required
       />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Installed Capacity MW2
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Installed Capacity MW2" required
       />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Installation Angle 
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder=" Installation Angle" required
       />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Orientation
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Orientation" required
       />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Modules In 1 Column
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Modules In 1 Column" required
      />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Modules In 1 String
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Modules In 1 String" required
       />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Tracker/seasonal tilt 
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder=" Tracker" required
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
