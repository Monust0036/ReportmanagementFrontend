import React, { Component } from "react";
import "./LeaveApplicationEmpTable.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faEdit, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { RingLoader } from "react-spinners";
import { css } from "@emotion/core";
import { Button } from "react-bootstrap";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";


const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 45px;
  border-color: red;
`;

class LeaveApplicationEmpTable extends Component {
  state = {
    leaveApplicationEmpData: [],
    loading: true,

    columnDefs: [

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
            headerName: "OA Number",
            field: "OANumber",
            sortable: true,
            // width: 150,
            // filter: true ,
          },
    
    //   {
    //     headerName: "TourNumber",
    //     field: "TourNoGenerated",
    //     sortable: true,
    //     // width: 150,
    //     // filter: true ,
    //   },
      
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
      
    //   {
    //     headerName: "Voc File Attachement",
    //     field: "file",
    //     cellRendererFramework: this.renderDownloadFile.bind(this)
    //     // sortable: true,
    //     // width: 150,
    //     // filter: true ,
    //   },
    //   {
    //     headerName: "MOM Attachement",
    //     field: "file",
    //     cellRendererFramework: this.renderDownloadFile.bind(this)
    //     // sortable: true,
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
      width: 235,
      filter: "agTextColumnFilter"
      // filter: true ,
    },
    getRowHeight: function (params) {
      return 35;
    }

  };
  leaveApplicationEmpObj = [];
  rowDataT = [];


  loadLeaveApplicationEmpData = () => {
    axios
      .get(
        process.env.REACT_APP_API_URL+ "/api/pre-dispatch-inspection-emp/" +
        this.props.data["_id"], {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      }
      )
      .then(response => {
        this.leaveApplicationEmpObj = response.data;
        console.log("response-----", response.data);
        this.setState({ leaveApplicationEmpData: response.data });
        this.setState({ loading: false });
        this.rowDataT = [];
        // let data=this.educationObj.education["0"];
        this.leaveApplicationEmpObj.preDispatchInspection.map(data => {
          let temp = {
            data,
            Date: data["Date"].slice(0, 10),
            // TourNoGenerated:data["TourNoGenerated"],
            OANumber: data["OANumber"],
            State: data["State"],
            CustomerName: data["CustomerName"],
            SiteName: data["SiteName"],
            ReportedBy: data["ReportedBy"],
            

            // ToDate: data["ToDate"].slice(0, 10),
            // Reasonforleave: data["Reasonforleave"],
            // Status: this.status(data["Status"]),

          };

          this.rowDataT.push(temp);
        });
        this.setState({ rowData: this.rowDataT });
      })
      .catch(error => {
        console.log(error);
      });
  };

  onLeaveApplicationEmpDelete = (e1, e2) => {
    console.log(e1, e2);
    if (window.confirm("Are you sure to delete this record? ") == true) {
      axios
        .delete(
          process.env.REACT_APP_API_URL+ "/api/pre-dispatch-inspection-emp/" + e1 + "/" + e2, {
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
    this.loadLeaveApplicationEmpData();
  }

  renderButton(params) {
    console.log(params);
    return (
      <FontAwesomeIcon
        icon={faTrash}
        onClick={() =>
          this.onLeaveApplicationEmpDelete(this.props.data["_id"], params.data.data["_id"])
        }
      />
    );
  }
  renderEditButton(params) {
    console.log(params);
    return (
      <FontAwesomeIcon
        icon={faEdit}
        onClick={() => this.onEdit(params.data.data)}
      />
    );
}
renderDownloadFile(params) {
  console.log(params);
  return (
    <FontAwesomeIcon
      icon={faFileAlt}
      onClick={() => this.onEdit(params.data.data)}
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
    if (data["Status"] == 1) {
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
        <h2 id="role-title">Pre Dispatch Inspection Reports</h2>

        <Button
          variant="primary"
          id="add-button"
          onClick={this.props.onAddLeaveApplicationEmp}
        >
          <FontAwesomeIcon icon={faPlus} id="plus-icon" />
          Add
        </Button>

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

export default LeaveApplicationEmpTable;