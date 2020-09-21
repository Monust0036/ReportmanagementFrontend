import React, { Component } from "react";
// import "./LeaveApplicationEmpFormEdit.css";
// import { Form,Button } from "react-bootstrap";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";

class LeaveApplicationEmpForm extends Component {
  state = {
    // LeaveApplicationEmpData: this.props.editData["LeaveApplicationEmpName"],

    // LeavetypeData: this.props.editData["Leavetype"],
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
    // StatusData: this.props.editData["Status"],

    // value={this.state.CompanyNameData}
    // onChange={value => this.onCompanyNameDataChange(value)}
  };
//   onLeavetypeDataChange(e) {
//     this.setState({ CLeavetypeData: e.target.value });
//   }

  onAddExpenseDateDataChange(e) {
  this.setState({ AddExpenseDateData: e.target.value });
  }
  onTicketFareDataChange(e) {
    this.setState({ TicketFarerData: e.target.value });
    }
  onLocalConvenyanceDataChange(e) {
      this.setState({ LocalConvenyanceData: e.target.value });
      }
  onHotelExpenseDataChange(e) {
        this.setState({ HotelExpenseData: e.target.value });
        }
  onFoodExpenseDataChange(e) {
        this.setState({ FoodExpenseData: e.target.value });
        }
  onMiscExpenseDataChange(e) {
        this.setState({ MiscExpenseData: e.target.value });
        }
  onTransferToAnotherMemberDataChange(e) {
            this.setState({ TransferToAnotherMemberData: e.target.value });
        }
  onRemarkDataChange(e) {
                this.setState({ RemarkData: e.target.value });
        }




    
//   onTourStartDateDataChange(e) {
//     this.setState({ TourStartDateData: e.target.value });
//   }
//   onDestinationPlannedDataChange(e) {
//     this.setState({ DestinationPlannedData: e.target.value });
//   }
  onTourNoGeneratedDataChange(e) {
    this.setState({ TourNoGeneratedData: e.target.value });
  }
  // onToDateDataChange(e) {
  //   this.setState({ ToDateData: e.target.value });
  // }
  
//   onStatusDataChange(e) {
//     this.setState({StatusData: e.target.value });
//   }

  componentWillMount() {
  }

  render() {
    return (
      <div>
        <h2 id="role-form-title">Edit Expense Detail</h2>

        <div id="role-form-outer-div">
          <Form
            id="form"
            onSubmit={e =>
              this.props.onLeaveApplicationEmpEditUpdate(this.props.editData, e)
            }
          >
           {/* <Form.Group as={Row} >
    <Form.Label column sm={2}>
    Leave Type
    </Form.Label>
    <Col sm={10} className="form-input">
    <Form.Control as="select"  required>
    <option value="" disabled selected>
                    Select your option
                  </option>
    <option value="Sick Leave"  selected={this.props.editData["Leavetype"] == "Sick Leave"}>Sick Leave</option>
    <option value="Casual Leave"  selected={this.props.editData["Leavetype"] == "Casual Leave"}>Casual Leave</option>
    <option value="Privilege Leave"  selected={this.props.editData["Leavetype"] == "Privilege Leave"}>Privilege Leave</option>
          </Form.Control>
    </Col>
    </Form.Group> */}

  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    TicketFare 
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Ticket Fare" required
       value={this.state.TicketFareData}
       onChange={value => this.onTicketFareDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
      <Form.Label column sm={2}>
      Tour Number  
      </Form.Label>
      <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Tour Number Generate" required
       value={this.state.TourNoGeneratedData}
       onChange={value => this.onTourNoGeneratedDataChange(value)}/>
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
                  value={this.state.AddExpenseDateData}
                  onChange={value => this.onAddExpenseDateDataChange(value)}
                />
              </Col>
    </Form.Group>
      <Form.Group as={Row}>
     <Form.Label column sm={2}>
      LocalConvenyance 
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="LocalConvenyance" required
       value={this.state.LocalConvenyanceData}
       onChange={value => this.onLocalConvenyanceDataChange(value)}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
     <Form.Label column sm={2}>
      Hotel Expense 
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="HotelExpense" required
       value={this.state.HotelExpenseData}
       onChange={value => this.onHotelExpenseDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
      Food Expense 
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Food Expense" required
       value={this.state.FoodExpenseData}
       onChange={value => this.onFoodExpenseDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
      Misc Expense 
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Misc. Expense" required
       value={this.state.MiscExpenseData}
       onChange={value => this.onMiscExpenseDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
      TransferToAnotherTeamMember 
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="TransferToAnotherTeamMember" required
       value={this.state.TransferToAnotherMemberData}
       onChange={value => this.onTransferToAnotherMemberDataChange(value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
     <Form.Label column sm={2}>
      Remarks
     </Form.Label>
     <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Remarks" required
       value={this.state.RemarkData}
       onChange={value => this.onRemarkDataChange(value)}/>
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

export default LeaveApplicationEmpForm;
