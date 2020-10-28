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
        
        <h2 id="role-form-title">EL Inspection Report</h2>
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
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    SiteOwnerClient
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="SiteOwnerClient" required
       />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Commissioning
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="date" placeholder="Commissioning" required
       />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    MWCapacityAC
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="WCapacityAC" required
       />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    MWCapacityDC
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="MWCapacityDC" required
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
     Ground Mounted/roof/terrace
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Ground Mounted " required
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
  <h4 id="role-form-title" style={{textAlign:"center" }}>Inspection Results</h4>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Total Panel checked
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="NoOfOk" required
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Class A
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder=" NoOfOk" required
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Class B
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder=" NoOfNotOk" required
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Class C
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="NoOfRepairable" required
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Class D
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="NoOfNonRepairable" required
      />
    </Col>
  </Form.Group>
  <h4 id="role-form-title" style={{textAlign:"center" }}>Observations / Deficiency Details</h4>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Observation1
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Observation 1" required
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Observation2 
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Observation 2" required
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Observation3 
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Observation 3" required
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     Observation4 
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Observation 4" required
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     ModuleSerialNo
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="ModuleSerialNo" required
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     TableNo
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="TableNo" required
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     LocationNoModule
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="LocationNoModule" required
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     side
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="side" required
      />
    </Col>
  </Form.Group>

  {/* ModuleSerialNo:event.target[33].value,
      TableNo: event.target[34].value,
      LocationNoModule:event.target[35].value,
      side:event.target[36].value, */}

      <Form.Group as={Row}>
     <Form.Label column sm={2}>
     SeverityDefects1
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="SeverityDefects1" required
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     SeverityDefects2
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="SeverityDefects2" required
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     SeverityDefects3
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="SeverityDefects3" required
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     SeverityDefects4
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="SeverityDefects4" required
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     SeverityDefects5
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="SeverityDefects5" required
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     ImageSeverityScore
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="ImageSeverityScore" required
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     ModuleClass
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="ModuleClass" required
      />
    </Col>
  </Form.Group>
  


  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     InspectionDoneBy
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="InspectionDoneBy" required
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     InspectionReviewedBy
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="InspectionReviewedBy" required
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     CheckingTogether
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="CheckingTogether" required
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
     SiteRepresentative
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="SiteRepresentative" required
      />
    </Col>
  </Form.Group>
 
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
    Report Status
    </Form.Label>
    <Col sm={10} className="form-input">
    <Form.Control as="select"  required>
    <option value="1" selected>Pending</option>
          </Form.Control>
    </Col>
    </Form.Group> */}
   
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
