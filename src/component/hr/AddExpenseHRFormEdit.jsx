import React, { Component } from "react";
// import "./LeaveApplicationHRFormEdit.css";
// import { Form,Button } from "react-bootstrap";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";

class LeaveApplicationHRForm extends Component {
  state = {
    
        TourNoGeneratedData: this.props.editData["TourNoGenerated"],
    // StatusData: this.props.editData["Status"],
        AddExpenseDateData: this.props.editData["AddExpenseDate"].slice(0, 10),
        TicketFareData:this.props.editData["TicketFare"],
        LocalConvenyanceData: this.props.editData["LocalConvenyance"],
        HotelExpenseData: this.props.editData["HotelExpense"],
        FoodExpenseData: this.props.editData["FoodExpense"],
        MiscExpenseData: this.props.editData["MiscExpense"],
        TransferToAnotherMemberData: this.props.editData["TransferToAnotherMember"],
        RemarkData: this.props.editData["Remark"],
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
          Edit Expense  Of {this.state.TourNoGeneratedData}
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
     Ticket Fare
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="TicketFare" required
       value={this.state.TicketFareData}
       />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
        <Form.Label column sm={2}>
              Expense Date
              </Form.Label>
              <Col sm={10} className="form-input">
        <Form.Control
                  type="date"
                  required
                  value={this.state.AddExpenseDateData}/>
        </Col>
    </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Local Convenyance 
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="LocalConvenyance" required
       value={this.state.LocalConvenyanceData}
       />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Hotel Expense
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Hotel Expense" required
       value={this.state.HotelExpenseData}
       />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Food Expense
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Food Expense" required
       value={this.state.FoodExpenseData}
       />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Misc. Expense
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Misc. Expense" required
       value={this.state.MiscExpenseData}
       />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    TransferToAnotherTeamMember
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="TarnsferToAnotherTeamMember" required
       value={this.state.TransferToAnotherMemberData}
       />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Remark
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Remark" required
       value={this.state.RemarkData}
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
