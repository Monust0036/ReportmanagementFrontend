import React, { Component } from "react";
import "./LeaveApplicationHRTable.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { RingLoader } from "react-spinners";
import { css } from "@emotion/core";
import { Form, Button, Col, Row } from "react-bootstrap";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 45px;
  border-color: red;
`;

class LeaveApplicationHRTable extends Component {
  state = {
    leaveApplicationHRData: [],
    loading: true,
    searchData: "",

    columnDefs: [
        {
            headerName: "Emloyee Code",
            field: "EmployeeCode",
            sortable: true
            // filter: true ,
          },
          {
            headerName: "Date",
            field: "Date",
            sortable: true,
            type: ["dateColumn"],
            filter: "agDateColumnFilter",
            // width: 150,
            // filter: true ,
          },
    
      {
        headerName: "OANumber",
        field: "OANumber",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "State",
        field: "State",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "CustomerName",
        field: "CustomerName",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "SiteName",
        field: "SiteName",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "ReportedBy",
        field: "ReportedBy",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      {
        headerName: "ModuleMake",
        field: "ModuleMake",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
    //   {
    //     headerName: "TransferToAnotherMember",
    //     field: "TransferToAnotherMember",
    //     sortable: true,
    //     // width: 150,
    //     // filter: true ,
    //   },
    //   {
    //     headerName: "Remark",
    //     field: "Remark",
    //     sortable: true,
    //     // width: 150,
    //     // filter: true ,
    //   },
          {
            headerName: "",
            field: "edit",
            filter: false,
            width: 30,
            cellRendererFramework: this.renderEditButton.bind(this)
          },
          {
            headerName: "",
            field: "delete",
            filter: false,
            width: 30,
            cellRendererFramework: this.renderButton.bind(this)
          }
    ],
    rowData: [],
    defaultColDef: {
      resizable: true,
      width: 170,
      filter: "agTextColumnFilter"
      // filter: true ,
    },
    getRowHeight: function (params) {
      return 35;
    }
  };
  leaveApplicationHRObj = [];
  rowDataT = [];

  loadLeaveApplicationHRData = () => {
    axios
      .get("http://localhost:4200/api/jbChange-Voc-hr/", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.leaveApplicationHRObj = response.data;
        console.log("response*********************", response.data);
        this.setState({ leaveApplicationHRData: response.data });
        this.setState({ loading: false });
        this.rowDataT = [];

        this.leaveApplicationHRObj.map(data => {
          let temp = {
            data,
            EmployeeCode: data["employee"][0]["EmployeeCode"],
            Date: data["Date"].slice(0, 10),
            // TourNoGenerated:data["addExpense"][0]["TourNoGenerated"],
            OANumber: data["OANumber"],
            State: data["State"],
            CustomerName: data["CustomerName"],
            SiteName: data["SiteName"],
            ReportedBy: data["ReportedBy"],
            // TransferToAnotherMember:data["TransferToAnotherMember"],
            ModuleMake: data["ModuleMake"],
            
          };

          this.rowDataT.push(temp);
        });
        this.setState({ rowData: this.rowDataT });
      })
      .catch(error => {
        console.log(error);
      });
  };

  onLeaveApplicationHRDelete = (e1, e2) => {
    console.log(e1, e2);
    if (window.confirm("Are you sure to delete this record? ") == true) {
      axios
        .delete(
          "http://localhost:4200/api/jbChange-Voc-hr/" + e1 + "/" + e2, {
          headers: {
            authorization: localStorage.getItem("token") || ""
          }
        }
        )
        .then(res => {
          this.componentDidMount();
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  componentDidMount() {
    this.loadLeaveApplicationHRData();
  }
  renderButton(params) {
    console.log(params);
    return (
      <FontAwesomeIcon
        icon={faTrash}
        onClick={() =>
          this.onLeaveApplicationHRDelete(
            params.data.data["employee"][0]["_id"],
            params.data.data["_id"]
          )
        }
      />
    );
  }
  renderEditButton(params) {
    console.log(params);
    return (
      <FontAwesomeIcon
        icon={faEdit}
        onClick={() => this.props.onEditLeaveApplicationHR(params.data.data)}
      />
    );
  }

  status = s => {
    if (s == 1) {
      return "Pending";
    }
    if (s == 2) {
      return "Approved";
    }
    if (s == 3) {
      return "Rejected";
    }
  };
onEdit = data => {
    if (data["Status"] != 1) {
      this.props.onEditLeaveApplicationEmp(data);
    } else {
      window.alert(
        "You can not edit application after it approved or rejected"
      );
    }
  };

  render() {
    return (
      <div id="table-outer-div-scroll">
        <h2 id="role-title">JB Change Voc Reports</h2>

        <div id="clear-both" />
        {!this.state.loading ? (
          <div
            id="table-div"
            className="ag-theme-balham"
          //   style={
          //     {
          //     height: "500px",
          //     width: "100%"
          //   }
          // }
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              defaultColDef={this.state.defaultColDef}
              columnTypes={this.state.columnTypes}
              rowData={this.state.rowData}
              // floatingFilter={true}
              // onGridReady={this.onGridReady}
              pagination={true}
              paginationPageSize={10}
              getRowHeight={this.state.getRowHeight}
            />
          </div>
        ) : (
            <div id="loading-bar">
              <RingLoader
                css={override}
                sizeUnit={"px"}
                size={50}
                color={"#0000ff"}
                loading={true}
              />
            </div>
          )}

       
      </div>
    );
  }
}

export default LeaveApplicationHRTable;
