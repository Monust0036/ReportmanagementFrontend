import React, { Component } from "react";
// import "./LeaveApplicationHRFormEdit.css";
// import { Form,Button } from "react-bootstrap";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";

class LeaveApplicationHRForm extends Component {
  state = {
    
        // TourNoGeneratedData: this.props.editData["TourNoGenerated"],
    // StatusData: this.props.editData["Status"],
        DateData: this.props.editData["Date"].slice(0, 10),
        OANumberData:this.props.editData["OANumber"],
        StateData: this.props.editData["State"],
        CustomerNameData: this.props.editData["CustomerName"],
        SiteNameData: this.props.editData["SiteName"],
        ReportedByData: this.props.editData["ReportedBy"],
        // TransferToAnotherMemberData: this.props.editData["TransferToAnotherMember"],
        ModuleMakeData: this.props.editData["ModuleMake"],
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
          Edit Jb Change Voc  Of {this.state.TourNoGeneratedData}
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
     Ticket Fare
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="TicketFare" required
       value={this.state.TicketFareData}
       />
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
                  value={this.state.DateData}/>
        </Col>
    </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    OA Number 
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="OA Number" required
       value={this.state.OANumberData}
       />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    State
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="State" required
       value={this.state.StateData}
       />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Customer Name 
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Customer Name" required
       value={this.state.CustomerNameData}
       />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Site Name 
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Site Name" required
       value={this.state.SiteNameData}
       />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Reported By
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Reported By" required
       value={this.state.ReportedByData}
       />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Module Make
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="ModuleMake" required
       value={this.state.ModuleMakeData}
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
